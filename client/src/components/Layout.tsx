// Layout: TopNav + Footer + optional Breadcrumbs
// TopNav: dark navy bar with white logo, gold bottom border, auth status
// Footer: dark navy with white text, ghost logo watermark

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
  const [, navigate] = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header
      style={{ backgroundColor: "#081C2E", borderBottom: "3px solid #C49A28" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="container flex items-center justify-between h-14">
        {/* Left: Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <img
            src={LOGO_WHITE}
            alt="True East Mining Company"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
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

        {/* Right: Auth status + Portal label */}
        <div className="flex items-center gap-4">
          {!loading && isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              {/* Nav links */}
              <div className="hidden md:flex items-center gap-2">
                <Link href="/education">
                  <span className="text-xs font-semibold px-2 py-1 rounded cursor-pointer transition-colors"
                    style={{ color: "rgba(255,255,255,0.7)", backgroundColor: "rgba(255,255,255,0.05)" }}>
                    🎓 Education
                  </span>
                </Link>
                {user.role === "admin" && (
                  <>
                    <Link href="/admin/submissions">
                      <span className="text-xs font-semibold px-2 py-1 rounded cursor-pointer transition-colors"
                        style={{ color: "#C49A28", backgroundColor: "rgba(196,154,40,0.1)" }}>
                        Submissions
                      </span>
                    </Link>
                    <Link href="/admin/users">
                      <span className="text-xs font-semibold px-2 py-1 rounded cursor-pointer transition-colors"
                        style={{ color: "#C49A28", backgroundColor: "rgba(196,154,40,0.1)" }}>
                        Users
                      </span>
                    </Link>
                  </>
                )}
              </div>
              {/* User info */}
              <div className="text-right hidden sm:block">
                <div className="text-white text-xs font-semibold leading-tight">
                  {user.fullName}
                </div>
                <div className="text-xs opacity-40" style={{ color: "#C49A28" }}>
                  {ROLE_LABELS[user.role] ?? user.role}
                </div>
              </div>
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Sign Out
              </button>
            </div>
          ) : !loading ? (
            <Link href="/login">
              <span
                className="text-xs font-bold px-3 py-1.5 rounded cursor-pointer"
                style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
              >
                Sign In
              </span>
            </Link>
          ) : null}

          <div className="text-right hidden lg:block pl-3" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-white text-xs font-semibold tracking-widest uppercase opacity-80">
              IMS Document Portal
            </div>
            <div className="text-white text-xs opacity-40 tracking-wide">
              Internal Use Only
            </div>
          </div>
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
  title,
  subtitle,
}: LayoutProps) {
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
