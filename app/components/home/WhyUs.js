import Image from "next/image";
import { getI18n } from "../../i18n/server";
import { Container, SectionHeading } from "../ui";

async function WhyUs() {
  const { t: { whyUs: t } } = await getI18n();

  return (
    <section className="border-t border-fg/8 py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading label={t.label} title={t.title} />
          <ul className="mt-12 border-t border-fg/8">
            {t.reasons.map((reason) => (
              <li key={reason.title} className="border-b border-fg/8 py-6">
                <h3 className="text-lg font-medium text-fg">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-2">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/images/pexels-photo-3769980.jpg"
          alt={t.imgAlt}
          width={1125}
          height={750}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />
      </Container>
    </section>
  );
}

export default WhyUs;
