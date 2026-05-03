/**
 * import-form-responses.mjs
 *
 * Reads the "True East IMS — inquiry manpower" Google Form responses sheet,
 * matches each response to an HR employee by iqama number, and PATCHes the
 * HR Service with the real email, phone, birth date, and nationality.
 *
 * After this script runs, run sync-hr-emails.mjs to pull the updated emails
 * into IMS portal user accounts.
 *
 * Usage:
 *   node scripts/import-form-responses.mjs              # live update
 *   node scripts/import-form-responses.mjs --dry-run    # preview only
 *
 * Required env vars:
 *   GOOGLE_SERVICE_ACCOUNT_JSON   Service account key (JSON string or file path)
 *   FORM_RESPONSES_SHEET_ID       Google Sheet ID of the form responses
 *   HR_SERVICE_URL                https://hr.trueast-irp.cloud
 *   HR_SERVICE_KEY                Needs write + read:sensitive scope
 *
 * The responses sheet must be shared (at least Viewer) with the service account.
 * Form columns expected (as created by Google Forms):
 *   Timestamp | Name | Iquama number | Email | Phone number | Birth date | Nationality
 *
 * IMPORTANT: HR_SERVICE_KEY must have `write` scope (to PATCH employee records)
 * AND `read:sensitive` scope (to read iqama numbers for matching).
 * Request a key with `full` scope from the HR admin portal if in doubt.
 */

import { google } from "googleapis";
import { readFileSync } from "fs";

// ── Args ──────────────────────────────────────────────────────────────────────
const DRY_RUN = process.argv.includes("--dry-run");
if (DRY_RUN) console.log("🔍  DRY RUN — no writes will be made\n");

// ── Env ───────────────────────────────────────────────────────────────────────
const {
  GOOGLE_SERVICE_ACCOUNT_JSON,
  FORM_RESPONSES_SHEET_ID,
  HR_SERVICE_URL,
  HR_SERVICE_KEY,
} = process.env;

if (!GOOGLE_SERVICE_ACCOUNT_JSON) { console.error("❌  GOOGLE_SERVICE_ACCOUNT_JSON required"); process.exit(1); }
if (!FORM_RESPONSES_SHEET_ID)     { console.error("❌  FORM_RESPONSES_SHEET_ID required"); process.exit(1); }
if (!HR_SERVICE_URL)               { console.error("❌  HR_SERVICE_URL required"); process.exit(1); }
if (!HR_SERVICE_KEY)               { console.error("❌  HR_SERVICE_KEY required"); process.exit(1); }

const HR_BASE = HR_SERVICE_URL.replace(/\/$/, "");

