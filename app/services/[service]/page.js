"use client";
import React from "react";
import { serviceData } from "../page";

function Service({ params }) {
  return (
    <div className="mt-28 mb-10">
      {serviceData
        .filter((data) => data.id == params.service)
        .map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-center text-yellow-500 lg:text-6xl text-4xl font-medium">
              {item.serviceTitle}
            </h1>
            <p className="py-5 font-light text-slate-400">{item.serviceTag}</p>
            <img
              src={item.serviceImg2}
              className={`img w-[800px] h-[400px] p-3 rounded-3xl object-cover`}
            />
            <p className="py-5 text-center w-[400px] md:w-[700px] lg:w-[800px] px-4">
              {item.serviceDetails}
            </p>
            <div className="service-points pb-10 text-lg text-yellow-500">
              <p>{item.point1}</p>
              <p>{item.point2}</p>
              <p>{item.point3}</p>
              <p>{item.point4}</p>
              <p>{item.point5}</p>
              <p>{item.point6}</p>
              <p>{item.point7}</p>
              <p>{item.point8}</p>
              <p>{item.point9}</p>
              <p>{item.point10}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Service;
