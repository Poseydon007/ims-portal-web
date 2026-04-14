import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Incident Witness Statement Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Incident Reference",
          elements: [
            {
              type: "text",
              name: "incidentFlashNo",
              title: "Incident Flash Report No. (FRM-HSE-002)",
              isRequired: true,
            },
            {
              type: "text",
              name: "incidentDate",
              title: "Date of Incident",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "incidentTime",
              title: "Time of Incident",
              inputType: "time",
              isRequired: true,
            },
            {
              type: "text",
              name: "siteProjectName",
              title: "Site / Project Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "exactLocation",
              title: "Exact Location on Site",
              isRequired: true,
            },
            {
              type: "checkbox",
              name: "incidentType",
              title: "Type of Incident",
              isRequired: true,
              choices: [
                "Injury",
                "Near-Miss",
                "Property Damage",
                "Environmental",
                "Fire",
                "Vehicle",
                "Security",
                "Other",
              ],
            },
            {
              type: "text",
              name: "investigationLead",
              title: "Investigation Lead",
              isRequired: true,
            },
            {
              type: "text",
              name: "statementTakenBy",
              title: "Statement Taken By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "statementTakenById",
              title: "Statement Taken By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "dateStatementTaken",
              title: "Date Statement Taken",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
          ],
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Witness Identity",
          elements: [
            {
              type: "text",
              name: "witnessFullName",
              title: "Full Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "witnessPosition",
              title: "Position / Job Title",
              isRequired: true,
            },
            {
              type: "text",
              name: "witnessEmployer",
              title: "Employer",
              placeholder: "TEMC or Contractor name",
              isRequired: true,
            },
            {
              type: "text",
              name: "witnessEmployeeId",
              title: "Employee / Contractor ID No.",
            },
            {
              type: "text",
              name: "witnessNationalId",
              title: "Iqama / National ID No.",
            },
            {
              type: "text",
              name: "witnessNationality",
              title: "Nationality",
            },
            {
              type: "text",
              name: "witnessMobile",
              title: "Mobile Number",
            },
            {
              type: "text",
              name: "witnessExperience",
              title: "Years of Experience in Role",
            },
            {
              type: "radiogroup",
              name: "statementLanguage",
              title: "Language of Statement",
              isRequired: true,
              choices: ["English", "Arabic", "Other"],
            },
            {
              type: "radiogroup",
              name: "translatorRequired",
              title: "Translator Required",
              choices: ["No", "Yes"],
            },
            {
              type: "text",
              name: "translatorName",
              title: "Translator Name",
              visibleIf: "{translatorRequired} = 'Yes'",
            },
          ],
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Witness Position at Time of Incident",
          elements: [
            {
              type: "radiogroup",
              name: "witnessRelationship",
              title: "Relationship to the Incident",
              isRequired: true,
              choices: [
                "Directly involved",
                "Direct witness",
                "Nearby (heard/felt)",
                "First responder",
                "Arrived after",
              ],
            },
            {
              type: "text",
              name: "witnessTask",
              title: "Your Task at the Time",
              isRequired: true,
            },
            {
              type: "text",
              name: "witnessDistance",
              title: "Distance from Incident Point",
            },
            {
              type: "radiogroup",
              name: "witnessLineOfSight",
              title: "Line of Sight to Incident",
              choices: ["Clear", "Partial", "Obstructed"],
            },
            {
              type: "radiogroup",
              name: "lightingConditions",
              title: "Lighting Conditions",
              choices: ["Daylight", "Dusk / Dawn", "Artificial", "Dark"],
            },
            {
              type: "text",
              name: "weatherEnvironment",
              title: "Weather / Environment",
            },
            {
              type: "radiogroup",
              name: "noiseLevel",
              title: "Noise Level",
              choices: ["Quiet", "Normal", "Loud (PPE required)"],
            },
            {
              type: "text",
              name: "witnessPpe",
              title: "PPE You Were Wearing",
            },
            {
              type: "text",
              name: "othersPresent",
              title: "Who Else Was Present",
            },
          ],
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Witness Narrative (free text)",
          elements: [
            {
              type: "comment",
              name: "witnessNarrative",
              title: "Describe in your own words what happened",
              isRequired: true,
              rows: 8,
              placeholder: "Write your full account here in your own words",
            },
          ],
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Structured Questions",
          elements: [
            {
              type: "comment",
              name: "q5_1",
              title: "5.1 What were you doing immediately before the incident?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_2",
              title: "5.2 What did you see happen?",
              isRequired: true,
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_3",
              title: "5.3 What did you hear (shouts, alarms, mechanical sounds, silence)?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_4",
              title: "5.4 What did you smell (fuel, smoke, chemicals, gases)?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_5",
              title: "5.5 What did you do when you realised something had happened?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_6",
              title: "5.6 Who else was involved or nearby, and what were they doing?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_7",
              title: "5.7 Was any equipment, tool, or vehicle involved? Describe its condition.",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_8",
              title: "5.8 Was the task being done in the normal way? If not, what was different?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_9",
              title: "5.9 Were all required permits, PPE, and controls in place (as far as you know)?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_10",
              title: "5.10 Had you seen anything unusual earlier that day or shift?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_11",
              title: "5.11 Did you hear any pre-incident briefing, toolbox talk, or warning given?",
              rows: 2,
            },
            {
              type: "comment",
              name: "q5_12",
              title: "5.12 Is there anything you believe could have prevented this incident?",
              rows: 2,
            },
          ],
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Witness Declaration",
          elements: [
            {
              type: "boolean",
              name: "witnessDeclaration",
              title: "I confirm that this statement is true and accurate to the best of my knowledge. I gave this statement freely and without coercion.",
              isRequired: true,
            },
            {
              type: "text",
              name: "witnessPrintedName",
              title: "Witness Printed Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "dateOfDeclaration",
              title: "Date of Declaration",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
          ],
        },
        {
          type: "panel",
          name: "section7",
          title: "7. Statement Taker Confirmation",
          elements: [
            {
              type: "text",
              name: "statementTakerName",
              title: "Statement Taker Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "statementTakerPosition",
              title: "Statement Taker Position",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "radiogroup",
              name: "statementTakerRole",
              title: "Role in Investigation",
              choices: ["Lead Investigator", "HSE Officer", "Supervisor", "Other"],
            },
            {
              type: "text",
              name: "translatorUsed",
              title: "Translator Used",
              placeholder: "Name if applicable",
            },
          ],
        },
        {
          type: "panel",
          name: "section8",
          title: "8. HSE Review and Linking",
          elements: [
            {
              type: "text",
              name: "reviewedBy",
              title: "Reviewed By",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "dateReviewed",
              title: "Date Reviewed",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "radiogroup",
              name: "consistencyWithOtherStatements",
              title: "Consistency With Other Statements",
              choices: ["Consistent", "Minor variance", "Material variance"],
            },
            {
              type: "comment",
              name: "varianceExplanation",
              title: "Variance Explanation",
              visibleIf: "{consistencyWithOtherStatements} = 'Material variance'",
              rows: 2,
            },
            {
              type: "text",
              name: "linkedToNcrCar",
              title: "Linked to NCR / CAR No.",
            },
            {
              type: "text",
              name: "linkedToInvestigationReport",
              title: "Linked to Investigation Report",
            },
            {
              type: "radiogroup",
              name: "addedToIncidentIndex",
              title: "Added to Incident Index",
              choices: ["Yes", "No"],
            },
            {
              type: "comment",
              name: "hseManagerComments",
              title: "HSE Manager Comments",
              rows: 2,
            },
          ],
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: [
                "HSE",
                "Operations – Drilling",
                "Operations – Geology",
                "Operations – Survey",
                "Maintenance",
                "Logistics & Transport",
                "Warehouse & Supply",
                "Security",
                "Administration",
                "Finance & Accounting",
                "Human Resources",
                "IT & Communications",
                "Management",
                "Quality Assurance",
                "Environmental",
                "Training & Competency",
                "Contracts & Procurement",
                "Camp & Catering",
                "Medical & First Aid",
                "Other",
              ],
            },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_026() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-026"
        title="Incident Witness Statement Form"
        revision="02"
        approvalDate="11 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
        identityFields={{
          fullName: "submittedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
