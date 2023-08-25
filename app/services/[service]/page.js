"use client";
import React from "react";
import { serviceData } from "../page";

function Service({ params }) {
  console.log(params);
  console.log(serviceData);
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
            src={params.service == data.id && data.serviceImg}
            alt=""
            className="img w-[800px] h-[400px] p-3 rounded-3xl object-cover"
          />

          <p className="py-5 text-center">
            {params.service == data.id && data.serviceSubtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Service;
