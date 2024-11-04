'use client';
import Link from 'next/link';
import Image from 'next/image';
import libra from '../../../ui/images/libra.png';
import { useState } from 'react';

export default function UserPage ()
{
    const [ password, setPassword ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ userName, setUserName ] = useState( '' );

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();

        try
        {
            const response = await fetch( 'http://localhost:3555/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { email, password, userName } ),
            } );

            const data = await response.json();

            console.log(data)
        } catch ( e )
        {
            console.log( e );
        }
    };
    return ( <>
        <Navbar></Navbar>
        <form onSubmit={handleSubmit}>

        <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    </svg>

                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Share you Email with us</h2>
                    <div className="relative flex-grow w-full">
                        <input type="email" name="email"
                            value={ email }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                            required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The user name of yours</h2>
                    <div className="relative flex-grow w-full">
                        <input type="text" name="userName"
                          value={ userName }
                          onChange={ ( e ) => setUserName( e.target.value ) }
                          required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">

                    </svg>
                </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                    </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">And the most importat your own password</h2>
                    <div className="relative flex-grow w-full">
                        <input type="text" name="password"                  value={ password }
                            onChange={ ( e ) => setPassword( e.target.value ) }
                            required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <button type='submit' className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sing up</button></div>
    </form>
    </> );
}

const Navbar = () =>
{
    return (
        <header className='text-gray-600 border-b border-gray-700 bg-gray-900'>
            <div className='container mx-auto flex flex-col p-5 lg:flex-row items-center'>
                <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                    <Image src={ libra } alt='libra' width={ 64 } height={ 64 } className='rounded-full' />
                    <span className='ml-3 text-xl text-white'>Lawyler</span>
                </a>
                <nav className='md:ml-auto flex-wrap items-center text-base justify-center hidden lg:block'>
                    {/* <NavLink text='Advices' />
                    <NavLink text='Second Link' />
                    <NavLink text='Third Link' />
                    <NavLink text='Fourth Link' /> */}
                </nav>
                <span className='lg:border-l lg:border-gray-700 lg:pl-6 lg:py-7'>
                </span>
                <div>
                    <button className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded'>Login User</button>
                    <button className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded'>Login Kancelaria</button>
                </div>
            </div>
        </header>
    );
};