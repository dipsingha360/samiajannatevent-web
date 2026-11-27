import ContactUs from "../components/ContactUs";

export const metadata = {
  title: "Contact us",
  description:
    "Get in touch with Samia Jannat Event Organizers in Hor Al Anz, Dubai by phone, WhatsApp, email or the contact form.",
  alternates: { canonical: "/contact" },
};

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
