"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  Menu01Icon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="site-container flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-[15px] font-extrabold tracking-tight" aria-label="Aetheria Tech home">
          <span className="relative block h-7 w-8 overflow-hidden">
            <Image src="/logos/icon-light.png" alt="" fill sizes="32px" className="object-contain dark:hidden" priority />
            <Image src="/logos/icon-dark.png" alt="" fill sizes="32px" className="hidden object-contain dark:block" priority />
          </span>
          Aetheria Tech
        </Link>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    pathname === link.href && "bg-muted text-foreground",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
          >
            <HugeiconsIcon icon={resolvedTheme === "dark" ? Sun03Icon : Moon02Icon} size={18} strokeWidth={1.8} />
          </button>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "hidden px-4 sm:inline-flex")}>Get in touch</Link>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <ul className="site-container grid gap-1 px-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-muted">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
