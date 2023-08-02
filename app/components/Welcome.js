"use client";
import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div className="my-20 ">
      <div className="max-w-[1280px] mx-auto grid gap-12 px-4 lg:px-0 sm:grid-cols-2 ">
        <img
          className="w-[550px] h-[550px] object-cover  py-4"
          src="https://marketplace.canva.com/EAFGsiaSoyA/2/0/1131w/canva-black-gold-with-balloons-and-confetti-happy-birthday-party-poster-CppRaBB3fNg.jpg"
          alt="/"
        />
        <div className="flex flex-col gap-3 justify-center items-start">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-yellow-50 font-bold py-2">
            Welcome!
          </h1>
          <p className="uppercase text-yellow-500 font-bold">
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
          <button className="btn bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-white hover:bg-yellow-400 duration-300">
            <Link href="/about">Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
