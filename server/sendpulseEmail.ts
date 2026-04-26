/**
 * IMS Email Notification Helper
 * Uses Gmail SMTP via nodemailer for transactional emails in the IMS approval workflow.
 * Credentials: GMAIL_USER + GMAIL_APP_PASSWORD environment variables.
 */

import nodemailer from "nodemailer";

const FROM_NAME  = "True East IMS Portal";

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.warn("[Email] GMAIL_USER or GMAIL_APP_PASSWORD not set — emails disabled.");
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

interface EmailPayload {
  to: { name: string; email: string }[];
  subject: string;
  htmlBody: string;
  textBody: string;
}

async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) return false;

  const fromEmail = process.env.GMAIL_USER ?? "";
  const toAddresses = payload.to.map(r => `"${r.name}" <${r.email}>`).join(", ");

  try {
    const info = await transporter.sendMail({
      from: `"${FROM_NAME}" <${fromEmail}>`,
      to: toAddresses,
      subject: payload.subject,
      text: payload.textBody,
      html: payload.htmlBody,
    });
    console.log(`[Email] Sent OK: ${info.messageId} → ${toAddresses}`);
    return true;
  } catch (err: any) {
    console.error("[Email] Send failed:", err?.message ?? err);
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
export async function notifyForwardedToHse(opts: {
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

// ── Notification: Magic link sign-in for external roles (auditor / client) ───
export async function sendMagicLinkEmail(opts: {
  to: string;
  fullName: string;
  magicLink: string;
  expiresAt: Date;
}): Promise<boolean> {
  const expiresAtRiyadh = opts.expiresAt.toLocaleString("en-GB", {
    timeZone: "Asia/Riyadh",
    year: "numeric", month: "short", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  });

  const html = baseHtml(
    "Your IMS Portal Sign-In Link",
    `<p>Hello <strong>${opts.fullName}</strong>,</p>
    <p>Welcome to the True East Mining IMS Portal. Use the secure link below to sign in — no password required.</p>
    <div style="text-align:center; margin: 24px 0;">
      <a href="${opts.magicLink}" class="action-btn" style="background:#C49A28;color:#fff;font-size:14px;padding:12px 28px;">Sign In to IMS Portal →</a>
    </div>
    <table class="info-table">
      <tr><td>Expires</td><td>${expiresAtRiyadh} (Asia/Riyadh)</td></tr>
      <tr><td>Single-use</td><td>This link can be used only once.</td></tr>
    </table>
    <div class="notice"><strong>Security note:</strong> This link grants access to your IMS Portal account. Do not forward it. If you did not expect this email, please ignore it — no action is required.</div>
    <p style="margin-top:18px; font-size:12px; color:#6b7a8d;">If the button doesn't work, copy and paste this URL into your browser:<br/><span style="word-break:break-all; color:#081C2E;">${opts.magicLink}</span></p>`
  );

  const text = `Hello ${opts.fullName},\n\nYour secure sign-in link for the True East Mining IMS Portal:\n\n${opts.magicLink}\n\nThis link is single-use and expires at ${expiresAtRiyadh} (Asia/Riyadh).\n\nIf you did not expect this email, please ignore it.`;

  return sendEmail({
    to: [{ name: opts.fullName, email: opts.to }],
    subject: "[IMS] Your sign-in link for the True East IMS Portal",
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
