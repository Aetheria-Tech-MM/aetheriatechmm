import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { FlowPipeline } from "@/components/product/flow-pipeline"
import { Screenshot } from "@/components/product/screenshot"
import { buttonVariants } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

/** The product's mark on a white tile, so its own colours read the same in both themes. */
export function ProductMark({ product, size = 48, className }: { product: Product; size?: number; className?: string }) {
  return (
    <span className={cn("grid shrink-0 place-items-center rounded-xl border border-border bg-white", className)} style={{ width: size, height: size }}>
      <Image src={product.mark} alt="" width={size} height={size} unoptimized className="size-[78%]" />
    </span>
  )
}

/** Compact product card for the home hero. */
export function ProductMini({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className={cn(product.scope, "group flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-product-line hover:shadow-[var(--shadow-md)]")}>
      <ProductMark product={product} size={52} />
      <span className="min-w-0 flex-1">
        <span className="block font-heading text-base font-bold tracking-[-0.01em]">{product.name}</span>
        <span className="mt-0.5 block text-sm leading-5 text-muted-foreground">{product.category}</span>
      </span>
      <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="shrink-0 text-product-ink transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

/** Full product presentation: copy, flow, wins and a screenshot, alternating sides on wide screens. */
export function ProductShowcase({ product, flip = false, headingLevel = "h2" }: { product: Product; flip?: boolean; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel
  return (
    <article className={cn(product.scope, "reveal overflow-hidden rounded-lg border border-border bg-card")}>
      <div className="h-1 bg-product" aria-hidden="true" />
      <div className={cn("grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-center", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <ProductMark product={product} size={44} />
            <div>
              <Heading className="font-heading text-xl font-bold tracking-[-0.02em]">{product.name}</Heading>
              <p className="text-sm text-product-ink">{product.category}</p>
            </div>
          </div>
          <p className="mt-7 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-balance">{product.headline}</p>
          <p className="mt-4 leading-7 text-muted-foreground">{product.summary}</p>
          <FlowPipeline steps={product.flow} className="mt-6" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/products/${product.slug}`} className={cn(buttonVariants({ size: "lg" }), "px-5")}>Explore {product.name}</Link>
            <Link href={product.url} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-5")}>{product.urlLabel} <HugeiconsIcon icon={ArrowUpRight01Icon} /></Link>
          </div>
        </div>
        <div className="relative min-w-0 rounded-lg bg-product-soft p-4 sm:p-6">
          <Screenshot shot={product.hero} sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
      </div>
      <ul className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
        {product.wins.map((win) => (
          <li key={win.title} className="bg-card px-6 py-5 sm:px-10">
            <p className="text-sm font-semibold text-product-ink">{win.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{win.text}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
