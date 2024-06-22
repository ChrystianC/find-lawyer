export default async function Wares({ services }) {
    const renderServices = services.map((service) => {
        return (
            <div className="overflow-y-auto h-16">
                <div className={`flex  border-gray-100 ${ !services[services.length - 1] ?? `mb-${services.length >1 ? '5' : '4'}`}pb-1`}>
                    <span className="title-font font-medium text-2xl text-gray-900">{service.serviceName}</span>
                    <span className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded">{service.servicePrice} zł</span>
                </div>
            </div>
        )
    })
    if (renderServices.length > 0) {
        return renderServices;
    } else {
        return (
            <div className="overflow-y-auto h-16">
                <div className="flex border-gray-100 mb-5 pb-1">
                    <span className="title-font font-medium text-2xl text-gray-900">Service Name</span>
                    <span className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded">Service price zł</span>
                </div>
                <div className="flex border-gray-100 mb-5 pb-1">
                    <span className="title-font font-medium text-2xl text-gray-900">Service Name</span>
                    <span className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 rounded">Service price zł</span>
                </div>
            </div>
        )
    }
}