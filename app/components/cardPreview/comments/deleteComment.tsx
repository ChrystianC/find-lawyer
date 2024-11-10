'use client';
import { useEffect, useState } from "react";

export default function DeleteComment ( { idComment, del, user, actualUser } )
{
    const [ isDeleted, setDeleted ] = useState( false );
    useEffect( () =>
    {
        if ( isDeleted )
        {
            del( idComment );
        }

    }, [ isDeleted ] );
    return <>

        <button className="leading-relaxed text-base focus:outline-none font-medium  text-gray-800 dark:text-gray-100 mt-2 border-5 border-transparent inline-block hover:border-gray-700  hover:text-gray-900 p-1 border rounded disabled:opacity-15 disabled:border-none" onClick={ async () => { await setDeleted( true ); } }>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg></button></>;
}
