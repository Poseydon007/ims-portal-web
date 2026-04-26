#!/usr/bin/env node
/**
 * create-registers.mjs
 *
 * One-shot provisioning script: creates one Google Sheet per IMS form (52
 * total), owned by the OAuth-authenticated user, in the IMS Portal Registers
 * Drive folder. Records the resulting fileId mapping to
 * server/forms-registers.json so the runtime can append rows to each.
 *
 * Auth model: OAuth Desktop client (oauth-client.json next to this script).
 * On first run, opens a browser for consent and stores the refresh token in
 * oauth-token.json. Re-runs are idempotent — already-created forms are
 * skipped via the existing forms-registers.json mapping.
 *
 * Usage:
 *   node scripts/create-registers.mjs [path/to/forms-manifest.json]
 *
 * Defaults to /tmp/forms-manifest.json (or ../forms-manifest.json).
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import { URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ─────────────────────────────────────────────────────────────────
const REGISTERS_FOLDER_ID = "1XZn6sEdR0b5RJWY7Vm3g5nZ99lEhVSPz";
const SKIP_FORM_CODES = new Set(["TE-IMS-FRM-HSE-016"]); // static reference page

const OAUTH_CLIENT_PATH = join(__dirname, "oauth-client.json");
const OAUTH_TOKEN_PATH  = join(__dirname, "oauth-token.json");
const OUTPUT_MAPPING_PATH = resolve(__dirname, "..", "server", "forms-registers.json");

const SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/spreadsheets",
];

const HEADER_FORMAT = {
  backgroundColor: { red: 0.03, green: 0.11, blue: 0.18 },
  textFormat: {
    foregroundColor: { red: 1, green: 1, blue: 1 },
    bold: true,
  },
};

const SLEEP_MS = 200;

// ── Helpers ────────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function titleCase(s) {
  return s
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function loadJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function saveJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

// ── OAuth ──────────────────────────────────────────────────────────────────
async function getOAuthClient() {
  if (!existsSync(OAUTH_CLIENT_PATH)) {
    throw new Error(
      `Missing OAuth client credentials at ${OAUTH_CLIENT_PATH}\n` +
      `Download a "Desktop app" OAuth client JSON from Google Cloud Console ` +
      `and save it there. See oauth-client.example.json for the expected shape.`
    );
  }
  const raw = loadJson(OAUTH_CLIENT_PATH);
  const installed = raw.installed ?? raw.web;
  if (!installed?.client_id || !installed?.client_secret) {
    throw new Error("oauth-client.json is missing installed.client_id / client_secret");
  }

  // Use the local-loopback redirect (port chosen at runtime).
  const oauth2 = new google.auth.OAuth2(
    installed.client_id,
    installed.client_secret,
    "http://127.0.0.1/" // placeholder; we rewrite per-listener below
  );

  // Existing token? Use it.
  const existing = loadJson(OAUTH_TOKEN_PATH);
  if (existing?.refresh_token) {
    oauth2.setCredentials(existing);
    return oauth2;
  }

  // Otherwise, run the desktop OAuth flow on a random free port.
  const tokens = await runOAuthFlow(installed.client_id, installed.client_secret);
  saveJson(OAUTH_TOKEN_PATH, tokens);
  console.log(`[oauth] Saved refresh token to ${OAUTH_TOKEN_PATH}`);
  oauth2.setCredentials(tokens);
  return oauth2;
}

function runOAuthFlow(clientId, clientSecret) {
  return new Promise((resolveP, rejectP) => {
    const server = http.createServer();
    server.listen(0, "127.0.0.1", async () => {
      const port = server.address().port;
      const redirectUri = `http://127.0.0.1:${port}/oauth2callback`;
      const oauth2 = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
      const authUrl = oauth2.generateAuthUrl({
        access_type: "offline",
        prompt: "consent", // force refresh_token
        scope: SCOPES,
      });

      console.log("\n[oauth] Open this URL in your browser to authorize:");
      console.log(`\n  ${authUrl}\n`);

      // Try to open automatically if `open` is available.
      try {
        const opener = await import("open");
        await opener.default(authUrl);
      } catch {
        // No `open` package — user copies URL manually.
      }

      server.on("request", async (req, res) => {
        try {
          const parsed = new URL(req.url, `http://127.0.0.1:${port}`);
          if (!parsed.pathname.startsWith("/oauth2callback")) {
            res.writeHead(404).end();
            return;
          }
          const code = parsed.searchParams.get("code");
          const err = parsed.searchParams.get("error");
          if (err) throw new Error(`OAuth error: ${err}`);
          if (!code) throw new Error("No authorization code returned");

          const { tokens } = await oauth2.getToken(code);
          if (!tokens.refresh_token) {
            // If the user has previously consented, Google sometimes omits the
            // refresh_token. Force re-consent above prevents this, but warn.
            console.warn("[oauth] No refresh_token returned. Re-run with the consent screen.");
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Authorization complete.</h1><p>You can close this tab.</p>");
          server.close();
          resolveP(tokens);
        } catch (e) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(String(e));
          server.close();
          rejectP(e);
        }
      });
    });
  });
}

// ── Sheet creation ─────────────────────────────────────────────────────────
async function createRegisterFile({ drive, sheets }, form) {
  const headers = [
    "Submission ID",
    "Report No.",
    "Submitted By",
    "Submitted At",
    "Status",
    ...form.fieldKeys.map(titleCase),
  ];

  // 1. Create the spreadsheet (lands in My Drive of the OAuth user by default).
  const created = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: form.registerName },
      sheets: [
        {
          properties: {
            title: "Submissions",
            gridProperties: {
              rowCount: 1000,
              columnCount: Math.max(100, headers.length),
              frozenRowCount: 1,
            },
          },
        },
      ],
    },
    fields: "spreadsheetId,spreadsheetUrl,sheets(properties(sheetId,title))",
  });

  const fileId = created.data.spreadsheetId;
  const fileUrl = created.data.spreadsheetUrl;
  const sheetId = created.data.sheets?.[0]?.properties?.sheetId ?? 0;

  // 2. Move it into the IMS Portal Registers folder (out of root My Drive).
  const meta = await drive.files.get({ fileId, fields: "parents" });
  const previousParents = (meta.data.parents ?? []).join(",");
  await drive.files.update({
    fileId,
    addParents: REGISTERS_FOLDER_ID,
    removeParents: previousParents,
    fields: "id,parents",
  });

  // 3. Write the styled header row.
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: fileId,
    requestBody: {
      requests: [
        {
          updateCells: {
            range: {
              sheetId,
              startRowIndex: 0,
              startColumnIndex: 0,
              endRowIndex: 1,
              endColumnIndex: headers.length,
            },
            rows: [
              {
                values: headers.map((h) => ({
                  userEnteredValue: { stringValue: h },
                  userEnteredFormat: HEADER_FORMAT,
                })),
              },
            ],
            fields: "userEnteredValue,userEnteredFormat",
          },
        },
      ],
    },
  });

  // 4. Share: anyone with the link can view.
  await drive.permissions.create({
    fileId,
    requestBody: { type: "anyone", role: "reader" },
  });

  return { fileId, fileUrl };
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const manifestArg = process.argv[2];
  const manifestPath =
    manifestArg ??
    (existsSync("/tmp/forms-manifest.json")
      ? "/tmp/forms-manifest.json"
      : resolve(__dirname, "..", "..", "forms-manifest.json"));

  console.log(`[main] Loading manifest from ${manifestPath}`);
  const forms = loadJson(manifestPath);
  if (!Array.isArray(forms)) throw new Error("forms-manifest.json is not an array");

  const existingMapping = loadJson(OUTPUT_MAPPING_PATH, {}) ?? {};
  console.log(`[main] ${Object.keys(existingMapping).length} forms already mapped`);

  const auth = await getOAuthClient();
  const drive = google.drive({ version: "v3", auth });
  const sheets = google.sheets({ version: "v4", auth });

  let created = 0, skipped = 0, failed = 0;
  const mapping = { ...existingMapping };

  for (const form of forms) {
    if (SKIP_FORM_CODES.has(form.formCode)) {
      console.log(`[skip] ${form.formCode} (in skip list)`);
      skipped++;
      continue;
    }
    if (mapping[form.formCode]?.fileId) {
      console.log(`[skip] ${form.formCode} → already mapped (${mapping[form.formCode].fileId})`);
      skipped++;
      continue;
    }
    try {
      const { fileId, fileUrl } = await createRegisterFile({ drive, sheets }, form);
      mapping[form.formCode] = {
        formCode: form.formCode,
        registerCode: form.registerCode,
        fileId,
        fileUrl,
      };
      // Persist after every success so a partial run is resumable.
      saveJson(OUTPUT_MAPPING_PATH, mapping);
      console.log(`[ok]   ${form.formCode} → ${fileId}`);
      created++;
    } catch (e) {
      console.error(`[fail] ${form.formCode}: ${e?.message ?? e}`);
      failed++;
    }
    await sleep(SLEEP_MS);
  }

  console.log(`\n── Summary ────────────────`);
  console.log(`  created: ${created}`);
  console.log(`  skipped: ${skipped}`);
  console.log(`  failed:  ${failed}`);
  console.log(`  mapping written to: ${OUTPUT_MAPPING_PATH}`);
}

main().catch((e) => {
  console.error("[fatal]", e);
  process.exit(1);
});
