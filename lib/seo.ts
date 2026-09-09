import type { Metadata } from "next"

export function createPageMetadata({ title, description, path, index = true, absoluteTitle = false }: { title: string; description: string; path: string; index?: boolean; absoluteTitle?: boolean }): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: { type: "website", title, description, url: path, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aetheria Tech — Practical software for real business operations" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  }
}
