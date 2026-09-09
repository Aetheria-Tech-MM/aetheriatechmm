import type { Metadata } from "next"

import { LegalPage } from "@/components/site/legal-page"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({ title: "Privacy Policy", description: "Privacy policy for the Aetheria Tech Company Limited website.", path: "/privacy", index: false })

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" intro="This page is a placeholder. Aetheria Tech's complete privacy policy will be published here."><p>Aetheria Tech Company Limited (&quot;Aetheria Tech&quot;, &quot;we&quot;, &quot;us&quot;) respects the privacy of visitors to this website. This placeholder describes the intended scope; it is not yet the company&apos;s finalized privacy policy.</p><h2>What this page will cover</h2><ul><li>Information collected through this website, including contact form submissions.</li><li>How information is used and how long it is retained.</li><li>Whether information is shared with third parties.</li><li>How visitors can request access to, or deletion of, their information.</li><li>How this differs from FOM Order Manager&apos;s separate privacy policy.</li></ul><h2>FOM Order Manager&apos;s privacy policy</h2><p>FOM Order Manager has its own policy governing data collected through the product. This page relates only to aetheriatechmm.com.</p><h2>Contact</h2><p>Questions about privacy can be sent to <a href="mailto:aetheria.techmm@gmail.com">aetheria.techmm@gmail.com</a>.</p></LegalPage>
}
