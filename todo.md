# IMS Portal — TODO

## Completed
- [x] Level 1 Landing Page with hero, stats bar, category cards
- [x] Level 2 Category Pages for all 7 categories
- [x] Level 3 Document View — POL-GOV-001 (Integrated HSE Policy Statement)
- [x] Level 3 Document View — PLN-GOV-000 (IMS Playbook — Foundation Document)
- [x] Digital Form — Near Miss Report (FRM-HSE-003) with DB + Google Sheets sync
- [x] Digital Form — Job Hazard Analysis (FRM-HSE-001) with DB + Google Sheets sync
- [x] Admin Submissions View at /admin/submissions
- [x] Logo standardization (LOGO_WHITE, LOGO_GRAY constants in imsData.ts)

## Custom Auth System (Email/Password)
- [x] Database schema: ims_users table (id, email, password_hash, full_name, employee_id, role, department, status, created_at, updated_at)
- [x] Database schema: ims_sessions table (id, user_id, token, expires_at, created_at)
- [x] Password hashing with bcrypt
- [x] Server-side auth routes via tRPC: imsAuth.login, imsAuth.logout, imsAuth.me
- [x] Session middleware — validate session token on every protected request (imsProtectedProcedure)
- [x] Role enum: admin, supervisor, field_worker
- [x] Login page — branded TE navy/gold, email + password fields
- [x] Auth context on frontend — useImsAuth hook providing current user state
- [x] Protected route wrapper — redirect to /login if not authenticated
- [x] Auto-identity on forms — auto-populate Reported By / Prepared By from logged-in user
- [x] Admin user management page — create users, assign roles, activate/deactivate
- [x] Admin-only route protection (user management, submissions view)
- [x] Registration is admin-controlled only (no open signup)
- [x] Timestamp all form submissions with server time (not client)

## Education & Learning Section
- [x] Education landing page at /education — topic category grid (HSE, Operations, IMS, Equipment, Regulatory)
- [x] Education topic page at /education/:slug — resource cards with type badges (Video, PDF, Manual, Guide)
- [x] Resource card: video thumbnail with play icon linking to video URL (no inline embed)
- [x] Resource card: PDF/manual with download/view button
- [x] "Education" link added to main header nav (visible to all logged-in users)
- [x] Education section card added to home page (deferred — accessible via Education link in nav header)
- [x] Static data file for education topics and resources (educationData.ts)
- [x] Login-gated: only logged-in users can access education content

## PLN-GOV-000 Rev01 Update
- [x] Extract full content from uploaded DOCX (TE-IMS-PLN-GOV-000_Rev01)
- [x] Rebuild PLN_GOV_000.tsx with exact approved content — no content removed or reduced
- [x] Improve design/format only: layout, typography, tables, section structure

## PLN-GOV-000 Design Refinements
- [x] Change CEO to COO, name to Joao de Melo in CEO/COO message block
- [x] All dark section header text (table headers, level banners) set to white
- [x] Replace emoji icons in "How People Experience" section with premium Lucide icons

## Header Layout Redesign
- [x] More vertical spacing in header
- [x] Move user name/role/sign-out below IMS Document Portal title (right column, stacked)
- [x] Center nav tabs (Education, Submissions, Users) between logo and IMS portal title

## Header Nav Redesign (Education stacked)
- [x] Education tab moved below Submissions + Users row
- [x] Education tab width matches full width of Submissions + Users combined
- [x] Glass morphism background on Education tab
- [x] Smooth hover and entrance animations on nav tabs

## IMS Master Register (REG-SYS-001)
- [ ] Database schema: ims_register table (code, type, department, seq, rev, title, format, status, filename, note, createdBy, updatedBy, createdAt, updatedAt)
- [ ] Push migration with pnpm db:push
- [ ] tRPC procedures: register.list (public), register.getById (public), register.create (admin), register.update (admin), register.changeStatus (admin)
- [ ] Admin-only guard on create/update/changeStatus — no deletion, only status change
- [ ] Seed database from XLSX Master Register sheet (128 documents)
- [ ] Register page at /register — searchable, filterable by type and department, paginated
- [ ] Admin edit panel — modal edit for admins only
- [ ] Admin add new entry form
- [ ] Status change: Active / Retired / Legacy (admin only, timestamped)
- [ ] Every change records updatedBy (user id) and updatedAt timestamp
- [ ] Register link added to header nav
- [ ] Summary stats bar (total, by type, by department) auto-calculated from live data

