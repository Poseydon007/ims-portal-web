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
