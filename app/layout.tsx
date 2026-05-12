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
    "Valkor Systems provides school-controlled, zone-level operational awareness for movement accountability, pass visibility, receiver health, incident coordination, and emergency readiness.",
  metadataBase: new URL("https://valkorsystems.com"),
  openGraph: {
    title: "Valkor Systems",
    description: "School operational awareness for movement, accountability, and emergency readiness.",
    url: "https://valkorsystems.com",
    siteName: "Valkor Systems",
    type: "website"
  },
  icons: {
    icon: "/valkor-mark.png",
    apple: "/valkor-mark.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-valkor-bg font-sans text-valkor-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
