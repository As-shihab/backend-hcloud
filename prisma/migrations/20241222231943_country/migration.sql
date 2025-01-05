/*
  Warnings:

  - You are about to drop the column `name` on the `country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `country` DROP COLUMN `name`,
    ADD COLUMN `label` VARCHAR(191) NULL,
    ADD COLUMN `value` VARCHAR(191) NULL;
