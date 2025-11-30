import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelpOnCloud | Managed Cloud Hosting for Startups",
  description: "Expert cloud hosting management for growing startups. Scalable, secure, and optimized infrastructure so you can focus on code.",
  keywords: ["cloud hosting", "managed cloud", "startup infrastructure", "AWS management", "DevOps", "HelpOnCloud"],
  authors: [{ name: "HelpOnCloud Team" }],
  openGraph: {
    title: "HelpOnCloud | Managed Cloud Hosting for Startups",
    description: "Expert cloud hosting management for growing startups. Scalable, secure, and optimized.",
    url: "https://helponcloud.com",
    siteName: "HelpOnCloud",
    images: [
      {
        url: "/og-image.png", // Assuming we might add this later or it exists
        width: 1200,
        height: 630,
        alt: "HelpOnCloud - Managed Cloud Hosting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpOnCloud | Managed Cloud Hosting for Startups",
    description: "Expert cloud hosting management for growing startups. Scalable, secure, and optimized.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-[100] pointer-events-none border-[14px] border-pink-100/50 shadow-[inset_0_0_0_1px_rgba(219,39,119,0.1)]" />
        {children}
      </body>
    </html>
  );
}
