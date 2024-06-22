/*
  Warnings:

  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Specialization` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Location";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Specialization";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Locations" (
    "idLocation" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "idOffice" TEXT,
    CONSTRAINT "Locations_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Specializations" (
    "idSpecialization" TEXT NOT NULL PRIMARY KEY,
    "specialization" TEXT NOT NULL,
    "idOffice" TEXT,
    CONSTRAINT "Specializations_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LawOffice" (
    "idLawOffice" TEXT NOT NULL PRIMARY KEY,
    "lawOfficeName" TEXT NOT NULL,
    "ratings" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT
);

-- CreateTable
CREATE TABLE "Services" (
    "idService" TEXT NOT NULL PRIMARY KEY,
    "serviceName" TEXT NOT NULL,
    "servicePrice" TEXT NOT NULL,
    "idOffice" TEXT NOT NULL,
    CONSTRAINT "Services_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Locations_idOffice_key" ON "Locations"("idOffice");

-- CreateIndex
CREATE UNIQUE INDEX "Specializations_idOffice_key" ON "Specializations"("idOffice");
