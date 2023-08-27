"use client";
import React from "react";
import { serviceData } from "../page";

function Service({ params }) {
  return (
    <div className=" mt-28">
      {serviceData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-center text-yellow-500 lg:text-6xl text-4xl font-medium">
            {params.service == item.id && item.serviceTitle}
          </h1>
          <p className="py-5 font-light text-slate-400">
            {params.service == item.id && item.serviceTag}
          </p>
          {/* <img
            src={params.service == item.id && item.serviceImg2}
            className={`img w-[800px] h-[400px] p-3 rounded-3xl object-cover`}
          /> */}
          <p className="py-5 text-center w-[400px] md:w-[700px] lg:w-[800px] px-4">
            {params.service == item.id && item.serviceDetails}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Service;
