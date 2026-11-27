import Image from "next/image";
import CtaBand from "../../components/CtaBand";
import PageHeader from "../../components/PageHeader";
import TrustBar from "../../components/home/TrustBar";
import WhyUs from "../../components/home/WhyUs";
import { Container, SectionHeading } from "../../components/ui";
import { alternatesFor } from "../../i18n/config";
import { getDictionary } from "../../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { about } = getDictionary(lang);
  return {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: alternatesFor(lang, "/about"),
  };
}

async function About({ params }) {
  const { lang } = await params;
  const { about: t, meta } = getDictionary(lang);

  return (
    <>
      <PageHeader
        label={t.label}
        title={t.title}
        image="/images/pexels-photo-7674621.jpg"
      >
        {t.body}
      </PageHeader>

      <section className="py-24 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading label={t.storyLabel} title={meta.siteName} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-2 md:text-lg">
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Image
            src="/images/pexels-photo-5638816.jpg"
            alt={t.imgAlt}
            width={1125}
            height={750}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Container>
      </section>

      <TrustBar />

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading label={t.termsLabel} title={t.termsTitle} />
          <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
            {t.offers.map((offer) => (
              <li key={offer.title} className="border-t border-fg/8 pt-6">
                <h3 className="text-lg font-medium text-fg">
                  {offer.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-2">{offer.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WhyUs />
      <CtaBand />
    </>
  );
}

export default About;
