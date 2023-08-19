"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactUs() {
  const contactRef1 = useRef(null);
  const contactRef2 = useRef(null);
  const contactRef3 = useRef(null);
  const contactRef4 = useRef(null);
  const formRef = useRef(null);
  useRef;

  const contactRefs = [contactRef1, contactRef2, contactRef3, contactRef4];
  // useContactReveal(contactRefs);

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs intregration
    emailjs.sendForm;
    process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_ID().then(
        () => {
          console.log("message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    //reset
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div
      className="max-w-[1280px] mx-auto my-20 px-4 lg:px-0 md:flex gap-10 items-start justify-between"
      id="contact"
    >
      <div className="contact-left flex flex-col items-start text-left justify-start gap-5 md:gap-10 mb-5 md:mb-0">
        <h1 className="text-4xl font-bold uppercase text-yellow-500">
          Notify us
        </h1>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4 items-center ">
          <FaPhoneAlt /> <FaWhatsapp /> +971 50 656 1669
        </p>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4  items-center">
          <FaPhoneAlt /> <FaWhatsapp /> +971 54 517 6464
        </p>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4  items-center">
          <FaEnvelope /> samiajannatevent@gmail.com
        </p>
        <p className="text-base md:text-xl text-yellow-50 flex gap-4  items-center">
          <FaMapMarkerAlt /> 4th Floor 413, Adel Ahmed Al Wahedi Building, Al
          Murar, Deira, Dubai-U.A.E
        </p>
      </div>
      <form onSubmit={sendEmail} className="flex flex-col gap-5" ref={formRef}>
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your full name"
            name="fullname"
            required
            className="fullname bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full text-center"
            ref={contactRef1}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full text-center"
            ref={contactRef2}
          />
        </div>

        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full h-32 text-center  resize-none"
            ref={contactRef3}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase text-center text-yellow-950 font-semibold bg-yellow-500 border py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-500 hover:bg-yellow-400  duration-300 w-full cursor-pointer "
            ref={contactRef4}
          />
        </div>
      </form>
    </div>
  );
}
