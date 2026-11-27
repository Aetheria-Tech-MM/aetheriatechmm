import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { FACTS } from "@/lib/company"
import { cn } from "@/lib/utils"

export function PageHero({ eyebrow, title, children, actions }: { eyebrow: string; title: string; children: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <section className="bg-background py-18">
      <div className="site-container max-w-[1180px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-[20ch] font-heading text-4xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-[3.2rem]">{title}</h1>
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

export function ContactCta({ title = "Want to talk with the team?", text = "Questions about our products, a project you have in mind, or a partnership: we'd like to hear from you.", href = "/contact", cta = "Get in touch" }: { title?: string; text?: string; href?: string; cta?: string }) {
  return (
    <section className="py-16">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-6 rounded-md border border-border bg-card p-7 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[var(--shadow-sm)] sm:flex-row sm:items-center">
          <div><h2 className="font-heading text-xl font-bold">{title}</h2><p className="mt-2 text-muted-foreground">{text}</p></div>
          <Link href={href} className={cn(buttonVariants({ size: "lg" }), "px-5")}>{cta}</Link>
        </div>
      </div>
    </section>
  )
}

export function FactsStrip() {
  return (
    <section aria-labelledby="glance" className="reveal py-16">
      <div className="site-container">
        <h2 id="glance" className="sr-only">Aetheria Tech at a glance</h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse justify-end bg-background p-6">
              <dt className="mt-2 text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="font-heading text-2xl font-extrabold tracking-[-0.02em]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
