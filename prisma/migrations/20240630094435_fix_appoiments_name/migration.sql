/*
  Warnings:

  - You are about to drop the column `lawOfficeIdLawOffice` on the `Appointments` table. All the data in the column will be lost.
  - Added the required column `IdOffice` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "IdOffice" TEXT NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    CONSTRAINT "Appointments_IdOffice_fkey" FOREIGN KEY ("IdOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointments" ("createdAt", "customer", "date", "idAppointment", "isBooked", "service") SELECT "createdAt", "customer", "date", "idAppointment", "isBooked", "service" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
