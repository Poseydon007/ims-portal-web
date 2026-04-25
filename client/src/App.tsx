import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

// Legacy document pages
import POL_GOV_001 from "./pages/documents/POL_GOV_001";
import PLN_GOV_000 from "./pages/documents/PLN_GOV_000";

// SOP pages
import SOP_GEO_001 from "./pages/documents/SOP_GEO_001";
import SOP_HSE_001 from "./pages/documents/SOP_HSE_001";
import SOP_HSE_002 from "./pages/documents/SOP_HSE_002";
import SOP_HSE_003 from "./pages/documents/SOP_HSE_003";
import SOP_HSE_004 from "./pages/documents/SOP_HSE_004";
import SOP_LOG_001 from "./pages/documents/SOP_LOG_001";
import SOP_MAINT_001 from "./pages/documents/SOP_MAINT_001";
import SOP_MAINT_002 from "./pages/documents/SOP_MAINT_002";
import SOP_OPS_001 from "./pages/documents/SOP_OPS_001";
import SOP_OPS_002 from "./pages/documents/SOP_OPS_002";

// POL pages
import TE_IMS_POL_GOV_002 from "./pages/documents/TE_IMS_POL_GOV_002";
import TE_IMS_POL_HSE_001 from "./pages/documents/TE_IMS_POL_HSE_001";
import TE_IMS_POL_LC_001 from "./pages/documents/TE_IMS_POL_LC_001";
import POL_GOV_003 from "./pages/documents/POL_GOV_003";
import POL_GOV_004 from "./pages/documents/POL_GOV_004";

// PLN pages
import PLN_SYS_001 from "./pages/documents/PLN_SYS_001";
import PLN_HSE_002 from "./pages/documents/PLN_HSE_002";
import TE_IMS_PLN_HSE_001 from "./pages/documents/TE_IMS_PLN_HSE_001";
import TE_IMS_PLN_HSE_003 from "./pages/documents/TE_IMS_PLN_HSE_003";

// REF pages
import TE_IMS_REF_HSE_001 from "./pages/documents/TE_IMS_REF_HSE_001";
import TE_IMS_REF_HSE_002 from "./pages/documents/TE_IMS_REF_HSE_002";
import TE_IMS_REF_SYS_000 from "./pages/documents/TE_IMS_REF_SYS_000";
import TE_IMS_REF_SYS_001 from "./pages/documents/TE_IMS_REF_SYS_001";
import TE_IMS_REF_SYS_002 from "./pages/documents/TE_IMS_REF_SYS_002";
import REF_SYS_003 from "./pages/documents/REF_SYS_003";
import REF_SYS_004 from "./pages/documents/REF_SYS_004";
import REF_SYS_005 from "./pages/documents/REF_SYS_005";

