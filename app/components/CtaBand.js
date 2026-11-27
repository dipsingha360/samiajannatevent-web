import { getI18n } from "../i18n/server";
import { ButtonLink, Container, WhatsAppButton } from "./ui";

async function CtaBand({ title, children }) {
  const { t, href } = await getI18n();

  return (
    <section className="border-t border-fg/8 bg-canvas py-24">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display font-medium text-[32px] leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px]">
            {title ?? t.cta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
            {children ?? t.cta.body}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <ButtonLink href={href("/contact")}>{t.common.getQuote}</ButtonLink>
          <WhatsAppButton>{t.common.whatsapp}</WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}

export default CtaBand;
