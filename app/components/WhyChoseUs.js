import React from "react";
import Link from "next/link";

function WhyChoseUs() {
  return (
    <div className="my-20  bg-yellow-500">
      <div className="max-w-[1280px] mx-auto grid gap-12 px-4 lg:px-0 sm:grid-cols-2 ">
        <img
          className="w-[550px] h-[550px] object-cover  py-4"
          src="https://st4.depositphotos.com/14431644/21549/i/450/depositphotos_215493532-stock-photo-word-writing-text-why-choose.jpg"
          alt="/"
        />
        <div className="flex flex-col gap-3 justify-center items-start">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#141414] font-bold py-2">
            Why Chose Us?
          </h1>
          <div className="services flex flex-col gap-4 md:text-lg font-light">
            <div>
              <p className="text-yellow-50 bg-yellow-600 px-3 rounded-lg py-2 text-2xl font-bold uppercase ">
                Innovations
              </p>
              <p className="text-yellow-950/80 font-medium">
                We are an event management company that brings innovation and
                creativity to every event.
              </p>
            </div>
            <div>
              <p className="text-yellow-50 bg-yellow-600 px-3 rounded-lg py-2 text-2xl font-bold uppercase ">
                Passionate Approach
              </p>
              <p className="text-yellow-950/80 font-medium">
                We work with passion to deliver the best results for every
                event.
              </p>
            </div>
            <div>
              <p className="text-yellow-50 bg-yellow-600 px-3 rounded-lg py-2 text-2xl font-bold uppercase ">
                Transparent Business Model
              </p>
              <p className="text-yellow-950/80 font-medium">
                Our transparency in business set us apart from other event
                management companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoseUs;
