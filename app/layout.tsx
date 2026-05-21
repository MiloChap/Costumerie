import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'équipe costumes",
  description: "Découvrez et réservez nos costumes de scène — L'Équipe Costumes, Bordeaux.",
  openGraph: {
    title: "L'équipe costumes",
    description: "Découvrez et réservez nos costumes de scène — L'Équipe Costumes, Bordeaux.",
    url: "https://lequipecostumes.vercel.app",
    siteName: "L'équipe costumes",
    images: [{ url: "https://lequipecostumes.vercel.app/logo.jpg" }],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
