import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import POL_GOV_001 from "./pages/documents/POL_GOV_001";
import NearMissForm from "./pages/forms/NearMissForm";
import JHAForm from "./pages/forms/JHAForm";
import SubmissionsAdmin from "./pages/admin/SubmissionsAdmin";

function Router() {
  return (
    <Switch>
      {/* Level 1 — Landing page */}
      <Route path="/" component={Home} />

      {/* Level 3 — Document view pages (must come before category route) */}
      <Route path="/docs/pol/TE-IMS-POL-GOV-001" component={POL_GOV_001} />

      {/* Active Forms */}
      <Route path="/forms/near-miss" component={NearMissForm} />
      <Route path="/forms/jha" component={JHAForm} />

      {/* Admin */}
      <Route path="/admin/submissions" component={SubmissionsAdmin} />

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
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
