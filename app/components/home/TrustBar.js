import Image from "next/image";
import { getI18n } from "../../i18n/server";
import { Container } from "../ui";

// Logos from Wikimedia Commons / Wikipedia. Sizes keep each aspect ratio and
// are balanced by eye, since wide and square marks look different at one height
const clients = [
  {
    name: "Radisson Blu Hotel",
    src: "/images/clients/radisson-blu.svg",
    width: 152,
    height: 46,
  },
  {
    name: "Shangri-La Hotel",
    src: "/images/clients/shangri-la.svg",
    width: 120,
    height: 60,
  },
  {
    name: "Hyatt Regency",
    src: "/images/clients/hyatt-regency.png",
    width: 56,
    height: 61,
  },
  {
    name: "Grand Hyatt",
    src: "/images/clients/grand-hyatt.svg",
    width: 160,
    height: 28,
  },
];

// The track holds the list four times and slides by half its width,
// so the second half lines up exactly where the first began
const track = [...clients, ...clients, ...clients, ...clients];

async function TrustBar() {
  const { t } = await getI18n();

  return (
    <section className="border-y border-fg/8 bg-canvas">
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 text-sm text-fg-3">{t.trust.label}</p>

        {/* ltr in Arabic too: the loop is built to slide right to left */}
        <div dir="ltr" className="marquee-viewport min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          {/* pr-4 matches gap-4 so both halves are the same width */}
          <ul className="marquee-track flex w-max gap-4 pr-4">
            {track.map((client, index) => {
              const copy = index >= clients.length;
              return (
                <li
                  key={`${client.name}-${index}`}
                  aria-hidden={copy || undefined}
                  className="flex h-20 w-52 shrink-0 items-center justify-center rounded-xl bg-tile px-6 light:border light:border-fg/8"
                >
                  <Image
                    src={client.src}
                    alt={copy ? "" : client.name}
                    width={client.width}
                    height={client.height}
                    unoptimized
                    style={{ width: client.width, height: client.height }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default TrustBar;
