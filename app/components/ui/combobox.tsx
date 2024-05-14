'use client'
import { useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

export function MyCombobox(props: { mapOptions: { [key: string]: string }[], onSelect: (parameter: string) => Promise<string>}) {
    const [selected, setSelected] = useState({ idSpecialization: 'TEST', specialization: '' } ?? { idLocation: 'TEST', location: '' });
    const [query, setQuery] = useState('');

    useEffect(() => {
        props.onSelect(selected.idSpecialization ?? selected.idLocation)
    }, [selected]);

    const options =
    query === ''
    ? props.mapOptions
    : props.mapOptions.filter((option) =>
    (option.specialization ?? option.location)
    .toLowerCase()
    .replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, ''))
    )

    return (
        <div>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(option: any) => option.specialization ?? option.location}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {options.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-teal-500">
                                    Nothing found.
                                </div>
                            ) : (
                                options.map((option) => (
                                    <Combobox.Option
                                        key={option.idSpecialization ?? option.idLocation}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-900 text-white' : 'text-gray-900'
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
                                                    {option.specialization ?? option.location}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
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
    )
}
