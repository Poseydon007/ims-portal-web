import { google } from "googleapis";

const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID!;

function getAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!keyJson) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON not set");
  const key = JSON.parse(keyJson);
  return new google.auth.GoogleAuth({
    credentials: key,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
    ],
  });
}

/**
 * Find an existing spreadsheet by name in the IMS folder,
 * or create a new one with the given headers.
 *
 * Service accounts have no "My Drive" of their own, so we MUST create
 * the file via Drive API with the parent folder specified up front.
 * sheets.spreadsheets.create() fails with "caller does not have
 * permission" because it tries to create in the service account's
 * (non-existent) personal Drive.
 */
export async function getOrCreateSheet(
  formCode: string,
  headers: string[]
): Promise<string> {
  const auth = getAuth();
  const drive = google.drive({ version: "v3", auth });
  const sheets = google.sheets({ version: "v4", auth });

  const sheetName = `${formCode} Register`;

  // Search for existing sheet in the folder
  const search = await drive.files.list({
    q: `name='${sheetName}' and '${FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
    fields: "files(id,name)",
  });

  if (search.data.files && search.data.files.length > 0) {
    return search.data.files[0].id!;
  }

  // Create the file IN the folder via Drive API (works for service accounts).
  const file = await drive.files.create({
    requestBody: {
      name: sheetName,
      mimeType: "application/vnd.google-apps.spreadsheet",
      parents: [FOLDER_ID],
    },
    fields: "id",
  });
  const spreadsheetId = file.data.id!;

  // Drive API creates an empty spreadsheet with a default "Sheet1".
  // Rename it to "Submissions" and set up the styled header row in one batchUpdate.
  const meta = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets(properties(sheetId,title))",
  });
  const defaultSheetId = meta.data.sheets?.[0]?.properties?.sheetId ?? 0;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          updateSheetProperties: {
            properties: { sheetId: defaultSheetId, title: "Submissions" },
            fields: "title",
          },
        },
        {
          updateCells: {
            range: {
              sheetId: defaultSheetId,
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
            properties: { sheetId: defaultSheetId, gridProperties: { frozenRowCount: 1 } },
            fields: "gridProperties.frozenRowCount",
          },
        },
      ],
    },
  });

  return spreadsheetId;
}

/**
 * Append one row of data to the form's register sheet.
 * Creates the sheet with headers if it doesn't exist yet.
 */
export async function appendFormSubmission(
  formCode: string,
  headers: string[],
  values: (string | number | null)[]
): Promise<{ spreadsheetId: string; updatedRange: string }> {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = await getOrCreateSheet(formCode, headers);

  const result = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Submissions!A:A",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values.map((v) => (v === null ? "" : String(v)))],
    },
  });

  return {
    spreadsheetId,
    updatedRange: result.data.updates?.updatedRange ?? "",
  };
}

/**
 * Get the Google Sheets URL for a form's register
 */
export function getSheetUrl(spreadsheetId: string): string {
  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
}
