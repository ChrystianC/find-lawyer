/*
  Warnings:

  - You are about to drop the `Times` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `day` on the `Appointments` table. All the data in the column will be lost.
  - The required column `customer` was added to the `Appointments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `date` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Times";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "lawOfficeIdLawOffice" TEXT,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    CONSTRAINT "Appointments_lawOfficeIdLawOffice_fkey" FOREIGN KEY ("lawOfficeIdLawOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointments" ("idAppointment", "lawOfficeIdLawOffice") SELECT "idAppointment", "lawOfficeIdLawOffice" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
