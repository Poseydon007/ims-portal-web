import { google } from "googleapis";

// Single master spreadsheet (owned by the user account, charged to their
// 15GB free Drive quota). The service account adds one TAB per form code
// — adding tabs to an existing sheet doesn't consume new file storage,
// which sidesteps the service-account "quota exceeded" limitation.
const SHEET_ID = process.env.GOOGLE_REGISTER_SHEET_ID!;

function getAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!keyJson) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON not set");
  const key = JSON.parse(keyJson);
  return new google.auth.GoogleAuth({
    credentials: key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

/**
 * Find the tab for a form code in the master register sheet, or create
 * one with the given headers + frozen header row.
 *
 * Tab name = the form code (e.g. "TE-IMS-FRM-HSE-003"). Hyphens are
 * fine in tab names.
 */
async function getOrCreateTab(
  formCode: string,
  headers: string[]
): Promise<string> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  // Look for an existing tab with this form code
  const meta = await sheets.spreadsheets.get({
    spreadsheetId: SHEET_ID,
    fields: "sheets(properties(sheetId,title))",
  });
  const existing = meta.data.sheets?.find(
    (s) => s.properties?.title === formCode
  );
  if (existing) return formCode;

  // Add a new tab
  const addRes = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [{ addSheet: { properties: { title: formCode } } }],
    },
  });
  const newSheetId = addRes.data.replies?.[0]?.addSheet?.properties?.sheetId;
  if (newSheetId === undefined || newSheetId === null) {
    throw new Error("Failed to obtain sheetId for newly added tab");
  }

  // Write the styled header row + freeze it
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [
        {
          updateCells: {
            range: {
              sheetId: newSheetId,
              startRowIndex: 0,
              startColumnIndex: 0,
              endRowIndex: 1,
              endColumnIndex: headers.length,
            },
            rows: [
              {
                values: headers.map((h) => ({
                  userEnteredValue: { stringValue: h },
                  userEnteredFormat: {
                    backgroundColor: { red: 0.03, green: 0.11, blue: 0.18 },
                    textFormat: {
                      foregroundColor: { red: 1, green: 1, blue: 1 },
                      bold: true,
                    },
                  },
                })),
              },
            ],
            fields: "userEnteredValue,userEnteredFormat",
          },
        },
        {
          updateSheetProperties: {
            properties: {
              sheetId: newSheetId,
              gridProperties: { frozenRowCount: 1 },
            },
            fields: "gridProperties.frozenRowCount",
          },
        },
      ],
    },
  });

  return formCode;
}

/**
 * Public alias preserved for backward compatibility — now returns the
 * master spreadsheet ID rather than a per-form file ID.
 */
export async function getOrCreateSheet(
  formCode: string,
  headers: string[]
): Promise<string> {
  await getOrCreateTab(formCode, headers);
  return SHEET_ID;
}

/**
 * Append one row of data to the form's register tab.
 * Creates the tab with headers if it doesn't exist yet.
 */
export async function appendFormSubmission(
  formCode: string,
  headers: string[],
  values: (string | number | null)[]
): Promise<{ spreadsheetId: string; tabName: string; updatedRange: string }> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const tabName = await getOrCreateTab(formCode, headers);

  // Single-quote the tab name in case the form code contains characters
  // Sheets would otherwise interpret in a range expression.
  const result = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `'${tabName}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values.map((v) => (v === null ? "" : String(v)))],
    },
  });

  return {
    spreadsheetId: SHEET_ID,
    tabName,
    updatedRange: result.data.updates?.updatedRange ?? "",
  };
}

/**
 * Get the Google Sheets URL for the master register (deep-links to a
 * specific form's tab if `formCode` is provided).
 */
export function getSheetUrl(_formCode?: string): string {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}`;
}
