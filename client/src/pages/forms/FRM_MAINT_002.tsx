import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fuel Refueling Log",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "refuelingEvent",
          title: "1. Refuelling Event",
          elements: [
            {
              type: "text",
              name: "refuelingEventCode",
              title: "Refuelling Event Code",
              description: "Auto-assigned on submission, format: [Site]-YYMMDD-HHMM",
              readOnly: true
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Date",
              description: "Auto-filled with today's date",
              inputType: "date",
              readOnly: true
            },
            {
              type: "text",
              name: "timeStarted",
              title: "Time Started",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "timeCompleted",
              title: "Time Completed",
              inputType: "time"
            },
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
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
          type: "panel",
          name: "equipmentDetails",
          title: "2. Equipment / Asset Being Refuelled",
          elements: [
            {
              type: "dropdown",
              name: "equipmentType",
              title: "Equipment Type",
              isRequired: true,
              choices: ["Drill Rig", "Generator", "Pickup", "Water Tanker", "Compressor", "Other"]
            },
            {
              type: "text",
              name: "equipmentId",
              title: "Equipment ID / Name",
              isRequired: true
            },
            {
              type: "text",
              name: "locationOnSite",
              title: "Location on Site",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "fuelDetails",
          title: "3. Fuel Details",
          elements: [
            {
              type: "radiogroup",
              name: "fuelType",
              title: "Fuel Type",
              isRequired: true,
              choices: ["Diesel", "Gasoline", "Other"]
            },
            {
              type: "text",
              name: "otherFuelType",
              title: "Other Fuel Type",
              visibleIf: "{fuelType} = 'Other'",
              isRequired: true
            },
            {
              type: "text",
              name: "quantityDispensed",
              title: "Quantity Dispensed",
              description: "litres",
              inputType: "number",
              isRequired: true
            },
            {
              type: "text",
              name: "previousMeterReading",
              title: "Previous Meter Reading",
              placeholder: "Engine hours or odometer km",
              isRequired: true
            },
            {
              type: "text",
              name: "currentMeterReading",
              title: "Current Meter Reading",
              placeholder: "Engine hours or odometer km",
              isRequired: true
            },
            {
              type: "text",
              name: "calculatedConsumption",
              title: "Calculated Consumption",
              placeholder: "Litres per hour or per km"
            },
            {
              type: "comment",
              name: "notes",
              title: "Notes",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "operatorDetails",
          title: "4. Operator / Technician",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Operator Full Name",
              description: "Auto-filled from your login profile",
              readOnly: true
            },
            {
              type: "text",
              name: "employeeId",
              title: "Operator Employee ID",
              description: "Auto-filled from your login profile",
              readOnly: true
            },
            {
              type: "text",
              name: "position",
              title: "Operator Position",
              description: "Auto-filled from your login profile",
              readOnly: true
            }
          ]
        },
        {
          type: "panel",
          name: "fuelSource",
          title: "5. Fuel Source / Bowser",
          elements: [
            {
              type: "text",
              name: "bowserId",
              title: "Bowser / Fuel Truck ID",
              isRequired: true
            },
            {
              type: "text",
              name: "supplierDriverName",
              title: "Supplier / Driver Name",
              placeholder: "If external supplier"
            },
            {
              type: "text",
              name: "deliveryNoteRef",
              title: "Fuel Batch / Delivery Note Reference"
            }
          ]
        },
        {
          type: "panel",
          name: "spillCheck",
          title: "6. Spill and Environmental Check",
          elements: [
            {
              type: "radiogroup",
              name: "spillOccurred",
              title: "Spill or leak occurred during refuelling",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "spillVolume",
              title: "Estimated spill volume",
              description: "litres",
              inputType: "number",
              visibleIf: "{spillOccurred} = 'Yes'",
              isRequired: true
            },
            {
              type: "comment",
              name: "actionTaken",
              title: "Action taken",
              placeholder: "Stop, contain, clean, soil removal",
              rows: 2,
              visibleIf: "{spillOccurred} = 'Yes'",
              isRequired: true
            },
            {
              type: "text",
              name: "containmentUsed",
              title: "Containment used",
              placeholder: "Absorbents, drip tray, bund, spill kit",
              visibleIf: "{spillOccurred} = 'Yes'",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "wasteProcedureFollowed",
              title: "Contaminated soil / absorbent disposed per NCEC waste procedure",
              visibleIf: "{spillOccurred} = 'Yes'",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "reportedToHse",
              title: "Reported to HSE Officer",
              visibleIf: "{spillOccurred} = 'Yes'",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "hseReference",
              title: "HSE Reference / Flash Notification No.",
              visibleIf: "{spillOccurred} = 'Yes'"
            }
          ]
        },
        {
          type: "panel",
          name: "supervisorFollowUp",
          title: "7. HSE / Supervisor Follow-Up",
          elements: [
            {
              type: "radiogroup",
              name: "followUpRequired",
              title: "Any follow-up actions required",
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "followUpDescription",
              title: "Follow-up description",
              rows: 2,
              visibleIf: "{followUpRequired} = 'Yes'"
            }
          ]
        },
        {
          type: "panel",
          name: "submissionDetails",
          title: "8. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByFullName",
              title: "Submitted By Full Name",
              description: "Auto-filled from your login profile",
              readOnly: true
            },
            {
              type: "text",
              name: "finalSubmissionDate",
              title: "Submission Date",
              description: "Auto-filled with today's date",
              inputType: "date",
              readOnly: true
            },
            {
              type: "html",
              name: "workflowNote",
              html: "<p style='font-style: italic; color: #666;'>Note: Supervisor and HSE Officer approvals handled by digital workflow</p>"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_MAINT_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-MAINT-002"
        title="Fuel Refueling Log"
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
