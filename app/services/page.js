import Image from "next/image";
import Link from "next/link";
import { serviceData } from "../data/services";

export const metadata = {
  title: "Services",
  description:
    "Banqueting, hospitality staffing, event management, weddings, filming, entertainment and more across the UAE.",
  alternates: { canonical: "/services" },
};

function Service() {
  return (
    <section className="">
      <h1 className="text-center mt-28 lg:text-6xl text-4xl font-medium">
        Services
      </h1>

      <div className="services-container max-w-[1280px] mx-auto flex gap-20 flex-wrap items-center justify-evenly mt-10 mb-20">
        {serviceData.map((service) => (
          <div
            className="service w-[20rem] h-[35rem] rounded-xl flex flex-col items-center justify-start bg-yellow-500 hover:scale-105 duration-300 mb-5"
            key={service.id}
          >
            <Image
              src={service.serviceImg}
              alt={service.serviceTitle}
              width={320}
              height={320}
              sizes="320px"
              className=" img w-80 h-80 p-3 rounded-3xl object-cover"
            />
            <div className="text-content px-3">
              <h2 className="text-lg font-semibold text-yellow-950 truncate w-64">
                {service.serviceTitle}
              </h2>
              <p className="text-base font-normal text-yellow-950/80 w-full  h-32">
                {service.serviceSubtitle}
              </p>
            </div>
            <Link
              href={`/services/${service.id}`}
              className="mt-5 bg-yellow-950 w-[17rem] py-2 rounded-lg hover:bg-yellow-900 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
