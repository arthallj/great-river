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

const siteDescription =
  "2019년 창단된 극단 큰강은 클래식의 현대적 재해석과 창작 연극을 통해 깊은 감동과 새로운 시각을 전합니다. 서울을 기반으로 활동하는 극단 큰강의 공연 일정과 작품, 출연진을 만나보세요.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "극단 큰강 | 창작 연극 극단",
    template: "%s | 극단 큰강",
  },
  description: siteDescription,
  icons: { icon: `/favicon.ico` },
  openGraph: {
    title: "극단 큰강 | 창작 연극 극단",
    description: siteDescription,
    images: [`${siteOrigin}/logo-blue.jpeg`],
    url: `${siteOrigin}/`,
    siteName: "극단 큰강",
    type: "website",
    locale: "ko_KR",
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
    description: siteDescription,
    foundingDate: "2019",
    sameAs: [
      "https://www.instagram.com/bigriver_theater",
      "https://www.somoim.co.kr/51b64868-5f6b-11e9-adec-0a10bedf2a181"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressLocality: "서울"
    },
    areaServed: "KR",
    knowsLanguage: "ko"
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
