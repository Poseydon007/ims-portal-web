import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "PPE Issue and Inspection Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Issuance Details",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Employee Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
                "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
                "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
                "Management", "Quality Assurance", "Environmental", "Training & Competency", 
                "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            },
            {
              type: "text",
              name: "location",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "dateOfIssue",
              title: "Date of Issue",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "issuedBy",
              title: "Issued By",
              isRequired: true,
              description: "Name of the person issuing the PPE"
            },
            {
              type: "text",
              name: "issuerPosition",
              title: "Issuer Position"
            },
            {
              type: "dropdown",
              name: "issuanceType",
              title: "Issuance Type",
              isRequired: true,
              choices: [
                "New Employee Kit", 
                "Replacement — Damaged", 
                "Replacement — Lost", 
                "Replacement — Expired", 
                "Role Change", 
                "Other"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. PPE Items Issued",
          elements: [
            {
              type: "matrixdynamic",
              name: "ppeItems",
              title: "PPE Items — record each item issued and its condition",
              addRowText: "+ Add Item",
              minRowCount: 1,
              keyName: "id",
              columns: [
                { name: "id", title: "#", cellType: "text", width: "50px" },
                { name: "category", title: "Category", cellType: "text" },
                { name: "description", title: "Item Description", cellType: "text", isRequired: true },
                { name: "standard", title: "Standard / Spec", cellType: "text" },
                { name: "sizeType", title: "Size / Type", cellType: "text" },
                { name: "qty", title: "Qty", cellType: "text", inputType: "number", isRequired: true },
                { 
                  name: "condition", 
                  title: "Condition", 
                  cellType: "dropdown", 
                  isRequired: true,
                  choices: ["New", "Good", "Fair"]
                },
                { name: "serialBatch", title: "Serial / Batch No.", cellType: "text" },
                { name: "expiryDate", title: "Expiry Date", cellType: "text", inputType: "date" }
              ],
              defaultValue: [
                { id: "1", category: "Head Protection", description: "Safety Helmet (Class E)", standard: "EN 397", qty: 1 },
                { id: "2", category: "Eye & Face", description: "Safety Glasses (clear)", standard: "EN 166", qty: 1 },
                { id: "3", category: "Eye & Face", description: "Safety Glasses (tinted/UV)", standard: "EN 166", qty: 1 },
                { id: "4", category: "Eye & Face", description: "Chemical splash goggles", standard: "EN 166", qty: 1 },
                { id: "5", category: "Hearing", description: "Ear plugs (disposable, box)", standard: "EN 352-2", qty: 1 },
                { id: "6", category: "Hearing", description: "Ear muffs", standard: "EN 352-1", qty: 1 },
                { id: "7", category: "Respiratory", description: "Dust mask (P2/N95)", standard: "EN 149", qty: 5 },
                { id: "8", category: "Respiratory", description: "Half-face respirator + cartridges", standard: "EN 140", qty: 1 },
                { id: "9", category: "Hand Protection", description: "Nitrile gloves (box)", standard: "EN 374", qty: 1 },
                { id: "10", category: "Hand Protection", description: "Leather work gloves", standard: "EN 388", qty: 2 },
                { id: "11", category: "Foot Protection", description: "Safety boots (steel toe, anti-slip)", standard: "EN ISO 20345", qty: 1 },
                { id: "12", category: "Body Protection", description: "Hi-vis vest (Class 2)", standard: "EN 471", qty: 2 },
                { id: "13", category: "Body Protection", description: "Coveralls (cotton, flame-resistant)", standard: "EN ISO 11612", qty: 2 },
                { id: "14", category: "Fall Protection", description: "Full-body harness", standard: "EN 361", qty: 1 },
                { id: "15", category: "Fall Protection", description: "Lanyard with shock absorber", standard: "EN 354", qty: 1 },
                { id: "16", category: "Fall Protection", description: "Helmet with chin strap", standard: "EN 397", qty: 1 },
                { id: "17", category: "Sun / Heat", description: "Sun hat / wide-brim", standard: "—", qty: 1 },
                { id: "18", category: "Sun / Heat", description: "Sunscreen SPF 50+ (tube)", standard: "—", qty: 2 },
                { id: "19", category: "Sun / Heat", description: "Cooling towel", standard: "—", qty: 1 },
                { id: "20", category: "Sun / Heat", description: "Insulated water bottle (1 L)", standard: "—", qty: 1 }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Employee Acknowledgement",
          elements: [
            {
              type: "boolean",
              name: "acknowledgement",
              title: "I confirm I have received the PPE items listed above. I understand I am responsible for their correct use, care, and daily inspection. I will report any damage, loss, or defect immediately to my supervisor.",
              label: "I acknowledge receipt and responsibility for the PPE items listed",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Submitted By",
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
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_HSE_012() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-012"
        title="PPE Issue and Inspection Checklist"
        revision="01"
        approvalDate="10 April 2026"
        minRole="field_worker"
        wideTable={true}
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
