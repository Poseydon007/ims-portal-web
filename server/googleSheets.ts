import { google } from "googleapis";

// Single master spreadsheet (owned by the user account, charged to their
// 15GB free Drive quota). The service account adds one TAB per form code
// — adding tabs to an existing sheet doesn't consume new file storage,
// which sidesteps the service-account "quota exceeded" limitation.
const SHEET_ID = process.env.GOOGLE_REGISTER_SHEET_ID!;

// Initial column allocation when creating a new tab. Generous enough that
// most forms never need a resize. Sheets is happy with 100 cols on free tier.
const INITIAL_COLUMN_COUNT = 100;

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
  tabName: string;
  sheetId: number;
  columnCount: number;
  existingHeaders: string[];
};

/**
 * Look up a tab in the master sheet, or create it if missing. Returns
 * sheet metadata + the current header row so callers can decide whether
 * to extend it.
 */
async function getOrCreateTab(
  formCode: string,
  initialHeaders: string[]
): Promise<TabInfo> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const meta = await sheets.spreadsheets.get({
    spreadsheetId: SHEET_ID,
    fields: "sheets(properties(sheetId,title,gridProperties(columnCount)))",
  });
  const existing = meta.data.sheets?.find(
    (s) => s.properties?.title === formCode
  );

  if (existing && existing.properties?.sheetId !== undefined && existing.properties?.sheetId !== null) {
    const sheetId = existing.properties.sheetId;
    const columnCount = existing.properties.gridProperties?.columnCount ?? INITIAL_COLUMN_COUNT;
    // Read row 1 to learn the actual on-sheet header order
    const headerRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `'${formCode}'!1:1`,
    });
    const existingHeaders = (headerRes.data.values?.[0] ?? []).map(String);
    return { tabName: formCode, sheetId, columnCount, existingHeaders };
  }

  // Create the tab with a generous column allocation
  const addRes = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
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
  const newColumnCount = addRes.data.replies?.[0]?.addSheet?.properties?.gridProperties?.columnCount
    ?? Math.max(INITIAL_COLUMN_COUNT, initialHeaders.length);
  if (newSheetId === undefined || newSheetId === null) {
    throw new Error("Failed to obtain sheetId for newly added tab");
  }

  // Write the styled header row
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
    tabName: formCode,
    sheetId: newSheetId,
    columnCount: newColumnCount,
    existingHeaders: [...initialHeaders],
  };
}

/**
 * Public alias preserved for backward compatibility.
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
 *
 * Adaptive: if the incoming headers contain keys not yet present in the
 * tab's header row, those columns are added in place (extending the grid
 * if needed). The data row is reordered to match the tab's actual column
 * order so values always land under the right header.
 *
 * Uses appendCells with explicit DEFAULT formatting (white bg, black
 * non-bold text) to prevent the appended row from inheriting the header
 * row's navy/white styling.
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

  const tab = await getOrCreateTab(formCode, headers);
  const sheetId = tab.sheetId;
  let workingHeaders = tab.existingHeaders;
  let workingColumnCount = tab.columnCount;

  // Build a lookup of incoming key → value
  const incoming = new Map<string, string | number | null>();
  for (let i = 0; i < headers.length; i++) incoming.set(headers[i]!, values[i] ?? null);

  // Find headers in the incoming set that aren't on the sheet yet
  const newKeys = headers.filter((h) => !workingHeaders.includes(h));

  const requests: object[] = [];

  if (newKeys.length > 0) {
    const finalColumnCount = workingHeaders.length + newKeys.length;

    // Widen the grid if needed
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

    // Append the new headers to row 1
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
    spreadsheetId: SHEET_ID,
    requestBody: { requests },
  });

  return {
    spreadsheetId: SHEET_ID,
    tabName: tab.tabName,
    updatedRange: `'${tab.tabName}'`,
  };
}

/**
 * Get the Google Sheets URL for the master register.
 */
export function getSheetUrl(_formCode?: string): string {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}`;
}
