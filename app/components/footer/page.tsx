import libra from "../ui/images/libra.png";
import Image from "next/image";
export async function Footer() {
  return (
    <footer className="container px-5 py-16 mx-auto max-h-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 pb-5">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
          <Image
            src={libra}
            alt="libra"
            width={64}
            height={64}
            priority={false}
            className="rounded-full bg-gray-900 border-4 border-gray-700"
          />
          <span className="ml-3 text-xl">Lawyer</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">What's up nigga</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800"></a>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
}
