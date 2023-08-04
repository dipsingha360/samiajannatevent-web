import React from "react";
import Link from "next/link";
// import Typed from "react-typed";

const src =
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

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

function Slider2() {
  return (
    <div className="slide" style={{ backgroundImage: `url(${src})` }}>
      <div className="slide-text container max-w-[1280px] h-screen mx-auto flex flex-col items-center justify-center gap-5  text-teal-50">
        <h1 className="text-4xl sm:px-2 md:px-0 md:text-7xl font-bold text-center ">
          Make Your Event Success
        </h1>
        <p className="w-3/4 sm:font-light sm:text-sm md:text-lg text-center ">
          We are a professional event management company that can handle any
          type of events:
        </p>
        {/* <Typed
          strings={[
            "Events Organizing & Managing",
            "Parties & Events Filming",
            "Parties & Entertainments Services",
            "Wedding Parties Organizing",
            "Hospitality Services",
            "Folklore Dances Performance",
            "Picnics & Camping Organizing",
            "Recreational Services",
            "Performing Arts & Music Festivals",
            "Maintenance and mechanical services",
          ]}
          typeSpeed={40}
          backSpeed={150}
          attr="placeholder"
          loop
        /> */}

        <button className="btn bg-yellow-500 px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-yellow-950 hover:bg-yellow-400 duration-300">
          <Link href="/services">Explore</Link>
        </button>
      </div>
    </div>
  );
}

export default Slider2;
