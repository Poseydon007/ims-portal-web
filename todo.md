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
- [ ] Extract full content from uploaded DOCX (TE-IMS-PLN-GOV-000_Rev01)
- [ ] Rebuild PLN_GOV_000.tsx with exact approved content — no content removed or reduced
- [ ] Improve design/format only: layout, typography, tables, section structure
