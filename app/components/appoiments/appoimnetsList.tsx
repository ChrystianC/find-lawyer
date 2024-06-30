import { Resend } from "resend";
import Email from "../../../emails";
import { prisma } from "../../../prisma/db";
import BookApoiment from "./bookApoiment"

export default async function AppoimentsList({ appoiments, idOffice }) {
    const book = async (book: boolean, idAppointment: string, customer: string, date: string) => {
        'use server';
        if (!idAppointment) return;
        const resend = new Resend('re_123456789');
        await resend.emails.send({
            from: 'laywer@gmail.com',
            to: customer,
            subject: 'Confirmation of you resertion',
            react: <Email userFirstname={customer} date={date} />,
        }); 
        await prisma.appointments.update({
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
    }
    console.log(appoiments)
    const renderAppoments = await appoiments.map(({ idAppointment, date, isBooked, customer }) =>
        <div className="border-b pb-4 border-gray-400 border-dashed" key={idAppointment.toString()}>
            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">Meeting time</p>
            <BookApoiment date={date} book={book} isBooked={isBooked} idAppointment={idAppointment} customer={customer} />
        </div>

    )
    return renderAppoments
}
