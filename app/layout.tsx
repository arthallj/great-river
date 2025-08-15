import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "극단 큰강",
  description: "창의적이고 감동적인 연극을 선보이는 극단 큰강입니다.",
  generator: "v0.app",
  icons: { icon: `${prefix}/favicon.ico` },
    openGraph: {
    title: "극단 큰강",
    description: "창의적이고 감동적인 연극을 선보이는 극단 큰강입니다.",
    images: [
      {
        url: `${prefix}/logo-blue.png`, // public 폴더에 og-image.png 파일을 두세요
        width: 1200,
        height: 630,
        alt: "극단 큰강 대표 이미지",
      },
    ],
  },
}

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
}
