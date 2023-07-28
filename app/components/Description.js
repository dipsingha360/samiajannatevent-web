import Link from "next/link";
import React from "react";

function Description() {
  return (
    <div className=" bg-yellow-500 p-10 my-10">
      <div className=" max-w-[1280px] mx-auto flex items-center justify-evenly gap-10 ">
        <p className="text-2xl break-all w-[50%]">
          We focus on providing hospitality staff for banquets and food and
          beverage operations in both the hotel and restaurant industry.
        </p>
        <button className="btn bg-[#141414] px-14 rounded-md mx-auto sm:mx-0 py-2 mt-4 font-medium text-white hover:bg-[#3b3205] duration-300">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export default Description;
