import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/google/constants";

const SITE_NAME = "Keenfort";
const DEFAULT_TITLE = "Keenfort — школа английского языка";
const DEFAULT_DESCRIPTION =
  "Премиальная школа английского языка Keenfort. Индивидуальные программы, опытные преподаватели, онлайн и офлайн обучение, подготовка к IELTS.";
const DEFAULT_KEYWORDS = [
  "английский язык",
  "школа английского",
  "Keenfort",
  "IELTS",
  "разговорный английский",
  "обучение английскому",
];

export function buildMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImage = `${siteUrl}/images/og-cover.svg`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
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
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: siteUrl,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — школа английского языка`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [ogImage],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export function buildJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Keenfort",
    url: siteUrl,
    description: DEFAULT_DESCRIPTION,
    logo: `${siteUrl}/images/logo.svg`,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
    },
  };
}
