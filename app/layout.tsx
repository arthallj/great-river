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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
};
