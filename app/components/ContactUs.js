"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TbMailbox } from "react-icons/tb";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// EmailJS ids are public by design; abuse is limited by the EmailJS
// dashboard settings plus the rate limit and honeypot below
const EMAILJS_SERVICE_ID = "service_6krclun";
const EMAILJS_TEMPLATE_ID = "template_5ofo6dm";
const EMAILJS_PUBLIC_KEY = "Cpe9KrTFgWKkcWXBy";

const inputClass =
  "bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-hidden focus:border-yellow-400 duration-300 w-full text-center";

export default function ContactUs() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

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
      setStatus("sent");
    } catch (error) {
      console.error("Contact form failed to send", error);
      setStatus("error");
    }
  };

  return (
    <div
      className="max-w-[1280px] mx-auto my-20 px-4 lg:px-0 md:flex gap-10 items-start justify-between"
      id="contact"
    >
      <div className="contact-left flex flex-col items-start text-left justify-start gap-5 md:gap-10 mb-5 md:mb-0">
        <h2 className="text-4xl font-bold uppercase text-yellow-500">
          Notify us
        </h2>
        <a
          href="tel:+97143457464"
          className="text-base md:text-xl text-yellow-50 flex gap-4 items-center hover:text-yellow-400"
        >
          <FaPhoneAlt /> +971 4 345 7464
        </a>
        <a
          href="https://wa.me/971506561669"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base md:text-xl text-yellow-50 flex gap-4 items-center hover:text-yellow-400"
        >
          <FaWhatsapp className="text-2xl text-green-500" /> +971 50 656 1669
        </a>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4 items-center ">
          <TbMailbox /> P.o.Box No: 252162
        </p>
        <a
          href="mailto:info@samiajannatevent.com"
          className="text-base md:text-xl text-yellow-50 flex gap-4 items-center hover:text-yellow-400"
        >
          <FaEnvelope /> info@samiajannatevent.com
        </a>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4  items-center">
          <FaMapMarkerAlt /> 1st Floor M20, Al Mamzar Building, Hor Al Anz,
          Dubai-U.A.E
        </p>
      </div>
      <form onSubmit={sendEmail} className="flex flex-col gap-5" ref={formRef}>
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your full name"
            aria-label="Full name"
            name="fullname"
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            aria-label="Email"
            name="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>

        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            aria-label="Message"
            name="message"
            required
            rows="1"
            cols="30"
            className={`${inputClass} h-32 resize-none`}
          />
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

        <div className="form-control overflow-hidden">
          <button
            type="submit"
            disabled={status === "sending"}
            className="uppercase text-center text-yellow-950 font-semibold bg-yellow-500 border py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-hidden focus:border-yellow-500 hover:bg-yellow-400 duration-300 w-full cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </div>

        <p role="status" className="text-center min-h-6">
          {status === "sent" && (
            <span className="text-green-400">
              Thank you! Your message has been sent.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-400">
              Sorry, your message could not be sent. Please call or email us
              instead.
            </span>
          )}
        </p>
      </form>
    </div>
  );
}
