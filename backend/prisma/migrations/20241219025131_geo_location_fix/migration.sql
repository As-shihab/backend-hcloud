/*
  Warnings:

  - You are about to drop the column `label` on the `country` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `country` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `districs` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `districs` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `districs` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `divisoins` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `divisoins` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `divisoins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `country` DROP COLUMN `label`,
    DROP COLUMN `value`,
    ADD COLUMN `continent` VARCHAR(191) NULL,
    ADD COLUMN `lon` INTEGER NULL,
    ADD COLUMN `ltc` INTEGER NULL,
    ADD COLUMN `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `districs` DROP COLUMN `label`,
    DROP COLUMN `url`,
    DROP COLUMN `value`,
    ADD COLUMN `lon` INTEGER NULL,
    ADD COLUMN `ltc` INTEGER NULL,
    ADD COLUMN `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `divisoins` DROP COLUMN `label`,
    DROP COLUMN `url`,
    DROP COLUMN `value`,
    ADD COLUMN `lon` INTEGER NULL,
    ADD COLUMN `ltc` INTEGER NULL,
    ADD COLUMN `name` VARCHAR(191) NULL;
