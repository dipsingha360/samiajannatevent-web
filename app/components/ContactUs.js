"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CircleAlert,
  LoaderCircle,
  Mail,
  Mailbox,
  MapPin,
  Phone,
} from "lucide-react";
import { WHATSAPP_URL } from "../data/site";
import { WhatsAppIcon } from "./icons";
import { Container, SectionHeading } from "./ui";

// EmailJS ids are public by design; abuse is limited by the EmailJS
// dashboard settings plus the rate limit and honeypot below
const EMAILJS_SERVICE_ID = "service_6krclun";
const EMAILJS_TEMPLATE_ID = "template_5ofo6dm";
const EMAILJS_PUBLIC_KEY = "Cpe9KrTFgWKkcWXBy";

// WhatsApp is the contact we most want people to use, so it gets its own
// card above the other details
const WHATSAPP = {
  value: "+971 50 656 1669",
  href: WHATSAPP_URL,
};

// key: the label in the dictionary. ltr: phone numbers and the email
// address, which must read left to right inside Arabic text. The office
// value is the translated address. Without href the row is plain text
const details = [
  {
    icon: Phone,
    key: "phone",
    value: "+971 4 345 7464",
    href: "tel:+97143457464",
    ltr: true,
  },
  {
    icon: Mail,
    key: "email",
    value: "info@samiajannatevent.com",
    href: "mailto:info@samiajannatevent.com",
    ltr: true,
  },
  {
    icon: MapPin,
    key: "office",
    href: "https://www.google.com/maps/search/?api=1&query=Al+Mamzar+Building+Hor+Al+Anz+Dubai",
    external: true,
  },
  { icon: Mailbox, key: "poBox" },
];

// Field states: default, hover, focus, invalid (red border and message,
// set after a submit attempt), disabled while sending. Autofill keeps
// these colours through the rule in globals.css.
// Borders reach 3:1 against the card in both themes (WCAG non-text contrast)
const inputClass =
  "w-full rounded-lg border border-fg/40 light:border-fg/50 bg-raised px-4 py-3 text-[15px] text-fg placeholder:text-fg-3 outline-hidden transition-colors duration-150 hover:border-fg/60 light:hover:border-fg/70 focus:border-focus focus:ring-1 focus:ring-focus aria-invalid:border-negative aria-invalid:focus:ring-negative disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block text-sm text-fg-2";

// which check failed for each field, using the browser's own validity
// (noValidate turns off its pop-up, not the checks); "" when the field is fine
const requiredMessage = {
  fullname: "nameRequired",
  email: "emailRequired",
  message: "messageRequired",
};

function fieldError(field, t) {
  if (!field.value.trim()) return t[requiredMessage[field.name]];
  // the browser accepts "name@gmail", so also ask for a dot in the domain;
  // a typo there would leave us no way to reply
  if (
    field.validity.typeMismatch ||
    (field.type === "email" && !/@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))
  ) {
    return t.emailInvalid;
  }
  return "";
}

// the error under a field, linked to it with aria-describedby
function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-negative">
      <CircleAlert size={16} strokeWidth={1.75} aria-hidden="true" className="mt-0.5 shrink-0" />
      {children}
    </p>
  );
}

const fields = ["fullname", "email", "message"];

