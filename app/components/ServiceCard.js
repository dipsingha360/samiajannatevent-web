import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getI18n } from "../i18n/server";

// service: one item from getServices(lang), already in the page language
async function ServiceCard({ service }) {
  const { t, href } = await getI18n();

  return (
    <Link
      href={href(`/services/${service.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-fg/8 bg-card transition-colors duration-150 hover:border-fg/20"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={service.serviceImg}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium text-fg">
          {service.serviceTitle}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fg-2">
          {service.serviceSubtitle}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-fg">
          {t.common.details}
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-fg-3 transition-colors duration-150 group-hover:text-fg rtl:-scale-x-100"
          />
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
