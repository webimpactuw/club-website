import "./globals.css";
import { Outfit } from "next/font/google";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Web Impact",
  description:
    "Students creating pro-bono websites for local businesses and organizations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
