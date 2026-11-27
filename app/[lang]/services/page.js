import CtaBand from "../../components/CtaBand";
import PageHeader from "../../components/PageHeader";
import ServiceCard from "../../components/ServiceCard";
import Process from "../../components/home/Process";
import { Container } from "../../components/ui";
import { getServices } from "../../data/services";
import { alternatesFor } from "../../i18n/config";
import { getDictionary } from "../../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { services } = getDictionary(lang);
  return {
    title: services.metaTitle,
    description: services.metaDescription,
    alternates: alternatesFor(lang, "/services"),
  };
}

async function Services({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang).services;
  const services = getServices(lang);

  return (
    <>
      <PageHeader
        label={t.label}
        title={t.title}
        image="/images/pexels-photo-1267320.jpg"
      >
        {t.body(services.length)}
      </PageHeader>

      <section className="py-24 md:py-32">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}

export default Services;
