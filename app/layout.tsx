import type { Metadata } from "next";
import {Urbanist } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portafolio - zdencode",
  description: "Landing page made by zdencode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
