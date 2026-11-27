import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CrossSell, FeatureGroups, ProductFaq, ProductHero, ProductPlatforms, ProductPricing, ProductProblem, ProductSteps } from "@/components/product/product-sections"
import { ContactCta } from "@/components/site/page-sections"
import { getProduct, PRODUCTS } from "@/lib/products"
import { createPageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return createPageMetadata({ title: `${product.name}: ${product.category}`, description: product.summary, path: `/products/${product.slug}` })
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: product.url,
    publisher: { "@type": "Organization", name: "Aetheria Tech Company Limited" },
  }

  return (
    <main id="main" className={product.scope}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductHero product={product} />
      <ProductProblem product={product} />
      <ProductSteps product={product} />
      <FeatureGroups product={product} />
      <ProductPlatforms product={product} />
      <ProductPricing product={product} />
      <ProductFaq product={product} />
      <CrossSell product={product} />
      <ContactCta title={`Questions about ${product.name}?`} text="Talk to the team that builds and supports it." />
    </main>
  )
}
