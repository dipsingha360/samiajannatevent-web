import { serviceData } from "./data/services";

const siteUrl = "https://samiajannatevent.com";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/team", "/ourclients", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...serviceData.map((service) => ({
      url: `${siteUrl}/services/${service.id}`,
    })),
  ];
}
