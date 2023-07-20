"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

function Navbar() {
  return (
    <div className="container max-w-[1280px] mx-auto  py-4 flex items-center justify-between border-b border-yellow-50/10 backdrop-blur-md ">
      <div className="logo text-5xl font-bold cursor-pointer text-yellow-600 hover:text-yellow-500 duration-300 ">
        <Link href="/">SJE</Link>
      </div>
      <ul className="flex items-center gap-8">
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
    </div>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