// t: the contact strings from the dictionary. isPage: the section opens
// the Contact page, so its heading is the h1
export default function ContactUs({
  t,
  label = t.label,
  title = t.title,
  isPage = false,
}) {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  // field name -> message; only filled in once someone tries to send
  const [errors, setErrors] = useState({});
  const sending = status === "sending";

  // after a failed attempt, each field updates its message as it is fixed
  const recheck = (e) => {
    const field = e.target;
    if (!(field.name in errors)) return;
    setErrors((current) => ({ ...current, [field.name]: fieldError(field, t) }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const found = Object.fromEntries(
      fields.map((name) => [name, fieldError(form.elements[name], t)])
    );
    setErrors(found);
    const firstInvalid = fields.find((name) => found[name]);
    if (firstInvalid) {
      setStatus("idle");
      form.elements[firstInvalid].focus();
      return;
    }

    // bots fill every field, people never see this one
    if (form.website.value) {
      form.reset();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        limitRate: { id: "contact-form", throttle: 30000 },
      });
      form.reset();
      setErrors({});
      setStatus("sent");
    } catch (error) {
      console.error("Contact form failed to send", error);
      setStatus("error");
    }
  };

  // On phones the form comes right after the heading, before these details.
  // Each row is a link; on hover or keyboard focus the row lifts onto a card,
  // the icon tile turns brass, the value turns accent and an arrow shows.
  // The negative margin keeps the text aligned with the heading above.
  // Contrast: accent on card 8.9:1 dark, 5.7:1 light; icon on brass 8.2:1
  const detailList = (
    <div className="lg:col-start-1 lg:row-start-2">
      {/* WhatsApp: tinted green card with a filled tile and a call to action
          that is always visible. Green text uses whatsapp-fg, which is
          darker in the light theme (8.1:1 dark, 5.4:1 light) */}
      <a
        href={WHATSAPP.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group -mx-3 flex items-center gap-4 rounded-xl border border-whatsapp/35 bg-whatsapp/8 p-3 transition-colors duration-150 hover:border-whatsapp/70 hover:bg-whatsapp/14 focus-visible:border-whatsapp/70 focus-visible:bg-whatsapp/14 light:bg-whatsapp/10 light:hover:bg-whatsapp/18"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-whatsapp text-on-whatsapp">
          <WhatsAppIcon size={20} aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm text-whatsapp-fg">{t.whatsapp}</span>
          <span className="mt-0.5 block font-medium text-fg">
            <span dir="ltr">{WHATSAPP.value}</span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-whatsapp-fg">
          <span className="hidden sm:inline">{t.whatsappCta}</span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            aria-hidden="true"
            className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
          />
        </span>
      </a>

      <ul className="-mx-3 mt-4 space-y-1">
        {details.map(({ icon: Icon, key, value = t[`${key}Value`], href, external, ltr }) => {
          const Row = href ? "a" : "div";
          return (
          <li key={key}>
            <Row
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`group flex items-center gap-4 rounded-xl p-3 ${href ? "transition-colors duration-150 hover:bg-card focus-visible:bg-card" : ""}`}
            >
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg border border-fg/10 bg-raised text-fg-2 ${href ? "transition-colors duration-150 group-hover:border-brass-500 group-hover:bg-brass-500 group-hover:text-on-brass group-focus-visible:border-brass-500 group-focus-visible:bg-brass-500 group-focus-visible:text-on-brass" : ""}`}>
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-fg-2">{t[key]}</span>
                <span className={`mt-0.5 block text-fg ${href ? "transition-colors duration-150 group-hover:text-accent group-focus-visible:text-accent" : ""}`}>
                  {ltr ? <span dir="ltr">{value}</span> : value}
                </span>
              </span>
              {href && (
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-accent opacity-0 transition-[opacity,translate] duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                />
              )}
            </Row>
          </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <section
      id="contact"
      className={
        isPage
          ? "pt-28 pb-24 md:pt-36 md:pb-32"
          : "border-t border-fg/8 py-24 md:py-32"
      }
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-20">
        <div className="lg:col-start-1 lg:row-start-1">
          <SectionHeading
            label={label}
            title={title}
            as={isPage ? "h1" : "h2"}
          >
            {t.body}
          </SectionHeading>
        </div>

        <form
          onSubmit={sendEmail}
          onInput={recheck}
          ref={formRef}
          noValidate
          aria-busy={sending}
          className="rounded-2xl border border-fg/8 bg-card p-6 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:flex-col"
        >
          {/* disabling the fieldset locks every field while the message sends.
              On desktop the card stretches to the height of the left column
              and the message box takes up the extra space */}
          <fieldset disabled={sending} className="min-w-0 lg:flex lg:flex-1 lg:flex-col">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  {t.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="fullname"
                  autoComplete="name"
                  required
                  maxLength={100}
                  aria-invalid={!!errors.fullname}
                  aria-describedby={errors.fullname ? "contact-name-error" : undefined}
                  className={inputClass}
                />
                <FieldError id="contact-name-error">{errors.fullname}</FieldError>
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {t.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={inputClass}
                />
                <FieldError id="contact-email-error">{errors.email}</FieldError>
              </div>
            </div>

            <div className="mt-6 lg:flex lg:flex-1 lg:flex-col">
              <label htmlFor="contact-message" className={labelClass}>
                {t.message}
              </label>
              <textarea
                id="contact-message"
                placeholder={t.placeholder}
                name="message"
                required
                rows={6}
                maxLength={5000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClass} resize-none lg:flex-1`}
              />
              <FieldError id="contact-message-error">{errors.message}</FieldError>
            </div>

            {/* honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brass-500 px-5 text-[15px] font-medium text-on-brass transition-[background-color,scale] duration-150 ease-out hover:bg-brass-400 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 disabled:active:scale-100"
            >
              {sending && (
                <LoaderCircle
                  size={18}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="animate-spin motion-reduce:animate-none"
                />
              )}
              {sending ? t.sending : t.send}
            </button>
          </fieldset>

          <p role="status" className="mt-4 min-h-5 text-center text-sm">
            {status === "sent" && (
              <span className="text-positive">
                {t.sent}
              </span>
            )}
            {status === "error" && (
              <span className="text-negative">
                {t.error}
              </span>
            )}
          </p>
        </form>

        {detailList}
      </Container>
    </section>
  );
}
