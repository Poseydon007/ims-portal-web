import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCORING_HTML = `<div style='overflow-x:auto'>
<table style='width:100%;border-collapse:collapse;font-size:13px'>
  <thead>
    <tr style='background:#081C2E;color:#fff'>
      <th style='padding:8px 10px;border:1px solid #ccc;text-align:left'>Section</th>
      <th style='padding:8px 10px;border:1px solid #ccc;text-align:center'>Average Score (1–5)</th>
      <th style='padding:8px 10px;border:1px solid #ccc;text-align:left'>Notes / Observations</th>
    </tr>
  </thead>
  <tbody>
    <tr style='background:#f9f9f9'>
      <td style='padding:8px 10px;border:1px solid #ccc'>A — Personal Safety Perception (Q1–11)</td>
      <td style='padding:8px 10px;border:1px solid #ccc;text-align:center'><input type="text" style="width:80px;border:1px solid #ccc;padding:4px;text-align:center" /></td>
      <td style='padding:8px 10px;border:1px solid #ccc'><input type="text" style="width:100%;border:1px solid #ccc;padding:4px" /></td>
    </tr>
    <tr>
      <td style='padding:8px 10px;border:1px solid #ccc'>B — Management &amp; Supervision (Q12–21)</td>
      <td style='padding:8px 10px;border:1px solid #ccc;text-align:center'><input type="text" style="width:80px;border:1px solid #ccc;padding:4px;text-align:center" /></td>
      <td style='padding:8px 10px;border:1px solid #ccc'><input type="text" style="width:100%;border:1px solid #ccc;padding:4px" /></td>
    </tr>
    <tr style='background:#f9f9f9'>
      <td style='padding:8px 10px;border:1px solid #ccc'>C — Safety Systems &amp; Resources (Q22–26)</td>
      <td style='padding:8px 10px;border:1px solid #ccc;text-align:center'><input type="text" style="width:80px;border:1px solid #ccc;padding:4px;text-align:center" /></td>
      <td style='padding:8px 10px;border:1px solid #ccc'><input type="text" style="width:100%;border:1px solid #ccc;padding:4px" /></td>
    </tr>
    <tr style='background:#e8f0e8'>
      <td style='padding:8px 10px;border:1px solid #ccc;font-weight:bold'>Overall Average</td>
      <td style='padding:8px 10px;border:1px solid #ccc;text-align:center'><input type="text" style="width:80px;border:1px solid #ccc;padding:4px;text-align:center" /></td>
      <td style='padding:8px 10px;border:1px solid #ccc'><input type="text" style="width:100%;border:1px solid #ccc;padding:4px" /></td>
    </tr>
  </tbody>
</table>
<div style='margin-top:16px;display:flex;gap:32px;flex-wrap:wrap'>
  <div><label style='font-weight:600;font-size:13px'>Reviewed by:</label> <input type="text" style="width:200px;border:none;border-bottom:1px solid #333;padding:2px 6px" /></div>
  <div><label style='font-weight:600;font-size:13px'>Signature:</label> <input type="text" style="width:180px;border:none;border-bottom:1px solid #333;padding:2px 6px" /></div>
  <div><label style='font-weight:600;font-size:13px'>Date:</label> <input type="date" style="border:none;border-bottom:1px solid #333;padding:2px 6px" /></div>
</div>
</div>`;

const SCHEMA = {
  title: "Employee Safety Culture Survey",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section_intro",
          title: "Survey Introduction",
          elements: [
            {
              type: "html",
              name: "intro_text",
              html: "<div style=\"padding:12px 14px;background:#f0f4f8;border-left:4px solid #C49A28;border-radius:4px;font-size:13px;line-height:1.6\"><strong>This survey is anonymous and confidential.</strong> Your honest responses help us improve safety culture at True East Mining Company. Do not write your name. Results are reviewed by the HSE Manager only.<br/><br/><em>هذا الاستبيان مصمم لمساعدتك على فهم الصحة والسلامة المهنية في منظومة العمل. يرجى الإجابة على كل سؤال بصدق. إجاباتك مجهولة الهوية وستستخدم لتحسين ثقافة السلامة.</em></div>"
            }
          ]
        },
        {
          type: "panel",
          name: "section_respondent",
          title: "Respondent Information",
          elements: [
            {
              type: "dropdown",
              name: "department",
              title: "Department / القسم",
              isRequired: true,
              choices: [
                "Administration","Finance","HSE","Human Resources","IT","Logistics",
                "Maintenance","Management","Operations","Procurement","Projects",
                "Quality","Security","Technical","Warehouse","Other"
              ]
            },
            {
              type: "text",
              name: "site_location",
              title: "Site / Location / الموقع",
              isRequired: true
            },
            {
              type: "text",
              name: "survey_date",
              title: "Date / التاريخ",
              inputType: "date",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "shift",
              title: "Shift / الوردية",
              choices: ["Day Shift", "Night Shift", "Rotating", "N/A"]
            }
          ]
        },
        {
          type: "panel",
          name: "section_a",
          title: "Section A — Personal Safety Perception",
          elements: [
            {
              type: "matrix",
              name: "personal_safety",
              title: "Please rate the following statements (1 = Strongly Disagree, 5 = Strongly Agree):",
              isRequired: true,
              columns: [
                { value: 1, text: "Strongly Disagree" },
                { value: 2, text: "Disagree" },
                { value: 3, text: "Neutral" },
                { value: 4, text: "Agree" },
                { value: 5, text: "Strongly Agree" }
              ],
              rows: [
                { value: "q1",  text: "1. I care about my personal safety at work." },
                { value: "q2",  text: "2. I care about the safety of my coworkers." },
                { value: "q3",  text: "3. I consider minor accidents to be a normal part of daily work." },
                { value: "q4",  text: "4. I accept minor accidents as a normal part of daily work." },
                { value: "q5",  text: "5. I have great trust in my coworkers' abilities to ensure safety." },
                { value: "q6",  text: "6. I feel that safety rounds/evaluations have no effect on safety." },
                { value: "q7",  text: "7. I consider safety training to be meaningless or nonexistent." },
                { value: "q8",  text: "8. I rarely talk about safety at work." },
                { value: "q9",  text: "9. I generally feel safe when working with others." },
                { value: "q10", text: "10. I have witnessed others break safety rules to complete work on time." },
                { value: "q11", text: "11. I agree with coworkers who break safety rules to complete work on time." }
              ]
            },
            {
              type: "comment",
              name: "section_a_comments",
              title: "Section A Comments / التعليقات",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section_b",
          title: "Section B — Management & Supervision Perception",
          elements: [
            {
              type: "matrix",
              name: "management_perception",
              title: "Please rate the following statements:",
              isRequired: true,
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
              title: "Section B Comments / التعليقات",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section_c",
          title: "Section C — Safety Systems & Resources",
          elements: [
            {
              type: "matrix",
              name: "safety_systems",
              title: "Please rate the following statements:",
              isRequired: true,
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
              title: "Section C Comments / التعليقات",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section_d",
          title: "Section D — Open Feedback",
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
          name: "section_scoring",
          title: "Scoring Summary — For HSE Use Only",
          elements: [
            {
              type: "html",
              name: "scoring_table",
              html: SCORING_HTML
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
        approvalDate="April 2026"
        minRole="field_worker"
        wideTable={true}
        schema={SCHEMA}
        hseOnlyPanels={["section_scoring"]}
      />
    </Layout>
  );
}
