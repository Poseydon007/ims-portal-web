CREATE TABLE `form_responses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`submissionId` varchar(64) NOT NULL,
	`formCode` varchar(64) NOT NULL,
	`formTitle` varchar(255),
	`responseData` text NOT NULL,
	`status` enum('submitted','under_review','closed') NOT NULL DEFAULT 'submitted',
	`submittedByUserId` int,
	`submittedByName` varchar(255),
	`submittedAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `form_responses_id` PRIMARY KEY(`id`),
	CONSTRAINT `form_responses_submissionId_unique` UNIQUE(`submissionId`)
);
