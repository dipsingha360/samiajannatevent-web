import React from "react";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <section className=" h-screen">
      <h1 className="text-center mt-28 lg:text-6xl text-4xl font-medium">
        Contact us
      </h1>

      <div className="about-main flex flex-col md:flex-row items-center justify-center mt-10">
        <ContactUs />
      </div>
    </section>
  );
}

export default Contact;
