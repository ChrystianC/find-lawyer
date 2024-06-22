/*
  Warnings:

  - You are about to drop the column `idOffice` on the `Specializations` table. All the data in the column will be lost.
  - You are about to drop the column `idOffice` on the `Locations` table. All the data in the column will be lost.
  - Added the required column `city` to the `LawOffice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `officeSpecialization` to the `LawOffice` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Specializations" (
    "idSpecialization" TEXT NOT NULL PRIMARY KEY,
    "specialization" TEXT NOT NULL
);
INSERT INTO "new_Specializations" ("idSpecialization", "specialization") SELECT "idSpecialization", "specialization" FROM "Specializations";
DROP TABLE "Specializations";
ALTER TABLE "new_Specializations" RENAME TO "Specializations";
CREATE TABLE "new_LawOffice" (
    "idLawOffice" TEXT NOT NULL PRIMARY KEY,
    "lawOfficeName" TEXT NOT NULL,
    "officeSpecialization" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT
);
INSERT INTO "new_LawOffice" ("address", "idLawOffice", "lawOfficeName", "profile") SELECT "address", "idLawOffice", "lawOfficeName", "profile" FROM "LawOffice";
DROP TABLE "LawOffice";
ALTER TABLE "new_LawOffice" RENAME TO "LawOffice";
CREATE TABLE "new_Locations" (
    "idLocation" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL
);
INSERT INTO "new_Locations" ("idLocation", "location") SELECT "idLocation", "location" FROM "Locations";
DROP TABLE "Locations";
ALTER TABLE "new_Locations" RENAME TO "Locations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
