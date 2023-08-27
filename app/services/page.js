import Link from "next/link";
import React from "react";

export const serviceData = [
  {
    id: 1,
    serviceTitle: "Events Organizing & Managing",
    serviceSubtitle:
      "This service covers the entire process of planning and hosting a variety of public and private events for social or business purposes.",
    serviceDetails:
      "We handle everything from venue selection, budgeting, marketing, catering, entertainment, logistics, security, and more. We have the expertise and experience to make your event a success, whether it is a business convention, a training seminar, a trade show, a ceremony, a party, a concert, or a festival.",
    serviceImg:
      "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/12882627/pexels-photo-12882627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Organizing events, Manging events ",
  },
  {
    id: 2,
    serviceTitle: "Parties & Events Filming ",
    serviceSubtitle:
      "This service provides professional video production for your parties and events.",
    serviceDetails:
      "We capture the highlights and memorable moments of your occasion, using high-quality equipment and skilled videographers. We also edit and deliver the footage in your preferred format, whether it is a DVD, a USB drive, or an online link. We can film any type of event, such as weddings, birthdays, anniversaries, graduations, reunions, or corporate events.",
    serviceImg:
      "https://images.pexels.com/photos/3649407/pexels-photo-3649407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
    serviceImg2:
      "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Filming on Event ",
  },
  {
    id: 3,
    serviceTitle: "Parties & Entertainments Services ",
    serviceSubtitle:
      "This service offers a range of entertainment options for your parties and events",
    serviceDetails:
      "We can provide live music, DJs, dancers, comedians, magicians, clowns, face painters, balloon artists, and more. We can also arrange games, activities, prizes, and giveaways for your guests. We cater to all ages and preferences, and we can customize our entertainment packages to suit your theme and budget.",
    serviceImg:
      "https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Parties, Entertainments ",
  },
  {
    id: 4,
    serviceTitle: "Wedding Parties Organizing",
    serviceSubtitle:
      "This service specializes in organizing and managing wedding parties.",
    serviceDetails:
      "We help you plan every detail of your big day, from the engagement party to the reception. We assist you with finding the perfect venue, selecting the best vendors, designing the décor, choosing the menu, booking the entertainment, sending the invitations, and coordinating the day-of logistics. We also offer wedding filming and photography services to capture your special moments.",
    serviceImg:
      "https://images.pexels.com/photos/12876497/pexels-photo-12876497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/13644808/pexels-photo-13644808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Weedings, Oraganizing ",
  },
  {
    id: 5,
    serviceTitle: "Hospitality Services",
    serviceSubtitle:
      "This service provides hospitality solutions for your events and guests.",
    serviceDetails:
      "We can arrange accommodation, transportation, catering, concierge, and other services for your attendees. We can also provide welcome kits, registration desks, information booths, and other amenities to enhance their experience. We work with reputable hotels, restaurants, travel agencies, and other partners to ensure quality and satisfaction.",
    serviceImg:
      "https://images.pexels.com/photos/3769980/pexels-photo-3769980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/6466235/pexels-photo-6466235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Organizing",
  },
  {
    id: 6,
    serviceTitle: "Sout Asia Folklore Dances Performance",
    serviceSubtitle:
      "This service showcases the rich and diverse culture of UAE through folklore dances.",
    serviceDetails:
      "We have a team of talented and trained dancers who can perform various folk dances from different regions and ethnic groups of the country. We can also teach your guests some basic steps and invite them to join the fun. Our folklore dances are suitable for any occasion, such as cultural festivals, school events, community gatherings, or corporate functions.",
    serviceImg:
      "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Folklore dances",
  },
  {
    id: 7,
    serviceTitle: "Picnics & Camping Organizing",
    serviceSubtitle:
      "This service organizes picnics and camping trips for your groups and families.",
    serviceDetails:
      "We can help you find the ideal location for your outdoor adventure, whether it is a park, a beach, a forest, or a mountain. We can also provide tents, sleeping bags, mats, chairs, tables, coolers, grills, utensils, and other equipment for your comfort and convenience. We can also arrange food and beverages delivery or catering services for your meals.",
    serviceImg:
      "https://images.pexels.com/photos/7669132/pexels-photo-7669132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/12955925/pexels-photo-12955925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Picnic organizing",
  },
  {
    id: 8,
    serviceTitle: "Recreational Services",
    serviceSubtitle:
      "This service offers recreational activities for your events and guests.",
    serviceDetails:
      "We can provide sports equipment rental such as balls, bats,rackets,nets,bicycles,scooters,and more.We can also organize sports tournaments,games,and competitions for your participants.We can also facilitate access to recreational facilities such as gyms,pools,bowling alleys,golf courses,and more.We can also arrange tickets to amusement parks,museums,zoo,and other attractions.",
    serviceImg:
      "https://images.pexels.com/photos/3777017/pexels-photo-3777017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/3777017/pexels-photo-3777017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Organizing",
  },
  {
    id: 9,
    serviceTitle: "Performing Arts & Music Festivals",
    serviceSubtitle:
      "his service organizes performing arts and music festivals for your events and audiences.",
    serviceDetails:
      "We can curate a lineup of artists,musicians,singers,dancers,theater groups,and other performers who can showcase their talents and entertain your guests.We can also handle the stage setup,sound system,lighthing,effects,and other technical aspects.We can also promote your festival through various media channels,social platforms,and word-of-mouth.",
    serviceImg:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceImg2:
      "https://images.pexels.com/photos/5156686/pexels-photo-5156686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    serviceTag: "Art, Music, Organizing ",
  },
  {
    id: 10,
    serviceTitle: "Maintenance and mechanical services",
    serviceSubtitle:
      "We can repair, troubleshoot, and maintain any mechanical devices.",
    serviceDetails:
      "We have qualified technicians who can handle any issues or emergencies that may arise during your events.",
    serviceImg:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    serviceImg2:
      "https://images.pexels.com/photos/7218011/pexels-photo-7218011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    serviceTag: "Maintenance services",
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
            <Link
              href={`/services/${service.id}`}
              className="mt-5 bg-yellow-950 w-[17rem] py-2 rounded-lg hover:bg-yellow-900 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
