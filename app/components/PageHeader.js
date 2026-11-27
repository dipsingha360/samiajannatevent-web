import Image from "next/image";
import { Container } from "./ui";

// Photo banner for inner pages, same treatment as the home hero
function PageHeader({ label, title, image, imageAlt = "", children }) {
  return (
    <section data-theme="dark" className="relative isolate flex min-h-[520px] items-center overflow-hidden pt-28 pb-16 md:h-[72svh] md:pt-16 md:pb-0">
      <Image
        src={image}
        alt={imageAlt}
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
        <div className="max-w-[720px]">
          {label && (
            <p className="enter text-sm text-fg-2" style={{ "--i": 0 }}>
              {label}
            </p>
          )}
          <h1
            className="enter mt-6 font-display font-medium text-[40px] leading-[1.06] tracking-[-0.02em] text-fg sm:text-5xl lg:text-[52px] lg:tracking-[-0.03em]"
            style={{ "--i": 1 }}
          >
            {title}
          </h1>
          {children && (
            <p
              className="enter mt-6 max-w-[36rem] text-lg leading-[1.6] text-fg/80"
              style={{ "--i": 2 }}
            >
              {children}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHeader;
