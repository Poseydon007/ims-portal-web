// HR Service client — fetches employee data from https://hr.trueast-irp.cloud
// IMS portal key scope: read:profile + read:internal
// Never import this on the client — server-side only.

const HR_BASE = (process.env.HR_SERVICE_URL ?? "https://hr.trueast-irp.cloud").replace(/\/$/, "");
const HR_KEY  = process.env.HR_SERVICE_KEY ?? "";

export interface HrEmployee {
  uuid:               string;
  employeeCode:       string | null;
  companyEmail:       string | null;
  status:             "active" | "inactive" | "on_leave" | "terminated";
  fullName:           string;
  preferredName:      string | null;
  department:         string | null;
  jobTitle:           string | null;
  profilePictureUrl:  string | null;
  location:           string | null;
  timezone:           string | null;
  workerType:         "employee" | "subcontractor" | "consultant";
  sponsorCompany:     string | null;
  // read:internal fields
  hireDate:           string | null;
  contractType:       string | null;
  costCenter:         string | null;
  managerId:          number | null;
  personalPhone:      string | null;
}

async function hrFetch<T>(path: string): Promise<T | null> {
  if (!HR_KEY) {
    console.warn("[HR Client] HR_SERVICE_KEY not set — skipping fetch");
    return null;
  }
  try {
    const res = await fetch(`${HR_BASE}${path}`, {
      headers: { Authorization: `Bearer ${HR_KEY}` },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch (err) {
    console.error("[HR Client] fetch failed:", err instanceof Error ? err.message : err);
    return null;
  }
}

export async function getHrEmployee(uuid: string): Promise<HrEmployee | null> {
  return hrFetch<HrEmployee>(`/v1/employees/${uuid}`);
}

export async function getHrEmployeeByDepartment(department: string): Promise<HrEmployee[]> {
  const result = await hrFetch<HrEmployee[]>(`/v1/employees?department=${encodeURIComponent(department)}&status=active`);
  return result ?? [];
}

export async function getAllHrEmployees(opts?: { search?: string; department?: string; status?: string }): Promise<HrEmployee[]> {
  const params = new URLSearchParams();
  if (opts?.search)     params.set("search",     opts.search);
  if (opts?.department) params.set("department", opts.department);
  if (opts?.status)     params.set("status",     opts.status);
  const qs = params.toString() ? `?${params}` : "";
  const result = await hrFetch<HrEmployee[]>(`/v1/employees${qs}`);
  return result ?? [];
}
