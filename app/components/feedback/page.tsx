
import Link from 'next/dist/client/link';
import { getLocation, getSpecializations } from '../../Api';


export async function FeedbackPage() {
    const [specializations, location] = await Promise.all([getSpecializations(), getLocation()]);

    const renderSpecializations = specializations.map((specialization) => {
        return <Link className='px-5' href={`/components/cards?idSpecialization=${specialization.idSpecialization}/idLocation=${location.idLocation}`}>{specialization.specialization}</Link>
    });

    return (
        <div className='container py-6'>
            <div className='flex border-2 rounded-lg border-gray-100 broder-opacity-50 p-8 bg-gray-100' style={{borderRadius: '10px'}}>
                {renderSpecializations}
            </div>
            <div className='flex flex-wrap  py-6'>
            <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-100 border-opacity-50'>
                <h2 className='text-lg sm:text-xl font-medium title-font mb-2'>The service is free of charge</h2>
                <p className='leading-relaxed text-gray-900 mb-4'>There is no chare for using the service</p>
            </div>
            </div>
        </div>
    );
}