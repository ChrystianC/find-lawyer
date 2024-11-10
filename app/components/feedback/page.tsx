import Link from "next/dist/client/link";
import { getLocation, getSpecializations } from "../../serverComponent";

export async function FeedbackPage() {
  const [specializations, location] = await Promise.all([
    getSpecializations(),
    getLocation(),
  ]);

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
    <div className="container py-6">
      <div
        className="flex border-2 border-gray-100 broder-opacity-50 p-8 bg-gray-800 text-white"
        style={{ borderRadius: "10px 10px 0px 0px" }}
      >
        {renderSpecializations}
      </div>
      <div className="flex flex-wrap bg-white "         style={{ borderRadius: "0px 0px 10px 10px" }}
      >
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
          Lorem ipsum dolor
          </h2>
          <p className="leading-relaxed text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi sequi perferendis eius fugit id error, dolore quisquam, ex eum repellat enim totam exercitationem repellendus tempora officiis optio magnam ipsam.
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
          Lorem ipsum dolor
          </h2>
          <p className="leading-relaxed text-base mb-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in tenetur id dignissimos totam deserunt sunt qui blanditiis corporis, optio similique reprehenderit dolores commodi nihil expedita quia dolore? Doloribus, quas.
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
          Lorem ipsum dolor
          </h2>
          <p className="leading-relaxed text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint culpa qui consectetur labore, explicabo magnam laudantium, itaque ipsam odio accusantium? Assumenda nisi quisquam cumque tempore vero optio dolorum incidunt!
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
          Lorem ipsum dolor
          </h2>
          <p className="leading-relaxed text-base mb-4">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus natus non, quaerat doloremque corporis pariatur accusamus delectus at quo blanditiis quidem? Harum, incidunt nostrum? Nemo consequatur cupiditate earum ipsam. Maiores!
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
  );
}
