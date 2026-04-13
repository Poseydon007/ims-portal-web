/**
 * SendPulse Email Notification Helper
 * Uses the SendPulse REST API to send transactional emails for the IMS approval workflow.
 * API docs: https://sendpulse.com/integrations/api/smtp
 */

import { ENV } from "./_core/env";

const SENDPULSE_API_URL = "https://api.sendpulse.com/smtp/emails";
const FROM_EMAIL = "melo.j@tru-east.com";
const FROM_NAME = "True East IMS Portal";

interface EmailPayload {
  to: { name: string; email: string }[];
  subject: string;
  htmlBody: string;
  textBody: string;
}

async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const apiKey = ENV.sendpulseApiKey;
  if (!apiKey) {
    console.warn("[SendPulse] SENDPULSE_API_KEY not set — email skipped.");
    return false;
  }

  // HTML must be Base64-encoded for SendPulse
  const htmlBase64 = Buffer.from(payload.htmlBody, "utf-8").toString("base64");

  const body = {
    email: {
      html: htmlBase64,
      text: payload.textBody,
      subject: payload.subject,
      from: { name: FROM_NAME, email: FROM_EMAIL },
      to: payload.to,
    },
  };

  try {
    const res = await fetch(SENDPULSE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json()) as { result?: boolean; error?: string };
    if (!res.ok || !json.result) {
      console.error("[SendPulse] Send failed:", json);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[SendPulse] Request error:", err);
    return false;
  }
}

// ── Email templates ──────────────────────────────────────────────────────────

function baseHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 6px; overflow: hidden; border: 1px solid #dde3ec; }
    .header { background: #081C2E; padding: 20px 28px; }
    .header img { height: 36px; }
    .header h1 { color: #fff; font-size: 16px; margin: 8px 0 0; font-weight: 700; }
    .header span { color: #C49A28; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; }
    .body { padding: 24px 28px; color: #2d3748; font-size: 14px; line-height: 1.6; }
    .badge { display: inline-block; background: #e8edf4; color: #081C2E; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    .info-table td { padding: 8px 12px; border: 1px solid #edf0f5; font-size: 13px; }
    .info-table td:first-child { font-weight: 600; color: #4a5568; width: 40%; background: #f8fafc; }
    .action-btn { display: inline-block; margin-top: 20px; padding: 10px 24px; background: #C49A28; color: #fff; text-decoration: none; border-radius: 4px; font-weight: 700; font-size: 13px; }
    .footer { background: #f8fafc; padding: 14px 28px; font-size: 11px; color: #8a9ab0; border-top: 1px solid #edf0f5; }
    .notice { background: #fffbf0; border: 1px solid #f0d98a; border-radius: 4px; padding: 10px 14px; font-size: 12px; color: #5a4a1a; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <span>Integrated Management System</span>
      <h1>${title}</h1>
    </div>
    <div class="body">
      ${body}
    </div>
    <div class="footer">
      This is an automated notification from the True East Mining Company IMS Portal. Do not reply to this email.
    </div>
  </div>
</body>
</html>`;
}

// ── Notification: New submission awaiting supervisor review ──────────────────
export async function notifyNewSubmission(opts: {
  supervisorName: string;
  supervisorEmail: string;
  reportNumber: string;
  formTitle: string;
  submittedByName: string;
  submittedAt: string;
  portalUrl: string;
}): Promise<void> {
  const html = baseHtml(
    "New Form Submission — Action Required",
    `<p>Hello <strong>${opts.supervisorName}</strong>,</p>
    <p>A new form has been submitted and is awaiting your review and approval.</p>
    <div class="badge">${opts.reportNumber}</div>
    <table class="info-table">
      <tr><td>Form</td><td>${opts.formTitle}</td></tr>
      <tr><td>Submitted By</td><td>${opts.submittedByName}</td></tr>
      <tr><td>Submitted At</td><td>${opts.submittedAt}</td></tr>
      <tr><td>Report No.</td><td>${opts.reportNumber}</td></tr>
    </table>
    <p>Please log in to the IMS Portal to review and approve or return this submission.</p>
    <a href="${opts.portalUrl}/approvals" class="action-btn">Go to Approvals Queue →</a>
    <div class="notice"><strong>Note:</strong> This submission requires your approval before it can proceed to the next step.</div>`
  );

  const text = `Hello ${opts.supervisorName},\n\nA new form has been submitted and requires your review.\n\nReport No: ${opts.reportNumber}\nForm: ${opts.formTitle}\nSubmitted By: ${opts.submittedByName}\nSubmitted At: ${opts.submittedAt}\n\nLog in to the IMS Portal to review: ${opts.portalUrl}/approvals`;

  await sendEmail({
    to: [{ name: opts.supervisorName, email: opts.supervisorEmail }],
    subject: `[IMS] Action Required — ${opts.reportNumber} awaiting your review`,
    htmlBody: html,
    textBody: text,
  });
}

// ── Notification: Submission forwarded to HSE Manager ───────────────────────────
export async function notifyForwardedToHseManager(opts: {
  hseManagerName: string;
  hseManagerEmail: string;
  reportNumber: string;
  formTitle: string;
  submittedByName: string;
  supervisorName: string;
  approvedAt: string;
  portalUrl: string;
}): Promise<void> {
  const html = baseHtml(
    "Submission Forwarded — HSE Manager Review Required",
    `<p>Hello <strong>${opts.hseManagerName}</strong>,</p>
    <p>A form submission has been reviewed and approved by the Supervisor, and is now awaiting your HSE Manager review.</p>
    <div class="badge">${opts.reportNumber}</div>
    <table class="info-table">
      <tr><td>Form</td><td>${opts.formTitle}</td></tr>
      <tr><td>Submitted By</td><td>${opts.submittedByName}</td></tr>
      <tr><td>Supervisor Approved</td><td>${opts.supervisorName} — ${opts.approvedAt}</td></tr>
      <tr><td>Report No.</td><td>${opts.reportNumber}</td></tr>
    </table>
    <p>Please log in to the IMS Portal to review and forward to the HSE Officer.</p>
    <a href="${opts.portalUrl}/approvals" class="action-btn">Go to Approvals Queue →</a>`
  );

  const text = `Hello ${opts.hseManagerName},\n\nA submission has been approved by the Supervisor and requires your HSE Manager review.\n\nReport No: ${opts.reportNumber}\nForm: ${opts.formTitle}\nSubmitted By: ${opts.submittedByName}\nSupervisor: ${opts.supervisorName}\n\nLog in to the IMS Portal: ${opts.portalUrl}/approvals`;

  await sendEmail({
    to: [{ name: opts.hseManagerName, email: opts.hseManagerEmail }],
    subject: `[IMS] HSE Manager Review Required — ${opts.reportNumber}`,
    htmlBody: html,
    textBody: text,
  });
}

// ── Notification: Submission approved and forwarded to HSE Officer ───────────────────
export async function notifyForwardedToHse(ts: {
  hseOfficerName: string;
  hseOfficerEmail: string;
  reportNumber: string;
  formTitle: string;
  submittedByName: string;
  supervisorName: string;
  approvedAt: string;
  portalUrl: string;
}): Promise<void> {
  const html = baseHtml(
    "Submission Forwarded — HSE Approval Required",
    `<p>Hello <strong>${opts.hseOfficerName}</strong>,</p>
    <p>A form submission has been reviewed and approved by the Supervisor, and is now awaiting your final HSE approval.</p>
    <div class="badge">${opts.reportNumber}</div>
    <table class="info-table">
      <tr><td>Form</td><td>${opts.formTitle}</td></tr>
      <tr><td>Submitted By</td><td>${opts.submittedByName}</td></tr>
      <tr><td>Supervisor Approved</td><td>${opts.supervisorName} — ${opts.approvedAt}</td></tr>
      <tr><td>Report No.</td><td>${opts.reportNumber}</td></tr>
    </table>
    <p>Please log in to the IMS Portal to complete the final approval.</p>
    <a href="${opts.portalUrl}/approvals" class="action-btn">Go to Approvals Queue →</a>`
  );

  const text = `Hello ${opts.hseOfficerName},\n\nA submission has been approved by the Supervisor and requires your HSE approval.\n\nReport No: ${opts.reportNumber}\nForm: ${opts.formTitle}\nSubmitted By: ${opts.submittedByName}\nSupervisor: ${opts.supervisorName}\n\nLog in to the IMS Portal: ${opts.portalUrl}/approvals`;

  await sendEmail({
    to: [{ name: opts.hseOfficerName, email: opts.hseOfficerEmail }],
    subject: `[IMS] HSE Approval Required — ${opts.reportNumber}`,
    htmlBody: html,
    textBody: text,
  });
}

// ── Notification: Submission returned (any step) ─────────────────────────────
export async function notifyReturned(opts: {
  submitterName: string;
  submitterEmail: string;
  reportNumber: string;
  formTitle: string;
  returnedByName: string;
  returnedByRole: string;
  comment: string;
  returnedAt: string;
  portalUrl: string;
}): Promise<void> {
  const html = baseHtml(
    "Submission Returned — Action Required",
    `<p>Hello <strong>${opts.submitterName}</strong>,</p>
    <p>Your form submission has been <strong>returned</strong> and requires your attention.</p>
    <div class="badge">${opts.reportNumber}</div>
    <table class="info-table">
      <tr><td>Form</td><td>${opts.formTitle}</td></tr>
      <tr><td>Report No.</td><td>${opts.reportNumber}</td></tr>
      <tr><td>Returned By</td><td>${opts.returnedByName} (${opts.returnedByRole})</td></tr>
      <tr><td>Returned At</td><td>${opts.returnedAt}</td></tr>
    </table>
    <div class="notice"><strong>Comment from reviewer:</strong><br/>${opts.comment}</div>
    <p style="margin-top:16px;">Please log in to the IMS Portal to review the feedback and take action.</p>
    <a href="${opts.portalUrl}" class="action-btn">Go to IMS Portal →</a>`
  );

  const text = `Hello ${opts.submitterName},\n\nYour submission ${opts.reportNumber} has been returned by ${opts.returnedByName}.\n\nComment: ${opts.comment}\n\nLog in to the IMS Portal: ${opts.portalUrl}`;

  await sendEmail({
    to: [{ name: opts.submitterName, email: opts.submitterEmail }],
    subject: `[IMS] Submission Returned — ${opts.reportNumber} requires your attention`,
    htmlBody: html,
    textBody: text,
  });
}

// ── Notification: Submission fully closed ────────────────────────────────────
export async function notifyClosed(opts: {
  submitterName: string;
  submitterEmail: string;
  reportNumber: string;
  formTitle: string;
  closedByName: string;
  closedAt: string;
  portalUrl: string;
}): Promise<void> {
  const html = baseHtml(
    "Submission Closed — Approved",
    `<p>Hello <strong>${opts.submitterName}</strong>,</p>
    <p>Your form submission has been <strong>fully approved and closed</strong>.</p>
    <div class="badge">${opts.reportNumber}</div>
    <table class="info-table">
      <tr><td>Form</td><td>${opts.formTitle}</td></tr>
      <tr><td>Report No.</td><td>${opts.reportNumber}</td></tr>
      <tr><td>Closed By</td><td>${opts.closedByName} (HSE Officer)</td></tr>
      <tr><td>Closed At</td><td>${opts.closedAt}</td></tr>
    </table>
    <p>No further action is required. This record is now closed in the IMS system.</p>
    <a href="${opts.portalUrl}" class="action-btn">View IMS Portal →</a>`
  );

  const text = `Hello ${opts.submitterName},\n\nYour submission ${opts.reportNumber} has been fully approved and closed.\n\nClosed By: ${opts.closedByName}\nClosed At: ${opts.closedAt}\n\nLog in to the IMS Portal: ${opts.portalUrl}`;

  await sendEmail({
    to: [{ name: opts.submitterName, email: opts.submitterEmail }],
    subject: `[IMS] Submission Closed — ${opts.reportNumber} approved`,
    htmlBody: html,
    textBody: text,
  });
}
