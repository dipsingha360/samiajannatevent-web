"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { languageNames, localePath, locales, stripLocale } from "../i18n/config";
import Flag from "./Flag";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/ourclients", key: "clients" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  // Team (/team) is hidden until there are real team members to show
];

const logo = {
  src: "/images/samiajannatevent-logo-2.png",
  width: 258,
  height: 67,
};

// pages that open on a photo banner (Contact opens straight on its form)
const bannerPrefixes = ["/services", "/ourclients", "/about", "/team"];
const hasBanner = (path) =>
  path === "/" || bannerPrefixes.some((prefix) => path.startsWith(prefix));

// lang: the page's language. t: the nav strings, themeT: the theme toggle's
function Navbar({ lang, t, themeT }) {
  // without its language prefix, so links compare the same in both
  // languages, and the server (which sees the internal /en) matches the client
  const path = stripLocale(usePathname());
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // the bar is see-through at the top of the page
  const solid = scrolled || nav;
  // over a photo banner (always dark) it uses the dark theme too, so the
  // links stay readable when the rest of the site is light
  const overBanner = !solid && hasBanner(path);

  const isActive = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);
  const to = (href) => localePath(lang, href);

  // the same page in the other language
  const otherLang = locales.find((locale) => locale !== lang);

  return (
    <header
      data-theme={overBanner ? "dark" : undefined}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ease-out ${
        solid ? "border-fg/8 bg-page" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={to("/")} className="shrink-0">
          <Image
            {...logo}
            alt={t.logoAlt}
            loading="eager"
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={to(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm transition-colors duration-150 hover:text-fg ${
                  isActive(link.href) ? "text-fg" : "text-fg/70"
                }`}
              >
                {t[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* named in its own language so a reader of either can find it */}
          <Link
            href={localePath(otherLang, path)}
            hrefLang={otherLang}
            lang={otherLang}
            title={t.switchLanguage}
            className="flex h-9 items-center gap-2 rounded-lg border border-fg/15 bg-page/80 px-3 text-sm text-fg transition-colors duration-150 hover:border-fg/30 hover:bg-page"
          >
            {/* UAE for Arabic (the site's region), UK for English */}
            <Flag lang={otherLang} />
            {languageNames[otherLang]}
          </Link>
          <ThemeToggle t={themeT} />
          <Link
            href={to("/contact")}
            className="hidden h-9 items-center rounded-lg bg-brass-500 px-4 text-sm font-medium text-on-brass transition-colors duration-150 hover:bg-brass-400 sm:inline-flex"
          >
            {t.quote}
          </Link>
          <button
            type="button"
            onClick={() => setNav(!nav)}
            aria-label={nav ? t.closeMenu : t.openMenu}
            aria-expanded={nav}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg lg:hidden"
          >
            {nav ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-page transition-opacity duration-200 ease-out lg:hidden ${
          nav ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 pt-4 sm:px-8">
          {links.map((link) => (
            <li key={link.href} className="border-b border-fg/8">
              <Link
                href={to(link.href)}
                onClick={() => setNav(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex h-14 items-center text-lg ${
                  isActive(link.href) ? "text-fg" : "text-fg-2"
                }`}
              >
                {t[link.key]}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-5 pt-8 sm:px-8">
          <Link
            href={to("/contact")}
            onClick={() => setNav(false)}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-brass-500 font-medium text-on-brass"
          >
            {t.quote}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
