import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";



const manrope = Manrope({
  variable: "--manrope",
  subsets:["latin"]
})

const montserrat = Montserrat({
  variable: "--manrope",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Mustard",
  description: "One color. Infinite stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
