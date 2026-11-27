import { notFound } from "next/navigation";
import { lang as langParam } from "next/root-params";
import { defaultLocale, isLocale, localePath } from "./config";
import ar from "./dictionaries/ar";
import en from "./dictionaries/en";

const dictionaries = { en, ar };

export const getDictionary = (lang) =>
  dictionaries[isLocale(lang) ? lang : defaultLocale];

// For server components: the current language read from the [lang]
// segment, its strings, and href() to put the language prefix on links
export async function getI18n() {
  const lang = await langParam();
  if (!isLocale(lang)) notFound();
  return {
    lang,
    t: dictionaries[lang],
    href: (path) => localePath(lang, path),
  };
}
