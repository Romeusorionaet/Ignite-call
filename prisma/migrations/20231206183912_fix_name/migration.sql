/*
  Warnings:

  - You are about to drop the column `obervations` on the `schedulings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedulings` DROP COLUMN `obervations`,
    ADD COLUMN `observations` VARCHAR(191) NULL;
