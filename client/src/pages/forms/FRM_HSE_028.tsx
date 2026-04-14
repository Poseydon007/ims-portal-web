import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function FRM_HSE_028() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-16 px-6 text-center">
        <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <div className="text-4xl mb-4">🔧</div>
          <h1 className="text-xl font-bold text-[#081C2E] mb-2">Monthly HSE Violation Report</h1>
          <p className="text-sm text-gray-500 mb-1 font-mono">TE-IMS-FRM-HSE-028</p>
          <p className="text-sm text-yellow-700 mt-4">This form is being rebuilt from the approved source document. Check back shortly.</p>
          <div className="mt-6">
            <Link href="/" className="text-[#C49A28] hover:underline text-sm">← Back to Portal Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
