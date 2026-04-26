import { google } from "googleapis";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// ─── Per-form register mapping ─────────────────────────────────────────────
// We're migrating from one master sheet (with one tab per formCode) to one
// dedicated spreadsheet file per form. The `forms-registers.json` mapping is
// produced by scripts/create-registers.mjs after a one-time provisioning run.
//
// At runtime: for each formCode we look up the dedicated fileId from the
// mapping. If a form isn't mapped (e.g. mapping file missing during a
// transitional deploy), we fall back to the legacy master-sheet+tab path.

type RegisterEntry = {
  formCode: string;
  registerCode: string;
  fileId: string;
  fileUrl: string;
};

function loadRegisterMapping(): Record<string, RegisterEntry> {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const mappingPath = resolve(__dirname, "forms-registers.json");
    if (!existsSync(mappingPath)) {
      return {};
    }
    const raw = readFileSync(mappingPath, "utf8");
    const parsed = JSON.parse(raw) as Record<string, RegisterEntry>;
    return parsed ?? {};
  } catch (e) {
    console.warn("[Sheets] Failed to load forms-registers.json:", e);
    return {};
  }
}

const REGISTER_MAPPING: Record<string, RegisterEntry> = loadRegisterMapping();

// Legacy master sheet — used as fallback for any formCode not yet in the
// per-form mapping. Optional in per-form-only deployments.
const MASTER_SHEET_ID = process.env.GOOGLE_REGISTER_SHEET_ID ?? "";

// Initial column allocation when creating a new tab/sheet. Generous enough
// that most forms never need a resize.
const INITIAL_COLUMN_COUNT = 100;

// Per-form sheets created by create-registers.mjs use this tab name.
const PER_FORM_TAB_NAME = "Submissions";

function getAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!keyJson) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON not set");
  const key = JSON.parse(keyJson);
  return new google.auth.GoogleAuth({
    credentials: key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const HEADER_FORMAT = {
  backgroundColor: { red: 0.03, green: 0.11, blue: 0.18 },
  textFormat: {
    foregroundColor: { red: 1, green: 1, blue: 1 },
    bold: true,
  },
};

const DATA_FORMAT = {
  backgroundColor: { red: 1, green: 1, blue: 1 },
  textFormat: {
    foregroundColor: { red: 0, green: 0, blue: 0 },
    bold: false,
  },
};

type TabInfo = {
  spreadsheetId: string;
  tabName: string;
  sheetId: number;
  columnCount: number;
  existingHeaders: string[];
};

/**
 * Per-form-mode lookup: open the dedicated spreadsheet for `formCode` and
 * read the current header row from its "Submissions" tab.
 */
async function getPerFormTab(formCode: string): Promise<TabInfo | null> {
  const entry = REGISTER_MAPPING[formCode];
  if (!entry) return null;

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const meta = await sheets.spreadsheets.get({
    spreadsheetId: entry.fileId,
    fields: "sheets(properties(sheetId,title,gridProperties(columnCount)))",
  });
  // Prefer a sheet literally named "Submissions"; fall back to first sheet.
  const target =
    meta.data.sheets?.find((s) => s.properties?.title === PER_FORM_TAB_NAME)
    ?? meta.data.sheets?.[0];
  if (!target?.properties || target.properties.sheetId == null) {
    throw new Error(`Per-form sheet for ${formCode} (${entry.fileId}) has no usable tab`);
  }
  const tabName = target.properties.title ?? PER_FORM_TAB_NAME;

  const headerRes = await sheets.spreadsheets.values.get({
    spreadsheetId: entry.fileId,
    range: `'${tabName}'!1:1`,
  });
  const existingHeaders = (headerRes.data.values?.[0] ?? []).map(String);

  return {
    spreadsheetId: entry.fileId,
    tabName,
    sheetId: target.properties.sheetId,
    columnCount: target.properties.gridProperties?.columnCount ?? INITIAL_COLUMN_COUNT,
    existingHeaders,
  };
}

/**
 * Legacy master-sheet+tab mode. Look up a tab in the master sheet, or create
 * it if missing. Used only when a formCode is not present in the per-form
 * mapping (graceful fallback during migration).
 */
async function getOrCreateLegacyTab(
  formCode: string,
  initialHeaders: string[]
): Promise<TabInfo> {
  if (!MASTER_SHEET_ID) {
    throw new Error(
      `No per-form mapping for ${formCode} and GOOGLE_REGISTER_SHEET_ID is unset — ` +
      `cannot append. Run scripts/create-registers.mjs to provision a per-form sheet.`
    );
  }
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const meta = await sheets.spreadsheets.get({
    spreadsheetId: MASTER_SHEET_ID,
    fields: "sheets(properties(sheetId,title,gridProperties(columnCount)))",
  });
  const existing = meta.data.sheets?.find(
    (s) => s.properties?.title === formCode
  );

  if (existing && existing.properties?.sheetId != null) {
    const sheetId = existing.properties.sheetId;
    const columnCount = existing.properties.gridProperties?.columnCount ?? INITIAL_COLUMN_COUNT;
    const headerRes = await sheets.spreadsheets.values.get({
      spreadsheetId: MASTER_SHEET_ID,
      range: `'${formCode}'!1:1`,
    });
    const existingHeaders = (headerRes.data.values?.[0] ?? []).map(String);
    return { spreadsheetId: MASTER_SHEET_ID, tabName: formCode, sheetId, columnCount, existingHeaders };
  }

  // Create a new tab.
  const addRes = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: MASTER_SHEET_ID,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: formCode,
              gridProperties: {
                rowCount: 1000,
                columnCount: Math.max(INITIAL_COLUMN_COUNT, initialHeaders.length),
                frozenRowCount: 1,
              },
            },
          },
        },
      ],
    },
  });
  const newSheetId = addRes.data.replies?.[0]?.addSheet?.properties?.sheetId;
  const newColumnCount =
    addRes.data.replies?.[0]?.addSheet?.properties?.gridProperties?.columnCount
    ?? Math.max(INITIAL_COLUMN_COUNT, initialHeaders.length);
  if (newSheetId == null) {
    throw new Error("Failed to obtain sheetId for newly added tab");
  }

  // Write the styled header row.
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: MASTER_SHEET_ID,
    requestBody: {
      requests: [
        {
          updateCells: {
            range: {
              sheetId: newSheetId,
              startRowIndex: 0,
              startColumnIndex: 0,
              endRowIndex: 1,
              endColumnIndex: initialHeaders.length,
            },
            rows: [
              {
                values: initialHeaders.map((h) => ({
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

  return {
    spreadsheetId: MASTER_SHEET_ID,
    tabName: formCode,
    sheetId: newSheetId,
    columnCount: newColumnCount,
    existingHeaders: [...initialHeaders],
  };
}

/**
 * Resolve the target tab for a formCode — per-form file if mapped, else
 * legacy master-sheet tab.
 */
async function resolveTab(formCode: string, initialHeaders: string[]): Promise<TabInfo> {
  if (REGISTER_MAPPING[formCode]) {
    const tab = await getPerFormTab(formCode);
    if (tab) return tab;
  }
  console.warn(`[Sheets] No per-form mapping for ${formCode} — falling back to legacy master sheet`);
  return getOrCreateLegacyTab(formCode, initialHeaders);
}

/**
 * Public alias preserved for backward compatibility.
 * In per-form mode this returns the dedicated spreadsheetId; in legacy mode
 * it returns the master sheet ID.
 */
export async function getOrCreateSheet(
  formCode: string,
  headers: string[]
): Promise<string> {
  const tab = await resolveTab(formCode, headers);
  return tab.spreadsheetId;
}

/**
 * Append one row of data to the form's register.
 *
 * Adaptive: if the incoming headers contain keys not yet present, those
 * columns are added in place (extending the grid if needed). The data row
 * is reordered to match the on-sheet column order so values always land
 * under the right header.
 */
export async function appendFormSubmission(
  formCode: string,
  headers: string[],
  values: (string | number | null)[]
): Promise<{ spreadsheetId: string; tabName: string; updatedRange: string }> {
  if (headers.length !== values.length) {
    throw new Error(`headers/values length mismatch: ${headers.length} vs ${values.length}`);
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const tab = await resolveTab(formCode, headers);
  const { spreadsheetId, sheetId, tabName } = tab;
  let workingHeaders = tab.existingHeaders;
  let workingColumnCount = tab.columnCount;

  // If the destination has never had a header row written (empty per-form
  // sheet, edge case), seed it from the incoming headers.
  if (workingHeaders.length === 0 && headers.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
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
    workingHeaders = [...headers];
  }

  // Build a lookup of incoming key → value
  const incoming = new Map<string, string | number | null>();
  for (let i = 0; i < headers.length; i++) incoming.set(headers[i]!, values[i] ?? null);

  // Find headers in the incoming set that aren't on the sheet yet.
  const newKeys = headers.filter((h) => !workingHeaders.includes(h));

  const requests: object[] = [];

  if (newKeys.length > 0) {
    const finalColumnCount = workingHeaders.length + newKeys.length;

    if (finalColumnCount > workingColumnCount) {
      requests.push({
        appendDimension: {
          sheetId,
          dimension: "COLUMNS",
          length: finalColumnCount - workingColumnCount,
        },
      });
      workingColumnCount = finalColumnCount;
    }

    requests.push({
      updateCells: {
        range: {
          sheetId,
          startRowIndex: 0,
          startColumnIndex: workingHeaders.length,
          endRowIndex: 1,
          endColumnIndex: finalColumnCount,
        },
        rows: [
          {
            values: newKeys.map((k) => ({
              userEnteredValue: { stringValue: k },
              userEnteredFormat: HEADER_FORMAT,
            })),
          },
        ],
        fields: "userEnteredValue,userEnteredFormat",
      },
    });

    workingHeaders = [...workingHeaders, ...newKeys];
  }

  // Reorder values to match the on-sheet header order. Any header that has
  // no incoming value gets an empty cell.
  const orderedValues = workingHeaders.map((h) => incoming.has(h) ? incoming.get(h)! : "");

  requests.push({
    appendCells: {
      sheetId,
      rows: [
        {
          values: orderedValues.map((v) => ({
            userEnteredValue: { stringValue: v === null ? "" : String(v) },
            userEnteredFormat: DATA_FORMAT,
          })),
        },
      ],
      fields: "userEnteredValue,userEnteredFormat",
    },
  });

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests },
  });

  return {
    spreadsheetId,
    tabName,
    updatedRange: `'${tabName}'`,
  };
}

/**
 * Get the Google Sheets URL for a form's register. In per-form mode this is
 * the dedicated spreadsheet URL; in legacy mode it's the master sheet URL.
 */
export function getSheetUrl(formCode?: string): string {
  if (formCode && REGISTER_MAPPING[formCode]) {
    return REGISTER_MAPPING[formCode].fileUrl;
  }
  return `https://docs.google.com/spreadsheets/d/${MASTER_SHEET_ID}`;
}

/**
 * Returns the per-form spreadsheet URL for `formCode`, or null if the form
 * is not in the per-form mapping. Used by the REG page to render "Open"
 * links to each form's dedicated submission register.
 */
export function getRegisterUrl(formCode: string): string | null {
  return REGISTER_MAPPING[formCode]?.fileUrl ?? null;
}
