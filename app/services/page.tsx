import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"

import { ProductMini } from "@/components/product/product-card"
import { ContactCta, PageHero, SectionHeading } from "@/components/site/page-sections"
import { buttonVariants } from "@/components/ui/button"
import { PROCESS, SERVICES } from "@/lib/company"
import { PRODUCTS } from "@/lib/products"
import { createPageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: "Custom web and mobile apps, integrations and APIs, and product consulting from Aetheria Tech, the team behind FOM Order Manager and Billleaf.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Software built for your business, by a team that runs its own."
        actions={<><Link href="/contact?topic=services" className={cn(buttonVariants({ size: "lg" }), "px-5")}>Start a project</Link><Link href="#how-we-work" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-5")}>How we work</Link></>}
      >
        We design, build and support custom web and mobile software for businesses in Myanmar and beyond, with the same care we put into FOM Order Manager and Billleaf.
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="site-container grid gap-4 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.slug} id={service.slug} className="reveal flex scroll-mt-24 flex-col rounded-lg border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-md bg-brand-soft text-brand"><HugeiconsIcon icon={service.icon} size={22} /></span>
              <h2 className="mt-6 font-heading text-xl font-bold tracking-[-0.01em]">{service.title}</h2>
              <p className="mt-2 leading-7 text-muted-foreground">{service.summary}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
                {service.includes.map((item) => <li key={item} className="flex gap-2.5"><HugeiconsIcon icon={Tick02Icon} size={16} className="mt-0.5 shrink-0 text-brand" />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="how-we-work" className="reveal scroll-mt-24 border-y border-border bg-surface-sunken py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="How we work" title="From first conversation to a product your team relies on" />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-border bg-card p-6">
                <span className="font-heading text-sm font-bold text-brand">Step {index + 1}</span>
                <h3 className="mt-4 font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="reveal py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="eyebrow">Proof</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.025em] text-balance sm:text-4xl">We build and run software people use every day.</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">FOM Order Manager and Billleaf are ours from end to end: design, web and mobile apps, APIs, hosting and support. Your project gets the same team and the same standards.</p>
          </div>
          <div className="grid gap-3">{PRODUCTS.map((product) => <ProductMini key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <ContactCta title="Have a project in mind?" text="Tell us what you need and we'll get back to you to talk it through." href="/contact?topic=services" cta="Start a project" />
    </main>
  )
}
