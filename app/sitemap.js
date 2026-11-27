import { serviceData } from "./data/services";
import { absoluteUrl, locales } from "./i18n/config";

export default function sitemap() {
  // /team is left out while the page is hidden
  const paths = [
    "/",
    "/services",
    "/ourclients",
    "/about",
    "/contact",
    ...serviceData.map((service) => `/services/${service.slug}`),
  ];

  // one entry per language, each listing both versions of the page
  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((lang) => [lang, absoluteUrl(lang, path)])
    );
    return locales.map((lang) => ({
      url: absoluteUrl(lang, path),
      alternates: { languages },
    }));
  });
}
