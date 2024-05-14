import { Specialization, Location } from '@prisma/client';
import { prisma } from '../../../prisma/db'
import { MyCombobox } from '../ui/combobox';
import Link from 'next/link';
import Image from 'next/image'
import temida from '../ui/images/Temida.webp';
import { useSearchParams } from 'next/navigation';

async function getSpecializations() {
  const specializations: Specialization[] = await prisma.specialization.findMany();
  return specializations;
}

async function getLocations() {
  const locations: Location[] = await prisma.location.findMany();
  return locations;
}

export async function SearchPage() {
  const [specializations, locations] = await Promise.all([getSpecializations(), getLocations()]);
  
  const setSpecialization: (paramentr: string) => Promise<string> = async (parameter) => {
    'use server';
    return parameter;
  }
  const setLocation: (paramentr: string) => Promise<string> = async (parameter) => {
    'use server';
    return parameter;
  }

  let specializaton: any = 'await baz(setSpecialization)';
  let location: string = '';
  
  return <section className='text-gray-600 bg-gray-900'>
    <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
      <div className='flex flex-col flex-grow md:w-1/2 md:pr-16'>
        <h1 className='title-font font-medium text-3xl text-white'>Find a suitable lawyer and make an appointment</h1>
        <p className='leading-relaxed mt-2 mb-6'>Search among {specializations.length} lawyers</p>
        <div className='flex flex-grow sm:flex-row flex-col w-3/4 sm:space-x-4 sm:space-y-0 space-y-4 bg-gray-800 p-10'>
          <div className='relative flex-grow w-full'>
            <label className='leading-7 text-sm text-gray-600'>Specialization</label>
            <MyCombobox mapOptions={specializations} onSelect={setSpecialization} />
          </div>
          <div className='relative flex-grow w-full'>
            <label className='leading-7 text-sm text-gray-600'>Location</label>
            <MyCombobox mapOptions={locations} onSelect={setLocation}/>
          </div>
          <div className='relative flex-grow w-1/3'>
          <Link className='text-dark border' href={specializaton + '/'+ location}>Find lawyer</Link>
          </div>
        </div>
      </div>
      
      <Image className='hidden lg:block ' src={temida} alt='libra' width={1200} height={1200}/>
      
    </div>
    <div className='bg-gray-100'>Link 1</div>
    <div className='bg-gray-100'>Link 2</div>
    <div className='bg-gray-100'>Link 3</div>
    <div className='bg-gray-100'>Link 4</div>
  </section>
}