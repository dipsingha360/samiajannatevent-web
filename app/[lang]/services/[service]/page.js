import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHeader from "../../../components/PageHeader";
import ServiceCard from "../../../components/ServiceCard";
import {
  ButtonLink,
  Container,
  SectionHeading,
  WhatsAppButton,
} from "../../../components/ui";
import { getServices, serviceData } from "../../../data/services";
import { SITE_URL } from "../../../data/site";
import { absoluteUrl, alternatesFor, localePath } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/server";

const findService = (lang, slug) =>
  getServices(lang).find((data) => data.slug === slug);

export const dynamicParams = false;

// slugs are the same in every language
export function generateStaticParams() {
  return serviceData.map((data) => ({ service: data.slug }));
}

export async function generateMetadata({ params }) {
  const { lang, service } = await params;
  const item = findService(lang, service);
  if (!item) return {};

  const { meta, service: t } = getDictionary(lang);
  const path = `/services/${item.slug}`;
  const title = t.metaTitle(item.serviceTitle);
  return {
    title,
    description: item.serviceSubtitle,
    alternates: alternatesFor(lang, path),
    openGraph: {
      type: "website",
      siteName: meta.siteName,
      locale: meta.ogLocale,
      title,
      description: item.serviceSubtitle,
      url: localePath(lang, path),
      images: [item.serviceImg2],
    },
  };
}

async function Service({ params }) {
  const { lang, service } = await params;
  const item = findService(lang, service);
  if (!item) notFound();

  const { common, service: t, services: servicesT } = getDictionary(lang);
  const services = getServices(lang);
  const index = services.findIndex((data) => data.id === item.id);
  const others = [1, 2, 3].map(
    (step) => services[(index + step) % services.length]
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.serviceTitle,
    description: item.serviceDetails,
    url: absoluteUrl(lang, `/services/${item.slug}`),
    image: `${SITE_URL}${item.serviceImg2}`,
    inLanguage: lang,
    areaServed: { "@type": "City", name: "Dubai" },
    provider: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        label={servicesT.label}
        title={item.serviceTitle}
        image={item.serviceImg2}
      >
        {item.serviceSubtitle}
      </PageHeader>

      <section className="py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-20">
          <div className="max-w-2xl">
            <h2 className="font-display font-medium text-3xl leading-[1.15] tracking-[-0.02em] text-fg md:text-4xl">
              {t.about}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-fg-2 md:text-lg">
              {item.serviceDetails}
            </p>

            {item.points && (
              <>
                <h3 className="mt-12 text-lg font-medium text-fg">
                  {t.cover}
                </h3>
                <ul className="mt-4 border-t border-fg/8">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 border-b border-fg/8 py-3 text-[15px] text-fg"
                    >
                      <Check
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-fg-3"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="mt-12 text-sm text-fg-3">{item.serviceTag}</p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-fg/8 bg-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.serviceImg}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-lg font-medium text-fg">
                  {t.book(item.serviceTitle)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-2">
                  {t.bookBody}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink href={localePath(lang, "/contact")}>
                    {common.getQuote}
                  </ButtonLink>
                  <WhatsAppButton>{common.whatsapp}</WhatsAppButton>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-fg/8 bg-canvas py-24 md:py-32">
        <Container>
          <SectionHeading label={t.moreLabel} title={t.moreTitle} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.id}>
                <ServiceCard service={other} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

export default Service;
