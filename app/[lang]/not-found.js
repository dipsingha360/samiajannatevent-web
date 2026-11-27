import { ButtonLink, Container } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function NotFound() {
  const { t, href } = await getI18n();

  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm text-fg-2">404</p>
          <h1 className="font-display font-medium text-[32px] leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px]">
            {t.notFound.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
            {t.notFound.body}
          </p>
          <ButtonLink href={href("/")} className="mt-8">
            {t.notFound.home}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
