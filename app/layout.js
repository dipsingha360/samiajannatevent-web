import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export const metadata = {
  title: "SJE",
  description: "Samia Jannat Event",
  link: (
    <link
      rel="icon"
      href="https://i.postimg.cc/Hnxv38xb/samiajannatevent-logo-16x16.png"
      sizes="any"
    />
  ),
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
