import { headers } from "next/headers";
import { NavbarPage } from "../navbar/page";
import { prisma } from "../../../prisma/db";
import FeedBack from "./comments/comments";
import AddComment from "./comments/AddComments";
import EditForm from "./edit/edit";
import dayjs from "dayjs";
import { getComments, getLawOffice, getLocations, getSpecializations } from "../../serverComponent/getFromApi";

export default async function CardPreview ()
{
    const requestUrl = headers().get( 'x-url' ).split( '?' )[ 1 ].replace( '=', '' );
    const lawOffice = await getLawOffice( requestUrl );
    const comments = await getComments( requestUrl );
    const locations = await getLocations();
    const specializations = await getSpecializations();

    const deleteLawOffice = async () =>
    {
        'use server';
        await prisma.lawOffice.delete( {
            where: {
                idLawOffice:
                    lawOffice.idLawOffice
            }
        } );
    };
    const addComment = async ( comment: string, user: string ) =>
    {
        'use server';
        await prisma.comments.create( {
            data: {
                idOffice: lawOffice.idLawOffice,
                comment: comment,
                user: user,
            }
        } );
    };
    const addAppoiment = async ( date: Date ) =>
    {
        'use server';
        const currentAppoiment = await prisma.appointments.findFirst( {
            where: {
                date: dayjs( date ).toDate()
            }
        } );
        if ( currentAppoiment ) return;
        await prisma.appointments.create( {
            data: {
                date: dayjs( date ).toDate(),
                service: 'Konsultacja podatkowa',
                lawOffice: {
                    connect: {
                        idLawOffice: lawOffice.idLawOffice,
                    },
                },
            },
        } );
    };
    const editCard = async ( city: string, address: string, lawOfficeName: string, officeSpecialization: string, profile: string ) =>
    {
        'use server';
        if ( city === lawOffice.city && address === lawOffice.address && lawOfficeName === lawOffice.lawOfficeName && officeSpecialization === lawOffice.officeSpecialization && profile === lawOffice.profile ) return;
        await prisma.lawOffice.update( {
            where: {
                idLawOffice: lawOffice.idLawOffice
            },
            data: {
                idLawOffice: lawOffice.idLawOffice,
                city: city,
                address: address,
                lawOfficeName: lawOfficeName,
                officeSpecialization: officeSpecialization,
                profile: profile,
            }
        } );

    };


    return <div className="bg-slate-50">
        <NavbarPage />
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                {
                    ( lawOffice.profile ) ?
                        <img src={ lawOffice.profile } className={ `w-60 h-60 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400` } />
                        :
                        <span className={ `w-60 h-60  rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 text-5xl` }>?</span>

                }
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 mt-2">Law Office Editor Page</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    Enhance Your Law Office Efficiency and Accuracy: Discover Superior Document Editing Solutions for Legal Professionals
                </p>
            </div>
            <EditForm edit={ editCard } lawOffice={ lawOffice } deleteLawOffice={ deleteLawOffice } newAppoiment={ addAppoiment } mapLocation={ locations } mapSpecialization={ specializations } />
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center mt-5">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Comments Section</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    Join the Conversation: Share Your Thoughts, Insights, and Experiences with Our Community
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded ">
                        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-indigo-100  mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  text-indigo-500" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </ path>
                            </svg>
                        </div>
                        <AddComment create={ addComment } />
                    </div>
                </div>
                <FeedBack comments={ comments } />
            </div>
        </div>
    </div>;
}