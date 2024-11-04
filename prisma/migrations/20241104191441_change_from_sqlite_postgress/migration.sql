-- CreateTable
CREATE TABLE "Locations" (
    "idLocation" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Locations_pkey" PRIMARY KEY ("idLocation")
);

-- CreateTable
CREATE TABLE "Specializations" (
    "idSpecialization" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,

    CONSTRAINT "Specializations_pkey" PRIMARY KEY ("idSpecialization")
);

-- CreateTable
CREATE TABLE "LawOffice" (
    "idLawOffice" TEXT NOT NULL,
    "lawOfficeName" TEXT NOT NULL,
    "officeSpecialization" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile" TEXT,
    "email" TEXT,

    CONSTRAINT "LawOffice_pkey" PRIMARY KEY ("idLawOffice")
);

-- CreateTable
CREATE TABLE "Services" (
    "idService" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "servicePrice" TEXT NOT NULL,
    "idOffice" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("idService")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "idRating" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "idOffice" TEXT NOT NULL,
    "idUser" TEXT,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("idRating")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "idAppointment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "IdOffice" TEXT NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idCustomer" TEXT,
    "service" TEXT NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("idAppointment")
);

-- CreateTable
CREATE TABLE "Comments" (
    "idComment" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "idOffice" TEXT NOT NULL,
    "idUser" TEXT,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("idComment")
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateIndex
CREATE UNIQUE INDEX "LawOffice_email_key" ON "LawOffice"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice"("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice"("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_IdOffice_fkey" FOREIGN KEY ("IdOffice") REFERENCES "LawOffice"("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_idCustomer_fkey" FOREIGN KEY ("idCustomer") REFERENCES "User"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_idOffice_fkey" FOREIGN KEY ("idOffice") REFERENCES "LawOffice"("idLawOffice") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;