// PROC pages
import TE_IMS_PROC_HSE_001 from "./pages/documents/TE_IMS_PROC_HSE_001";
import TE_IMS_PROC_HSE_002 from "./pages/documents/TE_IMS_PROC_HSE_002";
import TE_IMS_PROC_HSE_003 from "./pages/documents/TE_IMS_PROC_HSE_003";
import TE_IMS_PROC_HSE_004 from "./pages/documents/TE_IMS_PROC_HSE_004";
import TE_IMS_PROC_HSE_006 from "./pages/documents/TE_IMS_PROC_HSE_006";
import TE_IMS_PROC_HSE_007 from "./pages/documents/TE_IMS_PROC_HSE_007";
import TE_IMS_PROC_HSE_008 from "./pages/documents/TE_IMS_PROC_HSE_008";
import TE_IMS_PROC_HSE_009 from "./pages/documents/TE_IMS_PROC_HSE_009";
import TE_IMS_PROC_HSE_010 from "./pages/documents/TE_IMS_PROC_HSE_010";
import TE_IMS_PROC_HSE_011 from "./pages/documents/TE_IMS_PROC_HSE_011";
import TE_IMS_PROC_HSE_012 from "./pages/documents/TE_IMS_PROC_HSE_012";
import TE_IMS_PROC_HSE_013 from "./pages/documents/TE_IMS_PROC_HSE_013";
import TE_IMS_PROC_HSE_014 from "./pages/documents/TE_IMS_PROC_HSE_014";
import TE_IMS_PROC_HSE_015 from "./pages/documents/TE_IMS_PROC_HSE_015";
import TE_IMS_PROC_HSE_016 from "./pages/documents/TE_IMS_PROC_HSE_016";
import TE_IMS_PROC_HSE_017 from "./pages/documents/TE_IMS_PROC_HSE_017";
import TE_IMS_PROC_HSE_018 from "./pages/documents/TE_IMS_PROC_HSE_018";
import TE_IMS_PROC_HSE_019 from "./pages/documents/TE_IMS_PROC_HSE_019";
import TE_IMS_PROC_LOG_001 from "./pages/documents/TE_IMS_PROC_LOG_001";
import TE_IMS_PROC_LOG_002 from "./pages/documents/TE_IMS_PROC_LOG_002";
import TE_IMS_PROC_MAINT_001 from "./pages/documents/TE_IMS_PROC_MAINT_001";
import TE_IMS_PROC_OPS_001 from "./pages/documents/TE_IMS_PROC_OPS_001";
import TE_IMS_PROC_SCM_001 from "./pages/documents/TE_IMS_PROC_SCM_001";
import TE_IMS_PROC_SEC_001 from "./pages/documents/TE_IMS_PROC_SEC_001";
import TE_IMS_PROC_SYS_001 from "./pages/documents/TE_IMS_PROC_SYS_001";
import TE_IMS_PROC_SYS_002 from "./pages/documents/TE_IMS_PROC_SYS_002";
import TE_IMS_PROC_SYS_003 from "./pages/documents/TE_IMS_PROC_SYS_003";
import TE_IMS_PROC_SYS_004 from "./pages/documents/TE_IMS_PROC_SYS_004";
import TE_IMS_PROC_SYS_005 from "./pages/documents/TE_IMS_PROC_SYS_005";
import TE_IMS_PROC_SYS_006 from "./pages/documents/TE_IMS_PROC_SYS_006";
import TE_IMS_PROC_SYS_008 from "./pages/documents/TE_IMS_PROC_SYS_008";
import TE_IMS_PROC_SYS_009 from "./pages/documents/TE_IMS_PROC_SYS_009";
import TE_IMS_PROC_TRN_001 from "./pages/documents/TE_IMS_PROC_TRN_001";

// Forms
import FRM_HSE_001 from "@/pages/forms/FRM_HSE_001";
import FRM_HSE_002 from "@/pages/forms/FRM_HSE_002";
import FRM_HSE_003 from "@/pages/forms/FRM_HSE_003";
import FRM_HSE_004 from "@/pages/forms/FRM_HSE_004";
import FRM_HSE_006 from "@/pages/forms/FRM_HSE_006";
import FRM_HSE_007 from "@/pages/forms/FRM_HSE_007";
import FRM_HSE_009 from "@/pages/forms/FRM_HSE_009";
import FRM_HSE_010 from "@/pages/forms/FRM_HSE_010";
import FRM_HSE_011 from "@/pages/forms/FRM_HSE_011";
import FRM_HSE_012 from "@/pages/forms/FRM_HSE_012";
import FRM_HSE_013 from "@/pages/forms/FRM_HSE_013";
import FRM_HSE_014 from "@/pages/forms/FRM_HSE_014";
import FRM_HSE_015 from "@/pages/forms/FRM_HSE_015";
import FRM_HSE_016 from "@/pages/forms/FRM_HSE_016";
import FRM_HSE_017 from "@/pages/forms/FRM_HSE_017";
import FRM_HSE_018 from "@/pages/forms/FRM_HSE_018";
import FRM_HSE_019 from "@/pages/forms/FRM_HSE_019";
import FRM_HSE_020 from "@/pages/forms/FRM_HSE_020";
import FRM_HSE_021 from "@/pages/forms/FRM_HSE_021";
import FRM_HSE_022 from "@/pages/forms/FRM_HSE_022";
import FRM_HSE_023 from "@/pages/forms/FRM_HSE_023";
import FRM_HSE_024 from "@/pages/forms/FRM_HSE_024";
import FRM_HSE_025 from "@/pages/forms/FRM_HSE_025";
import FRM_HSE_026 from "@/pages/forms/FRM_HSE_026";
import FRM_HSE_027 from "@/pages/forms/FRM_HSE_027";
import FRM_HSE_028 from "@/pages/forms/FRM_HSE_028";
import FRM_HSE_029 from "@/pages/forms/FRM_HSE_029";
import FRM_HSE_030 from "@/pages/forms/FRM_HSE_030";
import FRM_HSE_031 from "@/pages/forms/FRM_HSE_031";
import FRM_HSE_032 from "@/pages/forms/FRM_HSE_032";
import FRM_HSE_033 from "@/pages/forms/FRM_HSE_033";
import FRM_HSE_034 from "@/pages/forms/FRM_HSE_034";
import FRM_HSE_035 from "@/pages/forms/FRM_HSE_035";
import FRM_HSE_036 from "@/pages/forms/FRM_HSE_036";
import FRM_HSE_037 from "@/pages/forms/FRM_HSE_037";
import FRM_HSE_039 from "@/pages/forms/FRM_HSE_039";
import FRM_HSE_040 from "@/pages/forms/FRM_HSE_040";
import FRM_LOG_001 from "@/pages/forms/FRM_LOG_001";
import FRM_LOG_002 from "@/pages/forms/FRM_LOG_002";
import FRM_MAINT_001 from "@/pages/forms/FRM_MAINT_001";
import FRM_MAINT_002 from "@/pages/forms/FRM_MAINT_002";
import FRM_MAINT_003 from "@/pages/forms/FRM_MAINT_003";
import FRM_OPS_001 from "@/pages/forms/FRM_OPS_001";
import FRM_OPS_002 from "@/pages/forms/FRM_OPS_002";
import FRM_SEC_001 from "@/pages/forms/FRM_SEC_001";
import FRM_SEC_002 from "@/pages/forms/FRM_SEC_002";
import FRM_SYS_001 from "@/pages/forms/FRM_SYS_001";
import FRM_SYS_002 from "@/pages/forms/FRM_SYS_002";
import FRM_SYS_003 from "@/pages/forms/FRM_SYS_003";
import FRM_SYS_005 from "@/pages/forms/FRM_SYS_005";
import FRM_SYS_006 from "@/pages/forms/FRM_SYS_006";
import FRM_TRN_002 from "@/pages/forms/FRM_TRN_002";
import FRM_TRN_003 from "@/pages/forms/FRM_TRN_003";

