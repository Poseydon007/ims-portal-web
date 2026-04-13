// ── FormWrapper — Shared IMS Form Shell ──
// Provides: auto-fill identity, read-only mode enforcement, visitor mode, standard sign-off block
import React from "react";
import { useImsAuth } from "@/hooks/useImsAuth";
import { canSubmitForm, FORM_MIN_ROLES, RISK_RATING_COLORS, RISK_RATING_LABELS, calculateRiskRating, LIKELIHOOD_OPTIONS, CONSEQUENCE_OPTIONS, DEPARTMENTS } from "@/lib/formConstants";
import { Link } from "wouter";

// ── Visitor mode detection ──
export function useVisitorMode() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("ims_visitor") === "true";
}

// ── Read-only field wrapper ──
interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}
export function FormField({ label, required, children, hint }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4a5568" }}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs" style={{ color: "#718096" }}>{hint}</p>}
    </div>
  );
}

// ── Standard text input ──
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
}
export function FormInput({ readOnly, className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      readOnly={readOnly}
      disabled={readOnly}
      className={`w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 ${readOnly ? "bg-gray-50 text-gray-500 cursor-not-allowed" : "bg-white"} ${className}`}
      style={{ borderColor: "#d1d5db", ...props.style }}
    />
  );
}

// ── Standard textarea ──
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readOnly?: boolean;
}
export function FormTextarea({ readOnly, className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      readOnly={readOnly}
      disabled={readOnly}
      rows={props.rows ?? 3}
      className={`w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 resize-y ${readOnly ? "bg-gray-50 text-gray-500 cursor-not-allowed" : "bg-white"} ${className}`}
      style={{ borderColor: "#d1d5db", ...props.style }}
    />
  );
}

// ── Standard select ──
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  readOnly?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  children?: React.ReactNode;
}
export function FormSelect({ readOnly, options, placeholder, className = "", children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      disabled={readOnly}
      className={`w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 ${readOnly ? "bg-gray-50 text-gray-500 cursor-not-allowed" : "bg-white"} ${className}`}
      style={{ borderColor: "#d1d5db", ...props.style }}
    >
      {/* Support both options array prop and children <option> elements */}
      {children ? (
        children
      ) : (
        <>
          {placeholder && <option value="">{placeholder}</option>}
          {(options ?? []).map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </>
      )}
    </select>
  );
}

// ── Department dropdown ──
interface DeptSelectProps extends Omit<SelectProps, "options"> {
  readOnly?: boolean;
}
export function DepartmentSelect({ readOnly, ...props }: DeptSelectProps) {
  return (
    <FormSelect
      {...props}
      readOnly={readOnly}
      placeholder="Select department..."
      options={DEPARTMENTS.map(d => ({ value: d, label: d }))}
    />
  );
}

// ── Risk Rating (Likelihood × Consequence) ──
interface RiskRatingProps {
  likelihood: string;
  consequence: string;
  onLikelihoodChange: (v: string) => void;
  onConsequenceChange: (v: string) => void;
  readOnly?: boolean;
  label?: string;
}
export function RiskRatingInput({ likelihood, consequence, onLikelihoodChange, onConsequenceChange, readOnly, label = "Risk Rating" }: RiskRatingProps) {
  const rating = calculateRiskRating(likelihood, consequence);
  const colorClass = rating ? RISK_RATING_COLORS[rating] : "bg-gray-100 text-gray-500 border-gray-200";
  const ratingLabel = rating ? `${rating} — ${RISK_RATING_LABELS[rating]}` : "—";

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4a5568" }}>{label}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-end">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Likelihood</label>
          <FormSelect
            value={likelihood}
            onChange={e => onLikelihoodChange(e.target.value)}
            readOnly={readOnly}
            placeholder="Select..."
            options={LIKELIHOOD_OPTIONS}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Consequence</label>
          <FormSelect
            value={consequence}
            onChange={e => onConsequenceChange(e.target.value)}
            readOnly={readOnly}
            placeholder="Select..."
            options={CONSEQUENCE_OPTIONS}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Rating</label>
          <div className={`px-3 py-2 text-sm font-bold border rounded text-center ${colorClass}`}>
            {ratingLabel}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Auto-filled identity block ──
interface IdentityBlockProps {
  user: { fullName: string; employeeId: string | null; department: string | null; position: string | null } | null;
  readOnly?: boolean;
}
export function IdentityBlock({ user, readOnly }: IdentityBlockProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded border" style={{ backgroundColor: "#f8fafc", borderColor: "#e2e8f0" }}>
      <FormField label="Full Name" required>
        <FormInput value={user?.fullName ?? ""} readOnly placeholder="Auto-filled from login" />
      </FormField>
      <FormField label="Employee ID" required>
        <FormInput value={user?.employeeId ?? ""} readOnly placeholder="Auto-filled from login" />
      </FormField>
      <FormField label="Department">
        <FormInput value={user?.department ?? ""} readOnly placeholder="Auto-filled from login" />
      </FormField>
      <FormField label="Position">
        <FormInput value={user?.position ?? ""} readOnly placeholder="Auto-filled from login" />
      </FormField>
    </div>
  );
}

// ── Standard sign-off block ──
export interface SignOffRow {
  role: string;
  name: string;
  date: string;
}
interface SignOffBlockProps {
  rows: SignOffRow[];
  onChange: (index: number, field: "name" | "date", value: string) => void;
  readOnly?: boolean;
}
export function SignOffBlock({ rows, onChange, readOnly }: SignOffBlockProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: "#081C2E" }}>
            <th className="px-3 py-2 text-left text-xs font-semibold text-white border" style={{ borderColor: "#1a3a5c" }}>Role</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-white border" style={{ borderColor: "#1a3a5c" }}>Full Name</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-white border" style={{ borderColor: "#1a3a5c" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
              <td className="px-3 py-2 font-medium border" style={{ borderColor: "#e2e8f0", color: "#2d3748", whiteSpace: "nowrap" }}>{row.role}</td>
              <td className="px-2 py-1 border" style={{ borderColor: "#e2e8f0" }}>
                <FormInput
                  value={row.name}
                  onChange={e => onChange(i, "name", e.target.value)}
                  readOnly={readOnly}
                  placeholder="Full name"
                  required={!readOnly}
                />
              </td>
              <td className="px-2 py-1 border" style={{ borderColor: "#e2e8f0" }}>
                <FormInput
                  type="date"
                  value={row.date}
                  onChange={e => onChange(i, "date", e.target.value)}
                  readOnly={readOnly}
                  required={!readOnly}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Section header ──
