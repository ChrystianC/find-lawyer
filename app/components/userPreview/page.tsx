import { cookies, headers } from "next/headers";
import { prisma } from "../../../prisma/db";
import UserPreview from "./edit";

export default async function UserPreviewGetUser ()
{
    const requestUrl = headers().get( 'x-url' ).split( '?' )[ 1 ].replace( '=', '' );
    const idUser = requestUrl;
    const user = await prisma.user.findFirst( { where: { idUser: { equals: idUser } } } );
    const appoiments = await prisma.appointments.findMany( { where: { idCustomer: user.idUser } } );
    const cookieStore = cookies();
    const userCookie = cookieStore.get( 'user' );
    const authCookie = cookieStore.get( 'auth' );
    return <UserPreview Useremail={ user.email } UseruserName={ user.userName } Userpassword={ user.password } userId={ user.idUser } appoiments={ appoiments } userCookie={ userCookie } authCookie={ authCookie } />;
}
