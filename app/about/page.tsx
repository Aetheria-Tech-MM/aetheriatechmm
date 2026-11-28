import type { Metadata } from "next"

import { ProductMini } from "@/components/product/product-card"
import { ContactCta, FactsStrip, PageHero, SectionHeading } from "@/components/site/page-sections"
import { PRINCIPLES } from "@/lib/company"
import { PRODUCTS } from "@/lib/products"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "About Aetheria Tech", description: "Aetheria Tech Company Limited is a software company founded in 2026 in Yangon, Myanmar. We build FOM Order Manager and Billleaf, and custom software for businesses.", path: "/about" })

const engineering = [
  ["Reliable by default", "Software that businesses depend on daily needs to behave predictably, especially under real load."],
  ["Built to scale gradually", "Architecture that grows with a business's volume and team without a disruptive rebuild."],
  ["Security-conscious", "Customer and financial data is handled with care, with access controlled through roles and permissions."],
  ["Modern web and mobile", "Web, Android and iOS stay in sync, so everyone on a team sees the same picture."],
  ["Cloud infrastructure", "Hosted services mean our customers don't have to manage servers or backups."],
  ["Maintainable systems", "Code and infrastructure stay easy to change, so new features don't cost stability."],
]

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About Aetheria" title="A software company that builds and runs its own products.">
        Aetheria Tech Company Limited was founded in 2026 in Yangon, Myanmar. We design, build and operate software for businesses: two products of our own, and custom software for clients.
      </PageHero>

      <section className="reveal pb-20 sm:pb-28">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:items-center">
          <div>
            <SectionHeading title="Software shaped by real operations" />
            <div className="space-y-4 leading-7 text-muted-foreground">
              <p>Most day-to-day work inside a small business happens across chat apps, phone calls, spreadsheets and paper notes. We build software that meets that reality instead of asking a business to restructure itself around a tool.</p>
              <p>That idea shaped FOM Order Manager, which follows an order from a customer&apos;s first message through to delivery and reporting. It shaped Billleaf too, which follows a freelancer&apos;s work from the first quote to the final receipt.</p>
              <p>We are building a small, deliberate portfolio of products, and we take on custom work where our experience fits.</p>
            </div>
          </div>
          <div className="grid gap-3">
            {PRODUCTS.map((product) => <ProductMini key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="reveal border-y border-border bg-surface-sunken py-20">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <div><p className="eyebrow">Mission</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-balance">Build practical technology that makes businesses simpler and more efficient to run.</h2></div>
          <div><p className="eyebrow">Vision</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-balance">Software products that become trusted, everyday tools.</h2></div>
        </div>
      </section>

      <section className="reveal py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading eyebrow="Our approach" title="What guides how we build" />
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
          <SectionHeading eyebrow="Engineering" title="Built to be dependable">We keep this part deliberately unglamorous: dependable software, not a showcase of tools.</SectionHeading>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {engineering.map(([title, text]) => (
              <div key={title} className="border-t border-border pt-5">
                <h3 className="font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FactsStrip />

      <ContactCta title="Want to work with us?" text="Use one of our products, or talk to us about building something for your business." href="/services" cta="See our services" />
    </main>
  )
}
