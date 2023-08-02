"use client";
import dynamic from "next/dynamic";

import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slide from "./Slide";

const datas = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    headline: "Make Your Event Success",
    body: "We are a professional event management company that can handle any type of event, from planning to execution.",
    btn: "Contact us",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545150665-c72a8f0cf311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    headline: "Spice Up Your Event",
    body: "We have a variety of entertainment options for your parties and events, from live music and DJs to comedians and magicians.",
    btn: "Explore us",
  },
];

const Slider = () => {
  //state
  const [currentSlide, setCurrentSlide] = useState(0);

  // slide handler
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? datas.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === datas.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {datas.map((data) => (
          <Slide key={data.id} data={data} />
        ))}
      </div>

      {/* slider buttons */}
      <div className="btns absolute z-[1]  text-teal-50 text-2xl flex gap-10 bottom-20 md:bottom-32 w-screen justify-center opacity-70">
        <button
          onClick={prevSlide}
          className="prev-btn text-2xl md:text-4xl hover:bg-slate-300/30  bg-slate-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-slate-100"
        >
          <span>
            <BsArrowLeftShort />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn text-2xl md:text-4xl hover:bg-slate-300/30  bg-slate-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-slate-100"
        >
          <span>
            <BsArrowRightShort />
          </span>
        </button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Slider), { ssr: false });
