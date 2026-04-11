// Design: Clean Light Corporate — navy #0E2841, gold #C49A28, Nunito Sans
// TopNav: dark navy bar with white logo, gold bottom border
// Footer: dark navy with white text, ghost logo watermark

import { Link, useLocation } from "wouter";
import { LOGO_WHITE } from "@/lib/imsData";

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

export function TopNav() {
  return (
    <header
      style={{ backgroundColor: "#0E2841", borderBottom: "3px solid #C49A28" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="container flex items-center justify-between h-14">
        {/* Left: Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <img
            src={LOGO_WHITE}
            alt="True East Mining Company"
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
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

        {/* Right: Portal label */}
        <div className="text-right">
          <div className="text-white text-xs font-semibold tracking-widest uppercase opacity-80">
            IMS Document Portal
          </div>
          <div className="text-white text-xs opacity-40 tracking-wide">
            Internal Use Only
          </div>
        </div>
      </div>
    </header>
  );
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      className="border-b"
      style={{ backgroundColor: "#f4f6f9", borderColor: "#dde3ec" }}
    >
      <div className="container flex items-center gap-1.5 h-9 text-xs">
        <Link href="/" style={{ color: "#0E2841" }} className="hover:underline font-medium">
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span style={{ color: "#8a9ab0" }}>›</span>
            {item.href ? (
              <Link href={item.href} style={{ color: "#0E2841" }} className="hover:underline font-medium">
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#4a5568" }} className="font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{ backgroundColor: "#0E2841" }}
      className="relative overflow-hidden"
    >
      {/* Watermark logo */}
      <div
        className="absolute right-0 top-0 h-full flex items-center pr-8 pointer-events-none select-none"
        style={{ opacity: 0.06 }}
      >
        <img src={LOGO_WHITE} alt="" className="h-32 w-auto" />
      </div>
      <div className="container py-8 relative z-10">
        <h1 className="text-white text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-white/60 text-sm mt-1 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0E2841", borderTop: "1px solid rgba(196,154,40,0.3)" }}
      className="mt-auto"
    >
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={LOGO_WHITE} alt="True East" className="h-6 w-auto opacity-50" />
          <div>
            <div className="text-white/60 text-xs">
              True East Mining Company &nbsp;·&nbsp; Integrated Management System
            </div>
            <div className="text-white/30 text-xs mt-0.5">
              Confidential — Internal Use Only
            </div>
          </div>
        </div>
        <div className="text-white/25 text-xs text-right">
          <div>IMS Document Portal</div>
          <div className="mt-0.5">© {new Date().getFullYear()} True East Mining Company</div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children, breadcrumbs, title, subtitle }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
      {title && <PageHeader title={title} subtitle={subtitle} />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
