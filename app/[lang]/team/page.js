import Image from "next/image";
import CtaBand from "../../components/CtaBand";
import PageHeader from "../../components/PageHeader";
import { Container, SectionHeading } from "../../components/ui";
import { alternatesFor } from "../../i18n/config";
import { getDictionary } from "../../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { team } = getDictionary(lang);
  return {
    title: team.metaTitle,
    description: team.metaDescription,
    alternates: alternatesFor(lang, "/team"),
    // hidden from the navigation until real team members are added
    robots: { index: false, follow: true },
  };
}

// roles taken from what each service provides; the text for each group is
// in the dictionary under team.groups, in this order
const groupImages = [
  "/images/pexels-photo-3769980.jpg",
  "/images/pexels-photo-3649407.jpg",
  "/images/sout-asia-dance.jpg",
];

async function Team({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang).team;

  return (
    <>
      <PageHeader
        label={t.label}
        title={t.title}
        image="/images/pexels-photo-2696064.jpg"
      >
        {t.body}
      </PageHeader>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading label={t.sectionLabel} title={t.sectionTitle}>
            {t.sectionBody}
          </SectionHeading>

          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.groups.map((group, index) => (
              <li
                key={group.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-fg/8 bg-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={groupImages[index]}
                    alt={group.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-fg">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">
                    {group.body}
                  </p>
                  <ul className="mt-6 border-t border-fg/8">
                    {group.roles.map((role) => (
                      <li
                        key={role}
                        className="border-b border-fg/8 py-3 text-[15px] text-fg"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title={t.cta} />
    </>
  );
}

export default Team;
