"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/ourclients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

const logo = {
  src: "/images/samiajannatevent-logo-2.png",
  width: 258,
  height: 67,
};

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed top-0 z-50 py-4 px-10 lg:px-10 flex items-center justify-between border-b-2 border-yellow-50/10 backdrop-blur-lg">
      <Link
        className="logo text-5xl font-bold cursor-pointer text-yellow-600 hover:text-yellow-500 duration-300 "
        href="/"
      >
        <Image {...logo} alt="Samia Jannat Event Organizers" loading="eager" />
      </Link>

      <ul className=" hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <li
            key={link.href}
            className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleNav}
        aria-label={nav ? "Close menu" : "Open menu"}
        aria-expanded={nav}
        className="block sm:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-700 h-screen bg-[#252525] ease-in-out duration-300"
            : "fixed left-[-100%] ease-in-out h-screen duration-300"
        }
      >
        <Image {...logo} alt="Samia Jannat Event Organizers" />

        <ul className="p-4">
          {links.map((link) => (
            <li
              key={link.href}
              className="p-4 border-b border-gray-600/50 cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300"
            >
              <Link href={link.href} onClick={() => setNav(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
