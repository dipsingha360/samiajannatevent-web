import React from "react";
import Image from "next/image";

function OurClients() {
  return (
    <section className="text-center mt-28 lg:text-6xl text-4xl font-medium h-screen">
      <h1>Our Clients</h1>

      <div className="about-main flex flex-col md:flex-row gap-8 items-center justify-center mt-10 px-4 flex-wrap">
        <div className="flex flex-col gap-4">
          <img
            className="w-52 h-32 object-cover hover:scale-105 duration-300 rounded-lg"
            src="https://i.postimg.cc/5yzVGnrg/Radisson_Blu_Hotel_Dubai.jpg"
            alt="radisson-blu"
          />
          <p className="text-base font-light text-gray-400">
            Radisson Blu Hotel - Dubai
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-52 h-32 object-cover hover:scale-105 duration-300 rounded-lg"
            src="https://i.postimg.cc/qRSrj91X/Shangri_La_Hotel_Dubai.jpg"
            alt="radisson-blu"
          />
          <p className="text-base font-light text-gray-400">
            Shangri-La Hotel - Dubai
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-52 h-32 object-cover hover:scale-105 duration-300 rounded-lg"
            src="https://i.postimg.cc/909hSJkY/Hyatt_Regency_Dubai.jpg"
            alt="radisson-blu"
          />
          <p className="text-base font-light text-gray-400">
            Hyatt Regency - Dubai
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-52 h-32 object-cover hover:scale-105 duration-300 rounded-lg"
            src="https://i.postimg.cc/d1pF4z55/Grand_Hyatt_Dubai.jpg"
            alt="radisson-blu"
          />
          <p className="text-base font-light text-gray-400">
            Grand Hyatt - Dubai
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
