import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_023() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    department: "",
    siteLocation: "",
    date: "",
    shift: "",
    // Section A
    q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "", q8: "", q9: "", q10: "", q11: "",
    commentsA: "",
    // Section B
    q12: "", q13: "", q14: "", q15: "", q16: "", q17: "", q18: "", q19: "", q20: "", q21: "",
    commentsB: "",
    // Section C
    q22: "", q23: "", q24: "", q25: "", q26: "",
    commentsC: "",
    // Section D
    q27: "",
    // HSE Use Only
    hseAvgA: "",
    hseAvgB: "",
    hseAvgC: "",
    hseOverallAvg: "",
    hseReviewedBy: "",
    hseSignature: "",
    hseDate: ""
  });

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const headers = [
      "Department", "Site / Location", "Date", "Shift",
      "Q1: Personal safety care", "Q2: Coworker safety care", "Q3: Minor accidents normal", "Q4: Accept minor accidents", "Q5: Trust in coworkers", "Q6: Safety rounds effect", "Q7: Safety training meaning", "Q8: Talk about safety", "Q9: Feel safe with others", "Q10: Witnessed rule breaking", "Q11: Agree with rule breaking",
      "Comments Section A",
      "Q12: Management cares", "Q13: Safety practices important", "Q14: Regular awareness", "Q15: Praised for safe conduct", "Q16: Instructions when hired", "Q17: Look for causes", "Q18: Fear of sanctions", "Q19: Strives for competence", "Q20: Never considers suggestions", "Q21: Encourages safety rules",
      "Comments Section B",
      "Q22: PPE availability", "Q23: Emergency procedures", "Q24: Report hazard", "Q25: Heat stress prevention", "Q26: Equipment maintenance",
      "Comments Section C",
      "Q27: Missing something",
      "HSE Avg A", "HSE Avg B", "HSE Avg C", "HSE Overall Avg", "HSE Reviewed By", "HSE Signature", "HSE Date"
    ];

    const values = [
      formData.department, formData.siteLocation, formData.date, formData.shift,
      formData.q1, formData.q2, formData.q3, formData.q4, formData.q5, formData.q6, formData.q7, formData.q8, formData.q9, formData.q10, formData.q11,
      formData.commentsA,
      formData.q12, formData.q13, formData.q14, formData.q15, formData.q16, formData.q17, formData.q18, formData.q19, formData.q20, formData.q21,
      formData.commentsB,
      formData.q22, formData.q23, formData.q24, formData.q25, formData.q26,
      formData.commentsC,
      formData.q27,
      formData.hseAvgA, formData.hseAvgB, formData.hseAvgC, formData.hseOverallAvg, formData.hseReviewedBy, formData.hseSignature, formData.hseDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-023",
        headers,
        values
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    } finally {
      setIsLoading(false);
    }
  };

  const likertOptions = [
    { label: "Strongly Disagree / لا أوافق بشدة", value: "1" },
    { label: "Disagree / لا أوافق", value: "2" },
    { label: "Neutral / محايد", value: "3" },
    { label: "Agree / أوافق", value: "4" },
    { label: "Strongly Agree / أوافق بشدة", value: "5" }
  ];

  const renderLikertRow = (questionNum: string, englishText: string, arabicText: string, fieldName: string) => (
    <div className="border-b border-[#dde3ec] p-4 bg-white hover:bg-gray-50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-semibold text-[#081C2E]">{questionNum}. {englishText}</p>
          <p className="text-sm text-gray-600 text-right font-arabic" dir="rtl">{arabicText}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-end">
          {likertOptions.map((option) => (
            <label key={option.value} className="flex flex-col items-center cursor-pointer group">
              <input
                type="radio"
                name={fieldName}
                value={option.value}
                checked={formData[fieldName as keyof typeof formData] === option.value}
                onChange={handleChange}
                className="w-5 h-5 accent-[#C49A28] cursor-pointer"
                required
              />
              <span className="text-[10px] mt-1 text-center max-w-[60px] leading-tight text-gray-500 group-hover:text-[#081C2E]">
                {option.label.split(" / ")[0]}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#C49A28] text-center">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
            <p className="text-gray-600 mb-6">Thank you for your feedback. Your responses are anonymous and will help improve our safety culture.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              View Register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#C49A28] hover:underline">← Return to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-nunito">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] font-medium">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 text-sm">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 text-sm">Employee Safety Culture Survey</span>
        </nav>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-[#dde3ec]">
            <thead>
              <tr className="bg-[#081C2E] text-white text-sm">
                <th className="border border-[#dde3ec] p-2 text-left">Document Code</th>
                <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="border border-[#dde3ec] p-2 font-mono">TE-IMS-FRM-HSE-023</td>
                <td className="border border-[#dde3ec] p-2">Rev01</td>
                <td className="border border-[#dde3ec] p-2">April 2026</td>
                <td className="border border-[#dde3ec] p-2 text-green-700 font-semibold">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#081C2E] uppercase tracking-wide">Employee Safety Culture Survey</h1>
          <h2 className="text-xl text-[#C49A28] mt-2 font-arabic" dir="rtl">استبيان ثقافة سلامة الموظفين</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Respondent Info */}
          <section className="bg-white rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>RESPONDENT INFORMATION</span>
              <span className="font-arabic" dir="rtl">معلومات المستجيب</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6 bg-blue-50 p-4 border-l-4 border-blue-500 italic">
                This survey is designed to help understand Occupational Health and Safety (OHS) perceptions in your workplace. Please answer each question honestly. Your responses are anonymous and will be used to improve safety culture.
                <br />
                <span className="font-arabic block mt-2" dir="rtl">صمم هذا الاستبيان لمساعدتك على فهم الصحة والسلامة المهنية في منظومة العمل. يرجى الإجابة على كل سؤال بصدق. إجاباتك مجهولة الهوية وستستخدم لتحسين ثقافة السلامة.</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Department / القسم *</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Site / Location / الموقع *</label>
                  <input
                    type="text"
                    name="siteLocation"
                    value={formData.siteLocation}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date / التاريخ *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Shift / الوردية *</label>
                  <select
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    required
                  >
                    <option value="">Select Shift</option>
                    <option value="Day">Day / نهار</option>
                    <option value="Night">Night / ليل</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section A */}
          <section className="bg-white rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>SECTION A — PERSONAL SAFETY PERCEPTION</span>
              <span className="font-arabic" dir="rtl">القسم أ — تصور السلامة الشخصية</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 text-xs font-bold text-[#081C2E] flex justify-between border-b border-[#dde3ec]">
              <span className="flex-1">Statement / العبارة</span>
              <div className="hidden md:flex gap-4 w-[400px] justify-between text-center">
                <span className="w-[70px]">Strongly Disagree</span>
                <span className="w-[70px]">Disagree</span>
                <span className="w-[70px]">Neutral</span>
                <span className="w-[70px]">Agree</span>
                <span className="w-[70px]">Strongly Agree</span>
              </div>
            </div>
            <div className="divide-y divide-[#dde3ec]">
              {renderLikertRow("1", "I care about my personal safety at work.", "أهتم بسلامتي الشخصية في موقع العمل", "q1")}
              {renderLikertRow("2", "I care about the safety of my coworkers.", "أهتم بسلامة زملائي في العمل", "q2")}
              {renderLikertRow("3", "I consider minor accidents to be a normal part of daily work.", "اعتبر الحوادث البسيطة جزء طبيعي من أحداث العمل", "q3")}
              {renderLikertRow("4", "I accept minor accidents as a normal part of daily work.", "أقبل بأن تكون الحوادث البسيطة جزء طبيعي من أحداث العمل", "q4")}
              {renderLikertRow("5", "I have great trust in my coworkers' abilities to ensure safety.", "لدي ثقة كبيرة في قدرة زملائي في العمل على ضمان السلامة", "q5")}
              {renderLikertRow("6", "I feel that safety rounds/evaluations have no effect on safety.", "أشعر أن تقييمات السلامة ليس لها تأثير على السلامة", "q6")}
              {renderLikertRow("7", "I consider safety training to be meaningless or nonexistent.", "اعتقد أن التدريب على السلامة ليس له معنى وغير مفيد", "q7")}
              {renderLikertRow("8", "I rarely talk about safety at work.", "نادراً ما اتحدث عن السلامة أثناء العمل", "q8")}
              {renderLikertRow("9", "I generally feel safe when working with others.", "بشكل عام اشعر بالأمان عند العمل مع الآخرين", "q9")}
              {renderLikertRow("10", "I have witnessed others break safety rules to complete work on time.", "لقد شاهدت البعض يكسر قواعد السلامة من أجل استكمال العمل", "q10")}
              {renderLikertRow("11", "I agree with coworkers who break safety rules to complete work on time.", "اتفق مع زملائي الذين يقومون بكسر قواعد السلامة من أجل استكمال العمل", "q11")}
            </div>
            <div className="p-4 bg-gray-50 border-t border-[#dde3ec]">
              <label className="block text-sm font-bold text-[#081C2E] mb-1">Comments / التعليقات:</label>
              <textarea
                name="commentsA"
                value={formData.commentsA}
                onChange={handleChange}
                className="w-full border border-[#dde3ec] p-2 rounded h-24 focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Additional feedback for Section A..."
              ></textarea>
            </div>
          </section>

          {/* Section B */}
          <section className="bg-white rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>SECTION B — MANAGEMENT & SUPERVISION PERCEPTION</span>
              <span className="font-arabic" dir="rtl">القسم ب — تصور الإدارة والإشراف</span>
            </div>
            <div className="divide-y divide-[#dde3ec]">
              {renderLikertRow("12", "Management seems to care about my safety.", "يبدو لي أن الإدارة تهتم بسلامتي", "q12")}
              {renderLikertRow("13", "Workers' safety practices are very important to management.", "تعتبر ممارسات سلامة العمال مهمة جدًا للإدارة", "q13")}
              {renderLikertRow("14", "Workers are regularly made aware of dangerous work practices or conditions.", "يتم توعية العمال بانتظام حول ممارسات أو ظروف العمل الخطرة", "q14")}
              {renderLikertRow("15", "Workers are regularly praised for safe conduct.", "يتم الثناء على العمال بانتظام لسلوكهم الآمن", "q15")}
              {renderLikertRow("16", "Workers receive instructions on safety when hired.", "يتلقى العمال تعليمات حول السلامة عند توظيفهم", "q16")}
              {renderLikertRow("17", "Management looks for causes, not guilty persons, when an accident occurs.", "تبحث الإدارة عن الأسباب وليس الأشخاص المذنبين عندما يقع حادث", "q17")}
              {renderLikertRow("18", "Fear of sanctions from management discourages reporting near-miss incidents.", "إن الخوف من العقوبات من الإدارة يثبط عزيمة الموظفين عن الإبلاغ عن الحوادث الوشيكة", "q18")}
              {renderLikertRow("19", "Management strives for everybody to have high competence regarding safety and risks.", "تسعى الإدارة إلى أن يتمتع كل فرد بالكفاءة العالية فيما يتعلق بالسلامة والمخاطر", "q19")}
              {renderLikertRow("20", "Management never considers employees' suggestions regarding safety.", "لا تأخذ الإدارة أبدًا بعين الاعتبار اقتراحات الموظفين فيما يتعلق بالسلامة", "q20")}
              {renderLikertRow("21", "Management encourages working in accordance with safety rules — even when the schedule is tight.", "تشجع الإدارة الموظفين على العمل وفقًا لقواعد السلامة حتى عندما يكون جدول العمل ضيقًا", "q21")}
            </div>
            <div className="p-4 bg-gray-50 border-t border-[#dde3ec]">
              <label className="block text-sm font-bold text-[#081C2E] mb-1">Comments / التعليقات:</label>
              <textarea
                name="commentsB"
                value={formData.commentsB}
                onChange={handleChange}
                className="w-full border border-[#dde3ec] p-2 rounded h-24 focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Additional feedback for Section B..."
              ></textarea>
            </div>
          </section>

          {/* Section C */}
          <section className="bg-white rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>SECTION C — SAFETY SYSTEMS & RESOURCES</span>
              <span className="font-arabic" dir="rtl">القسم ج — أنظمة وموارد السلامة</span>
            </div>
            <div className="divide-y divide-[#dde3ec]">
              {renderLikertRow("22", "Adequate PPE is always available when I need it.", "معدات الوقاية الشخصية الكافية متوفرة دائمًا عند الحاجة", "q22")}
              {renderLikertRow("23", "I know the emergency procedures for my work area.", "أعرف إجراءات الطوارئ الخاصة بمنطقة عملي", "q23")}
              {renderLikertRow("24", "I know how to report a hazard or unsafe condition.", "أعرف كيفية الإبلاغ عن خطر أو حالة غير آمنة", "q24")}
              {renderLikertRow("25", "Heat stress prevention measures are adequate for our working conditions.", "تدابير الوقاية من الإجهاد الحراري كافية لظروف عملنا", "q25")}
              {renderLikertRow("26", "Safety equipment (fire extinguishers, first aid kits, etc.) is properly maintained and accessible.", "يتم صيانة معدات السلامة (طفايات الحريق، صناديق الإسعافات الأولية، إلخ) بشكل صحيح وهي في متناول اليد", "q26")}
            </div>
            <div className="p-4 bg-gray-50 border-t border-[#dde3ec]">
              <label className="block text-sm font-bold text-[#081C2E] mb-1">Comments / التعليقات:</label>
              <textarea
                name="commentsC"
                value={formData.commentsC}
                onChange={handleChange}
                className="w-full border border-[#dde3ec] p-2 rounded h-24 focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Additional feedback for Section C..."
              ></textarea>
            </div>
          </section>

          {/* Section D */}
          <section className="bg-white rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>SECTION D — OPEN FEEDBACK</span>
              <span className="font-arabic" dir="rtl">القسم د — ملاحظات مفتوحة</span>
            </div>
            <div className="p-6">
              <label className="block text-sm font-bold text-[#081C2E] mb-2">
                27. Is this survey missing something important? If yes, please explain below.
                <br />
                <span className="font-arabic block mt-1" dir="rtl">هل ينقص هذا الاستبيان أمر مهم؟ إذا نعم، يرجى التوضيح أدناه.</span>
              </label>
              <textarea
                name="q27"
                value={formData.q27}
                onChange={handleChange}
                className="w-full border border-[#dde3ec] p-2 rounded h-32 focus:ring-2 focus:ring-[#C49A28] outline-none"
              ></textarea>
            </div>
          </section>

          {/* Scoring Summary - HSE Use Only */}
          <section className="bg-[#f8fafc] rounded-lg shadow-sm border border-[#dde3ec] overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold flex justify-between items-center">
              <span>SCORING SUMMARY — FOR HSE USE ONLY</span>
              <span className="font-arabic" dir="rtl">ملخص التقييم — لاستخدام السلامة فقط</span>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-gray-100 text-[#081C2E] text-sm">
                      <th className="border border-[#dde3ec] p-2 text-left">Section</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Average Score (1-5)</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Notes / Observations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 text-sm font-semibold">A — Personal Safety Perception</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="number" step="0.1" name="hseAvgA" value={formData.hseAvgA} onChange={handleChange} className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 text-sm font-semibold">B — Management & Supervision</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="number" step="0.1" name="hseAvgB" value={formData.hseAvgB} onChange={handleChange} className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 text-sm font-semibold">C — Safety Systems & Resources</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="number" step="0.1" name="hseAvgC" value={formData.hseAvgC} onChange={handleChange} className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-[#dde3ec] p-2 text-sm font-bold">Overall Average</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="number" step="0.1" name="hseOverallAvg" value={formData.hseOverallAvg} onChange={handleChange} className="w-full p-1 border border-transparent font-bold focus:border-[#C49A28] outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase">Reviewed by</label>
                  <input
                    type="text"
                    name="hseReviewedBy"
                    value={formData.hseReviewedBy}
                    onChange={handleChange}
                    className="w-full border-b border-[#dde3ec] p-1 focus:border-[#C49A28] outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase">Signature</label>
                  <input
                    type="text"
                    name="hseSignature"
                    value={formData.hseSignature}
                    onChange={handleChange}
                    placeholder="Full name (acts as signature)"
                    className="w-full border-b border-[#dde3ec] p-1 focus:border-[#C49A28] outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase">Date</label>
                  <input
                    type="date"
                    name="hseDate"
                    value={formData.hseDate}
                    onChange={handleChange}
                    className="w-full border-b border-[#dde3ec] p-1 focus:border-[#C49A28] outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`
                px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow-lg transition-all
                ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#C49A28] hover:shadow-xl active:transform active:scale-95"}
              `}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : "Submit Survey / إرسال الاستبيان"}
            </button>
          </div>
        </form>

        {/* Footer Revision Info */}
        <div className="mt-12 pt-8 border-t border-[#dde3ec] text-[10px] text-gray-400 flex justify-between">
          <div>© True East Mining Company</div>
          <div>TE-IMS-FRM-HSE-023 | Rev01 | April 2026</div>
        </div>
      </div>
    </Layout>
  );
}
