import { cookies } from "next/headers";
import { prisma } from "../../../../prisma/db";
import DeleteComment from "./deleteComment";
import { redirect } from "next/navigation";

export default async function FeedBack ( { comments, lawofficeId } )
{
    const cookieStore = cookies();
    const idUser = cookieStore.get( 'user' )?.value;

    const actualUser = await prisma.user.findFirst( { where: { idUser: { equals: idUser } } } );
    const delComment = async ( idComment ) =>
    {
        'use server';
        await prisma.comments.delete( {
            where: {
                idComment:
                    idComment
            }
        } );
        redirect(`/components/cardPreview?${lawofficeId}`)

    };
    const renderComments = comments.map( async ( { comment, user, idComment } ) =>
    {
        const owner = await prisma.user.findFirst( { where: { idUser: user } } );
        return <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded h-full relative">
                <div className="absolute right-4">
                    <DeleteComment idComment={ idComment } del={ delComment } user={ owner.idUser } actualUser={ actualUser.idUser } />

                </div>
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5  text-gray-200 " viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </ path>
                    </svg>
                </div>
                <p className="mb-6 text-pretty overflow-y-auto overflow-x-clip max-h-16">{ comment }</p>
                <p className="flex items-center">
                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex flex-col pl-4">
                        <span className="text-gray-900 text-sm">{ owner.userName }</span>
                        <span className="text-gray-500 text-xs">Comments advisors</span>
                    </span>
                </p>


            </div>
        </div>;
    } );
    return renderComments;
}