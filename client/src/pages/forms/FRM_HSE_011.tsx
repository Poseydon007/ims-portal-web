import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Permit to Work (PTW)",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Permit Identity",
          elements: [
            {
              type: "text",
              name: "ptwNo",
              title: "PTW No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "dateIssued",
              title: "Date Issued",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "validFrom",
              title: "Valid From",
              inputType: "datetime-local",
              isRequired: true
            },
            {
              type: "text",
              name: "validUntil",
              title: "Valid Until",
              inputType: "datetime-local",
              isRequired: true
            },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "specificAreaRig",
              title: "Specific Area / Rig",
              isRequired: true
            },
            {
              type: "text",
              name: "requestedByFullName",
              title: "Requested By Full Name",
              isRequired: true,
              description: "The person requesting the permit (may differ from submitter)"
            },
            {
              type: "text",
              name: "requestedByEmployeeId",
              title: "Requested By Employee ID"
            },
            {
              type: "text",
              name: "company",
              title: "Company",
              isRequired: true
            },
            {
              type: "text",
              name: "contactNumber",
              title: "Contact Number",
              isRequired: true
            },
            {
              type: "comment",
              name: "descriptionOfWork",
              title: "Description of Work",
              rows: 3,
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Submitted By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Submitted By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
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
          type: "panel",
          name: "section2",
          title: "2. Permit Type",
          elements: [
            {
              type: "checkbox",
              name: "permitType",
              title: "Select all applicable permit types",
              isRequired: true,
              choices: [
                "Hot Work", "Cold Work", "Confined Space Entry", "Work at Height", 
                "Electrical", "Excavation", "Lifting / Crane", "Radiography", 
                "Pressurised Systems", "Breaking Containment", "Other"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Associated Documents",
          elements: [
            {
              type: "matrixdynamic",
              name: "associatedDocuments",
              title: "Associated Documents",
              columns: [
                {
                  name: "documentType",
                  title: "Document Type",
                  cellType: "dropdown",
                  choices: ["JHA", "SWMS/SOP", "Risk Assessment", "Confined Space Permit", "Isolation Certificate", "Excavation Permit", "Other"]
                },
                {
                  name: "referenceDetails",
                  title: "Reference / Details",
                  cellType: "text"
                }
              ],
              minRowCount: 1,
              rowCount: 3,
              addRowText: "+ Add Document"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Hazard Identification",
          elements: [
            {
              type: "matrixdynamic",
              name: "hazardIdentification",
              title: "Hazard Identification",
              columns: [
                { name: "hazard", title: "Hazard", cellType: "text", readOnly: true },
                { name: "present", title: "Present Y/N", cellType: "radiogroup", choices: ["Y", "N"] },
                { name: "controlMeasure", title: "Control Measure", cellType: "text" },
                { name: "verified", title: "Verified Y/N", cellType: "radiogroup", choices: ["Y", "N"] }
              ],
              rowCount: 10,
              minRowCount: 10,
              defaultValue: [
                { hazard: "Flammable materials present" },
                { hazard: "Toxic substances" },
                { hazard: "Non-inert atmosphere / Low oxygen" },
                { hazard: "Electrical hazards" },
                { hazard: "Pressure / Stored energy" },
                { hazard: "Work at height" },
                { hazard: "Confined space conditions" },
                { hazard: "Excavation activity" },
                { hazard: "SIMOPS (Simultaneous Operations) risk" },
                { hazard: "Environmental impact risk" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Gas Testing",
          description: "Complete only if applicable to permit type",
          elements: [
            {
              type: "matrixdynamic",
              name: "gasTesting",
              title: "Gas Testing",
              columns: [
                { name: "test", title: "Test", cellType: "text", readOnly: true },
                { name: "acceptableRange", title: "Acceptable Range", cellType: "text", readOnly: true },
                { name: "time", title: "Time", cellType: "text", inputType: "time" },
                { name: "test1", title: "Test 1", cellType: "text" },
                { name: "test2", title: "Test 2", cellType: "text" },
                { name: "test3", title: "Test 3", cellType: "text" },
                { name: "instrumentId", title: "Instrument ID", cellType: "text" },
                { name: "testedByCertNo", title: "Tested By / Cert No.", cellType: "text" }
              ],
              rowCount: 5,
              minRowCount: 5,
              defaultValue: [
                { test: "O₂", acceptableRange: "19.5–23.5%" },
                { test: "LEL", acceptableRange: "<10%" },
                { test: "H₂S", acceptableRange: "<5 ppm" },
                { test: "CO", acceptableRange: "<25 ppm" },
                { test: "Other", acceptableRange: "" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Energy Isolation / LOTO",
          elements: [
            {
              type: "matrixdynamic",
              name: "energyIsolation",
              title: "Energy Isolation / LOTO",
              columns: [
                { name: "id", title: "#", cellType: "text" },
                { name: "equipmentIsolated", title: "Equipment Isolated", cellType: "text" },
                { name: "isolationPoint", title: "Isolation Point", cellType: "text" },
                {
                  name: "method",
                  title: "Method",
                  cellType: "dropdown",
                  choices: ["Lockout", "Tagout", "Blanking", "Valve", "Other"]
                },
                { name: "lockNo", title: "Lock No.", cellType: "text" },
                { name: "verifiedBy", title: "Verified By", cellType: "text" },
                { name: "time", title: "Time", cellType: "text", inputType: "time" }
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add Isolation"
            }
          ]
        },
        {
          type: "panel",
          name: "section7",
          title: "7. Safety Precautions Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "safetyPrecautions",
              title: "Safety Precautions Checklist",
              columns: [
                { name: "precaution", title: "Precaution", cellType: "text", readOnly: true },
                { name: "status", title: "Y/N/NA", cellType: "dropdown", choices: ["Y", "N", "NA"] },
                { name: "notes", title: "Notes", cellType: "text" }
              ],
              rowCount: 12,
              minRowCount: 12,
              defaultValue: [
                { precaution: "Area barricaded / isolated" },
                { precaution: "Fire extinguisher(s) positioned" },
                { precaution: "Fire watch assigned" },
                { precaution: "Ventilation in place" },
                { precaution: "Personnel briefed" },
                { precaution: "Communication system tested" },
                { precaution: "PPE confirmed available" },
                { precaution: "Spill kit available" },
                { precaution: "Standby person assigned" },
                { precaution: "Fall protection verified" },
                { precaution: "Ground conditions safe" },
                { precaution: "Lifting plan approved" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section8",
          title: "8. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByFullName",
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
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Permit Extension",
          elements: [
            {
              type: "radiogroup",
              name: "extensionRequired",
              title: "Extension Required?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "extendedUntil",
              title: "Extended Until",
              inputType: "datetime-local",
              visibleIf: "{extensionRequired} = 'Yes'"
            },
            {
              type: "comment",
              name: "reasonForExtension",
              title: "Reason for Extension",
              rows: 2,
              visibleIf: "{extensionRequired} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "gasRetestDone",
              title: "Gas Retest Done",
              visibleIf: "{extensionRequired} = 'Yes'",
              choices: ["Yes", "N/A"]
            }
          ]
        },
        {
          type: "panel",
          name: "section10",
          title: "10. Permit Closure",
          elements: [
            {
              type: "radiogroup",
              name: "workCompleted",
              title: "Work completed?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "radiogroup",
              name: "areaCleaned",
              title: "Area cleaned?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "isolationsRemoved",
              title: "Isolations removed?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "locksRemoved",
              title: "Locks removed?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "fireWatchMaintained",
              title: "Fire watch maintained?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "equipmentReturned",
              title: "Equipment returned?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "comment",
              name: "closureRemarks",
              title: "Closure Remarks",
              rows: 2
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_HSE_011() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-011"
        title="Permit to Work (PTW)"
        revision="01"
        approvalDate="09 April 2026"
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
