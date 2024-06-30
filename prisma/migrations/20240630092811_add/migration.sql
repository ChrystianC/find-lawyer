-- CreateTable
CREATE TABLE "Appointments" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "day" DATETIME NOT NULL,
    "lawOfficeIdLawOffice" TEXT,
    CONSTRAINT "Appointments_lawOfficeIdLawOffice_fkey" FOREIGN KEY ("lawOfficeIdLawOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Times" (
    "idTime" TEXT NOT NULL PRIMARY KEY,
    "time" DATETIME NOT NULL,
    "appointmentIdAppointment" TEXT NOT NULL,
    "isBooked" BOOLEAN NOT NULL,
    CONSTRAINT "Times_appointmentIdAppointment_fkey" FOREIGN KEY ("appointmentIdAppointment") REFERENCES "Appointments" ("idAppointment") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ratings" (
    "idRating" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "idOffice" TEXT NOT NULL,
    CONSTRAINT "Ratings_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ratings" ("idOffice", "idRating", "rating") SELECT "idOffice", "idRating", "rating" FROM "Ratings";
DROP TABLE "Ratings";
ALTER TABLE "new_Ratings" RENAME TO "Ratings";
CREATE TABLE "new_Services" (
    "idService" TEXT NOT NULL PRIMARY KEY,
    "serviceName" TEXT NOT NULL,
    "servicePrice" TEXT NOT NULL,
    "idOffice" TEXT NOT NULL,
    CONSTRAINT "Services_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Services" ("idOffice", "idService", "serviceName", "servicePrice") SELECT "idOffice", "idService", "serviceName", "servicePrice" FROM "Services";
DROP TABLE "Services";
ALTER TABLE "new_Services" RENAME TO "Services";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