// ── Google Sheets auth ────────────────────────────────────────────────────────
let serviceAccountKey;
try {
  // Accept either a raw JSON string or a file path
  if (GOOGLE_SERVICE_ACCOUNT_JSON.trim().startsWith("{")) {
    serviceAccountKey = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
  } else {
    serviceAccountKey = JSON.parse(readFileSync(GOOGLE_SERVICE_ACCOUNT_JSON, "utf8"));
  }
} catch (err) {
  console.error("❌  Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON:", err.message);
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccountKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
const sheets = google.sheets({ version: "v4", auth });

// ── HR helpers ────────────────────────────────────────────────────────────────
async function hrFetch(method, path, body) {
  const res = await fetch(`${HR_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${HR_SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HR API ${method} ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

// ── Read form responses ───────────────────────────────────────────────────────
console.log("📊  Reading form responses from Google Sheet…");
let rows;
try {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: FORM_RESPONSES_SHEET_ID,
    range: "A:G", // Timestamp, Name, Iquama number, Email, Phone number, Birth date, Nationality
  });
  rows = response.data.values ?? [];
} catch (err) {
  console.error("❌  Google Sheets read failed:", err.message);
  console.error("    Make sure the sheet is shared with:", serviceAccountKey.client_email);
  process.exit(1);
}

if (rows.length < 2) {
  console.log("ℹ️   No responses yet (sheet has header only or is empty).");
  process.exit(0);
}

// First row is headers — detect column positions dynamically
const headers = rows[0].map(h => h?.toString().toLowerCase().trim());
const col = (name) => {
  const variants = {
    timestamp:    ["timestamp"],
    name:         ["name", "full name", "fullname"],
    iqama:        ["iquama number", "iqama number", "iqama", "iquama"],
    email:        ["email", "e-mail"],
    phone:        ["phone number", "phone", "mobile"],
    birthdate:    ["birth date", "birthdate", "date of birth"],
    nationality:  ["nationality"],
  };
  for (const v of (variants[name] ?? [name])) {
    const idx = headers.indexOf(v);
    if (idx !== -1) return idx;
  }
  return -1;
};

const COL_NAME        = col("name");
const COL_IQAMA       = col("iqama");
const COL_EMAIL       = col("email");
const COL_PHONE       = col("phone");
const COL_BIRTHDATE   = col("birthdate");
const COL_NATIONALITY = col("nationality");

console.log(`    Column map: name=${COL_NAME} iqama=${COL_IQAMA} email=${COL_EMAIL} phone=${COL_PHONE} birthdate=${COL_BIRTHDATE} nationality=${COL_NATIONALITY}`);

if (COL_IQAMA === -1) {
  console.error("❌  Cannot find iqama column in sheet headers:", headers.join(", "));
  process.exit(1);
}

const responseRows = rows.slice(1); // skip header
console.log(`    ${responseRows.length} response(s) found\n`);

// ── Fetch all HR employees (needs read:sensitive to see iqama) ────────────────
console.log("📡  Fetching all HR employees (read:sensitive scope required)…");
let allEmployees;
try {
  allEmployees = await hrFetch("GET", "/v1/employees");
} catch (err) {
  console.error("❌  HR fetch failed:", err.message);
  process.exit(1);
}
console.log(`    ${allEmployees.length} employees in HR\n`);

// We need the sensitive fields (iqama) — fetch each employee's sensitive data
// to build the iqama → uuid map. This works if HR_SERVICE_KEY has read:sensitive.
// We do this lazily: build name map first, then fetch sensitive only when needed.
const nameMap  = new Map(); // normalized fullName → uuid
const emailMap = new Map(); // companyEmail → uuid
for (const emp of allEmployees) {
  if (emp.fullName)     nameMap.set(emp.fullName.toLowerCase().trim(), emp.uuid);
  if (emp.companyEmail) emailMap.set(emp.companyEmail.toLowerCase().trim(), emp.uuid);
}

// ── Build iqama → uuid map (requires read:sensitive or full scope) ────────────
// Try to GET each employee to read iqamaNumber. Do it in small batches to avoid
// overwhelming the service. If the key doesn't have read:sensitive, iqama will be
// null and we fall back to name matching.
console.log("🔑  Building iqama → uuid index (requires read:sensitive scope)…");
const iqamaMap = new Map(); // iqamaNumber → uuid
let sensitiveOk = true;

// Sample-check with first employee
if (allEmployees.length > 0) {
  try {
    const sample = await hrFetch("GET", `/v1/employees/${allEmployees[0].uuid}`);
    if (sample.iqamaNumber === undefined) {
      console.warn("    ⚠  iqamaNumber not in response — key may lack read:sensitive scope.");
      console.warn("    ⚠  Will fall back to name matching (less reliable).\n");
      sensitiveOk = false;
    }
  } catch {
    sensitiveOk = false;
  }
}

if (sensitiveOk) {
  // Fetch all in batches of 10
  const BATCH = 10;
  for (let i = 0; i < allEmployees.length; i += BATCH) {
    const batch = allEmployees.slice(i, i + BATCH);
    await Promise.all(batch.map(async (emp) => {
      try {
        const full = await hrFetch("GET", `/v1/employees/${emp.uuid}`);
        if (full.iqamaNumber) {
          iqamaMap.set(full.iqamaNumber.trim(), emp.uuid);
        }
      } catch { /* skip */ }
    }));
  }
  console.log(`    ${iqamaMap.size} employees with iqama numbers indexed\n`);
} else {
  console.log("    Skipping iqama index — will match by name\n");
}

// ── Process each form response ────────────────────────────────────────────────
let updated   = 0;
let skipped   = 0;
let noMatch   = 0;
let errors    = 0;

for (const row of responseRows) {
  const iqama       = row[COL_IQAMA]?.toString().trim();
  const name        = row[COL_NAME]?.toString().trim();
  const email       = row[COL_EMAIL]?.toString().trim().toLowerCase();
  const phone       = row[COL_PHONE]?.toString().trim();
  const birthdate   = row[COL_BIRTHDATE]?.toString().trim();
  const nationality = row[COL_NATIONALITY]?.toString().trim();

  if (!iqama && !name) {
    skipped++;
    continue;
  }

  // Resolve UUID: try iqama first, fall back to name
  let uuid = iqama ? iqamaMap.get(iqama) : undefined;
  let matchMethod = "iqama";
  if (!uuid && name) {
    uuid = nameMap.get(name.toLowerCase());
    matchMethod = "name";
  }

  if (!uuid) {
    console.log(`  ⚠  No HR match for: "${name}" / iqama: "${iqama}"`);
    noMatch++;
    continue;
  }

  // Build PATCH payload — only send fields that have values
  const patch = {};
  if (email)       patch.companyEmail  = email;
  if (phone)       patch.personalPhone = phone;
  if (nationality) patch.nationality   = nationality;

  // Birth date — Google Forms returns dates in various formats.
  // Normalize to ISO YYYY-MM-DD if possible.
  if (birthdate) {
    const parsed = parseDateString(birthdate);
    if (parsed) patch.birthDate = parsed;
  }

  if (Object.keys(patch).length === 0) {
    skipped++;
    continue;
  }

  const display = `${name ?? iqama} (matched by ${matchMethod})`;
  const changes = Object.entries(patch)
    .map(([k, v]) => `${k}="${v}"`)
    .join(", ");

  console.log(`  ${DRY_RUN ? "[DRY]" : "✓"} ${display} → ${changes}`);

  if (!DRY_RUN) {
    try {
      await hrFetch("PATCH", `/v1/employees/${uuid}`, patch);
      updated++;
    } catch (err) {
      console.error(`    ⚠  PATCH failed for ${display}:`, err.message);
      errors++;
    }
  } else {
    updated++;
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log("\n─────────────────────────────────────────");
console.log(`${DRY_RUN ? "Would update" : "Updated"}  : ${updated}`);
console.log(`Skipped      : ${skipped}  (empty rows)`);
console.log(`No HR match  : ${noMatch}`);
if (errors) console.log(`Errors       : ${errors}`);
console.log("─────────────────────────────────────────\n");

if (!DRY_RUN && updated > 0) {
  console.log("✅  HR updated. Now run sync-hr-emails.mjs to push emails into IMS:");
  console.log("    node scripts/sync-hr-emails.mjs\n");
}

if (DRY_RUN && updated > 0) {
  console.log("Run without --dry-run to apply the changes.");
}

// ── Date parsing helper ───────────────────────────────────────────────────────
// Google Forms can output dates in many locale-dependent formats.
// Handles: "DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD", "Month DD, YYYY", etc.
function parseDateString(str) {
  if (!str) return null;
  str = str.trim();

  // ISO already
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;

  // DD/MM/YYYY or MM/DD/YYYY — treat as DD/MM/YYYY (Saudi convention)
  const slashMatch = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const [, d, m, y] = slashMatch;
    return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }

  // Try native Date parse as last resort
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }

  console.warn(`    ⚠  Could not parse date: "${str}"`);
  return null;
}
