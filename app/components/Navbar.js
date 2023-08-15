"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed py-4 px-10 lg:px-10 flex items-center justify-between border-b-2 border-yellow-50/10 backdrop-blur-lg">
      <Link
        className="logo text-5xl font-bold cursor-pointer text-yellow-600 hover:text-yellow-500 duration-300 "
        href="/"
      >
        <img
          src="https://i.postimg.cc/VLn7tfpN/samiajannatevent-logo-2.png"
          alt="SJEO"
        />
      </Link>

      <ul className=" hidden sm:flex items-center gap-8">
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/services">Services</Link>
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/team">Team</Link>
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/ourclients">Clients</Link>
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block sm:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-700 h-screen bg-[#252525] ease-in-out duration-300"
            : "fixed left-[-100%] ease-in-out h-screen duration-300"
        }
      >
        <h1 className="w-full text-6xl  font-semi-bold  text-yellow-600 hover:text-yellow-500 duration-300 m-4">
          SJEO
        </h1>

        <ul className="p-4">
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/" onClick={() => setNav(false)}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/about" onClick={() => setNav(false)}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/services" onClick={() => setNav(false)}>
              Services
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/team" onClick={() => setNav(false)}>
              Team
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/ourclients" onClick={() => setNav(false)}>
              Clients
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
            <Link href="/contact" onClick={() => setNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
