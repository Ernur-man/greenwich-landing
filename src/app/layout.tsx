import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { buildJsonLd, buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { loadContacts } from "@/server/content.service";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await loadContacts();
  const jsonLd = buildJsonLd();

  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer contacts={contacts} />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: "12px",
              background: "#171717",
              color: "#ffffff",
            },
          }}
        />
      </body>
    </html>
  );
}
