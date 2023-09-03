import React from "react";
import Link from "next/link";

const src = {
  img: "https://i.postimg.cc/cCJFynhz/pexels-photo-260922.jpg",
};

function Slider2() {
  return (
    <div
      className="slide bg-center bg-cover bg-blend-overlay bg-black/20 bg-fixed"
      style={{ backgroundImage: `url(${src.img})` }}
    >
      <div className="slide-text container max-w-[1280px] h-screen mx-auto flex flex-col items-center justify-center gap-5  text-teal-50">
        <h1 className="text-4xl sm:px-2 md:px-0 md:text-7xl font-bold text-center ">
          Make Your Event Success
        </h1>
        <p className="w-3/4 sm:font-light sm:text-sm md:text-lg text-center ">
          We are a professional event management company that can handle any
          type of events
        </p>
        <button className="btn bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-yellow-950 hover:bg-yellow-400 duration-300">
          <Link href="/services">Explore</Link>
        </button>
      </div>
    </div>
  );
}

export default Slider2;
