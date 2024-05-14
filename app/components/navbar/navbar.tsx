import Link from "next/link";
import Image from 'next/image'
import libra from '../ui/images/libra.png';

export function NavbarPage() {
    return (
        <header className="text-gray-600 border-b border-gray-700 bg-gray-900">
            <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                   <Image src={libra} alt="libra" width={64} height={64}/>
                    <span className="ml-3 text-xl text-white">Laywer</span>
                </a>
                <nav className="md:ml-auto flex-wrap items-center text-base justify-center hidden lg:block">
                    <NavLink text="First Link"/>
                    <NavLink text="Second Link"/>
                    <NavLink text="Third Link"/>
                    <NavLink text="Fourth Link"/>
                </nav>
                <span className="lg:border-l lg:border-gray-700 lg:pl-6 lg:py-7">
                </span>
                <div className="m-1 border p-1">LOGIN</div>
                <div className="m-1 border p-1">Login Kancelaria</div>
            </div>
        </header>
    );
} 

function NavLink(props: {text: string}) {
   return <Link href="#" className="mr-10 hover:text-white">{props.text}</Link>
}