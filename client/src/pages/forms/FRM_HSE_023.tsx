import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Employee Safety Culture Survey",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Survey Introduction",
          elements: [
            {
              type: "html",
              name: "intro_text",
              html: "<div style='padding: 10px; background-color: #f8f9fa; border-left: 4px solid #007bff; margin-bottom: 15px;'><p><strong>This survey is anonymous and confidential.</strong> Your honest responses help us improve safety culture at True East Mining Company. Do not write your name. Results are reviewed by the HSE Manager only.</p></div>"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", "Management", "Quality Assurance", "Environmental", "Training & Competency", "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            },
            {
              type: "text",
              name: "location",
              title: "Site / Location"
            },
            {
              type: "dropdown",
              name: "yearsExperience",
              title: "Years of Experience at TEMC",
              choices: [
                "Less than 1 year", "1–2 years", "3–5 years", "More than 5 years"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Section A — Personal Safety Behaviour",
          elements: [
            {
              type: "matrix",
              name: "personal_safety",
              title: "Please rate the following statements based on your personal experience:",
              columns: [
                { value: 1, text: "Strongly Disagree" },
                { value: 2, text: "Disagree" },
                { value: 3, text: "Neutral" },
                { value: 4, text: "Agree" },
                { value: 5, text: "Strongly Agree" }
              ],
              rows: [
                { value: "q1", text: "1. I always wear the correct PPE for my task." },
                { value: "q2", text: "2. I stop work when I feel it is unsafe." },
                { value: "q3", text: "3. I report near misses and unsafe conditions." },
                { value: "q4", text: "4. I follow safety rules even when no one is watching." },
                { value: "q5", text: "5. I participate in safety meetings and toolbox talks." },
                { value: "q6", text: "6. I know what to do in an emergency." },
                { value: "q7", text: "7. I feel comfortable raising safety concerns with my supervisor." },
                { value: "q8", text: "8. I have received adequate safety training for my role." },
                { value: "q9", text: "9. I believe my safety is a priority at this company." },
                { value: "q10", text: "10. I understand the risks associated with my job." },
                { value: "q11", text: "11. I have never been pressured to take a safety shortcut." }
              ]
            },
            {
              type: "comment",
              name: "section_a_comments",
              title: "Section A Comments",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Section B — Management & Supervision Perception",
          elements: [
            {
              type: "matrix",
              name: "management_perception",
              title: "Please rate the following statements regarding management and supervision:",
              columns: [
                { value: 1, text: "Strongly Disagree" },
                { value: 2, text: "Disagree" },
                { value: 3, text: "Neutral" },
                { value: 4, text: "Agree" },
                { value: 5, text: "Strongly Agree" }
              ],
              rows: [
                { value: "q12", text: "12. Management seems to care about my safety." },
                { value: "q13", text: "13. Workers' safety practices are very important to management." },
                { value: "q14", text: "14. Workers are regularly made aware of dangerous work practices or conditions." },
                { value: "q15", text: "15. Workers are regularly praised for safe conduct." },
                { value: "q16", text: "16. Workers receive instructions on safety when hired." },
                { value: "q17", text: "17. Management looks for causes, not guilty persons, when an accident occurs." },
                { value: "q18", text: "18. Fear of sanctions from management discourages reporting near-miss incidents." },
                { value: "q19", text: "19. Management strives for everybody to have high competence regarding safety and risks." },
                { value: "q20", text: "20. Management never considers employees' suggestions regarding safety." },
                { value: "q21", text: "21. Management encourages working in accordance with safety rules — even when the schedule is tight." }
              ]
            },
            {
              type: "comment",
              name: "section_b_comments",
              title: "Section B Comments",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Section C — Safety Systems & Resources",
          elements: [
            {
              type: "matrix",
              name: "safety_systems",
              title: "Please rate the following statements regarding safety systems and resources:",
              columns: [
                { value: 1, text: "Strongly Disagree" },
                { value: 2, text: "Disagree" },
                { value: 3, text: "Neutral" },
                { value: 4, text: "Agree" },
                { value: 5, text: "Strongly Agree" }
              ],
              rows: [
                { value: "q22", text: "22. Adequate PPE is always available when I need it." },
                { value: "q23", text: "23. I know the emergency procedures for my work area." },
                { value: "q24", text: "24. I know how to report a hazard or unsafe condition." },
                { value: "q25", text: "25. Heat stress prevention measures are adequate for our working conditions." },
                { value: "q26", text: "26. Safety equipment (fire extinguishers, first aid kits, etc.) is properly maintained and accessible." }
              ]
            },
            {
              type: "comment",
              name: "section_c_comments",
              title: "Section C Comments",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Section D — Open Feedback",
          elements: [
            {
              type: "comment",
              name: "missing_important",
              title: "27. Is this survey missing something important? If yes, please explain below.",
              rows: 3
            },
            {
              type: "comment",
              name: "other_concerns",
              title: "Any other safety concerns or suggestions?",
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Submission",
          elements: [
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
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

export default function FRM_HSE_023() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-023"
        title="Employee Safety Culture Survey"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
      />
    </Layout>
  );
}
