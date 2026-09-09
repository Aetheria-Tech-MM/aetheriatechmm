import { PageHero } from "@/components/site/page-sections"

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title={title}>{intro}</PageHero>
      <section className="py-20"><article className="site-container legal-content max-w-3xl">{children}</article></section>
    </main>
  )
}
