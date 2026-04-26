-- Extend ims_users.role enum with two new roles for external access:
--   auditor — read-only across submissions / docs / education stats
--   client  — limited tour mode (POL/PLN preview only)
ALTER TABLE `ims_users`
  MODIFY COLUMN `role` ENUM('admin', 'hse_manager', 'supervisor', 'field_worker', 'auditor', 'client')
  NOT NULL DEFAULT 'field_worker';
