#!/usr/bin/env node
/**
 * grant-editor-access.mjs
 *
 * Grants Editor (write) access on every per-form register sheet to the
 * HSE Manager + Admin email accounts. Everyone else keeps view-only via
 * the existing "anyone with link → reader" permission.
 *
 * Idempotent: re-running just no-ops on grants that already exist (Drive
 * dedupes by emailAddress + role).
 *
 * Auth: re-uses scripts/oauth-token.json from create-registers.mjs.
 *
 * Usage:
 *   node scripts/grant-editor-access.mjs
 */

import { google } from "googleapis";
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const OAUTH_CLIENT_PATH  = join(__dirname, "oauth-client.json");
const OAUTH_TOKEN_PATH   = join(__dirname, "oauth-token.json");
const MAPPING_PATH       = resolve(__dirname, "..", "server", "forms-registers.json");

// Add as Editor on every register sheet. These accounts get full write
// access in Drive; all other users keep view-only via the "anyone with
// link → reader" permission set during create-registers.mjs.
const EDITORS = [
  "melo.j@sifa-sa.com",      // HSE Manager
  "markitekturee@gmail.com", // Admin (real Gmail; melo.j@tru-east.com has no Drive account)
];

if (!existsSync(OAUTH_CLIENT_PATH)) {
  console.error(`Missing ${OAUTH_CLIENT_PATH}. Provision OAuth client first.`);
  process.exit(1);
}
if (!existsSync(OAUTH_TOKEN_PATH)) {
  console.error(`Missing ${OAUTH_TOKEN_PATH}. Run create-registers.mjs first to authorize.`);
  process.exit(1);
}
if (!existsSync(MAPPING_PATH)) {
  console.error(`Missing ${MAPPING_PATH}. Run create-registers.mjs first to provision sheets.`);
  process.exit(1);
}

const clientCfg = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8")).installed;
const token     = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
const mapping   = JSON.parse(readFileSync(MAPPING_PATH, "utf8"));

const oauth2 = new google.auth.OAuth2(
  clientCfg.client_id,
  clientCfg.client_secret,
  clientCfg.redirect_uris[0]
);
oauth2.setCredentials(token);

const drive = google.drive({ version: "v3", auth: oauth2 });

const fileIds = Object.values(mapping).map(/** @type {any} */ (e) => e.fileId);
console.log(`Granting Editor on ${fileIds.length} files to: ${EDITORS.join(", ")}`);

let granted = 0, alreadyHad = 0, failed = 0;

for (const fileId of fileIds) {
  for (const email of EDITORS) {
    try {
      await drive.permissions.create({
        fileId,
        sendNotificationEmail: false, // don't spam; admins know about it
        requestBody: {
          type: "user",
          role: "writer",
          emailAddress: email,
        },
        fields: "id",
      });
      granted++;
      process.stdout.write(".");
    } catch (e) {
      // Drive returns 200 + new permission id even when one already exists,
      // so a real failure is rare. Log + continue.
      const msg = e?.errors?.[0]?.message ?? e?.message ?? String(e);
      if (/already.*permission/i.test(msg)) {
        alreadyHad++;
        process.stdout.write("=");
      } else {
        failed++;
        console.error(`\n  fail ${fileId} ${email}: ${msg}`);
      }
    }
    await new Promise((r) => setTimeout(r, 100)); // 10 calls/sec, polite
  }
}

console.log(`\n\n── Summary ────────────────`);
console.log(`  granted:    ${granted}`);
console.log(`  already had: ${alreadyHad}`);
console.log(`  failed:     ${failed}`);
console.log(`  total ops:  ${granted + alreadyHad + failed}`);
