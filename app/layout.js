import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "SJE",
  description: "Samia Jannat Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
