CREATE TABLE `ims_sessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`token` varchar(512) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `ims_sessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `ims_sessions_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `ims_users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`passwordHash` text NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`employeeId` varchar(64),
	`role` enum('admin','supervisor','field_worker') NOT NULL DEFAULT 'field_worker',
	`department` varchar(128),
	`status` enum('active','inactive') NOT NULL DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp,
	CONSTRAINT `ims_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `ims_users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `jha_submissions` ADD `submittedByUserId` int;--> statement-breakpoint
ALTER TABLE `near_miss_submissions` ADD `submittedByUserId` int;