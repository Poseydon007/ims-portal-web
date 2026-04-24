import { describe, it, expect } from "vitest";
import { google } from "googleapis";

describe("Google Sheets Service Account", () => {
  it("should authenticate and list files in the IMS Drive folder", async () => {
    const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    expect(keyJson, "GOOGLE_SERVICE_ACCOUNT_JSON must be set").toBeTruthy();

    const key = JSON.parse(keyJson!);
    expect(key.client_email).toBe(
      "ims-portal-sheets@gen-lang-client-0176885339.iam.gserviceaccount.com"
    );
    expect(key.type).toBe("service_account");

    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    const drive = google.drive({ version: "v3", auth });
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    expect(folderId, "GOOGLE_DRIVE_FOLDER_ID must be set").toBeTruthy();

    // List files in the IMS folder — should return without error
    const result = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: "files(id,name)",
      pageSize: 5,
    });

    expect(result.status).toBe(200);
    expect(Array.isArray(result.data.files)).toBe(true);
  }, 15000);
});
