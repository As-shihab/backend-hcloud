/*
  Warnings:

  - You are about to drop the column `ltc` on the `country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `country` DROP COLUMN `ltc`,
    ADD COLUMN `lat` INTEGER NULL;