## IMS Registers Page (Drive-linked)
- [x] Registers page at /registers — lists all REG files with preview + Drive link
- [x] Click name → modal with preview image (PNG/JPG screenshot of file)
- [x] "Open in Drive" button — admin and supervisor only, opens Google Drive link
- [x] Field workers see list and preview but no Drive link button
- [x] REG-HSE-005 as first working example with real preview image
- [x] Upload preview image to CDN
- [x] Register nav link in header for all logged-in users

## Static Document Pages — SOP (10 docs)
- [ ] SOP-GEO-001 — Core Cutting and Handling SOP
- [ ] SOP-HSE-001 — Planned Task Observation SOP
- [ ] SOP-HSE-002 — Confined Space Entry SOP
- [ ] SOP-HSE-003 — Lock-Out Tag-Out SOP
- [ ] SOP-HSE-004 — Hot Work SOP
- [ ] SOP-LOG-001 — Driving Safety SOP
- [ ] SOP-MAINT-001 — Machine Guarding Inspection SOP
- [ ] SOP-MAINT-002 — Refueling and Fuel Handling SOP
- [ ] SOP-OPS-001 — Diamond Drilling Operation SOP
- [ ] SOP-OPS-002 — Night Shift Drilling SOP

## Static Document Pages — POL (3 remaining)
- [ ] POL-GOV-002 — Ethics and Anti-Bribery Policy
- [ ] POL-HSE-001 — Stop Work Authority Policy
- [ ] POL-LC-001 — Local Content and Saudization Policy

## Static Document Pages — PLN (2 remaining)
- [ ] PLN-HSE-001 — Major Emergency Preparedness Plan
- [ ] PLN-HSE-003 — Working at Height Rescue Plan

## Static Document Pages — REF (8 docs)
- [ ] REF-HSE-001 — Emergency Preparedness Reference
- [ ] REF-HSE-002 — Fire Fighting Procedure Reference
- [ ] REF-SYS-000 — Executive Overview of the IMS
- [ ] REF-SYS-001 — Document Identification and Numbering Rules
- [ ] REF-SYS-002 — Treatment of Finance and Accounting Documents
- [ ] REF-SYS-003 — ISO 14001 Certificate (PDF viewer)
- [ ] REF-SYS-004 — ISO 45001 Certificate (PDF viewer)
- [ ] REF-SYS-005 — ISO 9001 Certificate (PDF viewer)

## Static Document Pages — PROC (25 docs)
- [ ] PROC-HSE-001 — Fatigue Management Procedure
- [ ] PROC-HSE-002 — Heat Stress Prevention Procedure
- [ ] PROC-HSE-003 — Hazard Identification and Risk Assessment Procedure
- [ ] PROC-HSE-004 — Site Emergency Preparedness Procedure
- [ ] PROC-HSE-006 — Incident and Accident Investigation Procedure
- [ ] PROC-HSE-007 — Toolbox Talks Procedure
- [ ] PROC-HSE-008 — Waste Management Procedure
- [ ] PROC-HSE-009 — Fire Prevention, Control and Fire Fighting Procedure
- [ ] PROC-HSE-010 — HSE Site Monthly Reporting Procedure
- [ ] PROC-HSE-011 — Periodic Inspection Procedure
- [ ] PROC-HSE-012 — HSE Site Audit Procedure
- [ ] PROC-HSE-013 — Spill Management Procedure
- [ ] PROC-HSE-014 — Site Rehabilitation Procedure
- [ ] PROC-HSE-015 — Risk and Opportunity Procedure
- [ ] PROC-HSE-016 — Personal Protective Equipment Procedure
- [ ] PROC-HSE-017 — Manual Handling Procedure
- [ ] PROC-HSE-018 — Environmental Aspects Identification Procedure
- [ ] PROC-HSE-019 — Site Safety Appointments Procedure
- [ ] PROC-LOG-001 — Company Vehicle Usage Procedure
- [ ] PROC-LOG-002 — Journey Management Procedure
- [ ] PROC-MAINT-001 — Maintenance Management Procedure
- [ ] PROC-OPS-001 — Drilling Operations Control Procedure
- [ ] PROC-SCM-001 — Site Supply Procedure
- [ ] PROC-SEC-001 — Security Procedure
- [ ] PROC-SYS-001 — Document Control Procedure
- [ ] PROC-SYS-002 — Management Review Procedure
- [ ] PROC-SYS-003 — Change Management Procedure
- [ ] PROC-SYS-004 — Internal Audit Procedure
- [ ] PROC-SYS-005 — Continual Improvement and CAPA Procedure
- [ ] PROC-SYS-006 — Checklist and Register Control Procedure
- [ ] PROC-SYS-008 — Corrective Action Procedure
- [ ] PROC-SYS-009 — QHSE Objectives Procedure
- [ ] PROC-TRN-001 — Staff Training and Competency Procedure

