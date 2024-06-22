'use client'
import { useEffect, useState } from 'react'

export default function AddReview({ create, office }) {
    const [rating, setRating] = useState(null);

    return (
        < >
            <input type='checkbox' id={`star-${office}-1`} value='1' className='hidden peer' onChange={async (e) => { setRating(e.target.value); await create(1) }}></input>
            <label htmlFor={`star-${office}-1`} className='peer-checked:text-yellow-300'>  <svg fill={rating >= 1 ? 'currentColor' : undefined} stroke={rating >= 1 ? 'currentColor' : 'white'} className='w-4 h-4 text-yellow-400 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg></label>
            <input type='checkbox' id={`star-${office}-2`} value='2' className='hidden peer' onChange={async (e) => { setRating(e.target.value); await create(2) }}></input>
            <label htmlFor={`star-${office}-2`} className='peer-checked:text-yellow-300' >  <svg fill={rating >= 2 ? 'currentColor' : undefined} stroke={rating >= 2 ? 'currentColor' : 'white'} className='w-4 h-4 text-yellow-400 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg></label>
            <input type='checkbox' id={`star-${office}-3`} value='3' className='hidden peer' onChange={async (e) => { setRating(e.target.value); await create(3) }}></input>
            <label htmlFor={`star-${office}-3`} className='peer-checked:text-yellow-300'>  <svg fill={rating >= 3 ? 'currentColor' : undefined} stroke={rating >= 3 ? 'currentColor' : 'white'} className='w-4 h-4 text-yellow-400 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg></label>
            <input type='checkbox' id={`star-${office}-4`} value='4' className='hidden peer' onChange={async (e) => { setRating(e.target.value); await create(4) }}></input>
            <label htmlFor={`star-${office}-4`} className='peer-checked:text-yellow-300'>  <svg fill={rating >= 4 ? 'currentColor' : undefined} stroke={rating >= 4 ? 'currentColor' : 'white'} className='w-4 h-4 text-yellow-400 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg></label>
            <input type='checkbox' id={`star-${office}-5`} value='5' className='hidden peer' onChange={async (e) => { setRating(e.target.value); await create(5) }}></input>
            <label htmlFor={`star-${office}-5`} className='peer-checked:text-yellow-300'>  <svg fill={rating >= 5 ? 'currentColor' : undefined} stroke={rating >= 5 ? 'currentColor' : 'white'} className='w-4 h-4 text-yellow-400 inline' viewBox='0 0 24 24'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path></svg></label>
        </>
    )
}