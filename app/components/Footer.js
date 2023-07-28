"use clients";
import Link from "next/link";
import React from "react";
import {
  FaGithubSquare,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" px-4 pt-10 bg-[#1d1d1b] border-t border-yellow-50/30">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-10">
        <div className=" ">
          <h1 className="w-full text-3xl  font-bold text-yellow-600">
            Samia Jannat Event
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            nesciunt fuga, fugiat sed tenetur, dolore quisquam sit atque autem,
            quia natus. Dolore ipsam officia aperiam quae in laudantium mollitia
            quasi.
          </p>
          <div className="flex items-center justify-start gap-5 my- ">
            <FaFacebookSquare size={35} />
            <FaInstagramSquare size={35} />
            <FaTwitterSquare size={35} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between gap-20 mt-10">
          <div>
            <h1 className="font-medium text-yellow-500 uppercase">Services</h1>
            <ul>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Events Organizing & Managing
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Parties & Events Filming
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Parties & Entertainments Services
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16 text-yellow-200">
                See all
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-medium text-yellow-500 uppercase">Clients</h1>
            <ul>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Shangri-La hotel
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Hyatt Regencyy
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16">
                Grand Hyatt
              </li>
              <li className="py-2 text-sm overflow-hidden truncate w-16 text-yellow-200">
                See all
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-40 mt-10 flex flex-col items-center justify-center bg-[#242422] py-5 border-t border-yellow-50/10 ">
        <p className="text-yellow-50 text-xl font-thin">
          &copy; {new Date().getFullYear()}
          <Link
            href="/"
            className="text-xl text-yellow-500 px-2 font-normal cursor-pointer hover:border-b hover:border-yellow-300"
          >
            SamiaJannatEvent
          </Link>
          All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
