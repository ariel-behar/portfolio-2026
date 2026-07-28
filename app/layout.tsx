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

const TITLE = `${SITE_NAME} - Web Developer Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arielbehar.com"),
  title: TITLE,
  description: SITE_TAGLINE,
  // The old site's <meta name="keywords"> is largely ignored by modern search engines but
  // costs nothing to keep; trimmed of the old list's literal duplicates.
  keywords: ["Ariel Behar", "web developer", "web design", "web development", "front-end developer", "portfolio"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  // The old site had no Open Graph/Twitter tags at all — added here, not ported. Reuses the
  // already-copied app/icon.png (the real "AB" logo, 512x512) rather than an S3 URL, so the
  // preview image doesn't depend on the S3 bucket staying up.
  openGraph: {
    title: TITLE,
    description: SITE_TAGLINE,
    url: "/",
    siteName: TITLE,
    images: [{ url: "/icon.png", width: 512, height: 512 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: SITE_TAGLINE,
    images: ["/icon.png"],
  },
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
