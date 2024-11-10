"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import React from "react";
import Image from "next/image";
import libra from "../../ui/images/libra.png";

export default function Logout({ officeCookie, authCookie }) {
  const router = useRouter();
  console.log(officeCookie, authCookie.name);
  const deleteCokie = (officeCookie, authCookie) => {
    deleteCookie(officeCookie.name);
    deleteCookie(authCookie.name);

    router.replace("/");
    router.refresh();
  };

  return (
    <>
      {officeCookie ? (
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
            <button
              onClick={() => deleteCokie(officeCookie, authCookie)}
              className="border-5 border-transparent inline-block hover:border-rose-900 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded"
            >
              Log out
            </button>
          </div>
        </header>
      ) : (
        <></>
      )}
    </>
  );
}
