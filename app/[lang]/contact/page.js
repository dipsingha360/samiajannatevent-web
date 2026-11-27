import ContactUs from "../../components/ContactUs";
import { alternatesFor } from "../../i18n/config";
import { getDictionary } from "../../i18n/server";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { contactPage } = getDictionary(lang);
  return {
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
    alternates: alternatesFor(lang, "/contact"),
  };
}

// the form is the point of this page, so it opens on it with no banner
async function Contact({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return <ContactUs t={t.contact} title={t.contactPage.title} isPage />;
}

export default Contact;
