import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Daily Vehicle Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "vehicleInformation",
          title: "1. Vehicle Information",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
            {
              type: "text",
              name: "vehicleId",
              title: "Vehicle ID / Registration No.",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "vehicleType",
              title: "Vehicle Type",
              isRequired: true,
              choices: ["4x4", "LDV", "Bus", "Truck", "Water Tanker", "Other"]
            },
            {
              type: "text",
              name: "odometerReading",
              title: "Odometer Reading",
              description: "km",
              inputType: "number",
              isRequired: true
            },
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              readOnly: true,
              description: "Auto-filled with today's date",
              inputType: "date"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Driver Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Driver Employee ID",
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
              ],
              readOnly: true,
              description: "Auto-filled from your login profile"
            }
          ]
        },
        {
          type: "panel",
          name: "exteriorSafety",
          title: "2. Exterior and Safety Equipment",
          elements: [
            {
              type: "matrixdynamic",
              name: "exteriorSafetyMatrix",
              title: "Rate each item: G = Good, F = Fair, P = Poor (OUT OF SERVICE), N/A = Not applicable",
              columns: [
                { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
                { name: "item", title: "Inspection Item", cellType: "text", readOnly: true },
                { 
                  name: "rating", 
                  title: "Rating", 
                  cellType: "dropdown", 
                  isRequired: true,
                  choices: [
                    { value: "G", text: "G - Good" },
                    { value: "F", text: "F - Fair" },
                    { value: "P", text: "P - Poor (Out of Service)" },
                    { value: "N/A", text: "N/A - Not Applicable" }
                  ]
                },
                { name: "remarks", title: "Remarks", cellType: "text" }
              ],
              rowCount: 7,
              minRowCount: 7,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { id: "1", item: "Tyres — tread depth, pressure, no cuts or bulges; spare present and inflated." },
                { id: "2", item: "Lights, indicators, brake lights, reversing lights, hazards, and horn — all functional." },
                { id: "3", item: "Mirrors and windows — clean, undamaged, and properly adjusted." },
                { id: "4", item: "Wipers and washer fluid — functional, blades in good condition." },
                { id: "5", item: "Body and exterior — no damage affecting safety; doors, bonnet, tailgate close properly." },
                { id: "6", item: "Buggy whip, reverse hooter, amber beacon — present and working (site requirement)." },
                { id: "7", item: "Emergency kit — first aid kit, fire extinguisher (in-date), triangle, wheel chocks, recovery strap." }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "underHoodFluids",
          title: "3. Under Hood and Fluids",
          elements: [
            {
              type: "matrixdynamic",
              name: "underHoodMatrix",
              title: "Inspection Items",
              columns: [
                { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
                { name: "item", title: "Inspection Item", cellType: "text", readOnly: true },
                { 
                  name: "rating", 
                  title: "Rating", 
                  cellType: "dropdown", 
                  isRequired: true,
                  choices: [
                    { value: "G", text: "G - Good" },
                    { value: "F", text: "F - Fair" },
                    { value: "P", text: "P - Poor (Out of Service)" },
                    { value: "N/A", text: "N/A - Not Applicable" }
                  ]
                },
                { name: "remarks", title: "Remarks", cellType: "text" }
              ],
              rowCount: 6,
              minRowCount: 6,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { id: "1", item: "Engine oil level and condition." },
                { id: "2", item: "Coolant level and radiator condition — no leaks." },
                { id: "3", item: "Brake fluid level." },
                { id: "4", item: "Power steering fluid level." },
                { id: "5", item: "Windscreen washer fluid level." },
                { id: "6", item: "No visible leaks — oil, fuel, coolant, hydraulic." }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "interiorControls",
          title: "4. Interior and Controls",
          elements: [
            {
              type: "matrixdynamic",
              name: "interiorControlsMatrix",
              title: "Inspection Items",
              columns: [
                { name: "id", title: "#", cellType: "text", readOnly: true, width: "50px" },
                { name: "item", title: "Inspection Item", cellType: "text", readOnly: true },
                { 
                  name: "rating", 
                  title: "Rating", 
                  cellType: "dropdown", 
                  isRequired: true,
                  choices: [
                    { value: "G", text: "G - Good" },
                    { value: "F", text: "F - Fair" },
                    { value: "P", text: "P - Poor (Out of Service)" },
                    { value: "N/A", text: "N/A - Not Applicable" }
                  ]
                },
                { name: "remarks", title: "Remarks", cellType: "text" }
              ],
              rowCount: 5,
              minRowCount: 5,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { id: "1", item: "Seat belts — all functional, no cuts or fraying; retract and latch properly." },
                { id: "2", item: "Brakes and handbrake — firm pedal, handbrake holds on incline." },
                { id: "3", item: "Steering and suspension — no excessive play or unusual noises." },
                { id: "4", item: "Gauges, warning lights, dashboard indicators — no active fault lights." },
                { id: "5", item: "Cab interior — no prohibited items (lighters, aerosols, loose heavy objects); cab clean." }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "overallCondition",
          title: "5. Overall Vehicle Condition",
          elements: [
            {
              type: "radiogroup",
              name: "vehicleSafe",
              title: "Is the vehicle safe and roadworthy for use today?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "defectDescription",
              title: "If NO — describe defects and immediate action taken",
              visibleIf: "{vehicleSafe} = 'No'",
              rows: 2
            },
            {
              type: "radiogroup",
              name: "vehicleStatus",
              title: "Vehicle Status",
              isRequired: true,
              choices: ["In Service", "Out of Service"]
            }
          ]
        },
        {
          type: "panel",
          name: "actionsTaken",
          title: "6. Actions Taken or Reported",
          elements: [
            {
              type: "matrixdynamic",
              name: "actionsMatrix",
              title: "Actions Log",
              columns: [
                { name: "id", title: "#", cellType: "text" },
                { name: "action", title: "Defect / Action Taken or Reported", cellType: "text", isRequired: true },
                { name: "reportedTo", title: "Reported To / Date", cellType: "text" }
              ],
              rowCount: 0,
              minRowCount: 0,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "driverDeclaration",
          title: "7. Driver Declaration",
          elements: [
            {
              type: "boolean",
              name: "declaration",
              title: "I declare that I have personally inspected this vehicle today before use, and that the information recorded above is true and correct to the best of my knowledge. I confirm that I hold a valid KSA driver's licence for this vehicle class, that I am fit to drive (not fatigued, not under the influence of alcohol, drugs, or prescription medication that affects driving), and that I will not operate this vehicle if any item is rated Poor or if any defect affecting safe operation has been identified.",
              isRequired: true,
              labelTrue: "I Agree",
              labelFalse: "I Disagree"
            },
            {
              type: "text",
              name: "driverName",
              title: "Driver Printed Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "dateTime",
              title: "Date / Time",
              readOnly: true,
              description: "Auto-filled with today's date and time"
            }
          ]
        },
        {
          type: "panel",
          name: "supervisorVerification",
          title: "8. Supervisor / HSE Verification",
          elements: [
            {
              type: "text",
              name: "reviewedBy",
              title: "Reviewed By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "reviewedByPosition",
              title: "Reviewed By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "radiogroup",
              name: "defectsRequiringMaintenance",
              title: "Any defects requiring maintenance?",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "workOrderRef",
              title: "Work Order Reference",
              visibleIf: "{defectsRequiringMaintenance} = 'Yes'"
            }
          ]
        },
        {
          type: "panel",
          name: "submittedBySection",
          title: "9. Submitted By",
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
              readOnly: true,
              description: "Auto-filled with today's date",
              inputType: "date"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_LOG_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-LOG-002"
        title="Daily Vehicle Checklist"
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
