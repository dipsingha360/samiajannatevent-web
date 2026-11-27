import { NextResponse } from "next/server";

// English pages keep their root URLs (/services) but live in app/[lang],
// so serve them from the internal /en segment. Arabic URLs (/ar/...) already
// match the folder. next.config.mjs redirects anyone who types /en/... back
// to the clean URL
export function proxy(request) {
  const { pathname } = request.nextUrl;
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return;

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // pages only: skip Next's own files and anything with an extension
  // (images, sitemap.xml, robots.txt)
  matcher: ["/((?!_next/|_vercel/|.*\\..*).*)"],
};
