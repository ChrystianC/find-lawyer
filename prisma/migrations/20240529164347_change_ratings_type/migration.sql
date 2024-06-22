/*
  Warnings:

  - You are about to drop the column `ratings` on the `LawOffice` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Ratings" (
    "idRating" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "idOffice" TEXT NOT NULL,
    CONSTRAINT "Ratings_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice" ("idLawOffice") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LawOffice" (
    "idLawOffice" TEXT NOT NULL PRIMARY KEY,
    "lawOfficeName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT
);
INSERT INTO "new_LawOffice" ("address", "idLawOffice", "lawOfficeName", "profile") SELECT "address", "idLawOffice", "lawOfficeName", "profile" FROM "LawOffice";
DROP TABLE "LawOffice";
ALTER TABLE "new_LawOffice" RENAME TO "LawOffice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Ratings_idOffice_key" ON "Ratings"("idOffice");
