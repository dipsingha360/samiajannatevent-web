import React from "react";
import Link from "next/link";

function WhatWeDo() {
  const src = {
    img: "https://i.postimg.cc/zGwK7fSH/pexels-photo-7674621.jpg",
  };
  return (
    <div className="my-20 ">
      <div className="max-w-[1280px] mx-auto grid gap-12 px-4 lg:px-0 sm:grid-cols-2 ">
        <div className="flex flex-col gap-3 justify-center items-start">
          <p className=" text-yellow-500 tracking-widest text-lg">
            What Samia Jannat Event Organizers do?
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-yellow-50 font-bold py-2">
            Make Your Event a Success
          </h1>
          <div className="services flex flex-col gap-3 md:text-lg font-light">
            <p className="text-yellow-50/70">⭐ Events Organizing & Managing</p>
            <p className="text-yellow-50/70"> ⭐ Parties & Events Filming</p>
            <p className="text-yellow-50/70">
              ⭐ Parties & Entertainments Services
            </p>
            <p className="text-yellow-50/70"> ⭐ Wedding Parties Organizing</p>
            <p className="text-yellow-50/70"> ⭐ Hospitality Services</p>
            <p className="text-yellow-50/70"> ⭐ Folklore Dances Performance</p>
            <p className="text-yellow-500"> And many more...</p>
          </div>
          <button className="btn bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-yellow-950 hover:bg-yellow-400 duration-300">
            <Link href="/services">Explore</Link>
          </button>
        </div>
        <img
          className="w-[550px] h-[550px] object-cover  py-4"
          src={src.img}
          alt="What SJEO do"
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
