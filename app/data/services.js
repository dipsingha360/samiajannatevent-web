import slugs from "./service-slugs.json";
import arabic from "./services-ar";

// English text and the images. services-ar.js holds the Arabic text by id
const services = [
  {
    id: 1,
    serviceTitle: "Banqueting Service",
    serviceSubtitle:
      "The staff prepares the venue before the guests arrive and serves plates of food to guests while removing them as the courses are finished.",
    serviceDetails:
      "Our staff get to work long before the guests arrive. They set up tables and chairs, and lay out the tablecloths and place settings. They may set up a beverage station or buffet. Once the guests arrive, the banquet staff serves plates of food to guests, then they remove the plates, as the courses are finished.",
    serviceImg: "/images/pexels-photo-2696064.jpg",
    serviceImg2: "/images/pexels-photo-671956.jpg",
    serviceTag: "Hospitality, Food and beverage",
  },
  {
    id: 2,
    serviceTitle: "Restaurants Front & Back Services",
    serviceSubtitle:
      "Food and beverage serving and related workers work as part of a team to improve workflow and customer service.",
    serviceDetails:
      "Most work as part of a team, helping co-workers to improve workflow and customer service. The job titles of food and beverage serving and related workers vary with where they work and what they do.",
    serviceImg: "/images/pexels-photo-1267320.jpg",
    serviceImg2: "/images/pexels-photo-11157601.jpg",
    serviceTag: "Customer service, Food preparation, Kitchen management",
    points: [
      "High-end restaurant",
      "Waiter/Waitress & Commis Services",
      "Casual dining restaurant",
      "Waiter/Waitress & Commis Services/Semi-self-service/Self-service",
      "Combined food preparation and serving workers, including fast food",
      "Counter Attendants",
      "Dining room and Cafeteria Attendants and Bartender helpers",
      "Food servers - non-Restaurant",
      "Hosts and Hostesses",
      "All other Important Sections of F&B",
    ],
  },
  {
    id: 3,
    serviceTitle: "Events Organizing & Managing",
    serviceSubtitle:
      "This service covers the entire process of planning and hosting a variety of public and private events for social or business purposes.",
    serviceDetails:
      "We handle everything from venue selection, budgeting, marketing, catering, entertainment, logistics, security, and more. We have the expertise and experience to make your event a success, whether it is a business convention, a training seminar, a trade show, a ceremony, a party, a concert, or a festival.",
    serviceImg: "/images/pexels-photo-3183172.jpg",
    serviceImg2: "/images/pexels-photo-12882627.jpg",
    serviceTag: "Event coordination, Managing events",
  },
  {
    id: 4,
    serviceTitle: "Parties & Events Filming",
    serviceSubtitle:
      "This service provides professional video production for your parties and events.",
    serviceDetails:
      "We capture the highlights and memorable moments of your occasion, using high-quality equipment and skilled videographers. We also edit and deliver the footage in your preferred format, whether it is a DVD, a USB drive, or an online link. We can film any type of event, such as weddings, birthdays, anniversaries, graduations, reunions, or corporate events.",
    serviceImg: "/images/pexels-photo-3649407.jpg",
    serviceImg2: "/images/pexels-photo-2873486.jpg",
    serviceTag: "Parties, Filming on Event, Photography, Videography",
  },
  {
    id: 5,
    serviceTitle: "Parties & Entertainments Services",
    serviceSubtitle:
      "This service offers a range of entertainment options for your parties and events.",
    serviceDetails:
      "We can provide live music, DJs, dancers, comedians, magicians, clowns, face painters, balloon artists, and more. We can also arrange games, activities, prizes, and giveaways for your guests. We cater to all ages and preferences, and we can customize our entertainment packages to suit your theme and budget.",
    serviceImg: "/images/pexels-photo-219101.jpg",
    serviceImg2: "/images/pexels-photo-5638748.jpg",
    serviceTag: "Parties, Entertainments",
  },
  {
    id: 6,
    serviceTitle: "Wedding Parties Organizing",
    serviceSubtitle:
      "This service specializes in organizing and managing wedding parties.",
    serviceDetails:
      "We help you plan every detail of your big day, from the engagement party to the reception. We assist you with finding the perfect venue, selecting the best vendors, designing the décor, choosing the menu, booking the entertainment, sending the invitations, and coordinating the day-of logistics. We also offer wedding filming and photography services to capture your special moments.",
    serviceImg: "/images/Wedding-Parties-Organizing.jpg",
    serviceImg2: "/images/Wedding-Parties-Organizing2.jpg",
    serviceTag: "Weddings, Organizing",
  },
  {
    id: 7,
    serviceTitle: "Hospitality Services",
    serviceSubtitle:
      "This service provides hospitality solutions for your events and guests.",
    serviceDetails:
      "We can arrange accommodation, transportation, catering, concierge, and other services for your attendees. We can also provide welcome kits, registration desks, information booths, and other amenities to enhance their experience. We work with reputable hotels, restaurants, travel agencies, and other partners to ensure quality and satisfaction.",
    serviceImg: "/images/pexels-photo-3769980.jpg",
    serviceImg2: "/images/pexels-photo-6466235.jpg",
    serviceTag: "Organizing",
  },
  {
    id: 8,
    serviceTitle: "South Asia Folklore Dances Performance",
    serviceSubtitle:
      "This service showcases the rich and diverse culture of UAE through folklore dances.",
    serviceDetails:
      "We have a team of talented and trained dancers who can perform various folk dances from different regions and ethnic groups of the country. We can also teach your guests some basic steps and invite them to join the fun. Our folklore dances are suitable for any occasion, such as cultural festivals, school events, community gatherings, or corporate functions.",
    serviceImg: "/images/sout-asia-dance.jpg",
    serviceImg2: "/images/south-asia-dance-2.jpg",
    serviceTag: "Folklore dances",
  },
  {
    id: 9,
    serviceTitle: "Picnics & Camping Organizing",
    serviceSubtitle:
      "This service organizes picnics and camping trips for your groups and families.",
    serviceDetails:
      "We can help you find the ideal location for your outdoor adventure, whether it is a park, a beach, a forest, or a mountain. We can also provide tents, sleeping bags, mats, chairs, tables, coolers, grills, utensils, and other equipment for your comfort and convenience. We can also arrange food and beverages delivery or catering services for your meals.",
    serviceImg: "/images/pexels-photo-7669132.jpg",
    serviceImg2: "/images/pexels-photo-12955925.jpg",
    serviceTag: "Picnic organizing",
  },
  {
    id: 10,
    serviceTitle: "Recreational Services",
    serviceSubtitle:
      "This service offers recreational activities for your events and guests.",
    serviceDetails:
      "We can provide sports equipment rental such as balls, bats, rackets, nets, bicycles, scooters, and more. We can also organize sports tournaments, games, and competitions for your participants. We can also facilitate access to recreational facilities such as gyms, pools, bowling alleys, golf courses, and more. We can also arrange tickets to amusement parks, museums, zoos, and other attractions.",
    serviceImg: "/images/pexels-photo-3777017.jpg",
    serviceImg2: "/images/pexels-photo-3777017.jpg",
    serviceTag: "Organizing",
  },
  {
    id: 11,
    serviceTitle: "Performing Arts & Music Festivals",
    serviceSubtitle:
      "This service organizes performing arts and music festivals for your events and audiences.",
    serviceDetails:
      "We can curate a lineup of artists, musicians, singers, dancers, theater groups, and other performers who can showcase their talents and entertain your guests. We can also handle the stage setup, sound system, lighting, effects, and other technical aspects. We can also promote your festival through various media channels, social platforms, and word-of-mouth.",
    serviceImg: "/images/pexels-photo-1540406.jpg",
    serviceImg2: "/images/pexels-photo-5156686.jpg",
    serviceTag: "Art, Music, Organizing",
  },
  {
    id: 12,
    serviceTitle: "Maintenance and mechanical services",
    serviceSubtitle:
      "We can repair, troubleshoot, and maintain any mechanical devices.",
    serviceDetails:
      "We have qualified technicians who can handle any issues or emergencies that may arise during your events.",
    serviceImg: "/images/photo-1621905251918-48416bd8575a.jpg",
    serviceImg2: "/images/pexels-photo-7218011.jpg",
    serviceTag: "Maintenance services",
  },
];

// readable URLs; next.config.mjs redirects the old /services/<id> links
export const serviceData = services.map((service) => ({
  ...service,
  slug: slugs[service.id],
}));

// the services with their text in the given language
export function getServices(lang) {
  if (lang !== "ar") return serviceData;
  return serviceData.map((service) => ({ ...service, ...arabic[service.id] }));
}
