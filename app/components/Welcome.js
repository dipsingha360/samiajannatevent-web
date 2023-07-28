"use client";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function Welcome() {
  return (
    <div className="my-20 ">
      <div className="max-w-[1280px] mx-auto grid gap-12 sm:grid-cols-2 ">
        {/* <Image src="/public/welcome1.jpg" width={1000} height={1000} alt="/" /> */}
        <img
          className="w-[550px] h-[550px] object-cover  py-4"
          src="https://marketplace.canva.com/EAFGsiaSoyA/2/0/1131w/canva-black-gold-with-balloons-and-confetti-happy-birthday-party-poster-CppRaBB3fNg.jpg"
          alt="/"
        />
        <div className="flex flex-col gap-3 justify-center items-start">
          <p className="uppercase text-yellow-500 font-bold">
            Welcome to SJEvent
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-yellow-50 font-bold py-2">
            Our Goal is Manage Your Event
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
            <p className="text-yellow-50/70">⭐ Picnics & Camping Organizing</p>
            <p className="text-yellow-50/70"> ⭐ Recreational Services</p>
            <p className="text-yellow-50/70">
              ⭐ Performing Arts & Music Festivals
            </p>
          </div>
          <button className="btn bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-white hover:bg-yellow-400 duration-300">
            <Link href="/services">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Welcome), { ssr: false });
