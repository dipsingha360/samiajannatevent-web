import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";
import { WhatsAppIcon } from "./icons";
import { getI18n } from "../i18n/server";
import { Container } from "./ui";

// labels are in the dictionary under footer.pages
const pages = [
  { href: "/services", key: "services" },
  { href: "/ourclients", key: "clients" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

const contacts = [
  { icon: Phone, value: "+971 4 345 7464", href: "tel:+97143457464" },
  {
    icon: WhatsAppIcon,
    value: "+971 50 656 1669",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    value: "info@samiajannatevent.com",
    href: "mailto:info@samiajannatevent.com",
  },
];

const linkClass = "text-fg-2 transition-colors duration-150 hover:text-fg";

function FooterHeading({ children }) {
  return <h2 className="text-sm font-medium text-fg">{children}</h2>;
}

async function Footer() {
  const { t, href: to } = await getI18n();
  const f = t.footer;

  return (
    <footer className="border-t border-fg/8 bg-canvas">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
        <div>
          <p className="font-display font-medium text-2xl text-fg">
            {t.meta.siteName}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-2">
            {f.about}
          </p>
        </div>

        <div>
          <FooterHeading>{f.company}</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={to(page.href)} className={linkClass}>
                  {f.pages[page.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>{f.services}</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {f.serviceLinks.map((service) => (
              <li key={service.slug}>
                <Link href={to(`/services/${service.slug}`)} className={linkClass}>
                  {service.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={to("/services")} className="text-fg underline decoration-fg/20 underline-offset-4 hover:decoration-fg">
                {f.allServices}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>{f.contact}</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {contacts.map(({ icon: Icon, value, href, external }) => (
              <li key={value}>
                <a
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`flex items-center gap-3 ${linkClass}`}
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-fg-3" />
                  {/* numbers and the email read left to right in Arabic too */}
                  <span dir="ltr">{value}</span>
                </a>
              </li>
            ))}
            <li className="flex gap-3 text-fg-2">
              <MapPin size={16} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-fg-3" />
              {t.common.address}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-fg/8">
        <Container className="py-6 text-xs text-fg-3">
          <p>
            &copy; {new Date().getFullYear()} {t.meta.siteName}
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
