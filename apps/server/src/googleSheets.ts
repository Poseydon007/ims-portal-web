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

  // Create new spreadsheet
  const created = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: sheetName },
      sheets: [
        {
          properties: { title: "Submissions" },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
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
            },
          ],
        },
      ],
    },
  });

  const spreadsheetId = created.data.spreadsheetId!;

  // Move to the IMS folder
  await drive.files.update({
    fileId: spreadsheetId,
    addParents: FOLDER_ID,
    removeParents: "root",
    fields: "id,parents",
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
