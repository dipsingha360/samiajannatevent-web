"use client";

import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Slide from "./Slide";

const datas = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/03/27/18/49/light-1283577_1280.jpg",
    headline: "Event Management One-Step Solution",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    btn: "Contact now",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    headline: "Update Your Evenet Exprience",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    btn: "Explore now",
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
      <div className="btns absolute  z-[1] text-teal-50 text-2xl flex gap-10 bottom-20 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-10 w-10 text-4xl hover:bg-yellow-100/70 hover:text-yellow-900 duration-300 bg-yellow-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-yellow-100"
        >
          <span>
            <BsArrowLeftShort />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-10 w-10 text-4xl hover:bg-yellow-100/70 hover:text-yellow-900 duration-300 bg-yellow-300/20 backdrop-blur-xl flex justify-center items-center rounded-full border border-yellow-100"
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
