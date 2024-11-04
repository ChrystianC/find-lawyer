import Link from 'next/link';
import Image from 'next/image'
import libra from '../ui/images/libra.png';

export async function NavbarPage() {
    return (
        <header className='text-gray-600 border-b border-gray-700 bg-gray-900'>
            <div className='container mx-auto flex flex-col p-5 lg:flex-row items-center'>
                <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                    <Image src={libra} alt='libra' width={64} height={64} className='rounded-full' />
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
                <Link className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded' href={'/components/login/user'}>Login</Link>
                    <button className='border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded'>Login Kancelaria</button>
                </div>
            </div>
        </header>
    );
}

function NavLink({ text }) {
    return <Link href='#' className='mr-10 hover:text-white'>{text}</Link>
}