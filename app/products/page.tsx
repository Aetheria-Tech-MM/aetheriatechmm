import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero, SectionHeading } from "@/components/site/page-sections"
import { cn } from "@/lib/utils"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "FOM Order Manager", description: "FOM Order Manager brings customer messages, draft orders, customer records, delivery tracking, and reporting into one workspace for chat-first shops.", path: "/products" })

const features = [
  ["Order management", "Track every order from confirmation through delivery, with a clear status at each stage."],
  ["Customer management", "Keep phone numbers, addresses, notes, and order history attached to one customer record."],
  ["Reports", "Check daily, weekly, and yearly performance without manually counting at the end of the day."],
  ["Message parsing", "FOM reads customer messages for name, phone, items, and address to prefill the order."],
  ["Unified inbox", "Every connected channel's conversations land in one shared inbox."],
  ["Delivery tracking", "Assign orders and follow them through dispatch to drop-off from one queue."],
  ["Staff & roles", "Give each staff member only the access their role needs."],
  ["Invoice export", "Share a customer-ready invoice as text, image, or PDF."],
  ["Global search", "Search across orders, customers, and inbox messages at once."],
]

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Our product" title="FOM Order Manager" actions={<><Link href="https://getfom.com/" className={cn(buttonVariants({ size: "lg" }), "px-5")}>Visit getfom.com</Link><Link href="#pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-5")}>See pricing</Link></>}>A cleaner workflow for chat-driven orders, customers, and delivery — built for shops that sell through Messenger, Telegram, and Viber.</PageHero>

      <section className="py-20 sm:py-28"><div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center"><div><SectionHeading title="Your customers message you. FOM turns it into an order." /><div className="space-y-4 leading-7 text-muted-foreground"><p>Orders, customers, reports, and delivery are kept in one workspace, synced across web, Android, and iOS. A team selects the part of the conversation that matters, and FOM prefills the draft order for review.</p><p>FOM is built specifically for chat-first shop operations — not a general-purpose order tool retrofitted for chat.</p></div></div><div className="rounded-lg border border-border bg-muted/30 p-6"><div className="max-w-xs rounded-lg border border-border bg-background p-4"><div className="h-8 rounded-full bg-muted" /><div className="ml-auto mt-4 h-12 w-4/5 rounded-lg bg-brand-soft" /><div className="mt-4 h-8 w-3/5 rounded-full bg-muted" /></div><div className="relative -mt-8 ml-auto w-3/5 rounded-lg border border-brand/50 bg-background p-5 shadow-[var(--shadow-md)]"><p className="text-xs font-bold text-brand">DRAFT ORDER</p><div className="mt-5 space-y-3">{["Customer", "Items", "Delivery"].map((item) => <div key={item}><p className="text-[10px] text-muted-foreground">{item}</p><div className="mt-1 h-2 rounded bg-foreground/12" /></div>)}</div><div className="mt-6 h-9 rounded-sm bg-foreground" /></div></div></div></section>

      <section className="border-y border-border bg-muted/30 py-10"><div className="site-container"><p className="eyebrow">Connected channels</p><div className="mt-5 flex flex-wrap gap-2">{["Facebook Messenger", "Telegram Bot", "Viber Bot", "TikTok — coming soon"].map((item, index) => <span key={item} className={cn("rounded-full border border-border bg-background px-4 py-2 text-sm font-medium", index === 3 && "opacity-55")}>{item}</span>)}</div></div></section>

      <section id="features" className="py-20 sm:py-28"><div className="site-container"><SectionHeading eyebrow="Core features" title="Everything the shop needs, in one place">No separate spreadsheets, notebooks, or a dozen chat tabs — one workspace covers the whole order cycle.</SectionHeading><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{features.map(([title, text]) => <div key={title} className="bg-background p-6"><h3 className="font-heading text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div><p className="mt-6 text-sm leading-6 text-muted-foreground">Also built in: message templates and slash commands, auto-reply automation, order-status automation, customer duplicate merging, shop data export, and channel integrations.</p></div></section>

      <section className="border-y border-border bg-surface-sunken py-20 sm:py-26"><div className="site-container"><SectionHeading eyebrow="Workflow" title="From customer chat to delivery, in four steps" /><ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
        ["Connect your channel", "Link Messenger, Telegram, or Viber — no developer needed."],
        ["Chats land in one inbox", "Every conversation shows up in a single shared inbox."],
        ["Draft the order", "Select what matters and FOM prefills the order for review."],
        ["Confirm and deliver", "Track delivery and watch each order roll into reports."],
      ].map(([title, text], index) => <li key={title}><Card className="h-full"><CardContent><span className="text-sm font-bold text-brand">0{index + 1}</span><h3 className="mt-8 font-heading text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></CardContent></Card></li>)}</ol></div></section>

      <section className="py-20 sm:py-28"><div className="site-container grid gap-12 md:grid-cols-2"><div><p className="eyebrow">Run it anywhere</p><h2 className="mt-3 font-heading text-3xl font-bold">Web portal and mobile apps</h2><p className="mt-4 leading-7 text-muted-foreground">Staff stay fast on mobile while owners use the web portal for reports, billing, and a fuller view of the shop. Available on web, Android, and iOS.</p></div><div><p className="eyebrow">Target users</p><h2 className="mt-3 font-heading text-3xl font-bold">Built for chat-first shops</h2><p className="mt-4 leading-7 text-muted-foreground">One owner account can manage multiple shops, each with its own subscription, data, and workflow.</p></div></div></section>

      <section id="pricing" className="border-y border-border bg-surface-sunken py-20 sm:py-26"><div className="site-container"><SectionHeading eyebrow="Pricing" title="Simple, transparent pricing">One subscription per shop. See getfom.com for current pricing and active promotions.</SectionHeading><Card className="max-w-xl rounded-lg border-border-strong"><CardContent className="p-8"><p className="text-sm text-muted-foreground">Shop Monthly</p><p className="mt-3 font-heading text-4xl font-extrabold">88,000 MMK <span className="font-sans text-base font-normal text-muted-foreground">/ month</span></p><ul className="my-8 space-y-3 text-sm">{["1 shop", "1 connected channel", "Up to 3 staff accounts", "All core features", "7-day free trial"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">✓</span>{item}</li>)}</ul><Link href="https://getfom.com/register" className={cn(buttonVariants({ size: "lg" }), "w-full")}>Start free trial</Link><p className="mt-4 text-center text-xs text-muted-foreground">No credit card required · Add-ons available · Yearly billing saves 17%</p></CardContent></Card></div></section>

      <section className="py-16"><div className="site-container"><div className="flex flex-col items-start justify-between gap-6 rounded-md border border-border bg-card p-7 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[var(--shadow-sm)] sm:flex-row sm:items-center"><div><h2 className="font-heading text-xl font-bold">Ready to see FOM in your shop?</h2><p className="mt-2 text-muted-foreground">Start a 7-day free trial — no credit card required.</p></div><Link href="https://getfom.com/" className={cn(buttonVariants({ size: "lg" }), "px-5")}>Explore FOM</Link></div></div></section>
    </main>
  )
}
