import type { Metadata } from "next"
import { Geist_Mono, Inter, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

const manropeHeading = Manrope({ subsets: ["latin"], variable: "--font-heading" })

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Aetheria Tech — Practical software products", template: "%s — Aetheria Tech" },
  description: "Aetheria Tech Company Limited builds practical software products for real business workflows.",
  openGraph: {
    type: "website",
    siteName: "Aetheria Tech",
    title: "Aetheria Tech — Practical software products",
    description: "Practical software products designed around real business workflows.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetheria Tech — Practical software products",
    description: "Practical software products designed around real business workflows.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased", fontMono.variable, inter.variable, manropeHeading.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider>
          <a href="#main" className="sr-only z-[100] rounded-md bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
