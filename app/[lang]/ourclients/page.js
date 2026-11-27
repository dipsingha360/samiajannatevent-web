import Image from "next/image";
import CtaBand from "../../components/CtaBand";
import PageHeader from "../../components/PageHeader";
import { Container, SectionHeading } from "../../components/ui";
import { alternatesFor } from "../../i18n/config";
import { getDictionary } from "../../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { clients } = getDictionary(lang);
  return {
    title: clients.metaTitle,
    description: clients.metaDescription,
    alternates: alternatesFor(lang, "/ourclients"),
  };
}

// names are in the dictionary under clients.names
const clients = [
  { key: "radisson", img: "/images/Radisson_Blu_Hotel_Dubai.jpg" },
  { key: "shangrila", img: "/images/Shangri_La_Hotel_Dubai.jpg" },
  { key: "hyattRegency", img: "/images/Hyatt_Regency_Dubai.jpg" },
  { key: "grandHyatt", img: "/images/Grand_Hyatt_Dubai.jpg" },
];

async function OurClients({ params }) {
  const { lang } = await params;
  const { clients: t, common } = getDictionary(lang);

  return (
    <>
      <PageHeader
        label={t.label}
        title={t.title}
        image="/images/Grand_Hyatt_Dubai.jpg"
      >
        {t.body}
      </PageHeader>

      <section className="py-24 md:py-32">
        <Container>
          {/* four across on desktop, so each photo sits near the size of a
              service card rather than filling half the page */}
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => {
              const name = t.names[client.key];
              return (
                <li key={client.key}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={client.img}
                        alt={`${name}, ${common.dubai}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <span className="block text-lg font-medium text-fg">
                        {name}
                      </span>
                      <span className="mt-1 block text-sm text-fg-3">
                        {common.dubai}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-fg/8 bg-canvas py-24 md:py-32">
        <Container>
          <SectionHeading label={t.forHotelsLabel} title={t.forHotelsTitle} />
          <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
            {t.forHotels.map((item) => (
              <li key={item.title} className="border-t border-fg/8 pt-6">
                <h3 className="text-lg font-medium text-fg">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-2">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title={t.cta} />
    </>
  );
}

export default OurClients;
