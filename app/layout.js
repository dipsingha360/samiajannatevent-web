import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

import "./globals.css";

export const metadata = {
  title: "SJE",
  description: "Samia Jannat Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
