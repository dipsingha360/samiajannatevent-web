import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-[1920px] mx-auto grid gap-3 sm:grid-cols-2 ">
        {/* demo image  */}
        <img
          className="w-[700px] h-[700px] object-cover mx-auto py-4"
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
          <p className="text-yellow-50/70"> ⭐ Events Organizing & Managing</p>
          <p className="text-yellow-50/70"> ⭐ Parties & Events Filming</p>
          <p className="text-yellow-50/70">
            ⭐ Parties & Entertainments Services
          </p>
          <p className="text-yellow-50/70"> ⭐ Wedding Parties Organizing</p>
          <p className="text-yellow-50/70"> ⭐ Hospitality Services</p>
          <p className="text-yellow-50/70"> ⭐ Folklore Dances Performance</p>
          <p className="text-yellow-50/70"> ⭐ Picnics & Camping Organizing</p>
          <p className="text-yellow-50/70"> ⭐ Recreational Services</p>
          <p className="text-yellow-50/70">
            ⭐ Performing Arts & Music Festivals
          </p>
          <button className="btn bg-yellow-600 w-[150px] rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-white hover:bg-yellow-500 duration-300">
            <Link href="/services">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
