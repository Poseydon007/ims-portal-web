// Export routes — admin-only Excel download of form submissions
import { Router } from "express";
import * as XLSX from "xlsx";
import { getDb } from "./db";
import { formResponses } from "../drizzle/schema";
import { desc } from "drizzle-orm";
import { verifySessionToken, IMS_COOKIE_NAME } from "./imsAuth";
import { parse as parseCookie } from "cookie";

const exportRouter = Router();

// GET /api/export/near-miss — download all Near Miss submissions as .xlsx
exportRouter.get("/near-miss", async (req, res) => {
  try {
    // Authenticate
    const cookies = req.headers.cookie ? parseCookie(req.headers.cookie) : {};
    const token = cookies[IMS_COOKIE_NAME];
    if (!token) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }
    const session = await verifySessionToken(token);
    if (!session || session.role !== "admin") {
      res.status(403).json({ error: "Admin access required" });
      return;
    }

    const db = await getDb();
    if (!db) {
      res.status(500).json({ error: "Database unavailable" });
      return;
    }

    const rows = await db
      .select()
      .from(formResponses)
      .orderBy(desc(formResponses.submittedAt));

    // Build worksheet rows — flatten responseData JSON into columns
    const wsRows = rows.map(r => {
      let fields: Record<string, unknown> = {};
      try {
        fields = JSON.parse(r.responseData ?? "{}");
      } catch {
        fields = {};
      }

      // Flatten arrays/objects in fields
      const flatFields: Record<string, string> = {};
      for (const [key, val] of Object.entries(fields)) {
        if (Array.isArray(val)) {
          flatFields[key] = val
            .map(v => (typeof v === "object" ? JSON.stringify(v) : String(v)))
            .join("; ");
        } else if (val !== null && typeof val === "object") {
          flatFields[key] = JSON.stringify(val);
        } else {
          flatFields[key] = val == null ? "" : String(val);
        }
      }

      return {
        "Report No.":     r.reportNumber ?? "",
        "Submission ID":  r.submissionId,
        "Form":           r.formTitle ?? r.formCode,
        "Status":         r.status,
        "Submitted By":   r.submittedByName ?? "",
        "Submitted At":   r.submittedAt
          ? new Date(r.submittedAt).toLocaleString("en-SA", { timeZone: "Asia/Riyadh" })
          : "",
        ...flatFields,
      };
    });

    const ws = XLSX.utils.json_to_sheet(wsRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Near Miss Submissions");

    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    const filename = `NearMiss_Submissions_${new Date().toISOString().slice(0, 10)}.xlsx`;
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.send(buf);
  } catch (err) {
    console.error("[Export] Error:", err);
    res.status(500).json({ error: "Export failed" });
  }
});

export { exportRouter };
