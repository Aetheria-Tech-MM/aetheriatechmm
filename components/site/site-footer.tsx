import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-sunken pt-18">
      <div className="site-container grid gap-10 md:grid-cols-[1.7fr_1fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="font-heading font-extrabold tracking-tight">Aetheria Tech</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">A technology company building practical software products for real business operations, based in Yangon, Myanmar.</p>
        </div>
        <FooterGroup title="Navigate" links={[["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Contact", "/contact"]]} />
        <FooterGroup title="Product" links={[["FOM Order Manager", "https://getfom.com/"], ["Product overview", "/products"]]} />
        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="mailto:aetheria.techmm@gmail.com">aetheria.techmm@gmail.com</a></li>
            <li>No.36, Thiri Yadanar St, Shwe Hnin Si Ward, Mingaladon, Yangon, Myanmar</li>
          </ul>
        </div>
      </div>
      <div className="site-container mt-12 flex flex-col gap-3 border-t border-border py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Aetheria Tech Company Limited. All rights reserved.</span>
        <div className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
      </div>
    </footer>
  )
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map(([label, href]) => <li key={href}><Link className="hover:text-foreground" href={href}>{label}</Link></li>)}
      </ul>
    </div>
  )
}
