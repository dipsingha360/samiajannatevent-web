import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Samia Jannat Event Organizers",
  description: "Samia Jannat Event Organizers",
  icons: {
    icon: "https://i.postimg.cc/Hnxv38xb/samiajannatevent-logo-16x16.png",
    apple: "https://i.postimg.cc/tTDmhNXX/samiajannatevent-logo-32x32.png",
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
