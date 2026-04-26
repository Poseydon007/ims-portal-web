import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Visitor Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "registerDetails",
          title: "1. Register Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Report Number",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Security Officer Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Security Officer Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "registerDate",
              title: "Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "radiogroup",
              name: "shift",
              title: "Shift",
              isRequired: true,
              choices: ["Day", "Night"]
            }
          ]
        },
        {
          type: "matrixdynamic",
          name: "visitorLog",
          title: "2. Visitor Log",
          description: "Record every visitor entering the site. One row per visitor.",
          isRequired: true,
          columns: [
            {
              name: "no",
              title: "No.",
              cellType: "text"
            },
            {
              name: "visitorName",
              title: "Visitor Name",
              cellType: "text",
              isRequired: true
            },
            {
              name: "company",
              title: "Company",
              cellType: "text",
              isRequired: true
            },
            {
              name: "idIqama",
              title: "ID / Iqama No.",
              cellType: "text",
              isRequired: true
            },
            {
              name: "personVisited",
              title: "Person Visited",
              cellType: "text",
              isRequired: true
            },
            {
              name: "purpose",
              title: "Purpose",
              cellType: "text",
              isRequired: true
            },
            {
              name: "vehicleReg",
              title: "Vehicle Reg.",
              cellType: "text"
            },
            {
              name: "timeIn",
              title: "Time In",
              cellType: "text",
              inputType: "time",
              isRequired: true
            },
            {
              name: "timeOut",
              title: "Time Out",
              cellType: "text",
              inputType: "time"
            },
            {
              name: "inductionCompleted",
              title: "Induction Completed",
              cellType: "radiogroup",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              name: "badgeNo",
              title: "Badge No.",
              cellType: "text"
            }
          ],
          minRowCount: 1,
          rowCount: 10,
          addRowText: "+ Add Visitor"
        },
        {
          type: "panel",
          name: "submittedByPanel",
          title: "3. Submitted By",
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

export default function FRM_SEC_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SEC-002"
        title="Visitor Register"
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
