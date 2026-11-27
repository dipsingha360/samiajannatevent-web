import Image from "next/image";
import Link from "next/link";
import { getI18n } from "../../i18n/server";
import { Container, SectionHeading } from "../ui";

// key: the label in the dictionary under occasions
const occasions = [
  {
    key: "weddings",
    href: "/services/wedding-planning",
    img: "/images/Wedding-Parties-Organizing2.jpg",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    key: "filming",
    href: "/services/event-filming",
    img: "/images/pexels-photo-3649407.jpg",
  },
  {
    key: "folklore",
    href: "/services/folklore-dance-performances",
    img: "/images/sout-asia-dance.jpg",
  },
  {
    key: "festivals",
    href: "/services/music-festivals",
    img: "/images/pexels-photo-1540406.jpg",
  },
  {
    key: "parties",
    href: "/services/party-entertainment",
    img: "/images/pexels-photo-219101.jpg",
  },
];

async function Occasions() {
  const { t: { occasions: t }, href } = await getI18n();

  return (
    <section className="border-t border-fg/8 py-24 md:py-32">
      <Container>
        <SectionHeading label={t.label} title={t.title} />
        <ul className="mt-12 grid auto-rows-[240px] gap-4 sm:grid-cols-4">
          {occasions.map((occasion) => (
            <li key={occasion.key} className={occasion.className ?? ""}>
              <Link
                href={href(occasion.href)}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={occasion.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-canvas/90 via-canvas/10 to-transparent transition-opacity duration-150 group-hover:opacity-80"
                />
                <span className="absolute start-6 bottom-5 text-base font-medium text-fg underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-fg">
                  {t[occasion.key]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Occasions;
