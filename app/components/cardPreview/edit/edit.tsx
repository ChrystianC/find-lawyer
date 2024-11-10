'use client';
import { useState } from "react";
import DeleteButton from "../delete/delete";
import AddApoiment from "./add-appoiment/AddApoiment";
import { Combobox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function EditForm ( { edit, lawOffice, deleteLawOffice, newAppoiment, mapLocation, mapSpecialization, isNotOffice } )
{
    const [ city, setCity ] = useState( lawOffice.city ?? undefined );
    const [ queryCity, setQueryCity ] = useState( '' );
    const [ address, setAddress ] = useState( lawOffice.address ?? undefined );
    const [ lawOfficeName, setLawOfficeName ] = useState( lawOffice.lawOfficeName ?? undefined );
    const [ officeSpecialization, setOfficeSpecialization ] = useState( lawOffice.officeSpecialization ?? undefined );
    const [ queryOfficeSpecialization, setQueryOfficeSpecialization ] = useState( '' );
    const [ profile, setProfile ] = useState( lawOffice.profile ?? undefined );

    const options = ( query: string, mapOptions: any ) =>
    {
        if ( query === '' )
            return mapOptions;
        else return mapOptions.filter( ( option: any ) =>
            ( option.location ?? option.specialization )
                .toLowerCase()
                .replace( /\s+/g, '' )
                .includes( query.toLowerCase().replace( /\s+/g, '' ) )
        );
    };
    const cityOptions = options( queryCity, mapLocation );
    const officeSpecializationOptions = options( queryOfficeSpecialization, mapSpecialization );
    return <>
        <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-officeSpecialization` } className="leading-7 text-sm text-gray-600">Office Specialization</label>
                    <Combobox value={ officeSpecialization } onChange={ setOfficeSpecialization }>
                        <div className='relative mt-1'>
                            <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm'>
                                <Combobox.Input
                                    className='w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    displayValue={ ( option: any ) => option?.specialization }
                                    onChange={ ( event ) => setQueryOfficeSpecialization( event.target.value ) }
                                    value={ officeSpecialization }
                                    disabled={ isNotOffice }
                                />
                                <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <ChevronUpDownIcon
                                        className='h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                    />
                                </Combobox.Button>
                            </div>
                            <Transition
                                leave='transition ease-in duration-100'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                                afterLeave={ () => setQueryOfficeSpecialization( '' ) }
                            >
                                <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                    { officeSpecializationOptions.length === 0 && officeSpecializationOptions !== '' ? (
                                        <div className='relative cursor-default select-none px-4 py-2 text-red-500'>
                                            Nothing found.
                                        </div>
                                    ) : (
                                        officeSpecializationOptions.map( ( option ) => (
                                            <Combobox.Option
                                                key={ option.idSpecialization }
                                                className={ ( { active } ) =>
                                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-gray-900 text-white' : 'text-white-900'
                                                    }`
                                                }
                                                value={ option.specialization }
                                            >
                                                { ( { selected, active } ) => (
                                                    <>
                                                        <span
                                                            className={ `block truncate ${ selected ? 'font-medium' : 'font-normal'
                                                                }` }
                                                        >
                                                            { option.specialization }
                                                        </span>
                                                        { selected ? (
                                                            <span
                                                                className={ `absolute inset-y-0 left-0 flex items-center pl-3 ${ active ? 'text-white' : 'text-gray-600'
                                                                    }` }
                                                            >
                                                            </span>
                                                        ) : null }
                                                    </>
                                                ) }
                                            </Combobox.Option>
                                        ) )

                                    ) }
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-lawOfficeName` } className="leading-7 text-sm text-gray-600">Office Name</label>
                    <input type="text" disabled={ isNotOffice } id={ `hero-field-${ lawOffice.idLawOffice }-lawOfficeName` } name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={ lawOfficeName } onChange={ ( e ) => setLawOfficeName( e.target.value ) } />
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-address` } className="leading-7 text-sm text-gray-600">Office Address</label>
                    <input type="text" disabled={ isNotOffice } id={ `hero-field-${ lawOffice.idLawOffice }-address` } name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={ address } onChange={ ( e ) => setAddress( e.target.value ) } />
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-city` } className="leading-7 text-sm text-gray-600">Office City</label>
                    <Combobox value={ city } onChange={ setCity }>
                        <div className='relative mt-1'>
                            <div className='relative w-full cursor-default overflow-hidden rounded-lg  text-left shadow-md sm:text-sm'>
                                <Combobox.Input
                                    className='w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    displayValue={ ( option: any ) => option.location }
                                    onChange={ ( event ) => setQueryCity( event.target.value ) }
                                    value={ city }
                                    disabled={ isNotOffice }
                                />
                                <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <ChevronUpDownIcon
                                        className='h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                    />
                                </Combobox.Button>
                            </div>
                            <Transition
                                leave='transition ease-in duration-100'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                                afterLeave={ () => setQueryCity( '' ) }
                            >
                                <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                    { cityOptions.length === 0 && queryCity !== '' ? (
                                        <div className='relative cursor-default select-none px-4 py-2 text-red-500'>
                                            Nothing found.
                                        </div>
                                    ) : (
                                        cityOptions.map( ( option ) => (
                                            <Combobox.Option
                                                key={ option.idLocation }
                                                className={ ( { active } ) =>
                                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-gray-900 text-white' : 'text-white-900'
                                                    }`
                                                }
                                                value={ option.location }
                                            >
                                                { ( { selected, active } ) => (
                                                    <>
                                                        <span
                                                            className={ `block truncate ${ selected ? 'font-medium' : 'font-normal'
                                                                }` }
                                                        >
                                                            { option.location }
                                                        </span>
                                                        { selected ? (
                                                            <span
                                                                className={ `absolute inset-y-0 left-0 flex items-center pl-3 ${ active ? 'text-white' : 'text-gray-600'
                                                                    }` }
                                                            >
                                                            </span>
                                                        ) : null }
                                                    </>
                                                ) }
                                            </Combobox.Option>
                                        ) )
                                    ) }
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-profile` } className="leading-7 text-sm text-gray-600">Office Profile</label>
                    <input type="text" disabled={ isNotOffice } id={ `hero-field-${ lawOffice.idLawOffice }-profile` } name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={ profile } onChange={ ( e ) => setProfile( e.target.value ) } />
                </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4 mb-4">
                <div className="border border-gray-200 p-6 rounded relative">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-700 text-gray-200 mb-4">
                        <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <p className="leading-relaxed text-base"></p>
                    <AddApoiment lawOffice={ lawOffice } newAppoiment={ newAppoiment } isDisabled={ isNotOffice } />
                </div>
            </div>
        </div>
        { !isNotOffice ? <><div className="text-4xl flex mx-auto mt-16 text-white  border-0 py-2 px-8 focus:outline-none rounded justify-around"><DeleteButton lawOffice={ lawOffice } deleteLaw={ deleteLawOffice } />
            <button className="focus:outline-none font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2 border-5 border-transparent inline-block hover:border-gray-700  hover:text-gray-900 p-4 border rounded disabled:opacity-15 disabled:border-none" onClick={ () =>
                edit( city, address, lawOfficeName, officeSpecialization, profile ) }>Edit</button>
        </div > </> : <></> }
        <div className="flex mx-auto justify-center  mt-1">
            <div className="w-4/5 h-1 rounded-full bg-gray-700 inline-flex"></div>
        </div>
    </>;
}