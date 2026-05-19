import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Valkor Systems | School Operational Awareness and Emergency Readiness",
  description:
    "Valkor helps schools understand zone-level movement, pass activity, receiver health, and incident workflows using confidence-aware local signals — not GPS, biometrics, cameras, or home tracking.",
  metadataBase: new URL("https://www.valkorsystems.com"),
  openGraph: {
    title: "Valkor Systems | School Operational Awareness and Emergency Readiness",
    description:
      "Valkor helps schools understand zone-level movement, pass activity, receiver health, and incident workflows using confidence-aware local signals — not GPS, biometrics, cameras, or home tracking.",
    url: "https://www.valkorsystems.com",
    siteName: "Valkor Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valkor Systems brand preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Valkor Systems | School Operational Awareness and Emergency Readiness",
    description:
      "Valkor helps schools understand zone-level movement, pass activity, receiver health, and incident workflows using confidence-aware local signals — not GPS, biometrics, cameras, or home tracking.",
    images: ["/og-image.png"]
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
  logo: "https://www.valkorsystems.com/og-image.png",
  email: "jackson@valkorsystems.com"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-valkor-bg font-sans text-valkor-text antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
