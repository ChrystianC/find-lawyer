'use client'
import { useCallback, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRouter, useSearchParams } from 'next/dist/client/components/navigation';
import { Locations, Specializations } from '@prisma/client';

export function MyCombobox(props: { mapLocation: Locations[], mapSpecialization: Specializations[], choosenLocation?: Locations, choosenSpecialization?: Specializations }) {
    const { mapLocation, mapSpecialization, choosenLocation, choosenSpecialization } = props;
    const [selectedLocation, setSelectedLocation] = useState(choosenLocation ?? { idLocation: '', location: '' });
    const [selectedSpecialization, setSelectedselectedSpecialization] = useState(choosenSpecialization ?? { idSpecialization: '', specialization: '' });
    const [queryLocation, setQueryLocation] = useState('');
    const [querySpecialization, setQuerySpecialization] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams();
            params.set(name, value)
            return params.toString()
        }, [searchParams]
    );

    const options = (query: string, mapOptions: any) => {
        if (query === '')
            return mapOptions
        else return mapOptions.filter((option: any) =>
            (option.location ?? option.specialization)
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
    };
    const locationOptions = options(queryLocation, mapLocation);
    const specializationOptions = options(querySpecialization, mapSpecialization);
    const disabled = selectedSpecialization?.specialization === '' || selectedLocation?.location === '';
    // const renderCombobox = (optionsName: string, options: any, value: any, state: any, queryOption: any,  query: any) => {
    //     console.log(options.map(option => option[optionsName]))
    //     return (<div className='relative flex-grow w-full' key={value}>
    //     <label className='leading-7 text-sm text-gray-600'>{optionsName.toUpperCase()}</label>
    //     <Combobox value={value} onChange={state}>
    //         <div className='relative mt-1'>
    //             <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
    //                 <Combobox.Input
    //                     className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
    //                     displayValue={(option: any) => option?.name}
    //                     onChange={(event) => query(event.target.value)}
    //                 />
    //                 <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
    //                     <ChevronUpDownIcon
    //                         className='h-5 w-5 text-gray-400'
    //                         aria-hidden='true'
    //                     />
    //                 </Combobox.Button>
    //             </div>
    //             <Transition
    //                 leave='transition ease-in duration-100'
    //                 leaveFrom='opacity-100'
    //                 leaveTo='opacity-0'
    //                 afterLeave={() => query('')}
    //             >
    //                 <Combobox.Options className='z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
    //                     {options.length === 0 && queryOption !== '' ? (
    //                         <div className='relative cursor-default select-none px-4 py-2 text-teal-500'>
    //                             Nothing found.
    //                         </div>
    //                     ) : (
    //                         options.map((option) => (
    //                             <Combobox.Option
    //                                 key={option[optionsName]}
    //                                 className={({ active }) =>
    //                                     `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-900 text-white' : 'text-gray-900'
    //                                     }`
    //                                 }
    //                                 value={option[optionsName]}
    //                             >
    //                                 {({ selected, active }) => (
    //                                     <>
    //                                         <span
    //                                             className={`block truncate ${selected ? 'font-medium' : 'font-normal'
    //                                                 }`}
    //                                         >
    //                                             {option[optionsName]}
    //                                         </span>
    //                                         {selected ? (
    //                                             <span
    //                                                 className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
    //                                                     }`}
    //                                             >
    //                                             </span>
    //                                         ) : null}
    //                                     </>
    //                                 )}
    //                             </Combobox.Option>
    //                         ))

    //                     )}
    //                 </Combobox.Options>
    //             </Transition>
    //         </div>
    //     </Combobox>
    // </div>)
    // }
    return (
        <>
            <div className='relative flex-grow w-full'>
                <label className='absolute bottom-10 leading-7 text-sm text-gray-300'>Specialization</label>
                <Combobox value={selectedSpecialization} onChange={setSelectedselectedSpecialization}>
                    <div className='relative mt-1'>
                        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md sm:text-sm'>
                            <Combobox.Input
                                className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
                                displayValue={(option: any) => option?.specialization}
                                onChange={(event) => setQuerySpecialization(event.target.value)}
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
                            afterLeave={() => setQuerySpecialization('')}
                        >
                            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                {specializationOptions.length === 0 && querySpecialization !== '' ? (
                                    <div className='relative cursor-default select-none px-4 py-2 text-red-500'>
                                        Nothing found.
                                    </div>
                                ) : (
                                    specializationOptions.map((option) => (
                                        <Combobox.Option
                                            key={option.idSpecialization}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-900 text-white' : 'text-white-900'
                                                }`
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {option.specialization}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-gray-600'
                                                                }`}
                                                        >
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))

                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
            <div className='relative flex-grow w-full '>
                <label className='absolute bottom-10 leading-7 text-sm text-gray-300'>Location</label>
                <Combobox value={selectedLocation} onChange={setSelectedLocation}>
                    <div className='relative mt-1'>
                        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md  sm:text-sm'>
                            <Combobox.Input
                                className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
                                displayValue={(option: any) => option?.location}
                                onChange={(event) => setQueryLocation(event.target.value)}
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
                            afterLeave={() => setQueryLocation('')}
                        >
                            <Combobox.Options className=' absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                                {locationOptions.length === 0 && queryLocation !== '' ? (
                                    <div className='relative cursor-default select-none px-4 py-2 text-red-500'>
                                        Nothing found.
                                    </div>
                                ) : (
                                    locationOptions.map((option) => (
                                        <Combobox.Option
                                            key={option.idLocation}
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-900 text-white' : 'text-white-900'
                                                }`
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {option.location}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-gray-600'
                                                                }`}
                                                        >
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))

                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
            <div >
                <button className='flex justify-center items-center h-9 w-32 border-5 border-gray-800 text-gray-200 font-semibold hover:bg-indigo-700 py-2 px-4 border rounded hover:border-blue-900 disabled:hover:border-rose-900  disabled:hover:bg-rose-800 bg-indigo-800' disabled={disabled} onClick={() => { return router.replace(`/components/cards?${createQueryString('idSpecialization', selectedSpecialization.idSpecialization)}/${createQueryString('idLocation', selectedLocation.idLocation)}`), undefined, { shallow: true } }}>Search</button>
            </div >
        </>
    )
}
