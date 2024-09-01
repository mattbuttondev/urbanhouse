import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UrbanHouse | Find Your Perfect Stay",
    template: "%s - UrbanHouse",
  },
  description:
    "Discover unique homes and experiences around the world. Book comfortable accommodations, from cozy apartments to luxurious villas, for your next adventure with UrbanHouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
