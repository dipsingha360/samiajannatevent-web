import Image from "next/image";

export const metadata = {
  title: "Our Clients",
  description:
    "Hotels in Dubai that trust Samia Jannat Event Organizers, including Radisson Blu, Shangri-La, Hyatt Regency and Grand Hyatt.",
  alternates: { canonical: "/ourclients" },
};

const clients = [
  { name: "Radisson Blu Hotel - Dubai", img: "/images/Radisson_Blu_Hotel_Dubai.jpg" },
  { name: "Shangri-La Hotel - Dubai", img: "/images/Shangri_La_Hotel_Dubai.jpg" },
  { name: "Hyatt Regency - Dubai", img: "/images/Hyatt_Regency_Dubai.jpg" },
  { name: "Grand Hyatt - Dubai", img: "/images/Grand_Hyatt_Dubai.jpg" },
];

function OurClients() {
  return (
    <section className="text-center mt-28 lg:text-6xl text-4xl font-medium h-screen">
      <h1>Our Clients</h1>

      <div className="about-main flex flex-col md:flex-row gap-8 items-center justify-center mt-10 px-4 flex-wrap">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col gap-4">
            <Image
              className="w-52 h-32 object-cover hover:scale-105 duration-300 rounded-lg"
              src={client.img}
              width={208}
              height={128}
              sizes="208px"
              alt={client.name}
            />
            <p className="text-base font-light text-gray-400">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurClients;
