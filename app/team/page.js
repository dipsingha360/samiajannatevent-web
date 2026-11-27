import Image from "next/image";

export const metadata = {
  title: "Team",
  description:
    "Meet the team behind Samia Jannat Event Organizers, a Dubai-based event management company.",
  alternates: { canonical: "/team" },
};

function Team() {
  const src = {
    img: "/images/photo-1517486808906-6ca8b3f04846.jpg",
  };
  return (
    <section className="text-center mt-28 lg:text-6xl text-4xl font-medium lg:h-screen mb-10">
      <h1>Team</h1>

      <div className="about-main flex flex-col md:flex-row gap-4 items-center justify-center mt-10 px-4">
        <div className="about-left w-[50%] md:text-start">
          <h2 className="mb-4 lg:text-3xl text-2xl font-medium text-yellow-500">
            Samia Jannat Event Organizers
          </h2>
          <p className="text-base font-light">
            At Samia Jannat Events Organizers, we believe that every event is
            unique and deserves special attention. That is why we offer a
            variety of packages and options to suit your specific needs and
            preferences. You can choose from our standard packages or customize
            your own according to your requirements. We also offer flexible
            payment plans and discounts for loyal customers. Contact us today to
            get a free quote and consultation for your next event.
          </p>
        </div>
        <div className="about-right">
          <Image
            className="w-[550px] h-[550px] object-cover"
            src={src.img}
            width={550}
            height={550}
            sizes="(max-width: 768px) 100vw, 550px"
            alt="Samia Jannat Event Organizers team"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
