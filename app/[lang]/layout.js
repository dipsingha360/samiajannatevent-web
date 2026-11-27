import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
  IBM_Plex_Sans_Arabic,
  Instrument_Sans,
  Montserrat,
  Noto_Kufi_Arabic,
} from "next/font/google";
import "../globals.css";
import { BUSINESS, SITE_URL } from "../data/site";
import { getServices } from "../data/services";
import { absoluteUrl, dirOf, locales } from "../i18n/config";
import { getDictionary } from "../i18n/server";

// Title font. Montserrat stands in for Gotham, which needs a paid web
// licence. To switch, put the licensed .woff2 files in app/fonts and
// replace this with next/font/local using the same variable name.
const display = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-title",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

// Fonts for the Arabic pages (see globals.css), with Latin letters so mixed
// text matches. Not preloaded: the files only download on pages that use
// them, so English pages don't pay for them
const displayArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["500"],
  variable: "--font-title-ar",
  display: "swap",
  preload: false,
});

const bodyArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500"],
  variable: "--font-body-ar",
  display: "swap",
  preload: false,
});

const shareImage = "/images/pexels-photo-5638748.jpg";

// proxy.js only ever sends en or ar here, and getI18n() 404s anything else
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: `%s | ${meta.siteName}` },
    description: meta.description,
    openGraph: {
      type: "website",
      siteName: meta.siteName,
      title: meta.ogTitle,
      description: meta.description,
      locale: meta.ogLocale,
      alternateLocale: locales
        .filter((other) => other !== lang)
        .map((other) => getDictionary(other).meta.ogLocale),
      images: [{ url: shareImage, width: 1125, height: 750 }],
    },
    twitter: { card: "summary_large_image" },
    icons: {
      icon: "/images/samiajannatevent-logo-16x16.png",
      apple: "/images/samiajannatevent-logo-32x32.png",
    },
  };
}

// Tells Google who the business is and where it operates (local results, Maps).
// Opening hours are left out until they are confirmed.
function businessJsonLd(lang, meta) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: getDictionary("ar").meta.siteName,
    description: meta.description,
    url: absoluteUrl(lang, "/"),
    logo: `${SITE_URL}/images/samiajannatevent-logo-2.png`,
    image: `${SITE_URL}${shareImage}`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressCountry: BUSINESS.country,
      postOfficeBoxNumber: BUSINESS.poBox,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.whatsapp,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: meta.catalogName,
      itemListElement: getServices(lang).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.serviceTitle,
          url: absoluteUrl(lang, `/services/${service.slug}`),
        },
      })),
    },
  };
}

// Runs before first paint so a saved light theme never flashes dark.
// Dark is the default; the key matches THEME_STORAGE_KEY in ThemeToggle.js
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    // the inline script may change data-theme before React hydrates
    <html
      lang={lang}
      dir={dirOf(lang)}
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${instrument.variable} ${displayArabic.variable} ${bodyArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd(lang, t.meta)).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <Navbar lang={lang} t={t.nav} themeT={t.theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
