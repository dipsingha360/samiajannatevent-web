import Image from "next/image";
import { getI18n } from "../../i18n/server";
import { ButtonLink, Container } from "../ui";

async function Hero() {
  const { t, href } = await getI18n();

  return (
    <section data-theme="dark" className="relative isolate flex min-h-[640px] items-center overflow-hidden pt-28 pb-16 md:h-svh md:pt-16 md:pb-0">
      <Image
        src="/images/pexels-photo-5638748.jpg"
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-page via-page/80 to-page/30 rtl:bg-linear-to-l"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-page to-transparent"
      />

      <Container>
        <div className="max-w-[760px] xl:max-w-[880px]">
          <p className="enter text-sm text-fg-2" style={{ "--i": 0 }}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="enter mt-6 font-display font-medium text-[40px] leading-[1.06] tracking-[-0.02em] text-fg sm:text-5xl lg:text-[56px] lg:tracking-[-0.03em] xl:text-[64px]"
            style={{ "--i": 1 }}
          >
            {t.hero.title}
          </h1>
          <p
            className="enter mt-6 max-w-[36rem] text-lg leading-[1.6] text-fg/80"
            style={{ "--i": 2 }}
          >
            {t.hero.body}
          </p>
          <div className="enter mt-10 flex flex-wrap gap-3" style={{ "--i": 3 }}>
            <ButtonLink href={href("/contact")}>{t.common.getQuote}</ButtonLink>
            <ButtonLink href={href("/services")} variant="outline">
              {t.hero.secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
