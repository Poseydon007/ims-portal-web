import Layout from "@/components/Layout";
import { Check, Minus } from "lucide-react";

const BRAND_NAVY = "#081C2E";
const BRAND_GOLD = "#C49A28";

const StatusBadge = () => (
  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
    Approved Reference
  </span>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-gray-200 sticky top-0 bg-gray-50 z-10 whitespace-nowrap">
    {children}
  </th>
);

const TableCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-4 py-3 text-sm border-b border-gray-100 whitespace-nowrap ${className}`}>
    {children}
  </td>
);

const StickyCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-4 py-3 text-sm font-medium border-b border-gray-100 sticky left-0 bg-white z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] whitespace-nowrap ${className}`}>
    {children}
  </td>
);

const IconCheck = () => <Check className="w-5 h-5 text-green-600 mx-auto" />;
const IconDash = () => <Minus className="w-5 h-5 text-gray-300 mx-auto" />;

export default function FRM_HSE_016() {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-4 pb-4" style={{ borderColor: BRAND_GOLD }}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: BRAND_NAVY }}>PPE Kit Contents Matrix</h1>
              <StatusBadge />
            </div>
            <p className="text-gray-500 font-medium">True East Mining Company — Integrated Management System</p>
          </div>
          <div className="mt-4 md:mt-0 text-right text-sm text-gray-600 font-mono bg-gray-50 p-3 rounded border border-gray-200">
            <div>Code: <span className="font-bold">TE-IMS-FRM-HSE-016</span></div>
            <div>Revision: <span className="font-bold">00</span></div>
            <div>Date: <span className="font-bold">01 March 2026</span></div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-10 rounded-r shadow-sm">
          <p className="text-blue-900 leading-relaxed">
            This matrix defines the standard contents of each PPE Kit issued to personnel based on their role, activity, and site-specific hazards.
          </p>
        </div>

        {/* Section 1: Role-Based Requirements */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND_NAVY }}>1</div>
            <h2 className="text-xl font-bold uppercase tracking-tight" style={{ color: BRAND_NAVY }}>Role-Based PPE Requirements</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-gray-200 sticky left-0 bg-gray-50 z-30 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Kit Type / Role</th>
                  <TableHeader>Hard Hat</TableHeader>
                  <TableHeader>Safety Glasses</TableHeader>
                  <TableHeader>Cut Gloves</TableHeader>
                  <TableHeader>Chem Gloves</TableHeader>
                  <TableHeader>FR / High-Vis</TableHeader>
                  <TableHeader>Steel-Toe Boots</TableHeader>
                  <TableHeader>Ear Protection</TableHeader>
                  <TableHeader>Dust/Resp</TableHeader>
                  <TableHeader>Harness</TableHeader>
                  <TableHeader>Headlamp</TableHeader>
                  <TableHeader>Notes</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StickyCell>Driller – Day Shift</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">✔ (Clear/Dark)</TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">FFP2</TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="italic text-gray-500">Standard drilling PPE</TableCell>
                </tr>
                <tr>
                  <StickyCell>Driller – Night Shift</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">✔ (Clear/Dark)</TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">FFP2</TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="italic text-gray-500">Headlamp mandatory</TableCell>
                </tr>
                <tr>
                  <StickyCell>Rig Mechanic / Workshop</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">FFP3 (if dusty/chem)</TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="italic text-gray-500">Respirator if required</TableCell>
                </tr>
                <tr>
                  <StickyCell>Supervisor / HSE Personnel</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">FFP2</TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="italic text-gray-500">Field standard</TableCell>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Activity-Based Requirements */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND_NAVY }}>2</div>
            <h2 className="text-xl font-bold uppercase tracking-tight" style={{ color: BRAND_NAVY }}>Activity-Based PPE Requirements</h2>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b border-gray-200 sticky left-0 bg-gray-50 z-30 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Activity</th>
                  <TableHeader>Hard Hat</TableHeader>
                  <TableHeader>Safety Glasses</TableHeader>
                  <TableHeader>Cut Gloves</TableHeader>
                  <TableHeader>Chem Gloves</TableHeader>
                  <TableHeader>FR / High-Vis</TableHeader>
                  <TableHeader>Steel-Toe Boots</TableHeader>
                  <TableHeader>Ear Protection</TableHeader>
                  <TableHeader>Respirator</TableHeader>
                  <TableHeader>Harness</TableHeader>
                  <TableHeader>Special Items</TableHeader>
                  <TableHeader>Notes</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StickyCell>Working at Height (&gt;1.8 m)</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="italic text-gray-500 font-medium">Harness mandatory</TableCell>
                </tr>
                <tr>
                  <StickyCell>Confined Space Entry</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">As per risk assessment</TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">Personal gas detector</TableCell>
                  <TableCell className="italic text-gray-500 font-medium">As per permit</TableCell>
                </tr>
                <tr>
                  <StickyCell>Hot Work / Welding</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">✔ (Face Shield)</TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">✔ (FR mandatory)</TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">Welding helmet, gauntlets</TableCell>
                  <TableCell className="italic text-gray-500 font-medium">As per permit</TableCell>
                </tr>
                <tr>
                  <StickyCell>General Site Visitor</StickyCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">✔ (High-Vis Vest)</TableCell>
                  <TableCell><IconCheck /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell><IconDash /></TableCell>
                  <TableCell className="text-center text-xs font-medium text-gray-700">Visitor PPE kit</TableCell>
                  <TableCell className="italic text-gray-500 font-medium">Restricted access</TableCell>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 3: Classification Key */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND_NAVY }}>3</div>
              <h2 className="text-xl font-bold uppercase tracking-tight" style={{ color: BRAND_NAVY }}>PPE Classification Key</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <div className="w-6 h-6 flex items-center justify-center"><Check className="w-5 h-5 text-green-600" /></div>
                <span className="text-sm font-medium text-gray-700"><span className="font-bold text-gray-900">Mandatory</span> — Required for the role/activity</span>
              </div>
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <div className="w-6 h-6 flex items-center justify-center"><Minus className="w-5 h-5 text-gray-300" /></div>
                <span className="text-sm font-medium text-gray-700"><span className="font-bold text-gray-900">Not required</span> — Under normal conditions</span>
              </div>
              <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                <div className="w-6 h-6 flex items-center justify-center text-xs font-bold text-blue-600 italic">PTW</div>
                <span className="text-sm font-medium text-gray-700"><span className="font-bold text-gray-900">As per permit</span> — Defined in Permit to Work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center text-xs font-bold text-blue-600 italic">FFP</div>
                <span className="text-sm font-medium text-gray-700"><span className="font-bold text-gray-900">Respirator type</span> — Based on exposure assessment</span>
              </div>
            </div>
          </section>

          {/* Section 4: Additional Notes */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND_NAVY }}>4</div>
              <h2 className="text-xl font-bold uppercase tracking-tight" style={{ color: BRAND_NAVY }}>Additional Notes</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <ul className="space-y-3 list-disc pl-5 text-sm text-gray-700 leading-relaxed">
                <li>Site-specific risk assessments (JHA / HIRA) may increase PPE requirements</li>
                <li>Respiratory protection must comply with fit-testing requirements</li>
                <li>All PPE must meet SASO / CE / ANSI standards where applicable</li>
                <li>Damaged or defective PPE must be replaced immediately</li>
                <li>PPE issuance and tracking must be recorded in <span className="font-mono font-semibold text-blue-700">TE-IMS-REG-HSE-002</span></li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400 uppercase tracking-widest">
          True East Mining Company — Confidential Reference Material
        </div>
      </div>
    </Layout>
  );
}
