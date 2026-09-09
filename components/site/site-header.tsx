"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12)
    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    return () => window.removeEventListener("scroll", updateHeader)
  }, [])

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    window.addEventListener("resize", closeOnResize)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
      window.removeEventListener("resize", closeOnResize)
    }
  }, [open])

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 h-[76px] border-b border-transparent bg-transparent transition-[background-color,border-color,box-shadow] duration-200", (scrolled || open) && "border-border bg-[var(--scrim)] shadow-[var(--shadow-sm)] backdrop-blur-[10px]")}>
      <div className="site-container flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 font-heading text-[1.15rem] font-extrabold tracking-[-0.02em]" aria-label="Aetheria Tech home">
          <span className="relative block h-[26px] w-[46px] shrink-0 overflow-hidden">
            <Image src="/logos/icon-light.png" alt="" fill sizes="46px" className="object-contain dark:hidden" priority />
            <Image src="/logos/icon-dark.png" alt="" fill sizes="46px" className="hidden object-contain dark:block" priority />
          </span>
          Aetheria Tech
        </Link>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform",
                    pathname === link.href && "text-foreground after:scale-x-100",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            role="switch"
            aria-checked={resolvedTheme === "dark"}
            className="relative h-[26px] w-11 shrink-0 rounded-full border border-border-strong bg-surface-sunken text-faint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-3 focus-visible:ring-offset-background"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
          >
            <HugeiconsIcon icon={Sun03Icon} size={12} strokeWidth={1.8} className="absolute left-1 top-1/2 -translate-y-1/2" />
            <HugeiconsIcon icon={Moon02Icon} size={12} strokeWidth={1.8} className="absolute right-1 top-1/2 -translate-y-1/2" />
            <span className="absolute left-0.5 top-0.5 size-[20px] rounded-full bg-foreground shadow-sm transition-transform duration-200 ease-[cubic-bezier(.22,.61,.36,1)] dark:translate-x-[18px] dark:bg-brand-strong" />
          </button>
          <Link href="/contact" className={cn(buttonVariants(), "hidden md:inline-flex")}>Get in touch</Link>
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={cn("h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-0.5 w-5 rounded-full bg-foreground transition-opacity duration-150", open && "opacity-0")} />
            <span className={cn("h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={cn("fixed inset-x-0 top-[76px] h-[calc(100dvh-76px)] overflow-y-auto bg-background px-5 py-12 transition-[opacity,transform,visibility] duration-200 md:hidden", open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0")} aria-label="Mobile navigation" aria-hidden={!open}>
          <ul className="site-container mb-12 grid gap-2 px-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="block border-b border-border py-3 font-heading text-[1.6rem] font-bold tracking-[-0.02em]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="site-container px-0">
            <Link href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={cn(buttonVariants({ size: "lg" }), "flex w-full")}>Get in touch</Link>
          </div>
      </nav>
    </header>
  )
}
