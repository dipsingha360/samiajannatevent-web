"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
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
      <div className="contact-left flex flex-col items-start text-left justify-start gap-5 md:gap-10">
        <h1 className="text-4xl font-bold uppercase text-yellow-500">
          Contact us
        </h1>
        <p className="text-base md:text-2xl text-yellow-50 ">
          📞 +8801533734731
        </p>
        <p className="text-base md:text-2xl text-yellow-50 ">
          ✉️ info@samiajannatevent.com
        </p>
        <p className="text-base md:text-2xl text-yellow-50 ">
          📍 29/3 dubai highway road 50E/D, demo state, UAE
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
