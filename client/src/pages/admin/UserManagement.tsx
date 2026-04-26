// Admin User Management — create, edit, activate/deactivate IMS portal users
import { trpc } from "@/lib/trpc";
import { useImsAuth } from "@/hooks/useImsAuth";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { can, type Role } from "@shared/permissions";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  hse_manager: "HSE Manager",
  supervisor: "Supervisor",
  field_worker: "User",
  auditor: "Auditor",
  client: "Client",
};

const ROLE_COLORS: Record<string, { backgroundColor: string; color: string }> = {
  admin:        { backgroundColor: "#fce4ec", color: "#c62828" },
  hse_manager:  { backgroundColor: "#fff3e0", color: "#e65100" },
  supervisor:   { backgroundColor: "#e3f2fd", color: "#1565c0" },
  field_worker: { backgroundColor: "#e8f5e9", color: "#2e7d32" },
  auditor:      { backgroundColor: "#f3e8ff", color: "#6b21a8" },
  client:       { backgroundColor: "#e0f2fe", color: "#075985" },
};

const STATUS_COLORS: Record<string, { backgroundColor: string; color: string }> = {
  active: { backgroundColor: "#e8f5e9", color: "#2e7d32" },
  inactive: { backgroundColor: "#ffebee", color: "#c62828" },
};

type CreateForm = {
  email: string;
  password: string;
  fullName: string;
  employeeId: string;
  role: "admin" | "hse_manager" | "supervisor" | "field_worker" | "auditor" | "client";
  department: string;
};

const emptyForm: CreateForm = {
  email: "",
  password: "",
  fullName: "",
  employeeId: "",
  role: "field_worker",
  department: "",
};

