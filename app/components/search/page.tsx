import Link from "next/link";
import { getLocation, getLocations, getSpecializations } from "../../serverComponent";
import { MyCombobox } from "../ui/combobox";
import Temida from "../ui/images/Temida.png";
import Image from "next/image";
import libra from "../ui/images/libra.png";
import { cookies } from "next/headers";
import { prisma } from "../../../prisma/db";

export async function SearchPage() {
  const [specializations, locations, location] = await Promise.all([
    getSpecializations(),
    getLocations(),
    getLocation()
  ]);
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");
  const user = cookieStore.get("user");
  const office = cookieStore.get("office");
  if (office?.value)
    var findOffice = await prisma.lawOffice.findFirst({
      where: { email: office.value },
    });
  const renderSpecializations = specializations.map((specialization) => {
    return (
      <Link
        className="px-5"
        href={`/components/cards?idSpecialization=${specialization.idSpecialization}/idLocation=${location.idLocation}`}
      >
        {specialization.specialization}
      </Link>
    );
  });
  return (
    <>
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
          <nav className="md:ml-auto flex-wrap items-center text-base justify-center  lg:block">
            {" "}
            <a className="mr-5 hover:text-gray-100" href="#first-section">
              About us
            </a>
          </nav>
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
      <section className="text-gray-600 bg-gray-900">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-grow">
            <div className="flex flex-grow flex-col justify-center">
              <h1 className="title-font font-medium text-3xl text-white">
                Find a suitable lawyer and make an appointment
              </h1>
              <p className="leading-relaxed mt-2 mb-6">
                Search among {Math.floor(Math.random() * 3000000) + 10000}{" "}
                lawyers
              </p>
              <div
                className="flex sm:flex-row flex-col sm:w-9/10 sm:space-x-4 sm:space-y-0 space-y-4 bg-gray-800 p-10 items-end"
                style={{ borderRadius: "10px" }}
              >
                <MyCombobox
                  mapLocation={locations}
                  mapSpecialization={specializations}
                />
              </div>
            </div>
            <Image
              src={Temida}
              alt="libra"
              className="lg:block hidden w-1/3 h-auto"
            />
          </div>
        </div>
      </section>
      <div className="container py-6">
        <div
          className="flex border-2 border-gray-100 broder-opacity-50 p-8 bg-gray-800 text-white"
          style={{ borderRadius: "10px 10px 0px 0px" }}
          id="first-section"
        >
          {renderSpecializations}
        </div>
        <div
          className="flex flex-wrap bg-white "
          style={{ borderRadius: "0px 0px 10px 10px" }}
        >
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Find suitable lawyer
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Choose among {Math.floor(Math.random() * 3000000) + 10000} lawyer
              and law offices. Who's specialization in yours nagging law problem
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Find the date that suits you
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Pick the date that suits you, provide your details, confirm... and
              you are good to go.
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Schedule your time
            </h2>
            <p className="leading-relaxed text-base mb-4">
              You get easy access to your future appoiments. We also sendu you
              mail notyfication
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Search among other clients opinions
            </h2>
            <p className="leading-relaxed text-base mb-4">
              You can easly search your experiences about your meeting with
              laywer
            </p>
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
