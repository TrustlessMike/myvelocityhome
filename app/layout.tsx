import type React from "react"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Velocity Home Loans | Fast, Reliable Mortgage Solutions in Michigan",
  description:
    "Velocity Home Loans offers competitive mortgage rates, personalized service, and a streamlined application process with 5-star rated mortgage consultants to help you achieve your homeownership dreams.",
  keywords:
    "mortgage, home loans, mortgage broker, mortgage rates, refinance, FHA loans, VA loans, conventional loans, jumbo loans, Michigan mortgage",
  authors: [{ name: "Sam Amine", url: "https://www.zillow.com/lender-profile/samine186/" }],
  creator: "Velocity Home Loans",
  publisher: "Velocity Home Loans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.myvelocitymortgage.com",
  },
  openGraph: {
    title: "Velocity Home Loans | Fast, Reliable Mortgage Solutions in Michigan",
    description:
      "Get pre-approved with our 5-star rated mortgage consultants. Competitive rates and personalized service.",
    url: "https://www.myvelocitymortgage.com",
    siteName: "Velocity Home Loans",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png",
        width: 1200,
        height: 630,
        alt: "Velocity Home Loans logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Home Loans | Fast, Reliable Mortgage Solutions",
    description:
      "Get pre-approved with our 5-star rated mortgage consultants. Competitive rates and personalized service.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png",
    ],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://2cpb0aywln35qejo.public.blob.vercel-storage.com/8263308-uhd_3840_2160_24fps-X3glsAmZJJ6IRNOF4TVcmDfyIDQPmz-QDsXsGq4Z4DIvQJ4HMEG3ioMpQ6FV6.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