export default function UserManagement() {
  const { user, loading } = useImsAuth();
  const [, navigate] = useLocation();
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState<CreateForm>(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<CreateForm> & { status?: "active" | "inactive" }>({});

  const { data: users, isLoading, refetch } = trpc.imsAuth.listUsers.useQuery(undefined, {
    enabled: !!user && can.manageUsers(user.role as Role),
  });

  const createUser = trpc.imsAuth.createUser.useMutation({
    onSuccess: (result) => {
      if (result.success) {
        toast.success(`User ${result.user?.fullName} created successfully`);
        setShowCreate(false);
        setForm(emptyForm);
        refetch();
      } else {
        toast.error(result.error ?? "Failed to create user");
      }
    },
    onError: (e) => toast.error(e.message),
  });

  const updateUser = trpc.imsAuth.updateUser.useMutation({
    onSuccess: (result) => {
      if (result.success) {
        toast.success("User updated");
        setEditingId(null);
        setEditForm({});
        refetch();
      }
    },
    onError: (e) => toast.error(e.message),
  });

  const generateMagicLink = trpc.imsAuth.generateMagicLink.useMutation({
    onSuccess: (result) => {
      // Show the link in the toast so the admin can copy it manually if email failed.
      toast.success("Magic link sent!", {
        description: result.magicLink,
        duration: 12000,
      });
    },
    onError: (e) => toast.error(e.message ?? "Failed to generate magic link"),
  });

  const isExternalRole = (role: string) => role === "auditor" || role === "client";

  const handleSendMagicLink = (u: { id: number; fullName: string; email: string }) => {
    const ok = window.confirm(
      `Send a passwordless sign-in link to ${u.fullName} (${u.email})?\n\n` +
      `The link will be emailed and is valid for 30 days, single-use.`
    );
    if (!ok) return;
    generateMagicLink.mutate({ userId: u.id });
  };

  // Redirect if not admin (single source of truth: can.manageUsers)
  if (!loading && (!user || !can.manageUsers(user.role as Role))) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2" style={{ color: NAVY }}>Access Restricted</h2>
          <p className="text-sm mb-4" style={{ color: "#6b7a8d" }}>
            {!user ? "Please log in to access this page." : "Admin access required."}
          </p>
          <Link href={!user ? "/login" : "/"}>
            <span
              className="inline-block px-4 py-2 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {!user ? "Go to Login" : "Back to Portal"}
            </span>
          </Link>
        </div>
      </div>
    );
  }

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="text-sm" style={{ color: NAVY }}>Loading...</div>
      </div>
    );
  }

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.fullName) {
      toast.error("Email and full name are required");
      return;
    }
    // External roles (auditor / client) sign in via magic link, so we auto-fill
    // a random unguessable password to satisfy the server's password requirement.
    // The password is never communicated to the user; magic links are the only
    // documented entry path for these roles.
    let payload = form;
    if (isExternalRole(form.role)) {
      const randomPw = `mlk_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
      payload = { ...form, password: randomPw };
    } else if (!form.password) {
      toast.error("Password is required");
      return;
    }
    createUser.mutate(payload);
  };

  const handleUpdate = (id: number) => {
    if (Object.keys(editForm).length === 0) {
      setEditingId(null);
      return;
    }
    updateUser.mutate({ id, ...editForm });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Header */}
      <div style={{ backgroundColor: NAVY }}>
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-white/50 text-xs hover:text-white cursor-pointer">&larr; Portal</span>
            </Link>
            <h1 className="text-white text-lg font-bold">User Management</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs">
              Logged in as <span className="text-white font-semibold">{user?.fullName}</span>
            </span>
            <button
              onClick={() => setShowCreate(true)}
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              + New User
            </button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Create User Form */}
        {showCreate && (
          <div className="mb-6 rounded border bg-white p-5" style={{ borderColor: "#dde3ec" }}>
            <h3 className="text-sm font-bold mb-4" style={{ color: NAVY }}>Create New User</h3>
            <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>Full Name *</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded border text-sm"
                  style={{ borderColor: "#dde3ec" }}
                  placeholder="Ahmed Al-Rashid"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 rounded border text-sm"
                  style={{ borderColor: "#dde3ec" }}
                  placeholder="ahmed@trueeast.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>
                  Password {isExternalRole(form.role) ? "" : "*"}
                </label>
                {isExternalRole(form.role) ? (
                  <div
                    className="px-3 py-2 rounded border text-xs"
                    style={{ borderColor: "#f0d98a", backgroundColor: "#fffbf0", color: "#5a4a1a" }}
                  >
                    A magic link will be emailed instead of using a password.
                    Use the <strong>"Send Link"</strong> button after creating the user.
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full px-3 py-2 pr-14 rounded border text-sm"
                      style={{ borderColor: "#dde3ec" }}
                      placeholder="Min 6 characters"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-1.5 py-0.5 rounded hover:bg-gray-100"
                      style={{ color: "#6b7a8d" }}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>Employee ID</label>
                <input
                  type="text"
                  value={form.employeeId}
                  onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
                  className="w-full px-3 py-2 rounded border text-sm"
                  style={{ borderColor: "#dde3ec" }}
                  placeholder="TE-0001"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>Role *</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value as CreateForm["role"] })}
                  className="w-full px-3 py-2 rounded border text-sm"
                  style={{ borderColor: "#dde3ec" }}
                >
                  <option value="field_worker">User (basic)</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="hse_manager">HSE Manager</option>
                  <option value="admin">Admin</option>
                  <option value="auditor">Auditor (read-only)</option>
                  <option value="client">Client (tour-only)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "#6b7a8d" }}>Department</label>
                <input
                  type="text"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  className="w-full px-3 py-2 rounded border text-sm"
                  style={{ borderColor: "#dde3ec" }}
                  placeholder="HSE, Operations, etc."
                />
              </div>
              <div className="md:col-span-2 flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={createUser.isPending}
                  className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: GOLD, color: NAVY, opacity: createUser.isPending ? 0.7 : 1 }}
                >
                  {createUser.isPending ? "Creating..." : "Create User"}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowCreate(false); setForm(emptyForm); }}
                  className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border"
                  style={{ borderColor: "#dde3ec", color: "#6b7a8d" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Users Table */}
        <div className="rounded border bg-white overflow-hidden" style={{ borderColor: "#dde3ec" }}>
          <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: "#dde3ec" }}>
            <h3 className="text-sm font-bold" style={{ color: NAVY }}>
              Portal Users ({users?.length ?? 0})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ backgroundColor: "#f8f9fb" }}>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Name</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Email</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Employee ID</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Role</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Department</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Status</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Last Login</th>
                  <th className="text-left px-4 py-2.5 font-semibold" style={{ color: "#6b7a8d" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((u) => (
                  <tr key={u.id} className="border-t" style={{ borderColor: "#edf0f5" }}>
                    {editingId === u.id ? (
                      <>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            defaultValue={u.fullName}
                            onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                            className="w-full px-2 py-1 rounded border text-xs"
                            style={{ borderColor: "#dde3ec" }}
                          />
                        </td>
                        <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d" }}>{u.email}</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            defaultValue={u.employeeId ?? ""}
                            onChange={(e) => setEditForm({ ...editForm, employeeId: e.target.value })}
                            className="w-full px-2 py-1 rounded border text-xs"
                            style={{ borderColor: "#dde3ec" }}
                          />
                        </td>
                        <td className="px-4 py-2">
                          <select
                            defaultValue={u.role}
                            onChange={(e) => setEditForm({ ...editForm, role: e.target.value as CreateForm["role"] })}
                            className="px-2 py-1 rounded border text-xs"
                            style={{ borderColor: "#dde3ec" }}
                          >
                            <option value="field_worker">User (basic)</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="hse_manager">HSE Manager</option>
                            <option value="admin">Admin</option>
                            <option value="auditor">Auditor</option>
                            <option value="client">Client</option>
                          </select>
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            defaultValue={u.department ?? ""}
                            onChange={(e) => setEditForm({ ...editForm, department: e.target.value })}
                            className="w-full px-2 py-1 rounded border text-xs"
                            style={{ borderColor: "#dde3ec" }}
                          />
                        </td>
                        <td className="px-4 py-2">
                          <select
                            defaultValue={u.status}
                            onChange={(e) => setEditForm({ ...editForm, status: e.target.value as "active" | "inactive" })}
                            className="px-2 py-1 rounded border text-xs"
                            style={{ borderColor: "#dde3ec" }}
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                        <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d" }}>—</td>
                        <td className="px-4 py-2 flex gap-2">
                          <button
                            onClick={() => handleUpdate(u.id)}
                            disabled={updateUser.isPending}
                            className="px-2 py-1 rounded text-xs font-bold"
                            style={{ backgroundColor: "#e8f5e9", color: "#2e7d32" }}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => { setEditingId(null); setEditForm({}); }}
                            className="px-2 py-1 rounded text-xs font-bold"
                            style={{ backgroundColor: "#f5f5f5", color: "#6b7a8d" }}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-2 font-semibold" style={{ color: NAVY }}>{u.fullName}</td>
                        <td className="px-4 py-2" style={{ color: "#6b7a8d" }}>{u.email}</td>
                        <td className="px-4 py-2" style={{ color: "#6b7a8d" }}>{u.employeeId ?? "—"}</td>
                        <td className="px-4 py-2">
                          <span
                            className="px-2 py-0.5 rounded text-xs font-semibold"
                            style={ROLE_COLORS[u.role] ?? { backgroundColor: "#f5f5f5", color: "#666" }}
                          >
                            {ROLE_LABELS[u.role] ?? u.role}
                          </span>
                        </td>
                        <td className="px-4 py-2" style={{ color: "#6b7a8d" }}>{u.department ?? "—"}</td>
                        <td className="px-4 py-2">
                          <span
                            className="px-2 py-0.5 rounded text-xs font-semibold"
                            style={STATUS_COLORS[u.status] ?? { backgroundColor: "#f5f5f5", color: "#666" }}
                          >
                            {u.status === "active" ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-4 py-2" style={{ color: "#6b7a8d" }}>
                          {u.lastSignedIn ? new Date(u.lastSignedIn).toLocaleDateString() : "Never"}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => { setEditingId(u.id); setEditForm({}); }}
                              className="px-2 py-1 rounded text-xs font-bold"
                              style={{ backgroundColor: "#e3f2fd", color: "#1565c0" }}
                            >
                              Edit
                            </button>
                            {isExternalRole(u.role) && (
                              <button
                                onClick={() => handleSendMagicLink({ id: u.id, fullName: u.fullName, email: u.email })}
                                disabled={generateMagicLink.isPending || u.status !== "active"}
                                title={u.status !== "active" ? "User is inactive" : "Email a passwordless sign-in link"}
                                className="px-2 py-1 rounded text-xs font-bold"
                                style={{
                                  backgroundColor: "#fff8e1",
                                  color: "#8a6d1a",
                                  opacity: (generateMagicLink.isPending || u.status !== "active") ? 0.5 : 1,
                                }}
                              >
                                {generateMagicLink.isPending ? "Sending…" : "Send Link"}
                              </button>
                            )}
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
                {(!users || users.length === 0) && (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-sm" style={{ color: "#6b7a8d" }}>
                      No users yet. Click "+ New User" to create the first user.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
