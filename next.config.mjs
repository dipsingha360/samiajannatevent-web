import { readFileSync } from "node:fs";

const slugs = JSON.parse(
  readFileSync(new URL("./app/data/service-slugs.json", import.meta.url))
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // English has no prefix; /en is only the internal folder (see proxy.js)
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      // service pages used to live at /services/<id>
      ...Object.entries(slugs).flatMap(([id, slug]) => [
        {
          source: `/services/${id}`,
          destination: `/services/${slug}`,
          permanent: true,
        },
        {
          source: `/ar/services/${id}`,
          destination: `/ar/services/${slug}`,
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;
