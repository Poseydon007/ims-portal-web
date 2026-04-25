// End-to-end test of the IMS submission → approval chain.
// Login as admin, submit a Near Miss form, approve through all 3 steps, confirm closed.

const BASE = "http://localhost:3000/api/trpc";
const EMAIL = "melo.j@tru-east.com";
const PASSWORD = "Admin@2026";

let cookieJar = "";

function pickCookies(setCookieHeaders) {
  if (!setCookieHeaders) return;
  const headers = Array.isArray(setCookieHeaders) ? setCookieHeaders : [setCookieHeaders];
  for (const h of headers) {
    const [pair] = h.split(";");
    const [name] = pair.split("=");
    // replace existing cookie of same name
    cookieJar = cookieJar
      .split("; ")
      .filter(Boolean)
      .filter(c => !c.startsWith(name + "="))
      .concat([pair])
      .join("; ");
  }
}

async function call(procedure, body, method = "POST") {
  const url = `${BASE}/${procedure}`;
  const init = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(cookieJar ? { Cookie: cookieJar } : {}),
    },
  };
  if (method === "POST") {
    init.body = JSON.stringify({ json: body ?? null });
  } else if (body) {
    const params = new URLSearchParams({ input: JSON.stringify({ json: body }) });
    return fetchAndParse(url + "?" + params.toString(), { ...init, method: "GET" });
  }
  return fetchAndParse(url, init);
}

async function fetchAndParse(url, init) {
  const res = await fetch(url, init);
  pickCookies(res.headers.getSetCookie ? res.headers.getSetCookie() : res.headers.get("set-cookie"));
  const text = await res.text();
  let parsed;
  try { parsed = JSON.parse(text); } catch { parsed = { raw: text }; }
  if (parsed?.error) {
    const err = new Error(parsed.error.json?.message ?? "tRPC error");
    err.detail = parsed.error;
    throw err;
  }
  return parsed?.result?.data?.json ?? parsed;
}

async function main() {
  console.log("--- 1. Login");
  const loginResp = await call("imsAuth.login", { email: EMAIL, password: PASSWORD });
  console.log("logged in as:", loginResp.user?.fullName, "role:", loginResp.user?.role);

  console.log("\n--- 2. Submit a Near Miss form");
  const formData = {
    reportNo: "",
    reportedBy: loginResp.user.fullName,
    employeeId: loginResp.user.employeeId,
    dateOfOccurrence: new Date().toISOString().slice(0, 10),
    timeOfOccurrence: "10:30",
    location: "E2E test location",
    departmentSite: "HSE / Test Site",
    description: "End-to-end test submission — verifying submit→approve chain works.",
    classification: "UC",
    potentialSeverity: "2",
    potentialLikelihood: "C",
  };
  const submitResp = await call("formSubmissions.submit", {
    formCode: "TE-IMS-FRM-HSE-003",
    formTitle: "Near Miss Report (E2E test)",
    data: JSON.stringify(formData),
  });
  console.log("submitted:", submitResp);
  const submissionId = submitResp.submissionId;

  console.log("\n--- 3. Get submission state (should be pending_supervisor_review, step 1)");
  let state = await call("formSubmissions.getSubmission", { submissionId }, "GET");
  console.log("status:", state.status, "step:", state.currentStep, "report:", state.reportNumber);

  console.log("\n--- 4. Approve step 1 (Supervisor Review)");
  const a1 = await call("formSubmissions.approve", { submissionId, comment: "step 1 ok" });
  console.log("→ newStatus:", a1.newStatus);

  state = await call("formSubmissions.getSubmission", { submissionId }, "GET");
  console.log("after step 1: status:", state.status, "step:", state.currentStep);

  console.log("\n--- 5. Approve step 2 (HSE Manager Review)");
  const a2 = await call("formSubmissions.approve", { submissionId, comment: "step 2 ok" });
  console.log("→ newStatus:", a2.newStatus);

  state = await call("formSubmissions.getSubmission", { submissionId }, "GET");
  console.log("after step 2: status:", state.status, "step:", state.currentStep);

  console.log("\n--- 6. Approve step 3 (HSE Officer Approval, closes)");
  const a3 = await call("formSubmissions.approve", { submissionId, comment: "step 3 ok — closing" });
  console.log("→ newStatus:", a3.newStatus);

  state = await call("formSubmissions.getSubmission", { submissionId }, "GET");
  console.log("FINAL: status:", state.status, "step:", state.currentStep);
  console.log("approvalHistory entries:", state.approvalHistory?.length ?? 0);
  state.approvalHistory?.forEach(h => {
    console.log(`  step ${h.step} ${h.action} by ${h.actorName} (${h.actorRole}) — "${h.comment ?? ""}"`);
  });

  if (state.status === "closed") {
    console.log("\n✅ END-TO-END FLOW WORKS");
  } else {
    console.log("\n❌ Final status not 'closed'");
    process.exit(1);
  }
}

main().catch(err => {
  console.error("\n❌ TEST FAILED:", err.message);
  if (err.detail) console.error("   detail:", JSON.stringify(err.detail, null, 2));
  process.exit(1);
});
