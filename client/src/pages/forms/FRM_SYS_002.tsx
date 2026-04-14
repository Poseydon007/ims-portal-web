import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Management Review Minutes Template",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "meeting_information",
          title: "1. Meeting Information",
          elements: [
            {
              type: "text",
              name: "meetingReferenceNo",
              title: "Meeting Reference No.",
              readOnly: true,
              description: "Auto-assigned on submission, format: MR-YYYY-NN"
            },
            {
              type: "text",
              name: "meetingDate",
              title: "Meeting Date",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "meetingTime",
              title: "Meeting Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "locationMode",
              title: "Location / Mode",
              isRequired: true,
              choices: ["Office", "Site", "Video Conference", "Hybrid"]
            },
            {
              type: "text",
              name: "chairperson",
              title: "Chairperson",
              isRequired: true
            },
            {
              type: "text",
              name: "recorderFullName",
              title: "Recorder Full Name",
              readOnly: true,
              defaultValue: "IMS Project Lead",
              description: "IMS Project Lead"
            },
            {
              type: "text",
              name: "recorderEmployeeId",
              title: "Recorder Employee ID",
              readOnly: true,
              description: "Auto-filled"
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
          name: "attendees_section",
          title: "2. Attendees",
          elements: [
            {
              type: "matrixdynamic",
              name: "attendees",
              title: "Attendees List",
              titleLocation: "hidden",
              columns: [
                { name: "no", title: "#", cellType: "text" },
                { name: "name", title: "Name", cellType: "text", isRequired: true },
                { name: "positionDepartment", title: "Position / Department", cellType: "text", isRequired: true }
              ],
              minRowCount: 1,
              rowCount: 8,
              addRowText: "+ Add Attendee"
            }
          ]
        },
        {
          type: "panel",
          name: "apologies_section",
          title: "3. Apologies / Absent",
          elements: [
            {
              type: "matrixdynamic",
              name: "absent",
              title: "Apologies / Absent List",
              titleLocation: "hidden",
              columns: [
                { name: "no", title: "#", cellType: "text" },
                { name: "name", title: "Name", cellType: "text", isRequired: true },
                { name: "positionDepartment", title: "Position / Department", cellType: "text" }
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add Absent"
            }
          ]
        },
        {
          type: "panel",
          name: "agenda_items",
          title: "4. Agenda Items and Discussion",
          description: "For each agenda item, capture the discussion summary, decisions reached, and any new actions.",
          elements: [
            {
              type: "panel",
              name: "section_4_1",
              title: "4.1 Status of Actions from Previous Management Review",
              elements: [
                { type: "comment", name: "discussion_4_1", title: "Discussion Summary", rows: 3 },
                { type: "comment", name: "decisions_4_1", title: "Decisions", rows: 2 },
                { type: "text", name: "actions_4_1", title: "New Actions Raised" }
              ]
            },
            {
              type: "panel",
              name: "section_4_2",
              title: "4.2 Changes in External and Internal Issues",
              elements: [
                {
                  type: "comment",
                  name: "discussion_4_2",
                  title: "Discussion Summary",
                  rows: 3,
                  placeholder: "Legal/regulatory changes (MHRSD, NCEC, MEWA, MOI, Civil Defense), client and market changes, updated risks and opportunities"
                },
                { type: "comment", name: "decisions_4_2", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_3",
              title: "4.3 IMS Performance Summary — KPIs and Trends",
              elements: [
                {
                  type: "comment",
                  name: "hse_kpis",
                  title: "HSE KPIs",
                  rows: 3,
                  placeholder: "LTI, LTIFR, TRIFR, near-misses, incidents, spills, Flash Notifications, training, rehabilitation compliance"
                },
                {
                  type: "comment",
                  name: "quality_kpis",
                  title: "Quality KPIs",
                  rows: 2,
                  placeholder: "On-time delivery, rework, non-conformances, client feedback and complaints"
                },
                {
                  type: "comment",
                  name: "environment_kpis",
                  title: "Environment KPIs",
                  rows: 2,
                  placeholder: "Waste generation, emissions, fuel consumption, local content, NCEC compliance"
                },
                { type: "comment", name: "decisions_4_3", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_4",
              title: "4.4 Objectives and Targets Achievement",
              elements: [
                {
                  type: "comment",
                  name: "discussion_4_4",
                  title: "Status of each IMS objective",
                  rows: 3,
                  placeholder: "On track / at risk / missed for each objective"
                },
                { type: "comment", name: "decisions_4_4", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_5",
              title: "4.5 Suitability of Resources",
              elements: [
                {
                  type: "comment",
                  name: "discussion_4_5",
                  title: "Discussion Summary",
                  rows: 3,
                  placeholder: "People, competence, training, equipment, infrastructure, financial resources, technology"
                },
                { type: "comment", name: "decisions_4_5", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_6",
              title: "4.6 Effectiveness of Actions on Risks and Opportunities",
              elements: [
                { type: "comment", name: "discussion_4_6", title: "Discussion Summary", rows: 2 },
                { type: "comment", name: "decisions_4_6", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_7",
              title: "4.7 Audit Results",
              elements: [
                { type: "comment", name: "internal_audits", title: "Internal audit findings — NC, OFI, closure status", rows: 2 },
                { type: "comment", name: "external_audits", title: "External / third-party audit findings", rows: 2 },
                { type: "comment", name: "decisions_4_7", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_8",
              title: "4.8 Interested Parties and Communication",
              elements: [
                { type: "comment", name: "client_feedback", title: "Client feedback, complaints, stakeholder concerns", rows: 2 },
                { type: "comment", name: "regulatory_interactions", title: "Regulatory and government interactions", rows: 2 },
                { type: "comment", name: "decisions_4_8", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_9",
              title: "4.9 Continual Improvement Opportunities",
              elements: [
                { type: "comment", name: "discussion_4_9", title: "Discussion Summary", rows: 2 },
                { type: "comment", name: "decisions_4_9", title: "Decisions", rows: 2 }
              ]
            },
            {
              type: "panel",
              name: "section_4_10",
              title: "4.10 Any Other Business",
              elements: [
                { type: "comment", name: "discussion_4_10", title: "Discussion Summary", rows: 2 },
                { type: "comment", name: "decisions_4_10", title: "Decisions", rows: 2 }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "actions_list_section",
          title: "5. Actions List from This Meeting",
          elements: [
            {
              type: "matrixdynamic",
              name: "meetingActions",
              title: "Actions List",
              titleLocation: "hidden",
              columns: [
                { name: "actionNo", title: "Action No.", cellType: "text" },
                { name: "description", title: "Description", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
                { name: "dueDate", title: "Due Date", cellType: "text", inputType: "date" },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Open", "In Progress", "Closed"]
                }
              ],
              minRowCount: 1,
              rowCount: 6,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "next_meeting_section",
          title: "6. Next Meeting",
          elements: [
            { type: "text", name: "nextMeetingDate", title: "Next Meeting Date", inputType: "date" },
            { type: "text", name: "nextMeetingLocation", title: "Next Meeting Location / Mode" },
            { type: "comment", name: "keyInputsRequired", title: "Key Inputs Required", rows: 2 }
          ]
        },
        {
          type: "panel",
          name: "submission_section",
          title: "7. Submitted By",
          elements: [
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
              title: "Employee ID",
              readOnly: true,
              visible: false
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

export default function FRM_SYS_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SYS-002"
        title="Management Review Minutes Template"
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
