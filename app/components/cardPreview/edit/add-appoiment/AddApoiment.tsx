'use client';
import { useState } from "react";

export default function AddApoiment ( { newAppoiment, lawOffice, isDisabled } )
{
    const [ Appoiment, setAppoiment ] = useState( new Date().toString() );

    return <>
        <label htmlFor={ `hero-field-${ lawOffice.idLawOffice }-appoiment` } className="leading-7 text-sm text-gray-600">Appoiment</label>
        <input type="datetime-local" disabled={ isDisabled } id={ `hero-field-${ lawOffice.idLawOffice }-appoiment` } name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={ Appoiment } onChange={ ( e ) => setAppoiment( e.target.value ) } />
        <button disabled={ isDisabled } className="font-medium text-2xl absolute top-5 right-5" onClick={ () => ( newAppoiment( Appoiment ) ) }>+</button>
    </>;
}