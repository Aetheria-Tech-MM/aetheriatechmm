import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PageHero({ eyebrow, title, children, actions }: { eyebrow: string; title: string; children: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <section className="border-b border-border bg-muted/30 py-18 sm:py-24">
      <div className="site-container max-w-[1180px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-6xl">{title}</h1>
        <div className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{children}</div>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn("font-heading text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl", eyebrow && "mt-3")}>{title}</h2>
      {children && <div className="mt-4 text-base leading-7 text-muted-foreground">{children}</div>}
    </div>
  )
}

export function ContactCta({ title = "Want to talk with the team?", text = "Questions about FOM, or about Aetheria Tech in general — we'd like to hear from you." }: { title?: string; text?: string }) {
  return (
    <section className="py-16">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-7 shadow-sm sm:flex-row sm:items-center">
          <div><h2 className="font-heading text-xl font-bold">{title}</h2><p className="mt-2 text-muted-foreground">{text}</p></div>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "px-5")}>Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
