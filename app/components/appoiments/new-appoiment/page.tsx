// 'use client'
// import { useState } from 'react';

// export default function NewAppoiment() {
//     const [daysAvailable, setDaysAvailable] = useState([]);
//     const [startTime, setStartTime] = useState('');
//     const [endTime, setEndTime] = useState('');

//     const onHandleChange = (day: string, value: boolean) => {
//         setDaysAvailable({
//             ...daysAvailable,
//             [day]: value
//         })
//     }

//     const days = [{ day: 'Sunday' }, { day: 'Monday' }, { day: 'Tuesday' }, { day: 'Wednesday' }, { day: 'Thursday' }, { day: 'Friday' }, { day: 'Saturday' }];
//     const rederDays = days.map(({ day }, index) => {
//         return <div className='p-2 sm:w-1/2 w-full' key={index}>
//             <div className='bg-gray-100 rounded flex p-4 h-full items-center justify-between'>
//                 <input type='checkbox' onChange={(e) => onHandleChange(day, e.target.checked)} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'></input>
//                 <span className='title-font font-medium'>
//                     {day}
//                 </span>
//             </div>
//         </div>
//     });
//     return <>
//         <div className='bg-gray-800 text-slate-50'>
//             <div className='p-2 flex items-center justify-around'>
//                 <h2 className='text-2xl my-2'>Create New Appoiments</h2>
//                 <div>
//                     <a className='pr-2 hover:text-red-500'>  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-chevron-left' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
//                         <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//                         <polyline points='15 6 9 12 15 18' />
//                     </svg> Cancel</a>
//                     <a className=' hover:text-indigo-500'>Icon Save</a>
//                 </div>
//             </div>
//             <hr></hr>
//         </div>
//         <div><h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
//             Availablity days
//         </h1>
//             <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
//                 {rederDays}
//             </div>
//             <div>
//                 <h1 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
//                     Availablity time
//                 </h1>
//                 <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center justify-around bg-gray-100 p-4 rounded '>
//                     <h4>Start time</h4>
//                     <input type='time' className='p-2 sm:w-1/2 w-full' onChange={(e) => setStartTime(e.target.value)}></input>
//                 </div>
//                 <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center justify-around bg-gray-100 p-4 rounded '>
//                     <h4>End time</h4>
//                     <input type='time' className='p-2 sm:w-1/2 w-full' onChange={(e) => setEndTime(e.target.value)}></input>
//                 </div>
//             </div>
//         </div>
//     </>
// }
