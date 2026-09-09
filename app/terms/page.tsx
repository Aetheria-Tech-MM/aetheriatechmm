import type { Metadata } from "next"

import { LegalPage } from "@/components/site/legal-page"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "Terms of Service", description: "Terms of service for the Aetheria Tech Company Limited website.", path: "/terms", index: false })

export default function TermsPage() {
  return <LegalPage title="Terms of Service" intro="This page is a placeholder. Aetheria Tech's complete terms of service for this website will be published here."><p>These terms will govern use of the aetheria.tech website, operated by Aetheria Tech Company Limited (&quot;Aetheria Tech&quot;, &quot;we&quot;, &quot;us&quot;). This placeholder describes the intended scope; it is not yet the company&apos;s finalized terms of service.</p><h2>What these terms will cover</h2><ul><li>Acceptable use of this website and its contact form.</li><li>Intellectual property in the site&apos;s content, design, and branding.</li><li>Disclaimers regarding information published on this site.</li><li>How disputes related to use of this website will be handled.</li><li>How these terms differ from FOM Order Manager&apos;s separate terms.</li></ul><h2>FOM Order Manager&apos;s terms</h2><p>FOM Order Manager has its own terms governing the product. These terms relate only to aetheria.tech.</p><h2>Contact</h2><p>Questions can be sent to <a href="mailto:aetheria.techmm@gmail.com">aetheria.techmm@gmail.com</a>.</p></LegalPage>
}
