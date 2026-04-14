import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Incident and Accident Investigation Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Incident Details",
          elements: [
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
            },
            {
              type: "text",
              name: "locationSite",
              title: "Location / Site",
              isRequired: true
            },
            {
              type: "text",
              name: "dateOfIncident",
              title: "Date of Incident",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "timeOfIncident",
              title: "Time of Incident",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "incidentReferenceNo",
              title: "Incident Reference No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Reported By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Reported By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "dateReported",
              title: "Date Reported",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Incident Classification",
          elements: [
            {
              type: "checkbox",
              name: "incidentClassification",
              title: "Incident Classification (Select all that apply)",
              isRequired: true,
              choices: [
                "Near Miss", "First Aid Case", "Medical Treatment", "Lost Time Injury", 
                "Fatality", "Property Damage", "Environmental Release", "Vehicle Incident", 
                "Fire / Explosion", "Security Incident"
              ]
            },
            {
              type: "dropdown",
              name: "severityRating",
              title: "Severity Rating",
              isRequired: true,
              choices: ["Low", "Medium", "High", "Critical"]
            },
            {
              type: "dropdown",
              name: "potentialSeverity",
              title: "Potential Severity",
              isRequired: true,
              choices: ["Low", "Medium", "High", "Critical"]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Immediate Actions Taken",
          elements: [
            {
              type: "comment",
              name: "immediateActions",
              title: "Actions taken",
              rows: 4,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Vehicles / Machinery / Equipment Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "equipmentInvolved",
              title: "Equipment Details",
              addRowText: "+ Add Equipment",
              rowCount: 0,
              minRowCount: 0,
              columns: [
                { name: "equipmentType", title: "Equipment Type", cellType: "text" },
                { name: "idRegistration", title: "ID / Registration", cellType: "text" },
                { name: "condition", title: "Condition", cellType: "text" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Description of Occurrence",
          elements: [
            {
              type: "comment",
              name: "briefDescription",
              title: "Brief Description",
              rows: 4,
              isRequired: true
            },
            {
              type: "comment",
              name: "sequenceOfEvents",
              title: "Sequence of Events",
              rows: 5,
              placeholder: "Describe events in chronological order"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Evidence Notes",
          elements: [
            {
              type: "comment",
              name: "evidenceNotes",
              title: "Evidence collected",
              rows: 3,
              placeholder: "List photos, documents, CCTV, witness statements collected"
            }
          ]
        },
        {
          type: "panel",
          name: "section7",
          title: "7. Persons Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "personsInvolved",
              title: "Person Details",
              addRowText: "+ Add Person",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                { name: "fullName", title: "Full Name", cellType: "text", isRequired: true },
                { name: "employeeNo", title: "Employee No.", cellType: "text" },
                { name: "designation", title: "Designation", cellType: "text", isRequired: true },
                { 
                  name: "role", 
                  title: "Role", 
                  cellType: "dropdown",
                  choices: ["Witness", "Injured Person", "Other"]
                },
                { name: "contact", title: "Contact", cellType: "text" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section8",
          title: "8. Injury / Illness Details",
          elements: [
            { type: "text", name: "injuredPersonName", title: "Injured Person Name" },
            { type: "text", name: "bodyPartAffected", title: "Body Part Affected" },
            { type: "text", name: "natureOfInjury", title: "Nature of Injury" },
            { type: "text", name: "treatmentProvided", title: "Treatment Provided" },
            { 
              type: "radiogroup", 
              name: "referredToHospital", 
              title: "Referred to Hospital",
              choices: ["Yes", "No", "N/A"]
            },
            { 
              type: "text", 
              name: "daysLost", 
              title: "Days Lost if LTI", 
              inputType: "number", 
              min: 0 
            }
          ]
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Barrier Analysis",
          elements: [
            { type: "text", name: "hazardIdentified", title: "Step 1: Energy / Hazard Identified", isRequired: true },
            { type: "comment", name: "requiredBarriers", title: "Step 2: Required Barriers — what should have been in place", rows: 3 },
            { type: "comment", name: "existingBarriers", title: "Step 3: Existing Barriers — what was actually in place", rows: 3 },
            { type: "comment", name: "gapAnalysis", title: "Step 4: Gap Analysis — gaps between required and existing barriers", rows: 3 }
          ]
        },
        {
          type: "panel",
          name: "section10",
          title: "10. Contributing Factors",
          elements: [
            {
              type: "checkbox",
              name: "unsafeActs",
              title: "Group A — Unsafe Acts",
              choices: [
                "Operating without authority", "Failure to secure", "Operating at unsafe speed", 
                "Using defective equipment", "Unsafe use of equipment", "Improper positioning", 
                "Unsafe loading or placement", "Horseplay", "Intoxicated", "Failure to lock-out/tag-out", 
                "Failure to use PPE", "Incorrect use of tools", "No adherence to procedures", 
                "Taking shortcuts", "Improper lifting", "Other"
              ]
            },
            {
              type: "checkbox",
              name: "unsafeConditions",
              title: "Group B — Unsafe Conditions",
              choices: [
                "Inadequate guards/barriers", "Poor visibility", "Defective tools/equipment", 
                "Inadequate ventilation", "Inadequate illumination", "Inadequate PPE available", 
                "Poor housekeeping", "Tripping/slipping hazards", "Fire/explosion hazards", 
                "Confined space", "Hazardous atmosphere (gas, dust, fumes)", "Excessive noise", 
                "Excessive vibration", "Inadequate warning systems", "Oil/fuel spillage", "Other"
              ]
            },
            {
              type: "checkbox",
              name: "personalFactors",
              title: "Group C — Personal Factors",
              choices: [
                "Lack of knowledge/skill", "Improper attitude", "Physical deficiency", 
                "Mental deficiency", "Taking shortcuts", "Alcohol or drug abuse", 
                "Failure to comply with instructions", "Other"
              ]
            },
            {
              type: "checkbox",
              name: "jobFactors",
              title: "Group D — Job Factors",
              choices: [
                "Inadequate standards", "Inadequate enforcement of standards", 
                "Inadequate task observations", "Inadequate safety meetings", 
                "Inadequate maintenance/design", "Inadequate purchasing standards", 
                "Normal wear and tear", "Inadequate supervision", "Improper environment", 
                "Inadequate EMS", "Poor risk assessment", "Other"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section11",
          title: "11. Root Cause Statement",
          elements: [
            { type: "text", name: "directCause", title: "Direct Cause", isRequired: true },
            { type: "comment", name: "rootCause", title: "Root Cause", rows: 3, isRequired: true }
          ]
        },
        {
          type: "panel",
          name: "section12",
          title: "12. Corrective and Preventive Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "Action Details",
              addRowText: "+ Add Action",
              rowCount: 4,
              minRowCount: 1,
              columns: [
                { name: "no", title: "No.", cellType: "text" },
                { name: "actionRequired", title: "Action Required", cellType: "text", isRequired: true },
                { name: "responsiblePerson", title: "Responsible Person", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" },
                { 
                  name: "controlType", 
                  title: "Control Type", 
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Elimination", "Substitution", "Engineering Control", "Administrative Control", "PPE"]
                },
                { 
                  name: "status", 
                  title: "Status", 
                  cellType: "dropdown",
                  defaultValue: "Open",
                  choices: ["Open", "In Progress", "Closed", "Overdue"]
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section13",
          title: "13. Regulatory Notification (KSA)",
          elements: [
            {
              type: "checkbox",
              name: "regulatoryNotification",
              title: "Regulatory Notification",
              choices: ["Not Required", "GOSI Notified", "Civil Defence Notified", "MHRSD Notified", "Client Notified"]
            },
            { type: "text", name: "notificationRefNo", title: "Notification Reference No." },
            { type: "text", name: "dateNotified", title: "Date Notified", inputType: "date" }
          ]
        },
        {
          type: "panel",
          name: "section14",
          title: "14. Required Documents Checklist",
          elements: [
            {
              type: "checkbox",
              name: "documentsChecklist",
              title: "Documents Checklist",
              choices: [
                "Witness Statements", "Medical Report", "Photos / Video", 
                "Equipment Inspection Report", "Risk Assessment / JSA", "Training Records", 
                "Maintenance Records", "CCTV Footage", "Weather Report", "Permits to Work"
              ]
            },
            { type: "text", name: "otherDocuments", title: "Other Documents" }
          ]
        },
        {
          type: "panel",
          name: "section15",
          title: "15. HOD / Management Follow-Up",
          elements: [
            { type: "text", name: "hodName", title: "HOD Name" },
            { 
              type: "radiogroup", 
              name: "investigationClosed", 
              title: "Investigation Closed",
              choices: ["Yes", "No"]
            },
            { type: "text", name: "dateClosed", title: "Date Closed", inputType: "date" },
            { type: "comment", name: "hodComments", title: "HOD Comments", rows: 3 }
          ]
        },
        {
          type: "panel",
          name: "section16",
          title: "16. Submitted By",
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
  showPrevButton: false,
};

export default function FRM_HSE_022() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-022"
        title="Incident and Accident Investigation Report"
        revision="01"
        approvalDate="April 2026"
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
