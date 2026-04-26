import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Journey Management Plan Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "journeyReference",
          title: "1. Journey Reference",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Journey ID / Reference",
              readOnly: true,
              description: "Auto-assigned on submission, format: JMP-YYYYMMDD-XXX"
            },
            {
              type: "text",
              name: "dateOfJourney",
              title: "Date of Journey",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "departureTime",
              title: "Departure Time",
              inputType: "time",
              isRequired: true,
              placeholder: "Planned departure time"
            },
            {
              type: "text",
              name: "estimatedArrivalTime",
              title: "Estimated Arrival Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "journeyNotes",
              title: "Notes"
            }
          ]
        },
        {
          type: "panel",
          name: "driverVehicle",
          title: "2. Driver and Vehicle",
          elements: [
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
              type: "text",
              name: "position",
              title: "Driver Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "driverLicenseNumber",
              title: "Driver License Number",
              isRequired: true
            },
            {
              type: "text",
              name: "licenseExpiryDate",
              title: "License Expiry Date",
              inputType: "date",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "vehicleType",
              title: "Vehicle Type",
              isRequired: true,
              choices: ["4x4 Pickup", "LDV", "Bus", "Truck", "Water Tanker", "Other"]
            },
            {
              type: "text",
              name: "vehicleRegistration",
              title: "Vehicle ID / Registration",
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
          name: "journeyDetails",
          title: "3. Journey Details",
          elements: [
            {
              type: "text",
              name: "purposeOfJourney",
              title: "Purpose of Journey",
              isRequired: true,
              placeholder: "e.g., Site PR001 access, equipment delivery"
            },
            {
              type: "text",
              name: "startingLocation",
              title: "Starting Location",
              isRequired: true
            },
            {
              type: "text",
              name: "destinationSite",
              title: "Destination / Site",
              isRequired: true
            },
            {
              type: "comment",
              name: "routeDescription",
              title: "Route Description",
              rows: 3,
              isRequired: true,
              placeholder: "Main roads, waypoints, off-road sections"
            },
            {
              type: "text",
              name: "totalDistance",
              title: "Total Distance",
              inputType: "number",
              isRequired: true,
              description: "km"
            },
            {
              type: "text",
              name: "estimatedDuration",
              title: "Estimated Duration",
              inputType: "number",
              isRequired: true,
              description: "hours"
            }
          ]
        },
        {
          type: "panel",
          name: "riskAssessment",
          title: "4. Risk Assessment",
          description: "Identify applicable risks and describe controls",
          elements: [
            {
              type: "radiogroup",
              name: "longDistance",
              title: "Long distance (>100 km)",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "longDistanceControls",
              title: "Long distance controls",
              visibleIf: "{longDistance} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "offRoad",
              title: "Off-road / Desert travel",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "offRoadControls",
              title: "Off-road controls",
              visibleIf: "{offRoad} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "nightTravel",
              title: "Night travel",
              description: "Sunset to sunrise — approval required",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "nightTravelControls",
              title: "Night travel controls",
              visibleIf: "{nightTravel} = 'Yes'"
            },
            {
              type: "comment",
              name: "nightTravelJustification",
              title: "Night travel justification",
              rows: 2,
              visibleIf: "{nightTravel} = 'Yes'",
              placeholder: "Attach justification for night travel approval"
            },
            {
              type: "radiogroup",
              name: "adverseWeather",
              title: "Adverse weather forecast",
              description: "Sandstorm, rain, extreme heat",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "weatherControls",
              title: "Weather controls",
              visibleIf: "{adverseWeather} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "driverFatigue",
              title: "Driver fatigue risk",
              description: "Long shift, insufficient rest",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "fatigueControls",
              title: "Fatigue controls",
              visibleIf: "{driverFatigue} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "heavyLoad",
              title: "Heavy load / equipment transport",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "heavyLoadControls",
              title: "Heavy load controls",
              visibleIf: "{heavyLoad} = 'Yes'"
            },
            {
              type: "text",
              name: "otherRisks",
              title: "Other risks"
            },
            {
              type: "text",
              name: "otherRiskControls",
              title: "Other risk controls"
            }
          ]
        },
        {
          type: "panel",
          name: "preDepartureChecks",
          title: "5. Pre-Departure Checks",
          description: "All items must be confirmed before departure",
          elements: [
            {
              type: "radiogroup",
              name: "vehicleInspectionCompleted",
              title: "Vehicle pre-start inspection completed",
              description: "Attach Daily Vehicle Checklist if required",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "driverRested",
              title: "Driver rested",
              description: "Min 10 hours since last shift",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "fuelSufficient",
              title: "Fuel sufficient for round trip + reserve",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "emergencyKitOnBoard",
              title: "Emergency kit on board",
              description: "Water, recovery gear, first aid, fire extinguisher",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "communicationEquipmentFunctional",
              title: "Communication equipment functional",
              description: "GPS tracker, satellite phone/radio, mobile",
              choices: ["Yes", "No"],
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "emergencyInformation",
          title: "6. Emergency Information",
          elements: [
            {
              type: "text",
              name: "nearestMedicalFacility",
              title: "Nearest medical facility",
              isRequired: true
            },
            {
              type: "text",
              name: "distanceToFacility",
              title: "Distance to facility",
              inputType: "number",
              description: "km"
            },
            {
              type: "text",
              name: "timeToFacility",
              title: "Time to facility",
              inputType: "number",
              description: "minutes"
            },
            {
              type: "text",
              name: "clinicAlongRoute",
              title: "Clinic along route"
            },
            {
              type: "text",
              name: "emergencyContacts",
              title: "Emergency contacts",
              defaultValue: "Unified Emergency: 911 | HSE Manager: +966535656688 | Supervisor: +966111656688"
            },
            {
              type: "text",
              name: "checkInProtocol",
              title: "Check-in protocol",
              isRequired: true,
              placeholder: "e.g., Report every 2 hours or at each waypoint"
            },
            {
              type: "radiogroup",
              name: "triggerEmergencyResponse",
              title: "Trigger Emergency Response if no check-in within 30 min",
              choices: ["Yes", "No"],
              defaultValue: "Yes"
            }
          ]
        },
        {
          type: "panel",
          name: "postJourneyCompletion",
          title: "7. Post-Journey Completion",
          elements: [
            {
              type: "text",
              name: "actualArrivalTime",
              title: "Actual Arrival Time",
              inputType: "time"
            },
            {
              type: "radiogroup",
              name: "deviationsOrIncidents",
              title: "Any deviations or incidents",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "flashNotificationReference",
              title: "Flash Notification Reference",
              visibleIf: "{deviationsOrIncidents} = 'Yes'",
              placeholder: "FRM-HSE-002 reference number"
            }
          ]
        },
        {
          type: "panel",
          name: "submittedBy",
          title: "8. Submitted By",
          elements: [
            {
              type: "text",
              name: "submitterName",
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
            },
            {
              type: "html",
              name: "approvalNote",
              html: "<p style='font-style: italic; color: #666;'>Note: Supervisor/Journey Coordinator approval and HSE review handled by digital workflow</p>"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_LOG_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-LOG-001"
        title="Journey Management Plan Form"
        revision="01"
        approvalDate="01 March 2026"
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
