import Image from "next/image";
import Link from "next/link";

function Welcome() {
  const src = {
    img: "/images/pexels-photo-5638816.jpg",
  };
  return (
    <div className="my-20">
      <div className="max-w-[1280px] mx-auto grid gap-12 px-4 lg:px-0 sm:grid-cols-2">
        <Image
          className="w-[550px] h-[550px] object-cover  py-4"
          src={src.img}
          width={550}
          height={550}
          sizes="(max-width: 640px) 100vw, 550px"
          alt="Welcome to Samia Jannat Event Organizers"
        />
        <div className="flex flex-col gap-3 justify-center items-start">
          <h2 className="md:text-4xl sm:text-3xl text-2xl text-yellow-50 font-bold py-2">
            Welcome!
          </h2>
          <p className="text-yellow-500 tracking-widest text-lg">
            Samia Jannat Event Organizers Company
          </p>
          <div className="services flex flex-col gap-3 md:text-lg font-light">
            <p className="text-yellow-50/70">
              We are a professional event management company based in UAE. We
              offer a wide range of event services, from planning and production
              to catering and entertainment. Whether you are looking for a
              corporate event, a wedding, a birthday party, or any other special
              occasion, we have the expertise and experience to make it a
              memorable one.
            </p>
          </div>
          <Link
            href="/about"
            className="btn inline-block text-center bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-yellow-950 hover:bg-yellow-400 duration-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
