import type { Metadata } from "next"
import Link from "next/link"

import { ProductMark, ProductShowcase } from "@/components/product/product-card"
import { ContactCta, PageHero } from "@/components/site/page-sections"
import { PRODUCTS } from "@/lib/products"
import { cn } from "@/lib/utils"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "Products", description: "FOM Order Manager for chat-first shops and Billleaf for freelancers: the software products built by Aetheria Tech.", path: "/products" })

const rows: { label: string; values: Record<string, string> }[] = [
  { label: "Built for", values: { fom: "Shops that sell through Messenger, Telegram and Viber", billleaf: "Freelancers and small studios" } },
  { label: "Main job", values: { fom: "Turn chats into orders and get them delivered", billleaf: "Quote, deliver the work and get paid" } },
  { label: "Platforms", values: { fom: "Web, Android, iOS", billleaf: "Web, iOS, Android, client portal" } },
  { label: "Pricing", values: { fom: "Per shop, monthly or yearly, in MMK", billleaf: "Free plan, then Pro or Team" } },
  { label: "Region", values: { fom: "Myanmar", billleaf: "Anywhere, any currency" } },
]

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Products" title="Two products, each built for one kind of business.">
        FOM Order Manager runs chat-first shops. Billleaf runs a freelance business. Both are built, hosted and supported by Aetheria Tech.
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="site-container grid gap-8">
          {PRODUCTS.map((product, index) => <ProductShowcase key={product.slug} product={product} flip={index % 2 === 1} />)}
        </div>
      </section>

      <section className="reveal border-y border-border bg-surface-sunken py-20 sm:py-24">
        <div className="site-container">
          <p className="eyebrow">Compare</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.025em] sm:text-4xl">Which one fits your business?</h2>
          <div className="mt-10 overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-[22%] p-5 font-medium text-muted-foreground"><span className="sr-only">Detail</span></th>
                  {PRODUCTS.map((product) => (
                    <th key={product.slug} scope="col" className={cn(product.scope, "p-5")}>
                      <Link href={`/products/${product.slug}`} className="flex items-center gap-3 font-heading text-base font-bold hover:text-product-ink">
                        <ProductMark product={product} size={36} />{product.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th scope="row" className="p-5 align-top font-medium text-muted-foreground">{row.label}</th>
                    {PRODUCTS.map((product) => <td key={product.slug} className="p-5 align-top leading-6">{row.values[product.slug]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactCta title="Need something neither product does?" text="We also build custom web and mobile software for businesses." href="/services" cta="See our services" />
    </main>
  )
}
