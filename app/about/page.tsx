import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero, SectionHeading } from "@/components/site/page-sections"
import { cn } from "@/lib/utils"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "About Aetheria Tech", description: "Aetheria Tech Company Limited is a technology company based in Yangon, Myanmar, building software products designed around real business workflows.", path: "/about" })

const principles = [
  ["Reliable by default", "Software that businesses depend on daily needs to behave predictably, especially under real load."],
  ["Built to scale gradually", "Architecture that can grow with a shop's order volume and staff count without a disruptive rebuild."],
  ["Security-conscious", "Customer and order data is handled with care, with access controlled through staff roles and permissions."],
  ["Modern web & mobile", "Web, Android, and iOS clients stay in sync, so an owner and their staff always see the same picture."],
  ["Cloud infrastructure", "Hosted services mean shops do not have to manage servers or backups to keep operations running."],
  ["Maintainable systems", "Code and infrastructure stay easy to change, so new features do not come at the cost of stability."],
]

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About Aetheria" title="A technology company building its own products.">Aetheria Tech Company Limited is based in Yangon, Myanmar. We design, build, and operate software products for businesses — with FOM Order Manager as our current, and first, product.</PageHero>

      <section className="py-20 sm:py-28"><div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div><SectionHeading title="Software shaped by real operations" /><div className="space-y-4 leading-7 text-muted-foreground"><p>Most day-to-day work inside a growing business happens across chat apps, phone calls, spreadsheets, and paper notes. We build software that meets that reality rather than asking a business to restructure itself around a tool.</p><p>That approach shaped FOM Order Manager: a workspace that follows an order from the moment a customer sends a message through to delivery and reporting.</p><p>We see this as the starting point for a small, deliberately built portfolio of products — not a general software agency taking on unrelated projects.</p></div></div>
        <div className="relative min-h-80 rounded-3xl border border-border bg-muted/30 p-6" aria-hidden="true"><div className="w-2/5 rounded-xl border border-border bg-background p-5"><span className="block h-2 w-16 rounded bg-primary" /><span className="mt-4 block h-2 w-full rounded bg-foreground/10" /></div><div className="absolute right-6 top-16 w-1/2 rounded-2xl border border-primary/50 bg-background p-6 shadow-xl"><span className="block h-2 w-4/5 rounded bg-foreground/15" /><span className="mt-4 block h-8 w-20 rounded bg-primary/15" /><span className="mt-4 block h-2 w-full rounded bg-foreground/10" /></div><div className="absolute bottom-6 left-16 h-20 w-2/5 rounded-xl border border-dashed border-border" /></div>
      </div></section>

      <section className="bg-muted/30 py-20"><div className="site-container grid gap-10 md:grid-cols-2"><div><p className="eyebrow">Mission</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight">Build practical technology that makes businesses simpler and more efficient.</h2></div><div><p className="eyebrow">Vision</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight">Create software products that become trusted, everyday tools.</h2></div></div></section>

      <section className="py-20 sm:py-28"><div className="site-container"><SectionHeading eyebrow="Our approach" title="What guides how we build" /><div className="grid gap-4 md:grid-cols-2">{[
        ["Product-first", "A feature only ships once it earns its place in a real workflow."],
        ["Practical engineering", "Our software is built around real operational needs, not idealised versions of how a business should run."],
        ["User-focused", "Good software should be understandable and easy to use from day one — for owners and staff alike."],
        ["Continuous improvement", "Our products evolve based on real-world usage and direct feedback."],
      ].map(([title, text]) => <Card key={title}><CardContent><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></CardContent></Card>)}</div></div></section>

      <section className="bg-muted/30 py-20 sm:py-28"><div className="site-container"><SectionHeading eyebrow="Engineering" title="Built to be dependable">We keep this part deliberately unglamorous: dependable software, not a showcase of tools.</SectionHeading><div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{principles.map(([title, text], index) => <div key={title} className="border-t border-border pt-5"><span className="text-xs font-bold text-primary">0{index + 1}</span><h3 className="mt-4 font-heading text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28"><div className="site-container max-w-4xl"><p className="eyebrow">Looking ahead</p><h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">Building toward a portfolio, one product at a time.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">FOM is where we&apos;re starting. We&apos;re building toward practical software products, each designed around a real business need.</p><Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8 border-zinc-700 bg-transparent px-5 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50")}>Talk to us</Link></div></section>
    </main>
  )
}
