import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactCta, SectionHeading } from "@/components/site/page-sections"
import { cn } from "@/lib/utils"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "Aetheria Tech — Practical software products for business operations", description: "Aetheria Tech Company Limited builds practical software products for real business workflows. Our current product, FOM Order Manager, brings chat-driven orders, customers, and delivery into one workspace.", path: "/", absoluteTitle: true })

export default function Page() {
  const approach = [
    ["Product-first", "Every feature has to earn its place in a real workflow."],
    ["Practical engineering", "We build around how orders, delivery, and daily operations actually happen."],
    ["User-focused", "Software should be understandable for owners and staff without lengthy onboarding."],
    ["Continuous improvement", "Our products evolve through real usage and feedback from the businesses running them."],
  ]

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Aetheria Tech Company Limited", url: "https://aetheria.tech/", email: "aetheria.techmm@gmail.com", address: { "@type": "PostalAddress", streetAddress: "No.36, Thiri Yadanar St, Shwe Hnin Si Ward, Mingaladon", addressLocality: "Yangon", addressCountry: "MM" }, makesOffer: { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "FOM Order Manager", applicationCategory: "BusinessApplication", operatingSystem: "Web, Android, iOS", url: "https://getfom.com/" } } }) }} />
      <section className="relative overflow-hidden border-b border-border py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_36%)]" />
        <div className="site-container grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr]">
          <div className="max-w-3xl">
            <p className="eyebrow">Practical software, built in Yangon</p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Software built for how businesses actually operate.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Aetheria Tech designs and builds practical software products for real operational problems — starting with FOM Order Manager, our workspace for chat-driven order management.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="https://getfom.com/" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>Explore FOM <HugeiconsIcon icon={ArrowUpRight01Icon} /></Link>
              <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}>About Aetheria</Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">Based in Yangon, Myanmar — building for teams who run their operations through everyday tools.</p>
          </div>

          <div className="relative mx-auto aspect-[6/5] w-full max-w-xl rounded-[2rem] border border-border bg-card p-5 shadow-2xl shadow-primary/10" aria-hidden="true">
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-45" />
            <div className="absolute left-[9%] top-[20%] grid gap-12">
              {["Messenger", "Telegram", "Viber"].map((label) => <div key={label} className="rounded-full border border-primary/40 bg-background px-3 py-1.5 text-xs font-medium text-primary shadow-sm">{label}</div>)}
            </div>
            <div className="absolute bottom-[16%] right-[7%] top-[15%] w-[54%] rounded-2xl border border-border bg-background/95 p-5 shadow-xl">
              <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /><span className="h-2 w-24 rounded bg-foreground/16" /></div>
              <div className="my-5 h-px bg-border" />
              <div className="space-y-3"><span className="block h-2 w-4/5 rounded bg-foreground/14" /><span className="block h-2 w-3/5 rounded bg-foreground/9" /><span className="block h-2 w-full rounded bg-foreground/9" /></div>
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-primary/12 p-3"><span className="block h-2 w-2/3 rounded bg-primary" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About Aetheria</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] sm:text-4xl">We build products, not just projects.</h2>
            <div className="mt-6 space-y-4 leading-7 text-muted-foreground">
              <p>Aetheria Tech Company Limited develops software products for businesses, designed around workflows people already use — chat, spreadsheets, and phone calls.</p>
              <p>FOM Order Manager is the starting point: software shaped by how chat-first shops actually take and fulfil orders, built and maintained by our engineering team in Yangon.</p>
            </div>
            <Link href="/about" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-7 px-5")}>More about Aetheria</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-background p-5">
            {["Customer chat", "Draft orders", "Delivery status", "Business reports"].map((item, index) => (
              <div key={item} className={cn("rounded-2xl border border-border p-5", index === 1 && "border-primary/50 bg-primary/6")}>
                <span className="text-xs font-bold text-primary">0{index + 1}</span><p className="mt-8 font-heading font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 md:grid-cols-2">
          <div><p className="eyebrow">Mission</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.03em]">Build practical technology that makes businesses simpler to run.</h2></div>
          <div><p className="eyebrow">Vision</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.03em]">Products businesses come to depend on.</h2></div>
        </div>
      </section>

      <section id="product" className="bg-muted/30 py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-96 overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm">
            <div className="w-3/5 rounded-2xl border border-border bg-muted/40 p-4"><div className="h-2 w-4/5 rounded bg-foreground/15" /><div className="mt-4 rounded-xl bg-primary/12 p-4"><div className="h-2 w-full rounded bg-primary/70" /><div className="mt-2 h-2 w-2/3 rounded bg-primary/40" /></div></div>
            <div className="absolute bottom-6 right-6 w-[58%] rounded-2xl border border-primary/45 bg-background p-5 shadow-xl"><p className="text-xs font-bold text-primary">DRAFT ORDER</p><div className="my-4 h-px bg-border" /><div className="space-y-3"><div className="h-2 w-3/4 rounded bg-foreground/15" /><div className="h-2 w-full rounded bg-foreground/10" /><div className="h-2 w-4/5 rounded bg-foreground/10" /></div><div className="mt-8 h-9 rounded-lg bg-foreground" /></div>
          </div>
          <div>
            <p className="eyebrow">Our product</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-[-0.03em]">FOM Order Manager</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">A cleaner workflow for chat-driven orders, customers, and delivery — for shops that sell through Messenger, Telegram, and Viber.</p>
            <p className="mt-4 leading-7 text-muted-foreground">FOM brings customer conversations, draft orders, customer history, delivery status, and owner reporting into one workspace, synced across web, Android, and iOS.</p>
            <div className="mt-6 flex flex-wrap gap-2">{["Messenger", "Telegram", "Viber", "Web", "Android", "iOS"].map((item) => <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium">{item}</span>)}</div>
            <div className="mt-8 flex gap-3"><Link href="https://getfom.com/" className={cn(buttonVariants({ size: "lg" }), "px-5")}>Visit FOM</Link><Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-5")}>Learn more</Link></div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading eyebrow="Why Aetheria" title="How we approach building software" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], index) => <Card key={title}><CardContent><span className="text-xs font-bold text-primary">0{index + 1}</span><h3 className="mt-6 font-heading text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
        <div className="site-container grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div><p className="eyebrow">What&apos;s next</p><h2 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] sm:text-5xl">FOM is where we&apos;re starting.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">We&apos;re building toward a small portfolio of practical software products, each designed around a real business need. FOM Order Manager is the first; it won&apos;t be the last.</p></div>
          <div className="flex items-center gap-3 lg:justify-end" aria-hidden="true"><span className="size-12 rounded-xl border border-zinc-700" /><span className="h-px w-12 bg-zinc-700" /><span className="size-18 rounded-2xl border border-primary bg-zinc-900 shadow-lg shadow-primary/15" /><span className="h-px w-12 border-t border-dashed border-zinc-700" /><span className="size-12 rounded-xl border border-dashed border-zinc-700" /></div>
        </div>
      </section>

      <ContactCta />
    </main>
  )
}
