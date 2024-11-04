'use client';
import Image from 'next/image';
import libra from '../../ui/images/libra.png';
import { useState } from 'react';
import Link from 'next/link';

export default function UserPage ()
{
    const [ password, setPassword ] = useState( '' );
    const [ email, setEmail ] = useState( '' );

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();

        try
        {
            const response = await fetch( 'http://localhost:3555/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( { email, password } ),
            } );

            const data = await response.json();


        } catch ( e )
        {
            console.log( e );
        }
    };

    return ( <>
        <Navbar></Navbar>
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12"><h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1><p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p><div className="flex mt-6 justify-center"><div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div></div></div>
            <form onSubmit={ handleSubmit } >
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

                    <div className="relative flex-grow w-full">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" value={ email }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                            required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="text" id="password" name="password" value={ password }
                            onChange={ ( e ) => setPassword( e.target.value ) }
                            required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <button type="submit" className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign in</button>
            </form>
        </div>
    </> );
};



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

                </nav>
                <span className='lg:border-l lg:border-gray-700 lg:pl-6 lg:py-7'>
                </span>
                <div>
                    <Link className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded' href={ '/components/login/user/register' }>Register User</Link>                    <button className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded'>Register Kancelaria</button>
                </div>
            </div>
        </header>
    );
};