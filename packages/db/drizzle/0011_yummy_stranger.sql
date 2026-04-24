CREATE TABLE `training_completions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`resourceId` varchar(64) NOT NULL,
	`score` int,
	`passedAt` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `training_completions_id` PRIMARY KEY(`id`)
);
