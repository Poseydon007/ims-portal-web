import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_MAINT_003() {
  const [formData, setFormData] = useState({
    siteLocation: "",
    year: "",
    inspector: "",
    inspectionFrequency: "",
    inspections: [
      { id: 1, equipmentId: "", description: "", q1: "", q2: "", q3: "", q4: "", nextTestDue: "" }
    ],
    deviations: [
      { id: 1, date: "", equipmentId: "", description: "", followUp: "", responsible: "", targetDate: "", completion: "", signature: "" }
    ],
    signOff: {
      inspectorName: "",
      inspectorSig: "",
      inspectorDate: "",
      supervisorName: "",
      supervisorSig: "",
      supervisorDate: "",
      hseManagerName: "",
      hseManagerSig: "",
      hseManagerDate: ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string; sheetUrl?: string } | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignOffChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      signOff: { ...prev.signOff, [name]: value }
    }));
  };

  const handleInspectionChange = (index: number, field: string, value: string) => {
    const newInspections = [...formData.inspections];
    newInspections[index] = { ...newInspections[index], [field]: value };
    setFormData(prev => ({ ...prev, inspections: newInspections }));
  };

  const addInspectionRow = () => {
    setFormData(prev => ({
      ...prev,
      inspections: [...prev.inspections, { id: prev.inspections.length + 1, equipmentId: "", description: "", q1: "", q2: "", q3: "", q4: "", nextTestDue: "" }]
    }));
  };

  const handleDeviationChange = (index: number, field: string, value: string) => {
    const newDeviations = [...formData.deviations];
    newDeviations[index] = { ...newDeviations[index], [field]: value };
    setFormData(prev => ({ ...prev, deviations: newDeviations }));
  };

  const addDeviationRow = () => {
    setFormData(prev => ({
      ...prev,
      deviations: [...prev.deviations, { id: prev.deviations.length + 1, date: "", equipmentId: "", description: "", followUp: "", responsible: "", targetDate: "", completion: "", signature: "" }]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const headers = [
      "Site / Location", "Year", "Inspector", "Inspection Frequency",
      "Inspection Details (ID | Desc | Q1 | Q2 | Q3 | Q4 | Next Due)",
      "Deviation Details (Date | ID | Desc | Follow-Up | Resp | Target | Done | Sig)",
      "Inspector Name", "Inspector Date",
      "Supervisor Name", "Supervisor Date",
      "HSE Manager Name", "HSE Manager Date"
    ];

    const values = [
      formData.siteLocation,
      formData.year,
      formData.inspector,
      formData.inspectionFrequency,
      formData.inspections.map(i => `${i.equipmentId} | ${i.description} | ${i.q1} | ${i.q2} | ${i.q3} | ${i.q4} | ${i.nextTestDue}`).join("; "),
      formData.deviations.map(d => `${d.date} | ${d.equipmentId} | ${d.description} | ${d.followUp} | ${d.responsible} | ${d.targetDate} | ${d.completion} | ${d.signature}`).join("; "),
      formData.signOff.inspectorName,
      formData.signOff.inspectorDate,
      formData.signOff.supervisorName,
      formData.signOff.supervisorDate,
      formData.signOff.hseManagerName,
      formData.signOff.hseManagerDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-MAINT-003",
        headers,
        values
      });
      setSubmitStatus({
        success: true,
        message: "Form submitted successfully.",
        sheetUrl: result.sheetUrl
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to submit form. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: { maxWidth: "1200px", margin: "0 auto", padding: "20px", fontFamily: "'Nunito Sans', sans-serif", color: "#081C2E" },
    sectionHeader: { backgroundColor: "#081C2E", color: "white", padding: "10px 15px", fontWeight: "bold", marginBottom: "15px", borderRadius: "4px" },
    table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "20px" },
    th: { backgroundColor: "#081C2E", color: "white", padding: "10px", border: "1px solid #dde3ec", textAlign: "left" as const, fontSize: "14px" },
    td: { padding: "10px", border: "1px solid #dde3ec", fontSize: "14px" },
    input: { width: "100%", padding: "8px", border: "1px solid #dde3ec", borderRadius: "4px" },
    label: { display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "14px" },
    grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" },
    button: { backgroundColor: "#C49A28", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" },
    breadcrumb: { marginBottom: "20px", fontSize: "14px" },
    docControl: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "30px", fontSize: "12px" },
    deviationList: { fontSize: "12px", backgroundColor: "#f4f6f9", padding: "15px", border: "1px solid #dde3ec", borderRadius: "4px", marginBottom: "20px" }
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.breadcrumb}>
          <Link href="/">← Portal Home</Link> <span style={{ margin: "0 10px" }}>/</span> <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link> <span style={{ margin: "0 10px" }}>/</span> <strong>Portable Electrical Equipment Register</strong>
        </div>

        <table style={styles.docControl}>
          <thead>
            <tr>
              <th style={styles.th}>Document Code</th>
              <th style={styles.th}>Revision</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>TE-IMS-FRM-MAINT-003</td>
              <td style={styles.td}>Rev01</td>
              <td style={styles.td}>09 Apr 2026</td>
              <td style={styles.td}>Approved for Implementation</td>
            </tr>
          </tbody>
        </table>

        <h1 style={{ textAlign: "center", color: "#081C2E", marginBottom: "30px" }}>PORTABLE ELECTRICAL EQUIPMENT INSPECTION REGISTER</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.grid2}>
            <div>
              <label style={styles.label}>Site / Location *</label>
              <input type="text" name="siteLocation" required value={formData.siteLocation} onChange={handleInputChange} style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Year *</label>
              <input type="number" name="year" required value={formData.year} onChange={handleInputChange} style={styles.input} />
            </div>
          </div>
          <div style={styles.grid2}>
            <div>
              <label style={styles.label}>Inspector *</label>
              <input type="text" name="inspector" required value={formData.inspector} onChange={handleInputChange} style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Inspection Frequency *</label>
              <input type="text" name="inspectionFrequency" required value={formData.inspectionFrequency} onChange={handleInputChange} style={styles.input} />
            </div>
          </div>

          <div style={styles.deviationList}>
            <strong>DEVIATION CHECKLIST:</strong> Write ‘OK’ or use the deviation number from the list below.
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px", marginTop: "10px" }}>
              <span>1. Guard missing or damaged</span>
              <span>2. Connection loose</span>
              <span>3. Cable badly joined</span>
              <span>4. Plug top cracked or broken</span>
              <span>5. Not double insulated / no earth</span>
              <span>6. Switches faulty</span>
              <span>7. Cable not fitted properly</span>
              <span>8. Earth wire not connected</span>
              <span>9. No ID tag / expired test</span>
              <span>10. Overheating signs</span>
              <span>11. Extension cable overcrowded</span>
              <span>12. Other – specify</span>
            </div>
          </div>

          <div style={styles.sectionHeader}>QUARTERLY INSPECTION REGISTER</div>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>No.</th>
                  <th style={styles.th}>Equipment ID *</th>
                  <th style={styles.th}>Description / Location</th>
                  <th style={styles.th}>Q1 (Jan-Mar)</th>
                  <th style={styles.th}>Q2 (Apr-Jun)</th>
                  <th style={styles.th}>Q3 (Jul-Sep)</th>
                  <th style={styles.th}>Q4 (Oct-Dec)</th>
                  <th style={styles.th}>Next Test Due</th>
                </tr>
              </thead>
              <tbody>
                {formData.inspections.map((row, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{row.id}</td>
                    <td style={styles.td}><input type="text" value={row.equipmentId} onChange={(e) => handleInspectionChange(index, "equipmentId", e.target.value)} style={styles.input} required /></td>
                    <td style={styles.td}><input type="text" value={row.description} onChange={(e) => handleInspectionChange(index, "description", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.q1} onChange={(e) => handleInspectionChange(index, "q1", e.target.value)} style={styles.input} placeholder="OK / #"/></td>
                    <td style={styles.td}><input type="text" value={row.q2} onChange={(e) => handleInspectionChange(index, "q2", e.target.value)} style={styles.input} placeholder="OK / #"/></td>
                    <td style={styles.td}><input type="text" value={row.q3} onChange={(e) => handleInspectionChange(index, "q3", e.target.value)} style={styles.input} placeholder="OK / #"/></td>
                    <td style={styles.td}><input type="text" value={row.q4} onChange={(e) => handleInspectionChange(index, "q4", e.target.value)} style={styles.input} placeholder="OK / #"/></td>
                    <td style={styles.td}><input type="date" value={row.nextTestDue} onChange={(e) => handleInspectionChange(index, "nextTestDue", e.target.value)} style={styles.input} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={addInspectionRow} style={{ ...styles.button, backgroundColor: "#081C2E", marginBottom: "30px" }}>+ Add Equipment Row</button>

          <div style={styles.sectionHeader}>DEVIATION & FOLLOW-UP REPORT</div>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Equipment ID</th>
                  <th style={styles.th}>Deviation Description</th>
                  <th style={styles.th}>Follow-Up Action</th>
                  <th style={styles.th}>Responsible</th>
                  <th style={styles.th}>Target Date</th>
                  <th style={styles.th}>Completion</th>
                  <th style={styles.th}>Signature</th>
                </tr>
              </thead>
              <tbody>
                {formData.deviations.map((row, index) => (
                  <tr key={index}>
                    <td style={styles.td}><input type="date" value={row.date} onChange={(e) => handleDeviationChange(index, "date", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.equipmentId} onChange={(e) => handleDeviationChange(index, "equipmentId", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.description} onChange={(e) => handleDeviationChange(index, "description", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.followUp} onChange={(e) => handleDeviationChange(index, "followUp", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.responsible} onChange={(e) => handleDeviationChange(index, "responsible", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="date" value={row.targetDate} onChange={(e) => handleDeviationChange(index, "targetDate", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.completion} onChange={(e) => handleDeviationChange(index, "completion", e.target.value)} style={styles.input} /></td>
                    <td style={styles.td}><input type="text" value={row.signature} onChange={(e) => handleDeviationChange(index, "signature", e.target.value)} style={styles.input} placeholder="Name" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={addDeviationRow} style={{ ...styles.button, backgroundColor: "#081C2E", marginBottom: "30px" }}>+ Add Deviation Row</button>

          <div style={styles.sectionHeader}>SIGN-OFF</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Name *</th>
                <th style={styles.th}>Signature (Full Name) *</th>
                <th style={styles.th}>Date *</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Electrical Inspector / Technician</td>
                <td style={styles.td}><input type="text" name="inspectorName" required value={formData.signOff.inspectorName} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="text" name="inspectorSig" required value={formData.signOff.inspectorSig} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="date" name="inspectorDate" required value={formData.signOff.inspectorDate} onChange={handleSignOffChange} style={styles.input} /></td>
              </tr>
              <tr>
                <td style={styles.td}>Maintenance Supervisor</td>
                <td style={styles.td}><input type="text" name="supervisorName" required value={formData.signOff.supervisorName} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="text" name="supervisorSig" required value={formData.signOff.supervisorSig} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="date" name="supervisorDate" required value={formData.signOff.supervisorDate} onChange={handleSignOffChange} style={styles.input} /></td>
              </tr>
              <tr>
                <td style={styles.td}>HSE Manager</td>
                <td style={styles.td}><input type="text" name="hseManagerName" required value={formData.signOff.hseManagerName} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="text" name="hseManagerSig" required value={formData.signOff.hseManagerSig} onChange={handleSignOffChange} style={styles.input} /></td>
                <td style={styles.td}><input type="date" name="hseManagerDate" required value={formData.signOff.hseManagerDate} onChange={handleSignOffChange} style={styles.input} /></td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button type="submit" disabled={isSubmitting} style={{ ...styles.button, fontSize: "18px", padding: "15px 40px" }}>
              {isSubmitting ? "Submitting..." : "Submit Inspection Register"}
            </button>
          </div>
        </form>

        {submitStatus && (
          <div style={{ marginTop: "20px", padding: "15px", borderRadius: "4px", backgroundColor: submitStatus.success ? "#e6fffa" : "#fff5f5", border: `1px solid ${submitStatus.success ? "#38a169" : "#e53e3e"}`, color: submitStatus.success ? "#2f855a" : "#c53030" }}>
            {submitStatus.message}
            {submitStatus.success && submitStatus.sheetUrl && (
              <div style={{ marginTop: "10px" }}>
                View register: <a href={submitStatus.sheetUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2f855a", textDecoration: "underline" }}>Google Sheet</a>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
