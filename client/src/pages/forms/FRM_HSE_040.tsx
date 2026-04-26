import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Waste Handling and Disposal Schedule",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
        {
          type: "panel",
          name: "scheduleDetails",
          title: "1. Schedule Details",
          elements: [
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true
            },
            {
              type: "text",
              name: "reportingPeriod",
              title: "Reporting Period",
              isRequired: true,
              placeholder: "e.g., April 2026"
            },
            {
              type: "text",
              name: "preparedBy",
              title: "Prepared By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "preparedByEmployeeId",
              title: "Prepared By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", "Management", "Quality Assurance", "Environmental", "Training & Competency", "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            }
          ]
        },
        {
          type: "html",
          name: "regulatoryNote",
          html: "<div style='padding: 15px; background-color: #f8f9fa; border: 1px solid #dee2e6; border-left: 5px solid #007bff; border-radius: 4px;'><p style='margin: 0; font-weight: bold; color: #007bff;'>Regulatory Note:</p><p style='margin: 5px 0 0; color: #495057;'>H = Hazardous | NH = Non-Hazardous. All waste disposal must comply with Saudi Environmental Regulations and NCEC requirements. Waste manifests must be maintained for all hazardous waste removals.</p></div>"
        },
        {
          type: "matrixdynamic",
          name: "wasteDisposalSchedule",
          title: "3. Waste Disposal Schedule",
          description: "Review and update the pre-populated waste types. Add additional rows as needed.",
          columns: [
            { name: "no", title: "No.", cellType: "text", width: "50px" },
            { name: "wasteType", title: "Waste Type", cellType: "text", isRequired: true, width: "200px" },
            { 
              name: "class", 
              title: "Class", 
              cellType: "dropdown", 
              isRequired: true,
              choices: ["H - Hazardous", "NH - Non-Hazardous", "H/NH - Mixed"],
              width: "150px"
            },
            { name: "storageLocation", title: "Storage Location", cellType: "text", isRequired: true, width: "180px" },
            { name: "handlingMethod", title: "Handling Method", cellType: "text", isRequired: true, width: "220px" },
            { name: "disposalMethod", title: "Disposal Method", cellType: "text", isRequired: true, width: "200px" },
            { name: "frequency", title: "Frequency", cellType: "text", isRequired: true, width: "120px" },
            { name: "responsible", title: "Responsible", cellType: "text", isRequired: true, width: "150px" },
            { name: "regulatoryNotes", title: "Regulatory Reference / Notes", cellType: "text", width: "200px" }
          ],
          minRowCount: 12,
          rowCount: 12,
          addRowText: "+ Add Waste Type",
          defaultValue: [
            { no: "1", wasteType: "Drill cuttings", class: "NH - Non-Hazardous", storageLocation: "Designated cuttings pit", handlingMethod: "Collect in skip bins; avoid soil contact", disposalMethod: "Approved landfill / on-site burial", frequency: "Per hole completion", responsible: "Drill Supervisor" },
            { no: "2", wasteType: "Used drilling fluids / mud", class: "H - Hazardous", storageLocation: "Lined mud pit / tanks", handlingMethod: "Contain in lined sumps; no ground discharge", disposalMethod: "Licensed waste contractor removal", frequency: "Monthly / pit full", responsible: "HSE Officer" },
            { no: "3", wasteType: "Used engine oil & lubricants", class: "H - Hazardous", storageLocation: "Bunded oil store area", handlingMethod: "Drain into sealed containers; use drip trays", disposalMethod: "Licensed oil recycler collection", frequency: "Monthly", responsible: "Maintenance Supervisor" },
            { no: "4", wasteType: "Fuel spill residue / contaminated soil", class: "H - Hazardous", storageLocation: "Spill kit containment area", handlingMethod: "Absorb with spill kits; bag contaminated soil", disposalMethod: "Licensed hazardous waste disposal", frequency: "As required", responsible: "HSE Officer" },
            { no: "5", wasteType: "Hydraulic fluid waste", class: "H - Hazardous", storageLocation: "Bunded chemical store", handlingMethod: "Sealed drums; avoid mixing with other fluids", disposalMethod: "Licensed hazardous waste contractor", frequency: "Quarterly", responsible: "Maintenance Supervisor" },
            { no: "6", wasteType: "Empty chemical containers", class: "H - Hazardous", storageLocation: "Chemical rinsate area", handlingMethod: "Triple-rinse; mark as rinsed; puncture", disposalMethod: "Licensed hazardous waste disposal", frequency: "Monthly", responsible: "Store Manager" },
            { no: "7", wasteType: "General domestic waste", class: "NH - Non-Hazardous", storageLocation: "Camp waste bins / skips", handlingMethod: "Segregate from hazardous; bag and seal", disposalMethod: "Municipal collection / approved landfill", frequency: "Weekly", responsible: "Camp Supervisor" },
            { no: "8", wasteType: "Scrap metal / used parts", class: "NH - Non-Hazardous", storageLocation: "Scrap yard / laydown area", handlingMethod: "Segregate by type; keep area tidy", disposalMethod: "Scrap metal recycler collection", frequency: "Quarterly", responsible: "Maintenance Supervisor" },
            { no: "9", wasteType: "Used PPE (contaminated)", class: "H/NH - Mixed", storageLocation: "Designated PPE disposal bin", handlingMethod: "Bag separately; label if contaminated", disposalMethod: "Licensed waste contractor / landfill", frequency: "Monthly", responsible: "HSE Officer" },
            { no: "10", wasteType: "Waste water / grey water", class: "NH - Non-Hazardous", storageLocation: "Grey water holding tank", handlingMethod: "No ground discharge; contain in tanks", disposalMethod: "Authorised tanker removal", frequency: "Weekly", responsible: "Camp Supervisor" },
            { no: "11", wasteType: "Medical / first aid waste", class: "H - Hazardous", storageLocation: "Sharps bin / sealed bags", handlingMethod: "Handle with gloves; seal in designated bags", disposalMethod: "Licensed medical waste contractor", frequency: "Monthly", responsible: "First Aider / HSE" },
            { no: "12", wasteType: "Used batteries", class: "H - Hazardous", storageLocation: "Designated battery store", handlingMethod: "Store upright; prevent short circuit", disposalMethod: "Licensed battery recycler", frequency: "Quarterly", responsible: "Maintenance Supervisor" }
          ]
        },
        {
          type: "panel",
          name: "submittedBy",
          title: "4. Submitted By",
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
  showPrevButton: false,
};

export default function FRM_HSE_040() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-040"
        title="Waste Handling and Disposal Schedule"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{ 
          fullName: "preparedBy", 
          employeeId: "preparedByEmployeeId", 
          department: "department", 
          position: "position" 
        }}
      />
    </Layout>
  );
}
