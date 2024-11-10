import Link from "next/link";
import Image from "next/image";
import libra from "../ui/images/libra.png";
import { cookies } from "next/headers";
import { prisma } from "../../../prisma/db";

export async function NavbarPage() {
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");
  const user = cookieStore.get("user");
  const office = cookieStore.get("office");
  if (office?.value)
    var findOffice = await prisma.lawOffice.findFirst({
      where: { email: office.value },
    });
  return (
    <header className="text-gray-600 border-b border-gray-700 bg-gray-900">
      <div className="container mx-auto flex flex-col p-5 lg:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={libra}
            alt="libra"
            width={64}
            height={64}
            className="rounded-full"
          />
          <span className="ml-3 text-xl text-white">Lawyler</span>
        </a>
        <nav className="md:ml-auto flex-wrap items-center text-base justify-center hidden lg:block"></nav>
        <span className="lg:border-l lg:border-gray-700 lg:pl-6 lg:py-7"></span>
        <div>
          {auth !== undefined ? (
            <Link
              href={
                user?.value
                  ? `/components/userPreview?${user.value}`
                  : office?.value
                    ? `/components/cardPreview?${findOffice.idLawOffice}`
                    : "/"
              }
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-14 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />{" "}
              </svg>
            </Link>
          ) : (
            <>
              {" "}
              <Link
                className="border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded"
                href={"/components/login/user"}
              >
                Login user
              </Link>
              <Link
                className="border-5 border-transparent inline-block hover:border-gray-700 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded"
                href={"/components/login/office"}
              >
                Login law office
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
