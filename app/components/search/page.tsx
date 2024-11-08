
import { prisma } from '../../../prisma/db';
import { getLocations, getSpecializations } from '../../serverComponent';
import { MyCombobox } from '../ui/combobox';
import Temida from '../ui/images/Temida.png';
import Image from 'next/image';
export async function SearchPage ()
{
    //     await prisma.lawOffice.create({
    //     data:
    //     {
    //         lawOfficeName: 'Law office 3',
    //         ratings: { create: { rating: 5 }},
    //         officeSpecialization: 'Taxes',
    //         city: 'Cracow',
    //         address: 'ul. Kąkolowa 15',
    //         profile: 'https://images.pexels.com/photos/26201367/pexels-photo-26201367/free-photo-of-miasto-znane-miejsce-budynek-most.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         services: {create: {serviceName: 'Service Name', servicePrice: 'Service Price'}}
    //     }
    // },
    // );
    const [ specializations, locations ] = await Promise.all( [ getSpecializations(), getLocations() ] );

    return <section className='text-gray-600 bg-gray-900'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
            <div className='flex flex-grow'>
                <div className='flex flex-grow flex-col justify-center'>
                    <h1 className='title-font font-medium text-3xl text-white'>Find a suitable lawyer and make an appointment</h1>
                    <p className='leading-relaxed mt-2 mb-6'>Search among { ( Math.floor( Math.random() * 3000000 ) + 10000 ) } lawyers</p>
                    <div className='flex sm:flex-row flex-col sm:w-9/10 sm:space-x-4 sm:space-y-0 space-y-4 bg-gray-800 p-10 items-end' style={ { borderRadius: '10px' } } >
                        <MyCombobox mapLocation={ locations } mapSpecialization={ specializations } />
                    </div>

                </div>
                <Image src={ Temida } alt='libra' className='lg:block hidden w-1/3 h-auto' />
            </div>
        </div>
    </section>;
}