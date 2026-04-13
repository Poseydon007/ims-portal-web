// Layout: TopNav + Footer + optional Breadcrumbs
// TopNav: 3-column — Logo | Nav (Home always visible + admin tabs + Education) | IMS Portal + user
// Home button always visible regardless of auth state or screen size

import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { LOGO_WHITE } from "@/lib/imsData";
import { useImsAuth } from "@/hooks/useImsAuth";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  subtitle?: string;
}

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  supervisor: "Supervisor",
  field_worker: "Field Worker",
};

export function TopNav() {
  const { user, isAuthenticated, logout, loading } = useImsAuth();
  const [location, navigate] = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const isActive = (path: string) => location === path || location.startsWith(path + "/");

  return (
    <header
      style={{ backgroundColor: "#081C2E", borderBottom: "3px solid #C49A28" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="container flex items-stretch justify-between" style={{ minHeight: "72px" }}>

        {/* ── Left: Logo + Company Name ── */}
        <Link href="/" className="flex items-center gap-3 no-underline group py-3 flex-shrink-0">
          <img
            src={LOGO_WHITE}
            alt="True East Mining Company"
            style={{ width: "52px", height: "52px", objectFit: "contain" }}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm leading-tight tracking-wide">
              TRUE EAST MINING COMPANY
            </div>
            <div style={{ color: "#C49A28" }} className="text-xs font-light tracking-widest">
              الشرق الحقيقي
            </div>
          </div>
        </Link>

        {/* ── Center: Nav — always visible ── */}
        <div className="flex flex-col items-center justify-center px-4 gap-1.5 flex-1">

          {/* Row 1: Home (always) + Admin tabs (admin only) */}
          <div className="flex items-center gap-1 flex-wrap justify-center">
            {/* HOME — always visible for all users */}
            <Link href="/">
              <span
                className="text-xs font-semibold px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                style={{
                  color: location === "/" ? "#C49A28" : "rgba(255,255,255,0.85)",
                  borderBottom: location === "/" ? "2px solid #C49A28" : "2px solid transparent",
                }}
              >
                Home
              </span>
            </Link>

            {/* Approval Queue — supervisor + admin */}
            {!loading && isAuthenticated && (user?.role === "supervisor" || user?.role === "admin") && (
              <Link href="/approvals">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                  style={{
                    color: isActive("/approvals") ? "#C49A28" : "rgba(255,255,255,0.85)",
                    borderBottom: isActive("/approvals") ? "2px solid #C49A28" : "2px solid transparent",
                  }}
                >
                  Approvals
                </span>
              </Link>
            )}

            {/* Admin-only tabs */}
            {!loading && isAuthenticated && user?.role === "admin" && (
              <>
                <Link href="/admin/submissions">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                    style={{
                      color: isActive("/admin/submissions") ? "#C49A28" : "rgba(255,255,255,0.7)",
                      borderBottom: isActive("/admin/submissions") ? "2px solid #C49A28" : "2px solid transparent",
                    }}
                  >
                    Submissions
                  </span>
                </Link>
                <Link href="/admin/users">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
                    style={{
                      color: isActive("/admin/users") ? "#C49A28" : "rgba(255,255,255,0.7)",
                      borderBottom: isActive("/admin/users") ? "2px solid #C49A28" : "2px solid transparent",
                    }}
                  >
                    Users
                  </span>
                </Link>
              </>
            )}
          </div>

          {/* Row 2: Education — glass morphism, full width, visible when logged in */}
          {!loading && isAuthenticated && user && (
            <Link href="/education" className="w-full no-underline" style={{ maxWidth: "240px" }}>
              <div
                className="relative flex items-center justify-center gap-1.5 px-3 py-1 rounded cursor-pointer overflow-hidden group/edu"
                style={{
                  background: "linear-gradient(135deg, rgba(196,154,40,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(196,154,40,0.08) 100%)",
                  border: "1px solid rgba(196,154,40,0.25)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                  transition: "all 0.25s ease",
                  width: "100%",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "linear-gradient(135deg, rgba(196,154,40,0.22) 0%, rgba(255,255,255,0.10) 50%, rgba(196,154,40,0.16) 100%)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,154,40,0.5)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(196,154,40,0.15)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "linear-gradient(135deg, rgba(196,154,40,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(196,154,40,0.08) 100%)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,154,40,0.25)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 4px rgba(0,0,0,0.2)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Shimmer sweep on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/edu:opacity-100 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
                    transition: "opacity 0.3s ease",
                  }}
                />
                <span className="text-xs font-semibold tracking-wider" style={{ color: "#C49A28", letterSpacing: "0.08em" }}>
                  EDUCATION
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* ── Right: IMS Portal label + user info stacked ── */}
        <div
          className="flex flex-col items-end justify-center py-3 pl-4 flex-shrink-0"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Portal label */}
          <div className="text-right">
            <div className="text-white text-xs font-semibold tracking-widest uppercase opacity-80">
              IMS Document Portal
            </div>
            <div className="text-white text-xs opacity-40 tracking-wide">
              Internal Use Only
            </div>
          </div>

          {/* User info + sign out — below portal label */}
          {!loading && isAuthenticated && user ? (
            <div className="flex items-center gap-2 mt-1.5">
              <div className="text-left">
                <div className="text-white text-xs font-semibold leading-tight">
                  {user.fullName}
                </div>
                <div className="text-xs" style={{ color: "#C49A28", opacity: 0.8 }}>
                  {ROLE_LABELS[user.role] ?? user.role}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs font-semibold px-2 py-0.5 rounded transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Sign Out
              </button>
            </div>
          ) : !loading ? (
            <div className="mt-1.5">
              <Link href="/login">
                <span
                  className="text-xs font-bold px-3 py-1 rounded cursor-pointer transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
                >
                  Sign In
                </span>
              </Link>
            </div>
          ) : null}
        </div>

      </div>
    </header>
  );
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      className="py-2"
      style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }}
    >
      <div className="container flex items-center gap-1.5 text-xs">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: "#8a9ab0" }} className="select-none">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="font-medium no-underline hover:underline"
                style={{ color: "#C49A28" }}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold" style={{ color: "#081C2E" }}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default function Layout({
  children,
  breadcrumbs,
}: LayoutProps) {
  const { isAuthenticated, loading } = useImsAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#081C2E" }}>
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-8 h-8 border-2 rounded-full animate-spin"
            style={{ borderColor: "rgba(196,154,40,0.3)", borderTopColor: "#C49A28" }}
          />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#081C2E" }}
      className="relative overflow-hidden"
    >
      <img
        src={LOGO_WHITE}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "200px",
          opacity: 0.04,
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <div className="container py-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-white text-xs font-bold tracking-widest uppercase">
              True East Mining Company
            </div>
            <div className="text-white/30 text-xs mt-1">
              Integrated Management System &middot; Document Portal
            </div>
          </div>
          <div className="text-white/25 text-xs text-right">
            <div>All documents are controlled. Printed copies are uncontrolled.</div>
            <div className="mt-0.5">
              &copy; {new Date().getFullYear()} True East Mining Company. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
