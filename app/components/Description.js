import Link from "next/link";
import React from "react";

function Description() {
  return (
    <div className=" bg-yellow-500 p-10 my-10">
      <div className=" max-w-[1280px] mx-auto lg:flex lg:justify-evenly lg:items-center gap-10 ">
        <p className="text-2xl break-all text-center lg:text-left lg:w-[50%] text-[#1d1d1b] font-medium">
          We focus on providing hospitality staff for banquets and food and
          beverage operations in both the hotel and restaurant industry.
        </p>
        <button className="btn bg-[#141414] px-14 rounded-md mx-auto py-2 mt-4 font-medium text-white hover:bg-[#3b3205] duration-300 w-full lg:w-44">
          <Link href="/contact" className=" ">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Description;
