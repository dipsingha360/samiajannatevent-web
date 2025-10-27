import React from "react";
import Image from "next/image";

function OurClients() {
  return (
    <section className="text-center mt-28 lg:text-6xl text-4xl font-medium h-screen">
      <h1>Our Clients</h1>

      <div className="about-main flex flex-col md:flex-row gap-8 items-center justify-center mt-10 px-4 flex-wrap">
        <div className="flex flex-col gap-4">
          {/* <Image
            className="w-52 h-w-52 object-cover hover:scale-105 duration-300 rounded-lg"
            src={"https://i.postimg.cc/ZnFt2x8t/image.png"}
            alt="radisson-blu"
          /> */}
          <img
            className="w-52 h-w-52 object-cover hover:scale-105 duration-300 rounded-lg"
            src="https://i.postimg.cc/ZnFt2x8t/image.png"
            alt="radisson-blu"
          />
          <p className="text-base font-light text-gray-400">
            Hotel Radisson blu
          </p>
        </div>
        <img
          className="w-52 h-w-52 object-cover hover:scale-105 duration-300"
          src="https://i.postimg.cc/VvPJghjX/logo.png"
          alt="SJEO"
        />
        <img
          className="w-52 h-w-52 object-cover hover:scale-105 duration-300"
          src="https://i.postimg.cc/VvPJghjX/logo.png"
          alt="SJEO"
        />
      </div>
    </section>
  );
}

export default OurClients;
