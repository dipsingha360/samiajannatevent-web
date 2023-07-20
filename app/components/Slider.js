"use client";

import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slide from "./Slide";

const datas = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/03/27/18/49/light-1283577_1280.jpg",
    headline: "Event Management One-Step Solution",
    body: "Samia Jannat Event is a all in one solution all over the UAE. We provide saverial services.",
    btn: "Contact us",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    headline: "Update Your Evenet Exprience",
    body: "Samia Jannat Event is a all in one solution all over the UAE. We provide saverial services.",
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
    <div className="frame relative h-screen">
      <div
        className="slider "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {datas.map((data) => (
          <Slide key={data.id} data={data} />
        ))}
      </div>

      {/* slider buttons */}
      <div className="btns absolute  z-[1] text-teal-50 text-2xl flex gap-10 bottom-48 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn text-4xl hover:bg-slate-300/30  bg-slate-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-slate-100"
        >
          <span>
            <BsArrowLeftShort />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn text-4xl hover:bg-slate-300/30  bg-slate-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-slate-100"
        >
          <span>
            <BsArrowRightShort />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
