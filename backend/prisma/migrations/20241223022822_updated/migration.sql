/*
  Warnings:

  - You are about to drop the column `name` on the `districs` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `divisoins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `districs` DROP COLUMN `name`,
    ADD COLUMN `label` VARCHAR(191) NULL,
    ADD COLUMN `value` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `divisoins` DROP COLUMN `name`,
    ADD COLUMN `label` VARCHAR(191) NULL,
    ADD COLUMN `value` VARCHAR(191) NULL;
