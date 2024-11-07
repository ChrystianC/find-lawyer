'use server';
import { Ratings } from '@prisma/client';
import AddReview from './addReview';
import { prisma } from '../../../../prisma/db';
import { cookies } from 'next/headers';

export default async function Reviews ( { ratings, idLawOffice } )
{
    const cookieStore = cookies();
    const idUser = cookieStore.get( 'user' )?.value;

    const user = await prisma.user.findFirst( { where: { idUser: { equals: idUser } } } );

    const getAvg = ( array: Ratings[] ) =>
    {
        if ( !array.length ) return 0;
        let sum = 0;

        array.forEach( ( { rating } ) => sum += rating );
        return Math.ceil( sum / array.length );
    };
    const create = async ( rating: number, office ) =>
    {
        'use server';
        if ( !rating) return;
        await prisma.ratings.create( {
            data:
            {
                rating: Number( rating ),
                idOffice: office,
                idUser: user.idUser
            }
        },
        );
    };
    const numberOfReview = ratings.length;
    const avgRating = getAvg( ratings );
    console.log(ratings[0],ratings[0]?.idOffice, 'aaaaaaaaaaaaaaaaa')
    return (
        <div className='text-center flex justify-center items-center group relative' key={ idLawOffice }>
            <svg fill={ avgRating >= 1 ? 'currentColor' : undefined } stroke={ avgRating >= 1 ? 'currentColor' : undefined } className='w-4 h-4 text-indigo-500 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg>
            <svg fill={ avgRating >= 2 ? 'currentColor' : undefined } stroke={ avgRating >= 2 ? 'currentColor' : undefined } className='w-4 h-4 text-indigo-500 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg>
            <svg fill={ avgRating >= 3 ? 'currentColor' : undefined } stroke={ avgRating >= 3 ? 'currentColor' : undefined } className='w-4 h-4 text-indigo-500 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg>
            <svg fill={ avgRating >= 4 ? 'currentColor' : undefined } stroke={ avgRating >= 4 ? 'currentColor' : undefined } className='w-4 h-4 text-indigo-500 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg>
            <svg fill={ avgRating >= 5 ? 'currentColor' : undefined } stroke={ avgRating >= 5 ? 'currentColor' : undefined } className='w-4 h-4 text-indigo-500 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg>
            <span className='text-gray-600 ml-1'>{ numberOfReview } Review</span>
            <span className='absolute top-5 scale-0 rounded bg-gray-800 p-2 group-hover:scale-100'><AddReview create={ create } office={ idLawOffice } isDisabled={idUser === undefined} /></span>
        </div>
    );

}
