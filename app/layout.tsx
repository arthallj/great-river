import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "극단 큰강",
  description: "창의적이고 감동적인 연극을 선보이는 극단 큰강입니다.",
  icons: { icon: `/favicon.ico` },
  openGraph: {
    title: "극단 큰강",
    description: "창의적이고 감동적인 연극을 선보이는 극단 큰강입니다.",
    images: [`${siteOrigin}/logo-blue.jpeg`],
    url: `${siteOrigin}/`,
  },
  keywords: [
    "극단 큰강",
    "연극",
    "공연",
    "연기",
    "Theater",
    "Performing Arts",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: siteOrigin || "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TheaterGroup",
    name: "극단 큰강",
    url: siteOrigin,
    logo: `${siteOrigin}/logo-blue.jpeg`,
    description: "창의적이고 감동적인 연극을 선보이는 극단 큰강입니다.",
    foundingDate: "2019",
    sameAs: [
      "https://www.somoim.co.kr/51b64868-5f6b-11e9-adec-0a10bedf2a181"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressLocality: "서울"
    }
  };

  return (
    <html lang="ko" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
};
