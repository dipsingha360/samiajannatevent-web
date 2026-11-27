import { SITE_URL } from "../data/site";

// English is the default and keeps the root URLs (/services). Arabic lives
// under /ar (/ar/services). Every route sits in app/[lang]; proxy.js serves
// the English pages from the internal /en segment
export const locales = ["en", "ar"];
export const defaultLocale = "en";

export const isLocale = (value) => locales.includes(value);
export const dirOf = (lang) => (lang === "ar" ? "rtl" : "ltr");

// each language's name written in that language, for the switcher
export const languageNames = { en: "English", ar: "العربية" };

// "/about" -> "/about" in English, "/ar/about" in Arabic
export function localePath(lang, path) {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// the path without its language prefix: "/ar/about" -> "/about".
// Also strips the internal /en, which the server sees for English pages
export function stripLocale(pathname) {
  const match = pathname.match(/^\/(en|ar)(?=\/|$)/);
  if (!match) return pathname;
  return pathname.slice(match[0].length) || "/";
}

export function absoluteUrl(lang, path) {
  const localized = localePath(lang, path);
  return localized === "/" ? SITE_URL : `${SITE_URL}${localized}`;
}

// canonical plus hreflang links, so Google pairs the two versions of a page
export function alternatesFor(lang, path) {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath(defaultLocale, path),
    },
  };
}
