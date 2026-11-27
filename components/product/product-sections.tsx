import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons"

import { FlowPipeline } from "@/components/product/flow-pipeline"
import { ProductMark, ProductMini } from "@/components/product/product-card"
import { Screenshot } from "@/components/product/screenshot"
import { buttonVariants } from "@/components/ui/button"
import { PRODUCTS, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="inline-flex items-center gap-2 text-sm font-semibold text-product-ink before:h-0.5 before:w-[18px] before:rounded-full before:bg-product">{children}</p>
}

function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.025em] text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-7 text-muted-foreground">{children}</p>}
    </div>
  )
}

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,color-mix(in_oklch,var(--product)_12%,transparent),transparent_45%)]" aria-hidden="true" />
      <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <ProductMark product={product} size={48} />
            <div>
              <p className="font-heading text-lg font-bold tracking-[-0.01em]">{product.name}</p>
              <p className="text-sm text-product-ink">{product.category}</p>
            </div>
          </div>
          <h1 className="mt-8 font-heading text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-balance sm:text-5xl">{product.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{product.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={product.url} className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>Visit {product.urlLabel} <HugeiconsIcon icon={ArrowUpRight01Icon} /></Link>
            <Link href="#features" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}>See features</Link>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {product.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.08em] text-faint">{fact.label}</dt>
                <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative min-w-0 pb-10 lg:pb-0">
          <div className="rounded-lg bg-product-soft p-4 sm:p-6">
            <Screenshot shot={product.hero} priority sizes="(min-width: 1024px) 640px, 100vw" />
          </div>
          <Screenshot shot={product.mobile} className="absolute -bottom-2 right-3 hidden w-[30%] max-w-[180px] sm:block lg:-bottom-10 lg:-right-4" sizes="180px" />
        </div>
      </div>
    </section>
  )
}

export function ProductProblem({ product }: { product: Product }) {
  return (
    <section className="reveal border-y border-border bg-surface-sunken py-20 sm:py-24">
      <div className="site-container">
        <Heading eyebrow="Why it exists" title={`Before and after ${product.name}`} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm font-semibold text-muted-foreground">Before</p>
            <ul className="mt-4 space-y-3">
              {product.problem.before.map((item) => <li key={item} className="flex gap-3 leading-6 text-muted-foreground"><HugeiconsIcon icon={Cancel01Icon} size={18} className="mt-0.5 shrink-0 text-faint" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-product-line bg-card p-6">
            <p className="text-sm font-semibold text-product-ink">With {product.name}</p>
            <ul className="mt-4 space-y-3">
              {product.problem.after.map((item) => <li key={item} className="flex gap-3 leading-6"><HugeiconsIcon icon={Tick02Icon} size={18} className="mt-0.5 shrink-0 text-product-ink" />{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductSteps({ product }: { product: Product }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="site-container">
        <Heading eyebrow="How it works" title={`${product.name}, step by step`} />
        <ol className="grid gap-16">
          {product.steps.map((step, index) => (
            <li key={step.title} className="reveal grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-center">
              <div className={cn("min-w-0", index % 2 === 1 && "lg:order-2")}>
                <span className="grid size-9 place-items-center rounded-full border border-product-line bg-product-soft font-heading text-sm font-bold text-product-ink">{index + 1}</span>
                <h3 className="mt-5 font-heading text-2xl font-bold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-muted-foreground">{step.text}</p>
              </div>
              <div className="flex min-w-0 justify-center rounded-lg bg-product-soft p-4 sm:p-8">
                {step.shot ? <Screenshot shot={step.shot} sizes="(min-width: 1024px) 680px, 100vw" /> : <div className="grid w-full place-items-center rounded-lg border border-product-line bg-card px-4 py-12 sm:px-8"><FlowPipeline steps={product.flow} className="justify-center" /></div>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FeatureGroups({ product }: { product: Product }) {
  return (
    <section id="features" className="scroll-mt-24 border-y border-border bg-surface-sunken py-20 sm:py-24">
      <div className="site-container">
        <Heading eyebrow="Features" title="Everything in one workspace" />
        <div className="grid gap-4 md:grid-cols-2">
          {product.featureGroups.map((group) => (
            <div key={group.title} className="reveal rounded-lg border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold">{group.title}</h3>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div key={item.title} className="border-t border-border pt-3">
                    <dt className="text-sm font-semibold">{item.title}</dt>
                    <dd className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductPlatforms({ product }: { product: Product }) {
  return (
    <section className="reveal py-20 sm:py-24">
      <div className="site-container">
        <Heading eyebrow="Platforms" title="Wherever the work happens" />
        <ul className="grid gap-4 md:grid-cols-3">
          {product.platforms.map((platform) => {
            const body = (
              <>
                <p className="flex items-center justify-between font-heading text-lg font-bold">{platform.name}{platform.href && <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} className="text-product-ink" />}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{platform.detail}</p>
              </>
            )
            return (
              <li key={platform.name}>
                {platform.href ? (
                  <Link href={platform.href} className="block h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-product-line">{body}</Link>
                ) : (
                  <div className="h-full rounded-lg border border-border bg-card p-6">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function ProductPricing({ product }: { product: Product }) {
  const { pricing } = product
  return (
    <section id="pricing" className="reveal scroll-mt-24 border-y border-border bg-surface-sunken py-20 sm:py-24">
      <div className="site-container">
        <Heading eyebrow="Pricing" title="Plans">{pricing.intro}</Heading>
        <div className={cn("grid gap-4", pricing.plans.length > 1 ? "md:grid-cols-3" : "max-w-xl")}>
          {pricing.plans.map((plan) => (
            <div key={plan.name} className="flex flex-col rounded-lg border border-border bg-card p-6">
              <p className="text-sm font-semibold text-product-ink">{plan.name}</p>
              <p className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.02em]">{plan.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.items.map((item) => <li key={item} className="flex gap-2.5"><HugeiconsIcon icon={Tick02Icon} size={16} className="mt-0.5 shrink-0 text-product-ink" />{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={pricing.cta.href} className={cn(buttonVariants({ size: "lg" }), "px-5")}>{pricing.cta.label} <HugeiconsIcon icon={ArrowUpRight01Icon} /></Link>
          <p className="text-sm text-muted-foreground">{pricing.footnote}</p>
        </div>
      </div>
    </section>
  )
}

export function ProductFaq({ product }: { product: Product }) {
  return (
    <section className="reveal py-20 sm:py-24">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)]">
        <Heading eyebrow="FAQ" title="Common questions" />
        <div className="divide-y divide-border border-y border-border">
          {product.faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-product-ink transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CrossSell({ product }: { product: Product }) {
  const others = PRODUCTS.filter((item) => item.slug !== product.slug)
  return (
    <section className="reveal border-t border-border py-16">
      <div className="site-container grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
        <div>
          <p className="eyebrow">Also from Aetheria Tech</p>
          <p className="mt-3 max-w-md text-muted-foreground">Every Aetheria product is built and supported by the same team in Yangon.</p>
        </div>
        <div className="grid gap-3">{others.map((other) => <ProductMini key={other.slug} product={other} />)}</div>
      </div>
    </section>
  )
}
