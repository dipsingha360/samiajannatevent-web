import ContactUs from "../components/ContactUs";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Occasions from "../components/home/Occasions";
import Process from "../components/home/Process";
import ServicesPreview from "../components/home/ServicesPreview";
import TrustBar from "../components/home/TrustBar";
import WhyUs from "../components/home/WhyUs";
import { alternatesFor } from "../i18n/config";
import { getDictionary } from "../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { alternates: alternatesFor(lang, "/") };
}

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <ServicesPreview />
      {/* Statement (staffing line + function sheet) is hidden for now */}
      <WhyUs />
      <Process />
      <Occasions />
      <ContactUs t={t.contact} />
    </>
  );
}