// Print view
import SubmissionPrintView from "./pages/SubmissionPrintView";

// Admin
import SubmissionsAdmin from "./pages/admin/SubmissionsAdmin";
import AllSubmissionsAdmin from "./pages/admin/AllSubmissionsAdmin";
import UserManagement from "./pages/admin/UserManagement";
import ApprovalQueue from "./pages/ApprovalQueue";

// Auth
import Login from "./pages/Login";

// Education
import Education from "./pages/Education";
import EducationTopic from "./pages/EducationTopic";

function Router() {
  return (
    <Switch>
      {/* Auth */}
      <Route path="/login" component={Login} />

      {/* Level 1 — Landing page */}
      <Route path="/" component={Home} />

      {/* ── Document view pages (must come before category route) ── */}

      {/* Legacy POL/PLN */}
      <Route path="/docs/pol/TE-IMS-POL-GOV-001" component={POL_GOV_001} />
      <Route path="/docs/pln/TE-IMS-PLN-GOV-000" component={PLN_GOV_000} />

      {/* POL */}
      <Route path="/docs/pol/TE-IMS-POL-GOV-002" component={TE_IMS_POL_GOV_002} />
      <Route path="/docs/pol/TE-IMS-POL-HSE-001" component={TE_IMS_POL_HSE_001} />
      <Route path="/docs/pol/TE-IMS-POL-LC-001" component={TE_IMS_POL_LC_001} />
      <Route path="/docs/pol/TE-IMS-POL-GOV-003" component={POL_GOV_003} />
      <Route path="/docs/pol/TE-IMS-POL-GOV-004" component={POL_GOV_004} />

      {/* PLN */}
      <Route path="/docs/pln/TE-IMS-PLN-SYS-001" component={PLN_SYS_001} />
      <Route path="/docs/pln/TE-IMS-PLN-HSE-002" component={PLN_HSE_002} />
      <Route path="/docs/pln/TE-IMS-PLN-HSE-001" component={TE_IMS_PLN_HSE_001} />
      <Route path="/docs/pln/TE-IMS-PLN-HSE-003" component={TE_IMS_PLN_HSE_003} />

      {/* REF */}
      <Route path="/docs/ref/TE-IMS-REF-HSE-001" component={TE_IMS_REF_HSE_001} />
      <Route path="/docs/ref/TE-IMS-REF-HSE-002" component={TE_IMS_REF_HSE_002} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-000" component={TE_IMS_REF_SYS_000} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-001" component={TE_IMS_REF_SYS_001} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-002" component={TE_IMS_REF_SYS_002} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-003" component={REF_SYS_003} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-004" component={REF_SYS_004} />
      <Route path="/docs/ref/TE-IMS-REF-SYS-005" component={REF_SYS_005} />

      {/* SOP */}
      <Route path="/docs/sop/TE-IMS-SOP-GEO-001" component={SOP_GEO_001} />
      <Route path="/docs/sop/TE-IMS-SOP-HSE-001" component={SOP_HSE_001} />
      <Route path="/docs/sop/TE-IMS-SOP-HSE-002" component={SOP_HSE_002} />
      <Route path="/docs/sop/TE-IMS-SOP-HSE-003" component={SOP_HSE_003} />
      <Route path="/docs/sop/TE-IMS-SOP-HSE-004" component={SOP_HSE_004} />
      <Route path="/docs/sop/TE-IMS-SOP-LOG-001" component={SOP_LOG_001} />
      <Route path="/docs/sop/TE-IMS-SOP-MAINT-001" component={SOP_MAINT_001} />
      <Route path="/docs/sop/TE-IMS-SOP-MAINT-002" component={SOP_MAINT_002} />
      <Route path="/docs/sop/TE-IMS-SOP-OPS-001" component={SOP_OPS_001} />
      <Route path="/docs/sop/TE-IMS-SOP-OPS-002" component={SOP_OPS_002} />

      {/* PROC */}
      <Route path="/docs/proc/TE-IMS-PROC-HSE-001" component={TE_IMS_PROC_HSE_001} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-002" component={TE_IMS_PROC_HSE_002} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-003" component={TE_IMS_PROC_HSE_003} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-004" component={TE_IMS_PROC_HSE_004} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-006" component={TE_IMS_PROC_HSE_006} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-007" component={TE_IMS_PROC_HSE_007} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-008" component={TE_IMS_PROC_HSE_008} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-009" component={TE_IMS_PROC_HSE_009} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-010" component={TE_IMS_PROC_HSE_010} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-011" component={TE_IMS_PROC_HSE_011} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-012" component={TE_IMS_PROC_HSE_012} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-013" component={TE_IMS_PROC_HSE_013} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-014" component={TE_IMS_PROC_HSE_014} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-015" component={TE_IMS_PROC_HSE_015} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-016" component={TE_IMS_PROC_HSE_016} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-017" component={TE_IMS_PROC_HSE_017} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-018" component={TE_IMS_PROC_HSE_018} />
      <Route path="/docs/proc/TE-IMS-PROC-HSE-019" component={TE_IMS_PROC_HSE_019} />
      <Route path="/docs/proc/TE-IMS-PROC-LOG-001" component={TE_IMS_PROC_LOG_001} />
      <Route path="/docs/proc/TE-IMS-PROC-LOG-002" component={TE_IMS_PROC_LOG_002} />
      <Route path="/docs/proc/TE-IMS-PROC-MAINT-001" component={TE_IMS_PROC_MAINT_001} />
      <Route path="/docs/proc/TE-IMS-PROC-OPS-001" component={TE_IMS_PROC_OPS_001} />
      <Route path="/docs/proc/TE-IMS-PROC-SCM-001" component={TE_IMS_PROC_SCM_001} />
      <Route path="/docs/proc/TE-IMS-PROC-SEC-001" component={TE_IMS_PROC_SEC_001} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-001" component={TE_IMS_PROC_SYS_001} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-002" component={TE_IMS_PROC_SYS_002} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-003" component={TE_IMS_PROC_SYS_003} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-004" component={TE_IMS_PROC_SYS_004} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-005" component={TE_IMS_PROC_SYS_005} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-006" component={TE_IMS_PROC_SYS_006} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-008" component={TE_IMS_PROC_SYS_008} />
      <Route path="/docs/proc/TE-IMS-PROC-SYS-009" component={TE_IMS_PROC_SYS_009} />
      <Route path="/docs/proc/TE-IMS-PROC-TRN-001" component={TE_IMS_PROC_TRN_001} />

      {/* Active Forms */}
      <Route path="/forms/frm-hse-001" component={FRM_HSE_001} />
      <Route path="/forms/frm-hse-002" component={FRM_HSE_002} />
      <Route path="/forms/frm-hse-003" component={FRM_HSE_003} />
      <Route path="/forms/frm-hse-004" component={FRM_HSE_004} />
      <Route path="/forms/frm-hse-006" component={FRM_HSE_006} />
      <Route path="/forms/frm-hse-007" component={FRM_HSE_007} />
      <Route path="/forms/frm-hse-009" component={FRM_HSE_009} />
      <Route path="/forms/frm-hse-010" component={FRM_HSE_010} />
      <Route path="/forms/frm-hse-011" component={FRM_HSE_011} />
      <Route path="/forms/frm-hse-012" component={FRM_HSE_012} />
      <Route path="/forms/frm-hse-013" component={FRM_HSE_013} />
      <Route path="/forms/frm-hse-014" component={FRM_HSE_014} />
      <Route path="/forms/frm-hse-015" component={FRM_HSE_015} />
      <Route path="/forms/frm-hse-016" component={FRM_HSE_016} />
      <Route path="/forms/frm-hse-017" component={FRM_HSE_017} />
      <Route path="/forms/frm-hse-018" component={FRM_HSE_018} />
      <Route path="/forms/frm-hse-019" component={FRM_HSE_019} />
      <Route path="/forms/frm-hse-020" component={FRM_HSE_020} />
      <Route path="/forms/frm-hse-021" component={FRM_HSE_021} />
      <Route path="/forms/frm-hse-022" component={FRM_HSE_022} />
      <Route path="/forms/frm-hse-023" component={FRM_HSE_023} />
      <Route path="/forms/frm-hse-024" component={FRM_HSE_024} />
      <Route path="/forms/frm-hse-025" component={FRM_HSE_025} />
      <Route path="/forms/frm-hse-026" component={FRM_HSE_026} />
      <Route path="/forms/frm-hse-027" component={FRM_HSE_027} />
      <Route path="/forms/frm-hse-028" component={FRM_HSE_028} />
      <Route path="/forms/frm-hse-029" component={FRM_HSE_029} />
      <Route path="/forms/frm-hse-030" component={FRM_HSE_030} />
      <Route path="/forms/frm-hse-031" component={FRM_HSE_031} />
      <Route path="/forms/frm-hse-032" component={FRM_HSE_032} />
      <Route path="/forms/frm-hse-033" component={FRM_HSE_033} />
      <Route path="/forms/frm-hse-034" component={FRM_HSE_034} />
      <Route path="/forms/frm-hse-035" component={FRM_HSE_035} />
      <Route path="/forms/frm-hse-036" component={FRM_HSE_036} />
      <Route path="/forms/frm-hse-037" component={FRM_HSE_037} />
      <Route path="/forms/frm-hse-039" component={FRM_HSE_039} />
      <Route path="/forms/frm-hse-040" component={FRM_HSE_040} />
      <Route path="/forms/frm-log-001" component={FRM_LOG_001} />
      <Route path="/forms/frm-log-002" component={FRM_LOG_002} />
      <Route path="/forms/frm-maint-001" component={FRM_MAINT_001} />
      <Route path="/forms/frm-maint-002" component={FRM_MAINT_002} />
      <Route path="/forms/frm-maint-003" component={FRM_MAINT_003} />
      <Route path="/forms/frm-ops-001" component={FRM_OPS_001} />
      <Route path="/forms/frm-ops-002" component={FRM_OPS_002} />
      <Route path="/forms/frm-sec-001" component={FRM_SEC_001} />
      <Route path="/forms/frm-sec-002" component={FRM_SEC_002} />
      <Route path="/forms/frm-sys-001" component={FRM_SYS_001} />
      <Route path="/forms/frm-sys-002" component={FRM_SYS_002} />
      <Route path="/forms/frm-sys-003" component={FRM_SYS_003} />
      <Route path="/forms/frm-sys-005" component={FRM_SYS_005} />
      <Route path="/forms/frm-sys-006" component={FRM_SYS_006} />
      <Route path="/forms/frm-trn-002" component={FRM_TRN_002} />
      <Route path="/forms/frm-trn-003" component={FRM_TRN_003} />

      {/* Education & Learning */}
      <Route path="/education" component={Education} />
      <Route path="/education/:slug" component={EducationTopic} />

      {/* Admin */}
      <Route path="/admin/submissions" component={SubmissionsAdmin} />
      <Route path="/admin/all-submissions" component={AllSubmissionsAdmin} />
      <Route path="/admin/users" component={UserManagement} />

      {/* Approval Queue — supervisors and admins */}
      <Route path="/approvals" component={ApprovalQueue} />

      {/* Print / PDF view for a submission */}
      <Route path="/submissions/:submissionId/print" component={SubmissionPrintView} />

      {/* Level 2 — Category list pages */}
      <Route path="/docs/:slug" component={CategoryPage} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
