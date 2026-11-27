import Image from "next/image";
import { getI18n } from "../../i18n/server";
import { ButtonLink, Container } from "../ui";

// Follows the site theme. Step numbers use the accent text color:
// 8.9:1 on the card in dark, 5.7:1 in light
async function Process() {
  const { t: { process: t }, href } = await getI18n();

  return (
    <section className="border-t border-fg/8 bg-canvas py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* both columns share the row height; the photo fills what is left
            under the text, so it ends level with the last step card */}
        <div className="flex flex-col items-start">
          <p className="mb-4 text-sm text-fg-2">{t.label}</p>
          <h2 className="font-display text-[32px] leading-[1.15] font-medium tracking-[-0.02em] text-fg md:text-[40px]">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
            {t.body}
          </p>
          <ButtonLink href={href("/contact")} className="mt-8">
            {t.cta}
          </ButtonLink>
          <div className="relative mt-12 hidden min-h-48 w-full flex-1 overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/pexels-photo-2696064.jpg"
              alt={t.imgAlt}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {t.steps.map((step, index) => (
            <li
              key={step.title}
              className="reveal-step flex flex-col rounded-2xl border border-fg/8 bg-card p-6 md:p-8"
              style={{ "--i": index }}
            >
              <span className="font-display text-5xl leading-none font-medium text-accent tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-lg font-medium text-fg">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-fg-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Process;
