import { Specializations, Locations, LawOffice, Ratings, Services, Appointments } from '@prisma/client';
import { prisma } from '../../prisma/db';
import dayjs from 'dayjs';

export async function getSpecializationFromParam(params: string) {
    const paramsArray = params.split('=');
    const paramIdSpecialization = paramsArray[1];
    const specialization: Specializations = await prisma.specializations.findFirst({ where: { idSpecialization: { equals: paramIdSpecialization } } });
    return specialization;
}

export async function getLocationFromParam(params: string) {
    const paramsArray = params.split('%3D');
    const paramIdLocation = paramsArray[1];
    const location: Locations = await prisma.locations.findFirst({ where: { idLocation: { equals: paramIdLocation } } });
    return location;
}

export async function getLawOffices(choosenlocation: Locations, choosenSpecialization: Specializations) {
    const lawOffices: LawOffice[] = await prisma.lawOffice.findMany({ where: { officeSpecialization: { equals: choosenSpecialization.specialization }, city: { equals: choosenlocation.location } } })
    return lawOffices;
}
export async function getRatings(officeId: string) {
    const reviews: Ratings[] = await prisma.ratings.findMany({ where: { idOffice: { equals: officeId } } });
    return reviews;
}
export async function getService(officeId: string) {
    const services: Services[] = await prisma.services.findMany({ where: { idOffice: { equals: officeId } } });
    return services;
}

export async function getLocation() {
    const location: Locations = await prisma.locations.findFirst();
    return location;
}

export async function getSpecializations() {
    const specializations: Specializations[] = await prisma.specializations.findMany();
    return specializations;
}

export async function getLocations() {
    const locations: Locations[] = await prisma.locations.findMany();
    return locations;
}

export async function getAppointment(officeId: string) {
    const reviews: Appointments[] = await prisma.appointments.findMany({ where: { IdOffice: { equals: officeId } } });
    return reviews;
}

export async function getAppointmentsList(date: Date, officeId: string) {
    const day = dayjs(date).toDate()
    const nextDay = dayjs(date).add(1, 'day').toDate();

    const appointments: Appointments[] = await prisma.appointments.findMany({
        where:
        {
            date: {
                gte: day,
                lt: nextDay,
            },
            IdOffice: {
                equals: officeId
            }
        }
    });
    return appointments;
}