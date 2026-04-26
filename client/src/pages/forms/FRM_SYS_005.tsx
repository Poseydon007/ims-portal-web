import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Site Quarterly Audit Form",
  showTitle: false,
  pages: [
    {
      name: "audit_details",
      title: "Audit Details",
      elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
        {
          type: "text",
          name: "siteProject",
          title: "Site / Project",
          isRequired: true
        },
        {
          type: "text",
          name: "auditDate",
          title: "Audit Date",
          inputType: "date",
          isRequired: true
        },
        {
          type: "text",
          name: "reportedBy",
          title: "Auditor(s) Full Name",
          readOnly: true,
          description: "Auto-filled from your login profile"
        },
        {
          type: "text",
          name: "employeeId",
          title: "Auditor Employee ID",
          readOnly: true,
          description: "Auto-filled from your login profile"
        },
        {
          type: "text",
          name: "auditPeriod",
          title: "Audit Period",
          placeholder: "e.g., Q1 2026",
          isRequired: true
        },
        {
          type: "text",
          name: "locationArea",
          title: "Location / Area",
          isRequired: true
        },
        {
          type: "dropdown",
          name: "department",
          title: "Department",
          isRequired: true,
          choices: [
            "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
            "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
            "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
            "Management", "Quality Assurance", "Environmental", "Training & Competency", 
            "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
          ]
        }
      ]
    },
    {
      name: "section1",
      title: "Section 1 — Safety & Health",
      elements: [
        {
          type: "matrixdynamic",
          name: "safetyHealthItems",
          title: "Rate each item: Y = Yes, N = No, NA = Not Applicable. Score 1-5.",
          rowCount: 10,
          minRowCount: 10,
          columns: [
            { name: "item", title: "Item", cellType: "text", readOnly: true },
            { name: "description", title: "Description", cellType: "text", readOnly: true },
            { 
              name: "compliance", 
              title: "Y/N/NA", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "Y", text: "Y - Yes" },
                { value: "N", text: "N - No" },
                { value: "NA", text: "NA - Not Applicable" }
              ]
            },
            { 
              name: "score", 
              title: "Score 1-5", 
              cellType: "dropdown", 
              choices: [1, 2, 3, 4, 5] 
            },
            { name: "comments", title: "Comments", cellType: "text" }
          ],
          defaultValue: [
            { item: "1.1", description: "Site-specific safety induction completed for all personnel" },
            { item: "1.2", description: "Toolbox talks conducted regularly and documented" },
            { item: "1.3", description: "PPE compliance (hard hats, safety boots, hearing protection, hi-vis, gloves)" },
            { item: "1.4", description: "Emergency evacuation plan posted and understood by all personnel" },
            { item: "1.5", description: "First aid kits stocked, accessible, and within expiry" },
            { item: "1.6", description: "Fire extinguishers inspected and service dates current" },
            { item: "1.7", description: "LOTO procedures applied correctly during maintenance" },
            { item: "1.8", description: "Incident reports completed and investigations closed out" },
            { item: "1.9", description: "Heat stress controls in place (water, shade, rest schedules)" },
            { item: "1.10", description: "Hazard identification and risk assessments current for all activities" }
          ]
        }
      ]
    },
    {
      name: "section2",
      title: "Section 2 — Environmental Compliance",
      elements: [
        {
          type: "matrixdynamic",
          name: "environmentalItems",
          rowCount: 6,
          minRowCount: 6,
          columns: [
            { name: "item", title: "Item", cellType: "text", readOnly: true },
            { name: "description", title: "Description", cellType: "text", readOnly: true },
            { 
              name: "compliance", 
              title: "Y/N/NA", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "Y", text: "Y - Yes" },
                { value: "N", text: "N - No" },
                { value: "NA", text: "NA - Not Applicable" }
              ]
            },
            { 
              name: "score", 
              title: "Score 1-5", 
              cellType: "dropdown", 
              choices: [1, 2, 3, 4, 5] 
            },
            { name: "comments", title: "Comments", cellType: "text" }
          ],
          defaultValue: [
            { item: "2.1", description: "Spill kits present and fully stocked" },
            { item: "2.2", description: "No evidence of fuel or chemical spills on ground" },
            { item: "2.3", description: "Drill cuttings and fluids managed appropriately" },
            { item: "2.4", description: "Waste disposed of correctly (oily rags, filters, general waste)" },
            { item: "2.5", description: "Bunding around fuel and chemical storage areas" },
            { item: "2.6", description: "Waste segregation practiced (hazardous vs non-hazardous)" }
          ]
        }
      ]
    },
    {
      name: "section3",
      title: "Section 3 — Equipment & Maintenance",
      elements: [
        {
          type: "matrixdynamic",
          name: "equipmentItems",
          rowCount: 6,
          minRowCount: 6,
          columns: [
            { name: "item", title: "Item", cellType: "text", readOnly: true },
            { name: "description", title: "Description", cellType: "text", readOnly: true },
            { 
              name: "compliance", 
              title: "Y/N/NA", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "Y", text: "Y - Yes" },
                { value: "N", text: "N - No" },
                { value: "NA", text: "NA - Not Applicable" }
              ]
            },
            { 
              name: "score", 
              title: "Score 1-5", 
              cellType: "dropdown", 
              choices: [1, 2, 3, 4, 5] 
            },
            { name: "comments", title: "Comments", cellType: "text" }
          ],
          defaultValue: [
            { item: "3.1", description: "Daily pre-start checks completed and signed" },
            { item: "3.2", description: "Maintenance logs up to date" },
            { item: "3.3", description: "Guards on all rotating equipment and belts" },
            { item: "3.4", description: "Emergency shut-offs functioning and accessible" },
            { item: "3.5", description: "Equipment clean and in good working condition" },
            { item: "3.6", description: "Portable electrical equipment tested and tagged" }
          ]
        }
      ]
    },
    {
      name: "section4",
      title: "Section 4 — Drill Site Conditions",
      elements: [
        {
          type: "matrixdynamic",
          name: "drillSiteItems",
          rowCount: 4,
          minRowCount: 4,
          columns: [
            { name: "item", title: "Item", cellType: "text", readOnly: true },
            { name: "description", title: "Description", cellType: "text", readOnly: true },
            { 
              name: "compliance", 
              title: "Y/N/NA", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "Y", text: "Y - Yes" },
                { value: "N", text: "N - No" },
                { value: "NA", text: "NA - Not Applicable" }
              ]
            },
            { 
              name: "score", 
              title: "Score 1-5", 
              cellType: "dropdown", 
              choices: [1, 2, 3, 4, 5] 
            },
            { name: "comments", title: "Comments", cellType: "text" }
          ],
          defaultValue: [
            { item: "4.1", description: "Drill pad layout organised and free of tripping hazards" },
            { item: "4.2", description: "Lighting adequate for 24-hour operations (if applicable)" },
            { item: "4.3", description: "Core handling and storage areas maintained" },
            { item: "4.4", description: "Rod racks and materials stored securely" }
          ]
        }
      ]
    },
    {
      name: "section5",
      title: "Section 5 — Documentation & Training",
      elements: [
        {
          type: "matrixdynamic",
          name: "documentationItems",
          rowCount: 4,
          minRowCount: 4,
          columns: [
            { name: "item", title: "Item", cellType: "text", readOnly: true },
            { name: "description", title: "Description", cellType: "text", readOnly: true },
            { 
              name: "compliance", 
              title: "Y/N/NA", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "Y", text: "Y - Yes" },
                { value: "N", text: "N - No" },
                { value: "NA", text: "NA - Not Applicable" }
              ]
            },
            { 
              name: "score", 
              title: "Score 1-5", 
              cellType: "dropdown", 
              choices: [1, 2, 3, 4, 5] 
            },
            { name: "comments", title: "Comments", cellType: "text" }
          ],
          defaultValue: [
            { item: "5.1", description: "Permits and approvals current and available on site" },
            { item: "5.2", description: "Training records available and up to date" },
            { item: "5.3", description: "Site-specific JHAs and SWPs available" },
            { item: "5.4", description: "Safety data sheets (SDS) available for all hazardous substances" }
          ]
        }
      ]
    },
    {
      name: "audit_summary",
      title: "Audit Score Summary",
      elements: [
        {
          type: "text",
          name: "safetyHealthScore",
          title: "Safety & Health Score",
          inputType: "number",
          description: "/ 50"
        },
        {
          type: "text",
          name: "environmentalScore",
          title: "Environmental Score",
          inputType: "number",
          description: "/ 30"
        },
        {
          type: "text",
          name: "equipmentMaintenanceScore",
          title: "Equipment & Maintenance Score",
          inputType: "number",
          description: "/ 30"
        },
        {
          type: "text",
          name: "drillSiteScore",
          title: "Drill Site Conditions Score",
          inputType: "number",
          description: "/ 20"
        },
        {
          type: "text",
          name: "documentationTrainingScore",
          title: "Documentation & Training Score",
          inputType: "number",
          description: "/ 20"
        },
        {
          type: "text",
          name: "totalScore",
          title: "Total Score",
          inputType: "number",
          description: "/ 150"
        },
        {
          type: "radiogroup",
          name: "overallAssessment",
          title: "Overall Assessment",
          isRequired: true,
          choices: [
            "Satisfactory (>80%)",
            "Needs Improvement (60-80%)",
            "Non-Compliant (<60%)"
          ]
        }
      ]
    },
    {
      name: "findings",
      title: "Key Findings & Action Plan",
      elements: [
        {
          type: "matrixdynamic",
          name: "keyFindings",
          title: "Key Findings & Action Plan",
          rowCount: 6,
          minRowCount: 0,
          addRowText: "+ Add Finding",
          columns: [
            { name: "no", title: "No.", cellType: "text" },
            { name: "category", title: "Category", cellType: "text", isRequired: true },
            { name: "observation", title: "Observation", cellType: "text", isRequired: true },
            { 
              name: "riskLevel", 
              title: "Risk Level", 
              cellType: "dropdown", 
              isRequired: true,
              choices: ["Critical", "High", "Medium", "Low"]
            },
            { name: "actionRequired", title: "Action Required", cellType: "text", isRequired: true },
            { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
            { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" }
          ]
        }
      ]
    },
    {
      name: "executive_summary_page",
      title: "Executive Summary",
      elements: [
        {
          type: "comment",
          name: "executiveSummary",
          title: "Executive Summary",
          rows: 4,
          isRequired: true
        }
      ]
    },
    {
      name: "submission_details",
      title: "Submitted By",
      elements: [
        {
          type: "text",
          name: "reportedBySubmission",
          title: "Submitted By Full Name",
          readOnly: true,
          description: "Auto-filled from your login profile"
        },
        {
          type: "text",
          name: "submissionDate",
          title: "Submission Date",
          inputType: "date",
          readOnly: true,
          description: "Auto-filled with today's date"
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_SYS_005() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SYS-005"
        title="Site Quarterly Audit Form"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
        identityFields={{ 
          fullName: "reportedBy", 
          employeeId: "employeeId", 
          department: "department", 
          position: "position" 
        }}
      />
    </Layout>
  );
}
