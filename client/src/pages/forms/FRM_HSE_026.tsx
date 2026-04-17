import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Incident Witness Statement Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // ── Section 1: Incident Reference ────────────────────────────────────
        {
          type: "panel",
          name: "section1",
          title: "1. Incident Reference",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Statement Report No.",
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "incidentFlashNo",
              title: "Incident Flash Report No. (FRM-HSE-002)",
              isRequired: true,
              placeholder: "Enter reference number from initial flash report",
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
              title: "Time of Incident (24h)",
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
              title: "Statement Taken By",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "dateStatementTaken",
              title: "Date Statement Taken",
              inputType: "date",
              description: "Auto-filled with today's date",
            },
          ],
        },

        // ── Section 2: Witness Identity ──────────────────────────────────────
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
              title: "Employer (TEMC / Contractor name)",
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
              inputType: "tel",
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
              type: "text",
              name: "statementLanguageOther",
              title: "Other Language",
              visibleIf: "{statementLanguage} = 'Other'",
              placeholder: "Specify language",
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
              placeholder: "Name of translator",
            },
          ],
        },

        // ── Section 3: Witness Position and Role at Time of Incident ─────────
        {
          type: "panel",
          name: "section3",
          title: "3. Witness Position and Role at Time of Incident",
          elements: [
            {
              type: "checkbox",
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
              placeholder: "e.g., 5 metres",
            },
            {
              type: "checkbox",
              name: "witnessLineOfSight",
              title: "Line of Sight to Incident",
              choices: ["Clear", "Partial", "Obstructed"],
            },
            {
              type: "checkbox",
              name: "lightingConditions",
              title: "Lighting Conditions",
              choices: ["Daylight", "Dusk / Dawn", "Artificial", "Dark"],
            },
            {
              type: "text",
              name: "weatherEnvironment",
              title: "Weather / Environment",
              placeholder: "e.g., clear, dusty, windy, hot",
            },
            {
              type: "checkbox",
              name: "noiseLevel",
              title: "Noise Level",
              choices: ["Quiet", "Normal", "Loud (PPE required)"],
            },
            {
              type: "text",
              name: "witnessPpe",
              title: "PPE You Were Wearing",
              placeholder: "List all PPE items worn at the time",
            },
            {
              type: "text",
              name: "othersPresent",
              title: "Who Else Was Present",
              placeholder: "Names and roles of others nearby",
            },
          ],
        },

        // ── Section 4: Narrative Statement ───────────────────────────────────
        {
          type: "panel",
          name: "section4",
          title: "4. Narrative Statement",
          description:
            "Describe in your own words exactly what you observed, in the order it happened. Cover the period before, during, and after the incident. Only state what you personally saw, heard, smelled, or did. Do not speculate. If you do not remember a detail, write \"do not recall\".",
          elements: [
            {
              type: "comment",
              name: "witnessNarrative",
              title: "Your Statement",
              isRequired: true,
              rows: 10,
              placeholder:
                "Write your full account here in your own words, in the order events happened.",
            },
          ],
        },

        // ── Section 5: Structured Questions ─────────────────────────────────
        {
          type: "panel",
          name: "section5",
          title: "5. Structured Questions",
          description:
            "Answer only the questions relevant to what you personally experienced. Write \"do not recall\" or \"not applicable\" where appropriate.",
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
              rows: 3,
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
              title:
                "5.9 Were all required permits, PPE, and controls in place (as far as you know)?",
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
              title:
                "5.11 Did you hear any pre-incident briefing, toolbox talk, or warning given?",
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

        // ── Section 6: Sketch / Diagram ──────────────────────────────────────
        {
          type: "panel",
          name: "section6",
          title: "6. Sketch / Diagram",
          description:
            "Use the space below to draw a simple plan-view sketch of the incident location. Show: equipment, vehicles, people, direction of travel, distances, and your position relative to the incident point. Label all items clearly. If you cannot draw, describe the layout in text.",
          elements: [
            {
              type: "comment",
              name: "sketchDescription",
              title: "Sketch Description / Layout",
              rows: 8,
              placeholder:
                "Describe the layout: positions of people, equipment, vehicles, distances, and your location relative to the incident point.",
            },
            {
              type: "file",
              name: "sketchFiles",
              title: "Upload Sketch or Diagram (optional)",
              description: "Attach a hand-drawn sketch photo or digital diagram",
              allowMultiple: true,
              maxSize: 10240,
              acceptedTypes: "image/*,.pdf",
            },
          ],
        },

        // ── Section 7: Witness Declaration ───────────────────────────────────
        {
          type: "panel",
          name: "section7",
          title: "7. Witness Declaration",
          description:
            "I confirm that the statement above is given voluntarily and is true and correct to the best of my knowledge and recollection.",
          elements: [
            {
              type: "boolean",
              name: "witnessDeclaration",
              title:
                "I confirm this statement is true and accurate to the best of my knowledge. I gave this statement freely and without coercion.",
              isRequired: true,
              labelTrue: "I Confirm",
              labelFalse: "I Do Not Confirm",
            },
            {
              type: "text",
              name: "witnessPrintedName",
              title: "Witness Printed Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "declarationDate",
              title: "Date",
              inputType: "date",
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "declarationTime",
              title: "Time",
              inputType: "time",
              description: "Auto-filled with current time",
            },
            {
              type: "text",
              name: "declarationLocation",
              title: "Location Where Statement Was Given",
              placeholder: "e.g., Site office, HSE container, Camp",
            },
          ],
        },

        // ── Section 8: Statement Taker / Investigator ────────────────────────
        {
          type: "panel",
          name: "section8",
          title: "8. Statement Taker / Investigator",
          description:
            "The statement taker confirms that the witness gave this statement freely, without coercion, and that the record above reflects what the witness said.",
          elements: [
            {
              type: "text",
              name: "statementTakerFullName",
              title: "Name",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "statementTakerPosition",
              title: "Position",
              description: "Auto-filled from your login profile",
            },
            {
              type: "radiogroup",
              name: "statementTakerRole",
              title: "Role in Investigation",
              choices: [
                "Lead Investigator",
                "HSE Officer",
                "Supervisor",
                "Other",
              ],
            },
            {
              type: "text",
              name: "translatorUsed",
              title: "Translator Used (if any)",
              placeholder: "Name of translator if used",
            },
          ],
        },

        // ── Section 9: HSE Review and Linking (HSE Manager only) ─────────────
        {
          type: "panel",
          name: "section9",
          title: "9. HSE Review and Linking",
          elements: [
            {
              type: "text",
              name: "hseReviewedBy",
              title: "Reviewed By (HSE Manager)",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "hseReviewDate",
              title: "Date Reviewed",
              inputType: "date",
              description: "Auto-filled with today's date",
            },
            {
              type: "radiogroup",
              name: "consistencyWithOtherStatements",
              title: "Consistency With Other Witness Statements",
              choices: [
                "Consistent",
                "Minor variance",
                "Material variance (explain below)",
              ],
            },
            {
              type: "comment",
              name: "varianceExplanation",
              title: "Variance Explanation",
              visibleIf:
                "{consistencyWithOtherStatements} = 'Material variance (explain below)'",
              rows: 3,
              placeholder: "Explain the material variance in detail",
            },
            {
              type: "text",
              name: "linkedToNcrCar",
              title: "Linked to NCR / CAR No. (REG-SYS-002)",
              placeholder: "Enter NCR or CAR reference number",
            },
            {
              type: "text",
              name: "linkedToInvestigationReport",
              title: "Linked to Investigation Report",
              placeholder: "Enter FRM-HSE-025 report number",
            },
            {
              type: "radiogroup",
              name: "addedToIncidentIndex",
              title: "Added to Incident Index (REG-HSE-005)",
              choices: ["Yes", "No"],
            },
            {
              type: "html",
              name: "retentionNote",
              html: "<div style='padding:8px 12px;background:#f4f6f9;border-left:3px solid #C49A28;font-size:12px;color:#5a6a7e;'><strong>Retention:</strong> 5 years minimum, per PROC-SYS-003 Document Control</div>",
            },
            {
              type: "comment",
              name: "hseManagerComments",
              title: "HSE Manager Comments",
              rows: 3,
            },
          ],
        },

        // ── Section 10: Submitted By ─────────────────────────────────────────
        {
          type: "panel",
          name: "section10",
          title: "10. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              inputType: "date",
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              inputType: "time",
              description: "Auto-filled with current time",
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
          fullName: "statementTakenBy",
          employeeId: "statementTakenById",
          position: "statementTakerPosition",
          date: "dateStatementTaken",
        }}
        hseReadOnlyPanels={["section9"]}
      />
    </Layout>
  );
}
