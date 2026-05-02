// HR router — proxies calls to the HR Service for the IMS portal frontend.
// Requires at minimum a logged-in IMS user (imsProtectedProcedure).
// Admins/HSE managers get full results; field workers get their own profile only.

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, imsProtectedProcedure, imsAdminProcedure } from "../_core/trpc";
import { getHrEmployee, getAllHrEmployees, getHrEmployeeByDepartment } from "../hrClient";

export const hrRouter = router({

  // ── List employees (admin / hse_manager / supervisor only) ──
  list: imsProtectedProcedure
    .input(z.object({
      search:     z.string().optional(),
      department: z.string().optional(),
      status:     z.string().optional(),
    }).optional())
    .query(async ({ input, ctx }) => {
      const role = ctx.imsUser.role;
      if (role === "field_worker" || role === "client") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
      }
      return getAllHrEmployees(input ?? {});
    }),

  // ── Get one employee by UUID ──
  get: imsProtectedProcedure
    .input(z.object({ uuid: z.string() }))
    .query(async ({ input, ctx }) => {
      const role = ctx.imsUser.role;
      const emp = await getHrEmployee(input.uuid);
      if (!emp) throw new TRPCError({ code: "NOT_FOUND", message: "Employee not found" });
      // Field workers can only see their own profile (matched by email)
      if (role === "field_worker") {
        if (emp.companyEmail?.toLowerCase() !== ctx.imsUser.email.toLowerCase()) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
        }
      }
      return emp;
    }),

  // ── Get employees by department ──
  byDepartment: imsProtectedProcedure
    .input(z.object({ department: z.string() }))
    .query(async ({ input, ctx }) => {
      const role = ctx.imsUser.role;
      if (role === "field_worker" || role === "client") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
      }
      return getHrEmployeeByDepartment(input.department);
    }),
});
