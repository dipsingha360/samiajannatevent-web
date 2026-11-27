import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";
import { WhatsAppIcon } from "./icons";

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  children,
  as: Heading = "h2",
  className = "",
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {label && <p className="mb-4 text-sm text-fg-2">{label}</p>}
      <Heading className="font-display font-medium text-[32px] leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px]">
        {title}
      </Heading>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-fg-2 md:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-brass-500 text-on-brass hover:bg-brass-400",
  secondary:
    "border border-fg/10 bg-raised text-fg hover:border-fg/20 hover:bg-card",
  // for buttons sitting on a photo
  outline:
    "border border-fg/30 text-fg hover:border-fg/60 hover:bg-fg/5",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-lg px-5 text-[15px] font-medium transition-[color,background-color,border-color,scale] duration-150 ease-out active:scale-[0.98] ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

// The WhatsApp chat link, in WhatsApp green with its icon so it stands out
// next to the brass "Get a quote" button. Same size as ButtonLink
export function WhatsAppButton({ className = "", children }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 text-[15px] font-medium text-on-whatsapp transition-[background-color,scale] duration-150 ease-out hover:bg-whatsapp-hover active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon size={18} aria-hidden="true" />
      {children}
    </a>
  );
}

export function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-[15px] font-medium text-fg underline decoration-fg/20 underline-offset-4 transition-colors duration-150 hover:decoration-fg ${className}`}
    >
      {children}
      <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" className="rtl:-scale-x-100" />
    </Link>
  );
}
