import React from "react";

const serviceData = [
  {
    id: 1,
    serviceTitle: "Events Organizing & Managing",
    serviceSubtitle:
      "This service covers the entire process of planning and hosting a variety of public and private events for social or business purposes.",
    serviceImg:
      "https://images.pexels.com/photos/7648472/pexels-photo-7648472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Organize events, Mange events ",
  },
  {
    id: 2,
    serviceTitle: "Parties & Events Filming ",
    serviceSubtitle:
      "This service provides professional video production for your parties and events.",
    serviceImg:
      "https://images.pexels.com/photos/3649407/pexels-photo-3649407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 3,
    serviceTitle: "Parties & Entertainments Services ",
    serviceSubtitle:
      "This service offers a range of entertainment options for your parties and events",
    serviceImg:
      "https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 4,
    serviceTitle: "Wedding Parties Organizing",
    serviceSubtitle:
      "This service specializes in organizing and managing wedding parties.",
    serviceImg:
      "https://images.pexels.com/photos/12876497/pexels-photo-12876497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 5,
    serviceTitle: "Hospitality Services",
    serviceSubtitle:
      "This service provides hospitality solutions for your events and guests.",
    serviceImg:
      "https://images.pexels.com/photos/3769980/pexels-photo-3769980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 6,
    serviceTitle: "Sout Asia Folklore Dances Performance",
    serviceSubtitle:
      "This service showcases the rich and diverse culture of UAE through folklore dances.",
    serviceImg:
      "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 7,
    serviceTitle: "Picnics & Camping Organizing",
    serviceSubtitle:
      "This service organizes picnics and camping trips for your groups and families.",
    serviceImg:
      "https://images.pexels.com/photos/7669132/pexels-photo-7669132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 8,
    serviceTitle: "Recreational Services",
    serviceSubtitle:
      "This service offers recreational activities for your events and guests.",
    serviceImg:
      "https://images.pexels.com/photos/3777017/pexels-photo-3777017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 9,
    serviceTitle: "Performing Arts & Music Festivals",
    serviceSubtitle:
      "his service organizes performing arts and music festivals for your events and audiences.",
    serviceImg:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 10,
    serviceTitle: "Maintenance and mechanical services",
    serviceSubtitle:
      "We can repair, troubleshoot, and maintain any mechanical devices.",
    serviceImg:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    serviceTag: "Parties, Filming on Event ",
  },
];

function Service() {
  return (
    <section className="">
      <h1 className="text-center mt-28 lg:text-6xl text-4xl font-medium">
        Services
      </h1>

      <div className="services-container max-w-[1280px] mx-auto flex gap-20 flex-wrap items-center justify-evenly mt-10 mb-20">
        {serviceData.map((service) => (
          <div
            className="service w-[20rem] h-[35rem] rounded-xl flex flex-col items-center justify-start bg-yellow-500 hover:scale-105 duration-300 mb-5"
            key={service.id}
          >
            <img
              src={service.serviceImg}
              alt={service.serviceTitle}
              className=" img w-80 h-80 p-3 rounded-3xl object-cover"
            />
            <div className="text-content px-3">
              <h2 className="text-lg font-semibold text-yellow-950 truncate w-64">
                {service.serviceTitle}
              </h2>
              <p className="text-base font-normal text-yellow-950/80 w-full  h-32">
                {service.serviceSubtitle}
              </p>
            </div>
            <button className="mt-5 bg-yellow-950 w-[17rem] py-2 rounded-lg hover:bg-yellow-900">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
