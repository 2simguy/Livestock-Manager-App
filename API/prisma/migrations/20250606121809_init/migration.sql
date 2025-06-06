/*
  Warnings:

  - You are about to alter the column `name` on the `Farm` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `location` on the `Farm` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `Field` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `location` on the `Field` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `Livestock` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `tagNumber` on the `Livestock` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `breed` on the `Livestock` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `Species` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `treatmentType` on the `Treatment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `notes` on the `Treatment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `otp` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Farm" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "location" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Field" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "location" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Livestock" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "tagNumber" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "breed" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Species" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Treatment" ALTER COLUMN "treatmentType" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "notes" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "otp" SET DATA TYPE VARCHAR(10);
