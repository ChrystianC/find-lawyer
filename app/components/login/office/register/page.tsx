'use server';
import { prisma } from '../../../../../prisma/db';
import RegisterPage from './edit';

export default async function Register()
{

    const city = await prisma.locations.findMany();
    const specialization  = await prisma.specializations.findMany();
    return (
        <div>
           <RegisterPage mapCity={city} mapSpecialization={specialization}/>
        </div>
    );

}