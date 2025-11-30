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
  title: "CloudScale | Managed Cloud Hosting for Startups",
  description: "Expert cloud hosting management for growing startups. Scalable, secure, and optimized.",
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
