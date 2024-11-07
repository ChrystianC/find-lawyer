import { headers } from 'next/headers';
import { MyCombobox } from '../ui/combobox';
import libra from '../ui/images/libra.png';
import Image from 'next/image';
import Reviews from './reviews/reviews';
import Wares from './services/services';
import { getSpecializationFromParam, getLocationFromParam, getSpecializations, getLocations, getLawOffices, getService, getRatings, getAppointmentsList } from '../../serverComponent';
import Appoiments from '../appoiments/page';
import { cookies } from 'next/headers';
import AppoimentsList from '../appoiments/appoimnetsList';
import Link from 'next/link';
import { prisma } from '../../../prisma/db';


export default async function LawOfficeCardsPage ()
{
    const cookieStore = cookies();
    const auth = await cookieStore.get( 'auth' );
    const office =  cookieStore.get('office');
    const emailOffice = office ? await prisma.lawOffice.findUnique({where: { email: office?.value}}): undefined
    // await prisma.lawOffice.create({
    //     data:
    //     {
    //         lawOfficeName: 'Law office 3',
    //         ratings: { create: { rating: 5 }},
    //         officeSpecialization: 'Podatki',
    //         city: 'Kraków',
    //         address: 'ul. Kąkolowa 15',
    //         profile: 'https://images.pexels.com/photos/26201367/pexels-photo-26201367/free-photo-of-miasto-znane-miejsce-budynek-most.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         services: {create: {serviceName: 'Service Name', servicePrice: 'Service Price'}}
    //     }
    // },
    // );
    const requestUrl = headers().get( 'x-url' ).split( '?' )[ 1 ].split( '%2F' );
    const [ singleSpecialization, singleLocation ] = await Promise.all( [ getSpecializationFromParam( requestUrl[ 0 ] ), getLocationFromParam( requestUrl[ 1 ] ) ] );
    const [ specializations, locations ] = await Promise.all( [ getSpecializations(), getLocations() ] );
    const getLawOffice = await getLawOffices( singleLocation, singleSpecialization );
    const renderLawOffice = getLawOffice.map( async ( { idLawOffice, profile, lawOfficeName, city, address, officeSpecialization, email } ) =>
    {
        const [ rating, service ] = await Promise.all( [ getRatings( idLawOffice ), getService( idLawOffice ) ] );
        const apoimentsArray = !!cookieStore.get( `name-${ idLawOffice }` )?.value ? await getAppointmentsList( JSON.parse( cookieStore.get( `name-${ idLawOffice }` ).value ), idLawOffice ) : [];
        return ( <div className='container  px-5 py-5 mx-auto min-h-vh' >
            <div className='lg:w-4/6 relative mx-auto flex flex-wrap border-2 p-5 shadow-md bg-slate-50'>
                <div className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded flex justify-center items-center border-2'>
                    <div className="flex items-center justify-center py-4 px-4">
                        <div className="max-w-sm w-full shadow-lg overflow-y-auto lg:max-h-72 max-h-60">
                            <Appoiments date={ async ( date: Date ) =>
                            {
                                'use server';
                                if ( !date ) return;
                                cookies().set( `name-${ idLawOffice }`, JSON.stringify( date ) );
                            } } />
                            <div className="pt-2 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                                <div className="px-4">
                                    <AppoimentsList appoiments={ apoimentsArray } idOffice={ idLawOffice } />
                                </div>
                            </div>
                        </div>
                    </div></div>
                <div className='absolute right-10 lg:top-5 top-72'>
                </div>
                <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                    <div className='flex flex-row items-center'>
                        {
                            ( profile ) ?
                                <img src={ profile } className={ `w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400` } />
                                :
                                <span className={ `w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 text-5xl` }>?</span>

                        }
                        <div className='flex flex-col ml-2'>
                            <h2 className='text-sm title-font text-gray-500 tracking-widest'>Law office name</h2>
                            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1 hover:text-indigo-500'>{ auth ?? email === emailOffice?.email  ? <Link href={ `/components/cardPreview?${ idLawOffice }` }>{ lawOfficeName }</Link>: <span>{ lawOfficeName }</span> }</h1>
                        </div>
                    </div>
                    <div className='mb-5 text-sm items-center flex mt-0'>
                        <Reviews ratings={ rating } idLawOffice={idLawOffice} />
                        <span className='ml-2 pl-2 py-2 border-l-2 border-gray-200 space-x-2s'>
                            <a href={ `https://www.google.com/maps/search/?api=1&query=${ city }%20${ address }` }>{ address }, { city }</a>
                        </span>
                    </div>
                    <div className='leading-relaxed'>
                        <Wares services={ service } officeSpecialization={officeSpecialization}/>
                    </div>
                    <div className='border-t-2 mt-1 pt-2 title-font'>The law office specializating in { officeSpecialization }</div>
                </div>
            </div >
        </div >
        );
    }
    );

    return ( <>
        <header className='bg-gray-800'>
            <div className='container flex-col lg:flex-row flex flex-grow sm:w-3/4 sm:space-x-4 sm:space-y-0 space-y-4 p-10 lg:items-center'>
                <div className='flex items-center justify-center lg:justify-stretch'>
                    <Image src={ libra } alt='libra' width={ 64 } height={ 64 } priority={ false } className='rounded-full' />
                        <a className='ml-3 text-xl text-white lg:text-gray-800' href={ '/' }>Lawyler</a>
                </div>
                <MyCombobox mapLocation={ locations } mapSpecialization={ specializations } choosenLocation={ singleLocation } choosenSpecialization={ singleSpecialization } />
                { auth !== undefined ? <div className='absolute right-16 text-gray-200'>
                    <Link href={ '/' }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </div> : <></> }
            </div>
        </header>
        <div className='bg-slate-100 min-h-96'>
            { renderLawOffice }
        </div>
    </>
    );
} 
