import { User } from "@prisma/client";
import { prisma } from "../../../prisma/db";
import BookApoiment from "./bookApoiment";
import emailjs from '@emailjs/browser';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppoimentsList ( { appoiments, idOffice , rerender} )
{
    const cookieStore = cookies();

    const idUser = cookieStore.get( 'user' )?.value;

    const user = await prisma.user.findFirst( { where: { idUser: { equals: idUser } } } );
    const book = async ( book: boolean, idAppointment: string, date: string ) =>
    {
        'use server';
        if ( !idAppointment || !idUser ) return;

        emailjs.send( "service_qa8f09c", "template_yaw3w9n", {
            date: date,
            customer: user.email,
            reply_to: user.email,
        } , {publicKey: '7e5a-NxHjAQ85DVUD'});

        await prisma.appointments.update( {
            where: {
                IdOffice: idOffice,
                idAppointment: idAppointment,
            },
            data:
            {
                idCustomer: user.idUser,
                isBooked: book,
            }
        },
        );
        redirect(rerender)
    };
    const renderAppoments = await appoiments.map( ( { idAppointment, date, isBooked, service } ) =>
        <div className="border-b pb-4 border-gray-400 border-dashed" key={ idAppointment.toString() }>
            <p className="text-xs text-center font-light leading-3 text-gray-500 dark:text-gray-300">Meeting</p>
            <BookApoiment date={ date } book={ book } isBooked={ isBooked } idAppointment={ idAppointment }/>
        </div>

    );
    return renderAppoments;
}
