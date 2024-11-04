import { prisma } from "../../../prisma/db";
import BookApoiment from "./bookApoiment";
import emailjs from '@emailjs/browser';

export default async function AppoimentsList ( { appoiments, idOffice } )
{
    const book = async ( book: boolean, idAppointment: string, customer: string, date: string ) =>
    {
        'use server';
        if ( !idAppointment ) return;

        emailjs.send( "service_qa8f09c", "template_yaw3w9n", {
            date: date,
            customer: "chrystianchwaja2001@gmail.com",
            reply_to: "chrystianchwaja2001@gmail.com",
        } , {publicKey: '7e5a-NxHjAQ85DVUD'});

        await prisma.appointments.update( {
            where: {
                IdOffice: idOffice,
                idAppointment: idAppointment,
            },
            data:
            {
                isBooked: book,
            }
        },
        );
    };
    const renderAppoments = await appoiments.map( ( { idAppointment, date, isBooked, customer, service } ) =>
        <div className="border-b pb-4 border-gray-400 border-dashed" key={ idAppointment.toString() }>
            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">Meeting { service }</p>
            <BookApoiment date={ date } book={ book } isBooked={ isBooked } idAppointment={ idAppointment } customer={ customer } />
        </div>

    );
    return renderAppoments;
}
