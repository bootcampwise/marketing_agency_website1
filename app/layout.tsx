import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Positivus - Digital Marketing Agency",
  description:
    "Navigating the digital landscape for success. Professional digital marketing services including SEO, PPC, Social Media, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
