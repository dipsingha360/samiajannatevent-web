"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-10 bg-[#1d1d1b] border-t border-yellow-50/30 flex flex-col">
      <div className="max-w-[1280px] container mx-auto px-4 lg:px-0 md:flex items-center justify-between gap-36 text-center md:text-left ">
        <div className="flex flex-col ">
          <h1 className="w-full text-2xl  lg:text-3xl font-bold text-yellow-600">
            Samia Jannat Event Organizers
          </h1>
          <p className="py-4 text-sm font-light w-auto lg:text-base tracking-wide text-yellow-50">
            A one-stop destination for all your event planning and management
            needs. Whether you want to celebrate a birthday, anniversary,
            graduation, or any other special occasion, we have the expertise and
            experience to make it memorable and hassle-free. We offer a range of
            services, from event organizing and managing, to parties and events
            filming, to parties and entertainment services. Let us handle the
            details while you enjoy the moment.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5">
            <FaFacebookSquare size={35} />
            <FaInstagramSquare size={35} />
            <FaTwitterSquare size={35} />
          </div>
        </div>
        <div className="lg:flex lg:justify-between justify-evenly items-center  gap-20 mt-10">
          <div>
            <h1 className="font-semibold text-yellow-500 uppercase text-xl">
              Services
            </h1>
            <ul>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate  ">
                Events Organizing & Managing
              </li>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate ">
                Parties & Events Filming
              </li>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate ">
                Entertainments Services & Parties
              </li>
              <Link
                href="/services"
                className="py-2 text-sm  tracking-wider overflow-hidden truncate hover:underline text-yellow-200/70"
              >
                See all
              </Link>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-yellow-500 uppercase text-xl font-">
              Clients
            </h1>
            <ul>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate ">
                Shangri-La hotel
              </li>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate ">
                Hyatt Regencyy
              </li>
              <li className="py-2 text-sm font-light  tracking-wider overflow-hidden truncate ">
                Grand Hyatt
              </li>
              <Link
                href="/ourclients"
                className="py-2 text-sm  tracking-wider overflow-hidden truncate hover:underline text-yellow-200/70"
              >
                See all
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 mt-10 flex items-center justify-center bg-[#242422] py-5 border-t border-yellow-50/10 ">
        <p className="text-yellow-50 text-sm md:text-xl font-thin">
          &copy; {new Date().getFullYear()}
          <Link
            href="/"
            className="text-based md:text-xl text-yellow-500 px-2 font-normal cursor-pointer hover:border-b hover:border-yellow-300"
          >
            Samia Jannat Event Organizers
          </Link>
          All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
