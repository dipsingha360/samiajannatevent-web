"use client";
import React from "react";
import { serviceData } from "../page";

function Service({ params }) {
  // const da = serviceData.map((da) => params.service);
  // console.log(da);
  // console.log(params.service);
  return (
    <div className=" mt-28">
      {serviceData.map((data) => (
        <div
          key={params.service}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-center text-yellow-500 lg:text-6xl text-4xl font-medium">
            {params.service == data.id && data.serviceTitle}
          </h1>
          <p className="py-5 text-xl">
            {params.service == data.id && data.serviceTag}
          </p>
          <img
            src={params.service == data.id && data.serviceImg2}
            alt=""
            className="img w-[800px] h-[400px] p-3 rounded-3xl object-cover"
          />

          <p className="py-5 text-center w-[400px] md:w-[700px] lg:w-[800px] px-4">
            {params.service == data.id && data.serviceDetails}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Service;
