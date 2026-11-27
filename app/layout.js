import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

const siteUrl = "https://samiajannatevent.com";
const description =
  "Samia Jannat Event Organizers is a Dubai-based event management company offering hospitality staffing, banqueting, weddings, parties, filming and entertainment across the UAE.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samia Jannat Event Organizers",
    template: "%s | Samia Jannat Event Organizers",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Samia Jannat Event Organizers",
    title: "Samia Jannat Event Organizers",
    description,
    images: ["/images/pexels-photo-260922.jpg"],
  },
  icons: {
    icon: "/images/samiajannatevent-logo-16x16.png",
    apple: "/images/samiajannatevent-logo-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
