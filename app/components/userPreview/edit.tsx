"use client";
import Image from "next/image";
import libra from "../ui/images/libra.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export default function UserPreview({
  Useremail,
  Userpassword,
  UseruserName,
  userId,
  appoiments,
  userCookie,
  authCookie,
}) {
  const router = useRouter();
  const [password, setPassword] = useState(Userpassword ?? "");
  const [email, setEmail] = useState(Useremail ?? "");
  const [userName, setUserName] = useState(UseruserName ?? "");
  const renderAppoments = appoiments.map(
    async ({ date, createdAt, service }) => {
      return (
        <div className=" bg-gray-200 bg-opacity-75 px-8 pt-6 pb-6 rounded-lg overflow-hidden text-center relative m-5">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Appoiment
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {service}
          </h1>
          <span className="text-indigo-500 inline-flex items-center">
            Date: {date.toDateString()} {date.toLocaleTimeString()}
          </span>
          <p className="leading-relaxed mb-3">
            Created by: {email} {createdAt.toDateString()}
          </p>
        </div>
      );
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3555/user/preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userName, userId }),
      });

      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
    router.replace(`/components/userPreview?${userId}`);
  };
  return (
    <div className="bg-gray-50">
      <Navbar userCookie={userCookie} authCookie={authCookie} />

      <div className="flex flex-wrap w-full  flex-col items-center text-center mt-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Appoiments Section
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          HI {userName} below you can find your future appoiments
        </p>
      </div>
      <div className="flex flex-wrap justify-center">{renderAppoments}</div>
      <form onSubmit={handleSubmit}>
        <div className="container px-5 py-16 mx-auto ">
          <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col text-gray-900 text-xl title-font font-medium mb-2"'>
            Your user data, change it as you like
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Share you Email with us
              </h2>
              <div className="relative flex-grow w-full">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                The user name of yours
              </h2>
              <div className="relative flex-grow w-full">
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                And the most importat your own password
              </h2>
              <div className="relative flex-grow w-full">
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex mx-auto mt-20 text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg"
          >
            Change Data
          </button>
        </div>
      </form>
    </div>
  );
}

const Navbar = ({ userCookie, authCookie }) => {
  const router = useRouter();
  const deleteCokie = (userCookie, authCookie) => {
    deleteCookie(userCookie.name);
    deleteCookie(authCookie.name);
    router.replace("/");
    router.refresh();
  };
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
        <button
          onClick={() => deleteCokie(userCookie, authCookie)}
          className="border-5 border-transparent inline-block hover:border-rose-900 text-gray-500 font-semibold hover:text-white py-2 px-4 border rounded"
        >
          Log out
        </button>
      </div>
    </header>
  );
};
