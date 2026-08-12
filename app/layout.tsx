import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { AmbientEffects } from "@/components/AmbientEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Valkor Systems | School-controlled operational awareness.",
  description:
    "Review movement exceptions, pass activity, receiver health, and incident follow-up from one calm school-hours command center.",
  metadataBase: new URL("https://www.valkorsystems.com"),
  openGraph: {
    title: "Valkor Systems | School-controlled operational awareness.",
    description:
      "Review movement exceptions, pass activity, receiver health, and incident follow-up from one calm school-hours command center.",
    url: "https://www.valkorsystems.com",
    siteName: "Valkor Systems",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Valkor Systems school-controlled operational awareness command center."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Valkor Systems | School-controlled operational awareness.",
    description:
      "Review movement exceptions, pass activity, receiver health, and incident follow-up from one calm school-hours command center.",
    images: ["/og.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Valkor Systems",
  url: "https://www.valkorsystems.com",
  logo: "https://www.valkorsystems.com/valkor-logo.png",
  email: "jackson@valkorsystems.com"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AmbientEffects />
        {children}
      </body>
    </html>
  );
}
