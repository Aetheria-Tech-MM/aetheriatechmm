import type { Metadata } from "next"

import { ContactForm } from "@/components/site/contact-form"
import { PageHero } from "@/components/site/page-sections"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "Contact Aetheria Tech", description: "Get in touch with Aetheria Tech Company Limited in Yangon, Myanmar.", path: "/contact" })

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Contact" title="Let's talk.">Questions about FOM Order Manager, or about Aetheria Tech in general — reach us directly, or prepare a message below.</PageHero>
      <section className="py-20 sm:py-28"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-8">
          <ContactItem title="Email"><a className="text-brand hover:underline" href="mailto:aetheria.techmm@gmail.com">aetheria.techmm@gmail.com</a></ContactItem>
          <ContactItem title="Office">No.36, Thiri Yadanar St,<br />Shwe Hnin Si Ward,<br />Mingaladon, Yangon, Myanmar</ContactItem>
        </div>
        <Card><CardHeader><h2 className="font-heading text-2xl font-bold">Send a message</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">This form opens your default email app with the message prepared. You can also email us directly.</p></CardHeader><CardContent><ContactForm /></CardContent></Card>
      </div></section>
    </main>
  )
}

function ContactItem({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="border-t border-border pt-5"><h2 className="font-heading text-lg font-bold">{title}</h2><div className="mt-2 text-sm leading-6 text-muted-foreground">{children}</div></div>
}
