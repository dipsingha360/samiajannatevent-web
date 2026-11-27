import Image from "next/image";
import { serviceData } from "../../data/services";
import { getI18n } from "../../i18n/server";
import { Container, SectionHeading, TextLink } from "../ui";

async function Intro() {
  const { t: { intro: t }, href } = await getI18n();
  const facts = [
    { value: String(serviceData.length), label: t.services },
    { value: "4", label: t.hotels },
    { value: t.free, label: t.freeLabel },
  ];

  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Image
          src="/images/pexels-photo-671956.jpg"
          alt={t.imgAlt}
          width={1125}
          height={750}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />

        <div>
          <SectionHeading label={t.label} title={t.title}>
            {t.body}
          </SectionHeading>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-fg/8 pt-8">
            {facts.map((fact) => (
              // dt stays first for screen readers; order-first puts the
              // number on top so every figure shares one baseline
              <div key={fact.label} className="flex flex-col items-start">
                <dt className="mt-2 text-sm leading-snug text-fg-2">
                  {fact.label}
                </dt>
                <dd className="order-first font-display font-medium text-4xl leading-none text-fg tabular-nums">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <TextLink href={href("/about")} className="mt-12">
            {t.link}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
