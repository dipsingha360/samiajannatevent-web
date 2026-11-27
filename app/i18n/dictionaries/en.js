// English strings. ar.js has the same keys. The nav, theme and contact
// groups go to client components, so they hold plain strings only
const en = {
  meta: {
    siteName: "Samia Jannat Event Organizers",
    title:
      "Event Management and Hospitality Staffing in Dubai | Samia Jannat Event Organizers",
    ogTitle: "Event Management and Hospitality Staffing in Dubai",
    ogLocale: "en_AE",
    description:
      "Samia Jannat Event Organizers is a Dubai-based event management company offering hospitality staffing, banqueting, weddings, parties, filming and entertainment across the UAE.",
    catalogName: "Event and hospitality services",
  },

  nav: {
    home: "Home",
    services: "Services",
    clients: "Clients",
    about: "About",
    contact: "Contact",
    quote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoAlt: "Samia Jannat Event Organizers",
    switchLanguage: "Read this page in Arabic",
  },

  theme: {
    label: "Light theme",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },

  common: {
    getQuote: "Get a quote",
    whatsapp: "WhatsApp us",
    details: "Details",
    dubai: "Dubai",
    address: "1st Floor M20, Al Mamzar Building, Hor Al Anz, Dubai",
  },

  hero: {
    eyebrow: "Event management and hospitality staffing in Dubai",
    title: "Banquet staff and complete events for Dubai’s hotels and hosts",
    body: "Waiters, commis, hosts and bartender helpers for hotel and restaurant service, plus weddings, parties and corporate events planned and run by the same team",
    secondary: "Our services",
  },

  trust: { label: "Clients in Dubai include" },

  intro: {
    label: "About us",
    title: "Hospitality staff and event planning from one office in Hor Al Anz",
    body: "We are an event management company based in the UAE. We plan and produce events, cater them, entertain the guests and supply the people who serve them, for corporate events, weddings, birthdays and every occasion in between.",
    imgAlt: "Banquet staff plating a course",
    services: "Services under one team",
    hotels: "Hotel clients in Dubai",
    free: "Free",
    freeLabel: "Quote and consultation",
    link: "About the company",
  },

  servicesPreview: {
    label: "What we do",
    title: "Services for every occasion",
    body: "Staffing for hotels and restaurants, and events planned from the first call to the last guest",
    all: (count) => `All ${count} services`,
  },

  whyUs: {
    label: "Why choose us",
    title: "Why hotels and hosts book us",
    imgAlt: "A waiter arriving at a hotel room with a tray of coffee",
    reasons: [
      {
        title: "New ideas for every event",
        body: "Each event gets its own plan, so yours never feels like a repeat of the last one.",
      },
      {
        title: "Care in the details",
        body: "Our team works with real care to get the best result for every guest.",
      },
      {
        title: "Transparent packages",
        body: "Standard or custom packages, flexible payment plans and discounts for loyal customers.",
      },
    ],
  },

  process: {
    label: "Booking",
    title: "How a booking works",
    body: "Four steps from your first message to the last guest leaving",
    cta: "Start your enquiry",
    imgAlt: "Kitchen staff preparing plates before a service",
    steps: [
      {
        title: "Enquiry",
        body: "Call, send a WhatsApp message or use the form with your date, venue and number of guests.",
      },
      {
        title: "Consultation and quote",
        body: "We talk through what you need and send a quote. Both are free.",
      },
      {
        title: "Package",
        body: "Pick a standard package or build your own, with a payment plan that suits you.",
      },
      {
        title: "On the day",
        body: "Our staff arrive at their call time and run the service until the last guest leaves.",
      },
    ],
  },

  occasions: {
    label: "Occasions",
    title: "Occasions we organize",
    weddings: "Weddings",
    filming: "Event filming",
    folklore: "Folklore dances",
    festivals: "Music festivals",
    parties: "Parties and entertainment",
  },

  contact: {
    label: "Contact",
    title: "Plan your event with us",
    body: "Send us the date, the venue and roughly how many guests. We reply with a free quote and consultation.",
    phone: "Phone",
    whatsapp: "WhatsApp",
    whatsappCta: "Message us",
    email: "Email",
    office: "Office",
    address: "1st Floor M20, Al Mamzar Building, Hor Al Anz, Dubai",
    name: "Full name",
    message: "Your event",
    placeholder: "Date, venue, number of guests, services you need",
    send: "Send message",
    sending: "Sending",
    sent: "Thank you, your message has been sent",
    error: "The message could not be sent. Please call or email us instead",
    nameRequired: "Please enter your name",
    emailRequired: "Please enter your email address",
    emailInvalid: "Please enter a valid email address, like name@example.com",
    messageRequired: "Please tell us a little about your event",
  },

  contactPage: {
    metaTitle: "Contact us",
    metaDescription:
      "Get in touch with Samia Jannat Event Organizers in Hor Al Anz, Dubai by phone, WhatsApp, email or the contact form.",
    title: "Tell us about your event",
  },

  cta: {
    title: "Plan your next event with us",
    body: "Send us the date, the venue and roughly how many guests. The quote and consultation are free",
  },

  footer: {
    about:
      "Event planning, hospitality staffing and entertainment across the UAE, from our office in Hor Al Anz, Dubai.",
    company: "Company",
    services: "Services",
    contact: "Contact",
    pages: { services: "Services", clients: "Clients", about: "About us", contact: "Contact" },
    serviceLinks: [
      { slug: "banqueting-service", label: "Banqueting service" },
      { slug: "restaurant-staffing", label: "Restaurant front and back service" },
      { slug: "event-management", label: "Events organizing and managing" },
      { slug: "wedding-planning", label: "Wedding parties" },
    ],
    allServices: "All services",
    poBox: "P.O. Box 252162, Dubai",
  },

  about: {
    metaTitle: "About us",
    metaDescription:
      "Learn about Samia Jannat Event Organizers: tailored event packages, flexible payment plans and free consultations in Dubai.",
    label: "About us",
    title: "Every event is different, so every plan we make is too",
    body: "A Dubai event management company for planning, production, catering, entertainment and hospitality staff across the UAE",
    storyLabel: "Our story",
    story: [
      "We believe every event is unique and deserves special attention. That is why we offer a range of packages and options to suit your needs and preferences.",
      "From our office in Hor Al Anz we plan corporate events, weddings, birthdays and celebrations, and we supply hospitality staff for banquets and food and beverage operations in hotels and restaurants.",
    ],
    imgAlt: "Guests raising their glasses at a candlelit dinner table",
    termsLabel: "How we work with you",
    termsTitle: "Simple terms, agreed up front",
    offers: [
      {
        title: "Standard or custom packages",
        body: "Choose one of our standard packages or build your own around your requirements.",
      },
      {
        title: "Flexible payment plans",
        body: "Spread the cost of your event, with discounts for loyal customers.",
      },
      {
        title: "Free quote and consultation",
        body: "Tell us about your event and we will advise you before you commit to anything.",
      },
    ],
  },

  services: {
    metaTitle: "Services",
    metaDescription:
      "Banqueting, hospitality staffing, event management, weddings, filming, entertainment and more across the UAE.",
    label: "Services",
    title: "Staff, planning and entertainment for every kind of event",
    body: (count) =>
      `${count} services, from banquet and restaurant staff to weddings, filming, performances and the technicians who keep it all running`,
  },

  service: {
    metaTitle: (name) => `${name} in Dubai`,
    about: "About this service",
    cover: "What we cover",
    book: (name) => `Book ${name.toLowerCase()}`,
    bookBody:
      "Tell us your date, venue and number of guests. The quote and consultation are free",
    moreLabel: "More services",
    moreTitle: "Other services",
  },

  clients: {
    metaTitle: "Our Clients",
    metaDescription:
      "Hotels in Dubai that work with Samia Jannat Event Organizers, including Radisson Blu, Shangri-La, Hyatt Regency and Grand Hyatt.",
    label: "Clients",
    title: "Hotels in Dubai that work with us",
    body: "We supply staff and run events for some of the city’s best known hotels",
    names: {
      radisson: "Radisson Blu Hotel",
      shangrila: "Shangri-La Hotel",
      hyattRegency: "Hyatt Regency",
      grandHyatt: "Grand Hyatt",
    },
    forHotelsLabel: "For hotels",
    forHotelsTitle: "What we provide",
    forHotels: [
      {
        title: "Banquet staff",
        body: "Teams that set up the room before guests arrive and serve every course.",
      },
      {
        title: "Restaurant service",
        body: "Waiters, commis, hosts and attendants for front and back of house.",
      },
      {
        title: "Events in your venue",
        body: "Weddings, corporate events and parties planned and run at your venue.",
      },
    ],
    cta: "Work with us",
  },

  team: {
    metaTitle: "Team",
    metaDescription:
      "Meet the team behind Samia Jannat Event Organizers: hospitality staff, event crew and performers in Dubai.",
    label: "Team",
    title: "The people who plan, serve and perform at your events",
    body: "Hospitality staff, an event crew and performers, all booked through one company",
    sectionLabel: "Who we send",
    sectionTitle: "One team, three crews",
    sectionBody:
      "Every booking is staffed from these groups, sized to your venue and your number of guests",
    groups: [
      {
        title: "Hospitality staff",
        body: "The people your guests meet, for banquets, restaurants and hotel functions.",
        alt: "A waiter arriving with a tray of coffee",
        roles: [
          "Waiters and waitresses",
          "Commis",
          "Hosts and hostesses",
          "Counter attendants",
          "Dining room and cafeteria attendants",
          "Bartender helpers",
        ],
      },
      {
        title: "Event crew",
        body: "The team that plans the event, sets it up and keeps it running on the day.",
        alt: "A video camera filming a banquet hall",
        roles: [
          "Event planners and coordinators",
          "Banquet setup staff",
          "Videographers",
          "Technicians",
        ],
      },
      {
        title: "Performers",
        body: "Entertainment for parties, festivals, cultural and corporate events.",
        alt: "Three dancers performing a South Asian folk dance on stage",
        roles: [
          "Folklore dancers",
          "Live musicians and DJs",
          "Magicians and comedians",
          "Face painters and balloon artists",
        ],
      },
    ],
    cta: "Need staff for an event",
  },

  notFound: {
    title: "Page not found",
    body: "The page you were looking for has moved or no longer exists.",
    home: "Back to home",
  },
};

export default en;
