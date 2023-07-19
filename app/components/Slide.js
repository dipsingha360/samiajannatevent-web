"use client";

import Link from "next/link";

const Slide = ({ data }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${data.src})` }}>
      <div className="slide-text px-32 flex flex-col items-start  justify-center h-full gap-5  text-teal-50">
        <h1 className=" text-7xl font-bold  space-font w-4/5">
          {data.headline}
        </h1>
        <p className="w-3/5 ">{data.body}</p>
        <Link
          href={data.id === 1 ? "/contact" : "/services"}
          className="slide-btn uppercase border border-teal-50 h-14 w-72 text-teal-50  font-medium mt-5 rounded-full"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center ">
            {data.btn}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
