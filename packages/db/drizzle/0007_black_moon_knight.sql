CREATE TABLE `approval_steps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`submissionId` varchar(64) NOT NULL,
	`step` int NOT NULL,
	`stepLabel` varchar(128),
	`action` enum('approved','returned') NOT NULL,
	`actorUserId` int NOT NULL,
	`actorName` varchar(255),
	`actorRole` varchar(64),
	`comment` text,
	`actionAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `approval_steps_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `form_responses` MODIFY COLUMN `status` enum('pending_supervisor_review','pending_hse_approval','returned','closed') NOT NULL DEFAULT 'pending_supervisor_review';--> statement-breakpoint
ALTER TABLE `form_responses` ADD `currentStep` int DEFAULT 1;