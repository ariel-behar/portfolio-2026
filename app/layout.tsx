import type { Metadata } from "next";
import { Saira, Peralta, Bangers } from "next/font/google";
import { SITE_NAME, SITE_TAGLINE } from "@/constants";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-saira",
  display: "swap",
});

const peralta = Peralta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-peralta",
  display: "swap",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} - Web Developer Portfolio`,
  description: SITE_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="arielbehar"
      className={`${saira.variable} ${peralta.variable} ${bangers.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