export function SectionHeader({ title, number }: { title: string; number?: number }) {
  return (
    <div className="flex items-center gap-2 py-2 border-b-2 mb-4" style={{ borderColor: "#C49A28" }}>
      {number !== undefined && (
        <span className="text-xs font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: "#081C2E" }}>
          {number}
        </span>
      )}
      <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: "#081C2E" }}>{title}</h3>
    </div>
  );
}

// ── Read-only banner ──
export function ReadOnlyBanner({ reason }: { reason: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded border text-sm font-medium mb-4" style={{ backgroundColor: "#fff8e1", borderColor: "#f0d98a", color: "#7a5a00" }}>
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span>{reason}</span>
    </div>
  );
}

// ── Form page header ──
interface FormHeaderProps {
  code: string;
  title: string;
  rev?: string;
  date?: string;
}
export function FormHeader({ code, title, rev = "Rev01", date = "Apr 2026" }: FormHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 pb-4 border-b mb-6" style={{ borderColor: "#e2e8f0" }}>
      <div>
        <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#C49A28" }}>
          True East Mining Company
        </div>
        <h1 className="text-xl font-extrabold leading-tight" style={{ color: "#081C2E" }}>{title}</h1>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs px-2 py-0.5 rounded font-mono font-bold" style={{ backgroundColor: "#e8edf4", color: "#081C2E" }}>{code}</span>
          <span className="text-xs" style={{ color: "#8a9ab0" }}>{rev} · {date}</span>
        </div>
      </div>
      <Link href="/" className="text-xs font-medium hover:underline shrink-0" style={{ color: "#C49A28" }}>
        ← Back to Portal
      </Link>
    </div>
  );
}

// ── useFormPermission hook ──
export function useFormPermission(formCode: string) {
  const { user, loading, isAuthenticated } = useImsAuth();
  const isVisitor = useVisitorMode();

  const canSubmit = !isVisitor && isAuthenticated && canSubmitForm(user?.role, formCode);
  const readOnly = isVisitor || !isAuthenticated || !canSubmit;

  let readOnlyReason = "";
  if (isVisitor) {
    readOnlyReason = "Visitor mode — view only. Forms cannot be submitted in visitor mode.";
  } else if (!isAuthenticated) {
    readOnlyReason = "You must be logged in to submit this form.";
  } else if (!canSubmit) {
    const minRoleLabels: Record<string, string> = { field_worker: "Field Worker", supervisor: "Supervisor", admin: "Admin" };
    const needed = FORM_MIN_ROLES[formCode] ?? "field_worker";
    readOnlyReason = `Your role (${user?.role?.replace("_", " ")}) does not have permission to submit this form. Minimum required: ${minRoleLabels[needed]}.`;
  }

  return { user, loading, isAuthenticated, canSubmit, readOnly, readOnlyReason, isVisitor };
}
