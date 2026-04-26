import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Audit Checklist Template",
  showTitle: false,
  pages: [
    {
      name: "audit_information",
      title: "1. Audit Information",
      elements: [
        {
          type: "text",
          name: "reportNo",
          title: "Audit Reference No.",
          readOnly: true,
          description: "Auto-assigned on submission"
        },
        {
          type: "dropdown",
          name: "auditType",
          title: "Audit Type",
          isRequired: true,
          choices: ["Scheduled", "Unscheduled", "Pillar-Specific", "Full IMS"]
        },
        {
          type: "comment",
          name: "auditScope",
          title: "Audit Scope and Focus",
          isRequired: true,
          rows: 2
        },
        {
          type: "checkbox",
          name: "standardsAuditedAgainst",
          title: "Standards Audited Against",
          choices: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Other"]
        },
        {
          type: "text",
          name: "otherStandards",
          title: "Other Standards",
          visibleIf: "{standardsAuditedAgainst} contains 'Other'"
        },
        {
          type: "text",
          name: "reportedBy",
          title: "Lead Auditor Full Name",
          readOnly: true,
          description: "Auto-filled from your login profile"
        },
        {
          type: "text",
          name: "employeeId",
          title: "Lead Auditor Employee ID",
          readOnly: true,
          description: "Auto-filled from your login profile"
        },
        {
          type: "text",
          name: "auditTeamMembers",
          title: "Audit Team Members"
        },
        {
          type: "text",
          name: "auditeeDetails",
          title: "Auditee(s) — Department / Site / Personnel",
          isRequired: true
        },
        {
          type: "text",
          name: "auditDates",
          title: "Audit Date(s)",
          isRequired: true
        },
        {
          type: "text",
          name: "openingMeeting",
          title: "Opening Meeting Date / Time"
        },
        {
          type: "text",
          name: "closingMeeting",
          title: "Closing Meeting Date / Time"
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
      name: "section_a",
      title: "A. Policies — Strategic Commitments",
      elements: [
        {
          type: "matrixdynamic",
          name: "policiesMatrix",
          title: "A. Policies — Strategic Commitments",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
            { name: "auditItem", title: "Audit Item", cellType: "text", readOnly: true },
            { 
              name: "finding", 
              title: "Finding", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "C", text: "C - Compliant" },
                { value: "NC", text: "NC - Non-Conformant" },
                { value: "OFI", text: "OFI - Opportunity for Improvement" },
                { value: "N/A", text: "N/A - Not Applicable" }
              ]
            },
            { name: "evidence", title: "Evidence / Notes", cellType: "text" }
          ],
          rowCount: 5,
          minRowCount: 5,
          defaultValue: [
            { id: "A1", auditItem: "Are signed IMS, Quality, Environmental, and OH&S policies in place, current, and communicated?" },
            { id: "A2", auditItem: "Are policies available to relevant interested parties as appropriate?" },
            { id: "A3", auditItem: "Is the policy aligned with the context, risks, and strategic direction of the organisation?" },
            { id: "A4", auditItem: "(Additional item)" },
            { id: "A5", auditItem: "(Additional item)" }
          ]
        }
      ]
    },
    {
      name: "section_b",
      title: "B. Core Procedures — Company-Wide Controls",
      elements: [
        {
          type: "matrixdynamic",
          name: "coreProceduresMatrix",
          title: "B. Core Procedures — Company-Wide Controls",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
            { name: "auditItem", title: "Audit Item", cellType: "text", readOnly: true },
            { 
              name: "finding", 
              title: "Finding", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "C", text: "C - Compliant" },
                { value: "NC", text: "NC - Non-Conformant" },
                { value: "OFI", text: "OFI - Opportunity for Improvement" },
                { value: "N/A", text: "N/A - Not Applicable" }
              ]
            },
            { name: "evidence", title: "Evidence / Notes", cellType: "text" }
          ],
          rowCount: 5,
          minRowCount: 5,
          defaultValue: [
            { id: "B1", auditItem: "Document Control Procedure followed — current revisions in use across all sites?" },
            { id: "B2", auditItem: "Management Review Procedure conducted; actions tracked to closure?" },
            { id: "B3", auditItem: "Risk and Opportunity Management Procedure applied; register current?" },
            { id: "B4", auditItem: "Internal Audit Procedure followed; audit programme approved?" },
            { id: "B5", auditItem: "(Additional item)" }
          ]
        }
      ]
    },
    {
      name: "section_c",
      title: "C. SOPs and Work Instructions — Task-Level Execution",
      elements: [
        {
          type: "matrixdynamic",
          name: "sopsMatrix",
          title: "C. SOPs and Work Instructions — Task-Level Execution",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
            { name: "auditItem", title: "Audit Item", cellType: "text", readOnly: true },
            { 
              name: "finding", 
              title: "Finding", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "C", text: "C - Compliant" },
                { value: "NC", text: "NC - Non-Conformant" },
                { value: "OFI", text: "OFI - Opportunity for Improvement" },
                { value: "N/A", text: "N/A - Not Applicable" }
              ]
            },
            { name: "evidence", title: "Evidence / Notes", cellType: "text" }
          ],
          rowCount: 5,
          minRowCount: 5,
          defaultValue: [
            { id: "C1", auditItem: "Diamond Drilling Operation SOP followed on site?" },
            { id: "C2", auditItem: "LOTO / Hot Work / Confined Space SOPs used with valid permits?" },
            { id: "C3", auditItem: "Operators trained and competent on the SOPs they use?" },
            { id: "C4", auditItem: "Work instructions accessible at the point of use?" },
            { id: "C5", auditItem: "(Additional item)" }
          ]
        }
      ]
    },
    {
      name: "section_d",
      title: "D. Forms, Registers and Checklists — Evidence",
      elements: [
        {
          type: "matrixdynamic",
          name: "formsMatrix",
          title: "D. Forms, Registers and Checklists — Evidence",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
            { name: "auditItem", title: "Audit Item", cellType: "text", readOnly: true },
            { 
              name: "finding", 
              title: "Finding", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "C", text: "C - Compliant" },
                { value: "NC", text: "NC - Non-Conformant" },
                { value: "OFI", text: "OFI - Opportunity for Improvement" },
                { value: "N/A", text: "N/A - Not Applicable" }
              ]
            },
            { name: "evidence", title: "Evidence / Notes", cellType: "text" }
          ],
          rowCount: 5,
          minRowCount: 5,
          defaultValue: [
            { id: "D1", auditItem: "Training and Competence Matrix up-to-date and reviewed?" },
            { id: "D2", auditItem: "PPE Kit Issuance and Spot-Check records complete?" },
            { id: "D3", auditItem: "Pre-start and daily inspection records (vehicles, rigs) completed?" },
            { id: "D4", auditItem: "CAPA Register current, with status and due dates for each action?" },
            { id: "D5", auditItem: "(Additional item)" }
          ]
        }
      ]
    },
    {
      name: "section_e",
      title: "E. Performance and Records",
      elements: [
        {
          type: "matrixdynamic",
          name: "performanceMatrix",
          title: "E. Performance and Records",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
            { name: "auditItem", title: "Audit Item", cellType: "text", readOnly: true },
            { 
              name: "finding", 
              title: "Finding", 
              cellType: "dropdown", 
              isRequired: true,
              choices: [
                { value: "C", text: "C - Compliant" },
                { value: "NC", text: "NC - Non-Conformant" },
                { value: "OFI", text: "OFI - Opportunity for Improvement" },
                { value: "N/A", text: "N/A - Not Applicable" }
              ]
            },
            { name: "evidence", title: "Evidence / Notes", cellType: "text" }
          ],
          rowCount: 5,
          minRowCount: 5,
          defaultValue: [
            { id: "E1", auditItem: "KPI dashboard current, reviewed by Management, and trending?" },
            { id: "E2", auditItem: "Incident Flash Notifications raised, investigated, and closed-out?" },
            { id: "E3", auditItem: "Objectives and targets monitored and progress documented?" },
            { id: "E4", auditItem: "Records retention rules applied and evidenced?" },
            { id: "E5", auditItem: "(Additional item)" }
          ]
        }
      ]
    },
    {
      name: "non_conformities",
      title: "Non-Conformities Raised",
      elements: [
        {
          type: "matrixdynamic",
          name: "ncMatrix",
          title: "Non-Conformities Raised",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", width: "50px" },
            { name: "description", title: "NC Description", cellType: "text", isRequired: true },
            { name: "clauseRef", title: "Clause Reference", cellType: "text" },
            { 
              name: "classification", 
              title: "Classification", 
              cellType: "dropdown", 
              isRequired: true,
              choices: ["Major", "Minor"] 
            },
            { name: "targetDate", title: "Target Closure Date", cellType: "text", inputType: "date" }
          ],
          rowCount: 0,
          minRowCount: 0,
          addRowText: "+ Add NC"
        }
      ]
    },
    {
      name: "opportunities",
      title: "Opportunities for Improvement",
      elements: [
        {
          type: "matrixdynamic",
          name: "ofiMatrix",
          title: "Opportunities for Improvement",
          titleLocation: "hidden",
          columns: [
            { name: "id", title: "#", cellType: "text", width: "50px" },
            { name: "description", title: "OFI Description", cellType: "text", isRequired: true },
            { name: "owner", title: "Proposed Owner", cellType: "text" }
          ],
          rowCount: 0,
          minRowCount: 0,
          addRowText: "+ Add OFI"
        }
      ]
    },
    {
      name: "summary",
      title: "Overall Audit Summary",
      elements: [
        {
          type: "panel",
          name: "summaryPanel",
          elements: [
            { type: "text", name: "totalAudited", title: "Total items audited", inputType: "number" },
            { type: "text", name: "countCompliant", title: "Number of Compliant findings", inputType: "number" },
            { type: "text", name: "countNCMajor", title: "Number of Non-Conformities Major", inputType: "number" },
            { type: "text", name: "countNCMinor", title: "Number of Non-Conformities Minor", inputType: "number" },
            { type: "text", name: "countOFI", title: "Number of OFIs", inputType: "number" },
            { type: "text", name: "highRisks", title: "High / Critical risks identified" },
            { type: "comment", name: "auditNarrative", title: "Overall audit narrative", rows: 4 }
          ]
        }
      ]
    },
    {
      name: "submission",
      title: "Submitted By",
      elements: [
        {
          type: "text",
          name: "submittedBy",
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

export default function FRM_SYS_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SYS-001"
        title="Audit Checklist Template"
        revision="01"
        approvalDate="10 April 2026"
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
