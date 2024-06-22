import { headers } from 'next/headers';
import { MyCombobox } from '../ui/combobox';
import libra from '../ui/images/libra.png';
import Image from 'next/image'
// import Appoiments from '../appoiments/page';
import Reviews from '../ui/reviews/reviews';
import Wares from '../ui/services';
import { Footer } from '../index';
import { getSpecializationFromParam, getLocationFromParam, getSpecializations, getLocations, getLawOffices, getService, getRatings } from '../../Api';
import Appoiments from '../appoiments/page';

export default async function LawOfficeCardsPage() {
    // await prisma.create({
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
    const requestUrl = headers().get('x-url').split('?')[1].split('%2F');
    const [singleSpecialization, singleLocation] = await Promise.all([getSpecializationFromParam(requestUrl[0]), getLocationFromParam(requestUrl[1])]);
    const [specializations, locations] = await Promise.all([getSpecializations(), getLocations()]);
    const getLawOffice = await getLawOffices(singleLocation, singleSpecialization);
    const renderLawOffice = getLawOffice.map(async ({ idLawOffice, profile, lawOfficeName, city, address, officeSpecialization }) => {
        const [rating, service] = await Promise.all([getRatings(idLawOffice), getService(idLawOffice)]);

        return (<div className='container px-5 py-5 mx-auto z-20' >
            <div className='lg:w-4/6 mx-auto flex flex-wrap border-2 p-5 shadow-md bg-slate-50'>
                <div className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded flex justify-center items-center border-2'><Appoiments /></div>
                <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                    <div className='flex flex-row items-center'>
                        {profile ? <img src={profile} className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'></img> : <span className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 text-5xl'>?</span>}
                        <div className='flex flex-col ml-2'>
                            <h2 className='text-sm title-font text-gray-500 tracking-widest'>Law office name</h2>
                            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>{lawOfficeName}</h1>
                        </div>
                    </div>
                    <div className='mb-5 text-sm items-center flex mt-0'>
                        <Reviews ratings={rating} />
                        <span className='ml-2 pl-2 py-2 border-l-2 border-gray-200 space-x-2s'>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${city}%20${address}`}>{address}, {city}</a>
                        </span>
                    </div>
                    <div className='leading-relaxed'>
                        <Wares services={service} />
                    </div>
                    <div className='border-t-2 mt-1 pt-2 title-font'>The law office specializating in {officeSpecialization}</div>
                </div>
            </div>
        </div>)
    }

    )

    return (<>
        <header className='bg-gray-800'>
            <div className='container flex-col lg:flex-row flex flex-grow sm:w-3/4 sm:space-x-4 sm:space-y-0 space-y-4 p-10 lg:items-end'>
                <div className='flex items-center justify-center lg:justify-start'>
                    <Image src={libra} alt='libra' width={64} height={64} priority={false} className='rounded-full' />
                    <span className='ml-3 text-xl text-white lg:text-gray-800'>Lawyler</span>
                </div>
                <MyCombobox mapLocation={locations} mapSpecialization={specializations} choosenLocation={singleLocation} choosenSpecialization={singleSpecialization} />
            </div>
        </header>
        <div className='bg-slate-100 min-h-96'>
            {renderLawOffice}
        </div>
        <Footer />
    </>
    );
} 
