import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { ImsUser } from "../drizzle/schema";

type CookieCall = {
  name: string;
  value?: string;
  options: Record<string, unknown>;
};

// ── Mock IMS user factory ──
function createMockImsUser(overrides?: Partial<ImsUser>): ImsUser {
  return {
    id: 100,
    email: "test@trueeast.com",
    passwordHash: "$2a$12$fakehash",
    fullName: "Test User",
    employeeId: "TE-0001",
    role: "field_worker",
    department: "HSE",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: null,
    ...overrides,
  };
}

function createMockAdminUser(overrides?: Partial<ImsUser>): ImsUser {
  return createMockImsUser({
    id: 1,
    email: "admin@trueeast.com",
    fullName: "Admin User",
    role: "admin",
    ...overrides,
  });
}

// ── Context factories ──
function createPublicContext(): { ctx: TrpcContext; setCookies: CookieCall[]; clearedCookies: CookieCall[] } {
  const setCookies: CookieCall[] = [];
  const clearedCookies: CookieCall[] = [];

  const ctx: TrpcContext = {
    user: null,
    imsUser: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string, options: Record<string, unknown>) => {
        setCookies.push({ name, value, options });
      },
      clearCookie: (name: string, options: Record<string, unknown>) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, setCookies, clearedCookies };
}

function createImsAuthContext(imsUser: ImsUser): { ctx: TrpcContext; setCookies: CookieCall[]; clearedCookies: CookieCall[] } {
  const { ctx, setCookies, clearedCookies } = createPublicContext();
  ctx.imsUser = imsUser;
  return { ctx, setCookies, clearedCookies };
}

// ── Tests ──

describe("imsAuth.me", () => {
  it("returns null when not authenticated", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.imsAuth.me();
    expect(result).toBeNull();
  });

  it("returns user info when authenticated", async () => {
    const user = createMockImsUser();
    const { ctx } = createImsAuthContext(user);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.imsAuth.me();
    expect(result).not.toBeNull();
    expect(result!.id).toBe(100);
    expect(result!.email).toBe("test@trueeast.com");
    expect(result!.fullName).toBe("Test User");
    expect(result!.role).toBe("field_worker");
    expect(result!.department).toBe("HSE");
    expect(result!.employeeId).toBe("TE-0001");
  });
});

describe("imsAuth.logout", () => {
  it("clears the ims_session cookie and reports success", async () => {
    const { ctx, clearedCookies } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.imsAuth.logout();
    expect(result).toEqual({ success: true });
    expect(clearedCookies).toHaveLength(1);
    expect(clearedCookies[0]?.name).toBe("ims_session");
    expect(clearedCookies[0]?.options).toMatchObject({
      maxAge: -1,
    });
  });
});

describe("imsAuth.listUsers", () => {
  it("rejects non-admin users", async () => {
    const fieldWorker = createMockImsUser({ role: "field_worker" });
    const { ctx } = createImsAuthContext(fieldWorker);
    const caller = appRouter.createCaller(ctx);

    await expect(caller.imsAuth.listUsers()).rejects.toThrow("Admin access required");
  });

  it("rejects unauthenticated requests", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.imsAuth.listUsers()).rejects.toThrow();
  });
});

describe("imsAuth.createUser", () => {
  it("rejects non-admin users", async () => {
    const supervisor = createMockImsUser({ role: "supervisor" });
    const { ctx } = createImsAuthContext(supervisor);
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.imsAuth.createUser({
        email: "new@trueeast.com",
        password: "password123",
        fullName: "New User",
        role: "field_worker",
      })
    ).rejects.toThrow("Admin access required");
  });
});

describe("imsAuth.updateUser", () => {
  it("rejects non-admin users", async () => {
    const fieldWorker = createMockImsUser({ role: "field_worker" });
    const { ctx } = createImsAuthContext(fieldWorker);
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.imsAuth.updateUser({ id: 2, fullName: "Hacked Name" })
    ).rejects.toThrow("Admin access required");
  });
});

describe("imsAuth.changePassword", () => {
  it("rejects unauthenticated users", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.imsAuth.changePassword({
        currentPassword: "old",
        newPassword: "newpass123",
      })
    ).rejects.toThrow();
  });
});
