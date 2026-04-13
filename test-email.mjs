/**
 * One-off test: send a test email via SendPulse to verify the integration is working.
 * Run with: node test-email.mjs
 */

import { readFileSync } from "fs";

// Load .env manually
try {
  const env = readFileSync(".env", "utf-8");
  for (const line of env.split("\n")) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  }
} catch {}

const API_KEY = process.env.SENDPULSE_API_KEY;
const FROM_EMAIL = "melo.j@tru-east.com";
const FROM_NAME = "True East IMS Portal";
const TO_EMAIL = "melo.j@tru-east.com"; // sending to yourself as test

if (!API_KEY) {
  console.error("❌ SENDPULSE_API_KEY not found in environment.");
  process.exit(1);
}

const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; background: #f4f6f9; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #dde3ec;">
    <div style="background: #081C2E; padding: 24px 32px; border-bottom: 3px solid #C49A28;">
      <h1 style="color: white; margin: 0; font-size: 18px; font-weight: bold;">True East Mining Company</h1>
      <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">IMS Document Portal</p>
    </div>
    <div style="padding: 32px;">
      <h2 style="color: #081C2E; font-size: 16px; margin-top: 0;">✅ Test Email — SendPulse Integration Working</h2>
      <p style="color: #4a5568; font-size: 14px; line-height: 1.6;">
        This is a test email sent from the <strong>True East IMS Portal</strong> to confirm that the SendPulse email integration is configured correctly.
      </p>
      <p style="color: #4a5568; font-size: 14px; line-height: 1.6;">
        Email notifications will fire automatically at each step of the approval workflow:
      </p>
      <ul style="color: #4a5568; font-size: 14px; line-height: 1.8;">
        <li>Form submitted → Supervisors &amp; HSE Managers notified</li>
        <li>Supervisor approves → HSE Manager notified</li>
        <li>HSE Manager approves → HSE Officer (Admin) notified</li>
        <li>Final approval → Submitter notified (closed)</li>
        <li>Any return → Submitter notified with comment</li>
      </ul>
      <div style="margin-top: 24px; padding: 16px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #C49A28;">
        <p style="margin: 0; font-size: 12px; color: #6b7a8d;">
          Sent from: <strong>${FROM_EMAIL}</strong><br>
          Timestamp: <strong>${new Date().toISOString()}</strong>
        </p>
      </div>
    </div>
    <div style="background: #081C2E; padding: 16px 32px; text-align: center;">
      <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">
        © ${new Date().getFullYear()} True East Mining Company · IMS Portal · Internal Use Only
      </p>
    </div>
  </div>
</body>
</html>
`;

const htmlBase64 = Buffer.from(htmlBody, "utf-8").toString("base64");

const body = {
  email: {
    html: htmlBase64,
    text: "Test email from True East IMS Portal. SendPulse integration is working correctly.",
    subject: "✅ True East IMS Portal — Email Test",
    from: { name: FROM_NAME, email: FROM_EMAIL },
    to: [{ name: "Melo J.", email: TO_EMAIL }],
  },
};

console.log(`Sending test email to ${TO_EMAIL} via SendPulse...`);

const res = await fetch("https://api.sendpulse.com/smtp/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify(body),
});

const json = await res.json();
console.log("Response status:", res.status);
console.log("Response body:", JSON.stringify(json, null, 2));

if (res.ok && json.result) {
  console.log("✅ Test email sent successfully!");
} else {
  console.error("❌ Failed to send test email:", json);
}
