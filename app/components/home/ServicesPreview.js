import { getServices } from "../../data/services";
import { getI18n } from "../../i18n/server";
import ServiceCard from "../ServiceCard";
import { Container, SectionHeading, TextLink } from "../ui";

const featuredIds = [1, 3, 6, 4, 5, 7];

async function ServicesPreview() {
  const { lang, t: { servicesPreview: t }, href } = await getI18n();
  const services = getServices(lang);
  const featured = featuredIds.map((id) =>
    services.find((service) => service.id === id)
  );

  return (
    <section className="border-t border-fg/8 bg-canvas py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading label={t.label} title={t.title}>
            {t.body}
          </SectionHeading>
          <TextLink href={href("/services")} className="shrink-0">
            {t.all(services.length)}
          </TextLink>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ServicesPreview;