## Register UI Consolidation
- [ ] Remove "Registers" nav tab from Layout.tsx header
- [ ] Remove /registers route from App.tsx
- [ ] Upgrade /docs/reg CategoryPage to use rich register UI (CAT badge, FORMAT, OWNER, Preview, Open buttons)
- [ ] Fix TypeScript errors in generated PROC/PLN/REF pages (style={{ vs {{{{ mismatch in tables)

## Live Forms — Batch 1 (High-use HSE field forms)
- [ ] FRM-HSE-009 — Take 5 Hazard Assessment Form (live form + DB register)
- [ ] FRM-HSE-032 — Toolbox Talk Daily Attendance Register (live form + DB register)
- [ ] FRM-HSE-011 — Permit to Work (PTW) (live form + DB register)
- [ ] FRM-HSE-022 — Incident and Accident Investigation Report (live form + DB register)
- [ ] FRM-HSE-020 — Fire Extinguisher Inspection Log (live form + DB register)

## Digital Approval Workflow — FRM-HSE-003 Pilot
- [x] DB schema: formResponses table with status, currentStep, submittedByName fields
- [x] DB schema: approvalSteps table with step, action, actorName, actorRole, comment fields
- [x] Workflow engine: WORKFLOW_STEPS config (Supervisor Review → HSE Approval → Closed)
- [x] tRPC procedures: submit, approve, returnForCorrection, getSubmission, listPendingApprovals
- [x] FRM-HSE-003: Remove manual Supervisor and HSE Officer sign-off fields
- [x] FRM-HSE-003: Show digital workflow status on success screen
- [x] Approval Queue page at /approvals — visible to supervisors and admins
- [x] Approval Queue: View submission detail with form data and approval history
- [x] Approval Queue: Approve action with optional comment
- [x] Approval Queue: Return for correction with required comment
- [x] Nav link "Approvals" added to header for supervisors and admins
- [x] Provisory test users: Abduljawad Bouguelta (admin/HSE Officer) + Mahmoud Sifa (supervisor)

## Auto-Generated Report Numbers + Admin Controls
- [ ] Server-side: reportNumber generation logic (e.g. NM-2026-001, sequential per formCode per year)
- [ ] DB: add reportNumber column to formResponses table, push migration
- [ ] Submit procedure: auto-generate reportNumber on server before insert
- [ ] FRM-HSE-003: show reportNumber read-only on success screen
- [ ] ImsForm: display reportNumber prominently on success screen
- [ ] Admin-only: allow admin to edit reportNumber on a submission
- [ ] Admin-only: allow admin to delete a submission (with confirmation)
- [ ] Submissions Admin page: show reportNumber column, add delete button (admin only)
- [ ] Approval Queue: show reportNumber in submission list and detail view

## Fix: Report No. Field & Email Notifications
- [ ] Remove Near Miss Report No. input field entirely from FRM-HSE-003 form (must not appear at all)
- [ ] Set up email notifications to supervisor and HSE officer when form submitted
- [ ] Set up email notifications when approval action taken (approved/returned)

## Add HSE Manager Role
- [ ] Add hse_manager to imsUsers role enum in schema.ts
- [ ] Push db migration for new enum value
- [ ] Add HSE Manager as Step 2 in approval workflow (between Supervisor and Admin/HSE Officer)
- [ ] Update User Management role dropdown to include HSE Manager
- [ ] Update all frontend role display labels to show "HSE Manager" correctly
- [ ] Update email notifications to notify HSE Manager at correct step

## Bug Fixes (Apr 13)
- [ ] Fix print view redirecting to login — make accessible to logged-in IMS users without re-auth
- [ ] Fix email notifications not being received — diagnose SendPulse API call and sender issue

## Bug Fixes (Apr 13 — v2)
- [ ] Fix React setState-in-render error in Login component (navigate in render phase)
- [ ] Add Approve/Return buttons for admin on All Submissions page
- [ ] Fix email notifications not being received (SendPulse sender verification)
