export default async function Wares({ services, officeSpecialization }) {
  const renderServices = services.lenght ? (
    services.map((service) => {
      return (
        <div className="overflow-y-auto h-16 custom-slider">
          <div
            className={`flex  border-gray-100 ${!services[services.length - 1] ?? `mb-${services.length > 1 ? "5" : "4"}`}pb-1`}
          >
            <span className="title-font font-medium text-2xl text-gray-900">
              {officeSpecialization}
            </span>
            <span className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded">
              {Math.floor(Math.random() * 500) + 100} zł
            </span>
          </div>
        </div>
      );
    })
  ) : (
    <div className="overflow-y-auto h-16 custom-slider">
      <div
        className={`flex  border-gray-100 ${!services[services.length - 1] ?? `mb-${services.length > 1 ? "5" : "4"}`}pb-1`}
      >
        <span className="title-font font-medium text-2xl text-gray-900">
          {officeSpecialization}
        </span>
        <span className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded">
          {Math.floor(Math.random() * 500) + 100} zł
        </span>
      </div>
    </div>
  );

  return renderServices;
}
