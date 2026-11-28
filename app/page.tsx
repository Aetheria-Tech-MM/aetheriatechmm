import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { ProductMini, ProductShowcase } from "@/components/product/product-card"
import { ContactCta, FactsStrip, SectionHeading } from "@/components/site/page-sections"
import { buttonVariants } from "@/components/ui/button"
import { COMPANY, PRINCIPLES, SERVICES } from "@/lib/company"
import { PRODUCTS } from "@/lib/products"
import { createPageMetadata } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = createPageMetadata({
  title: "Aetheria Tech: software that runs real businesses",
  description: "Aetheria Tech builds FOM Order Manager for chat-first shops and Billleaf for freelancers, and custom web and mobile software for businesses. Based in Yangon, Myanmar.",
  path: "/",
  absoluteTitle: true,
})

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: SITE_URL,
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
  address: { "@type": "PostalAddress", streetAddress: "No.36, Thiri Yadanar St, Shwe Hnin Si Ward, Mingaladon", addressLocality: "Yangon", addressCountry: "MM" },
  makesOffer: PRODUCTS.map((product) => ({ "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: product.name, applicationCategory: "BusinessApplication", operatingSystem: "Web, Android, iOS", url: product.url } })),
}

export default function Page() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />

      <section className="relative overflow-hidden pb-16 pt-20 sm:pt-26">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,color-mix(in_oklch,var(--brand)_10%,transparent),transparent_40%)]" aria-hidden="true" />
        <div className="site-container grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
          <div className="min-w-0">
            <p className="eyebrow">Software company · Yangon, Myanmar</p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold leading-[1.03] tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.25rem]">Software that runs real businesses.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">We build and run two products: FOM Order Manager for shops that sell through chat, and Billleaf for freelancers. We also build custom software for businesses.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>Explore our products</Link>
              <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}>Work with us</Link>
            </div>
          </div>
          <div className="grid min-w-0 gap-3">
            <p className="text-sm font-medium text-muted-foreground">Our products</p>
            {PRODUCTS.map((product) => <ProductMini key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="chooser" className="pb-20">
        <div className="site-container">
          <h2 id="chooser" className="sr-only">Find the product for you</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className={cn(product.scope, "group flex items-center justify-between gap-6 rounded-lg border border-border bg-surface-sunken px-6 py-5 transition-colors hover:border-product-line hover:bg-product-soft")}>
                <span>
                  <span className="block text-sm text-muted-foreground">{product.chooser.hint}</span>
                  <span className="mt-1 block font-heading text-xl font-bold tracking-[-0.02em]">{product.chooser.label}</span>
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold text-product-ink">{product.name}<HugeiconsIcon icon={ArrowRight01Icon} size={18} className="transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-sunken py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading eyebrow="Products" title="Two products, built for two kinds of business">Each product has its own name and look, and the same team behind it.</SectionHeading>
          <div className="grid gap-8">
            {PRODUCTS.map((product, index) => <ProductShowcase key={product.slug} product={product} flip={index % 2 === 1} headingLevel="h3" />)}
          </div>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading eyebrow="How we work" title="One company, one standard" />
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal border-y border-border bg-surface-sunken py-20 sm:py-24">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="Custom software for your business">The team behind FOM and Billleaf can build for you too.</SectionHeading>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mb-10 px-5")}>All services</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Link key={service.slug} href={`/services#${service.slug}`} className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-border-strong">
                <HugeiconsIcon icon={service.icon} size={24} className="text-brand" />
                <h3 className="mt-5 font-heading text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FactsStrip />

      <ContactCta />
    </main>
  )
}
