import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Toolbox Talk Daily Attendance Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Toolbox Talk Details",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "time",
              title: "Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "projectSite",
              title: "Project / Site",
              isRequired: true
            },
            {
              type: "text",
              name: "location",
              title: "Location",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Presenter Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Presenter Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Presenter Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department / Work Group",
              isRequired: true,
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", "Management", "Quality Assurance", "Environmental", "Training & Competency", "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Topic Discussed",
          elements: [
            {
              type: "text",
              name: "topicTitle",
              title: "Topic Title",
              isRequired: true
            },
            {
              type: "checkbox",
              name: "topicCategory",
              title: "Topic Category",
              isRequired: true,
              choices: [
                "HSE General", "Heat Stress", "PPE", "Incident Lessons", "Emergency", "Environment", "Housekeeping"
              ],
              hasOther: true,
              otherText: "Other (specify)"
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Key Discussion Points",
          elements: [
            {
              type: "comment",
              name: "keyDiscussionPoints",
              title: "Key Discussion Points",
              isRequired: true,
              rows: 5,
              placeholder: "Summarize the main points covered in this toolbox talk"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Attendance Register",
          elements: [
            {
              type: "html",
              name: "attendanceNote",
              html: "<p><strong>Record all attendees. Each person must be listed.</strong></p><p>Note: Digital signature is handled by the workflow system</p>"
            },
            {
              type: "matrixdynamic",
              name: "attendanceRegister",
              title: "Attendance Register",
              titleLocation: "hidden",
              columns: [
                { name: "no", title: "No.", cellType: "text" },
                { name: "fullName", title: "Full Name", cellType: "text", isRequired: true },
                { name: "employeeId", title: "Employee ID", cellType: "text", isRequired: true },
                { name: "company", title: "Company", cellType: "text", isRequired: true, placeholder: "TEMC or contractor name" }
              ],
              minRowCount: 1,
              rowCount: 10,
              addRowText: "+ Add Attendee"
            },
            {
              type: "expression",
              name: "totalAttendees",
              title: "Total Attendees",
              expression: "{attendanceRegister.length}",
              readOnly: true
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Questions / Feedback / Actions Raised",
          elements: [
            {
              type: "matrixdynamic",
              name: "actionsRaised",
              title: "Actions Raised",
              titleLocation: "hidden",
              columns: [
                { name: "itemNo", title: "Item No.", cellType: "text" },
                { name: "description", title: "Description / Action Required", cellType: "text", isRequired: true }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Item"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Submitted By",
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
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "html",
              name: "workflowNote",
              html: "<p><em>Note: Supervisor and Site Manager approvals handled by digital workflow</em></p>"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_HSE_032() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-032"
        title="Toolbox Talk Daily Attendance Register"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
