import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Visitor Access and Induction Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
        {
          type: "panel",
          name: "visitorDetails",
          title: "1. Visitor Details",
          elements: [
            {
              type: "text",
              name: "visitorName",
              title: "Visitor Name",
              isRequired: true
            },
            {
              type: "text",
              name: "company",
              title: "Company",
              isRequired: true
            },
            {
              type: "text",
              name: "designation",
              title: "Designation / Job Title",
              isRequired: true
            },
            {
              type: "text",
              name: "idIqamaNo",
              title: "ID / Iqama No.",
              isRequired: true
            },
            {
              type: "text",
              name: "mobileNo",
              title: "Mobile No.",
              isRequired: true
            },
            {
              type: "text",
              name: "dateOfVisit",
              title: "Date of Visit",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "personVisited",
              title: "Person Being Visited",
              isRequired: true
            },
            {
              type: "text",
              name: "purposeOfVisit",
              title: "Purpose of Visit",
              isRequired: true
            },
            {
              type: "text",
              name: "vehicleRegistration",
              title: "Vehicle Registration",
              placeholder: "If applicable"
            },
            {
              type: "text",
              name: "expectedDuration",
              title: "Expected Duration",
              isRequired: true,
              placeholder: "e.g., 2 hours, full day"
            },
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true
            }
          ]
        },
        {
          type: "matrixdynamic",
          name: "inductionTopics",
          title: "2. Induction Topics Covered",
          description: "Confirm each topic was covered during induction",
          columns: [
            {
              name: "no",
              title: "No.",
              cellType: "text",
              readOnly: true
            },
            {
              name: "topic",
              title: "Topic",
              cellType: "text",
              readOnly: true
            },
            {
              name: "covered",
              title: "Covered",
              cellType: "radiogroup",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              name: "initials",
              title: "Initials",
              cellType: "text"
            }
          ],
          rowCount: 12,
          minRowCount: 12,
          allowAddRows: false,
          allowRemoveRows: false,
          defaultValue: [
            { no: "1", topic: "Action in the event of fire / emergency" },
            { no: "2", topic: "Action in the event of injury or accident" },
            { no: "3", topic: "Responsible person & reporting structure" },
            { no: "4", topic: "Emergency assembly points and evacuation routes" },
            { no: "5", topic: "Signs, notices, and safety warnings" },
            { no: "6", topic: "PPE requirements – responsibility and wearing" },
            { no: "7", topic: "Exclusion zones and restricted areas" },
            { no: "8", topic: "Heat stress awareness and hydration" },
            { no: "9", topic: "Environmental responsibilities (waste, spills)" },
            { no: "10", topic: "Speed limits and vehicle movement rules" },
            { no: "11", topic: "Prohibition of photography without permission" },
            { no: "12", topic: "Prohibition of alcohol, drugs, and weapons on site" }
          ]
        },
        {
          type: "panel",
          name: "ppeIssued",
          title: "3. PPE Issued to Visitor",
          elements: [
            { type: "boolean", name: "hardHat", title: "Hard Hat" },
            { type: "boolean", name: "safetyGlasses", title: "Safety Glasses" },
            { type: "boolean", name: "hiVisVest", title: "Hi-Vis Vest" },
            { type: "boolean", name: "safetyBoots", title: "Safety Boots" },
            { type: "boolean", name: "hearingProtection", title: "Hearing Protection" },
            {
              type: "text",
              name: "otherPpe",
              title: "Other PPE",
              placeholder: "Specify other PPE issued"
            }
          ]
        },
        {
          type: "panel",
          name: "visitorDeclaration",
          title: "4. Visitor Declaration",
          elements: [
            {
              type: "boolean",
              name: "declaration",
              title: "The above subjects were individually discussed with me during my induction session. I hereby undertake to always conform to all safety regulations and site rules while on site. I understand that failure to comply may result in removal from the premises.",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "submittedBy",
          title: "5. Submitted By (Induction Presenter)",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Induction Presenter Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Induction Presenter Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Induction Presenter Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_SEC_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SEC-001"
        title="Visitor Access and Induction Form"
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
