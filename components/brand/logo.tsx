import type { SVGProps } from "react"

import { cn } from "@/lib/utils"

// Orbit A master geometry on a 64×64 grid, with strokes already outlined to fills.
// Source of truth for every exported file in public/brand/ (see brand-guidelines.html).
export const RING_PATH =
  "M56.295 27.277A24.75 24.75 0 1 1 40.87 8.894A2.75 2.75 0 0 1 38.899 14.029A19.25 19.25 0 1 0 50.896 28.327A2.75 2.75 0 0 1 56.295 27.277Z"
export const A_PATH =
  "M18.483 42.892L29.483 17.892A2.75 2.75 0 0 1 34.517 17.892L45.517 42.892A2.75 2.75 0 0 1 40.483 45.108L32 25.828L23.517 45.108A2.75 2.75 0 0 1 18.483 42.892Z"
export const DOT = { cx: 48.853, cy: 17.859, r: 5.5 }

type MarkProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  /** Orbit dot colour. Defaults to the theme's `--logo-accent`; pass a product colour for endorsements. */
  dot?: string
  title?: string
}

/** The Orbit A mark. Ink follows `currentColor`, so it flips with the text colour in light and dark themes. */
export function LogoMark({ dot = "var(--logo-accent)", title, className, ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d={RING_PATH} fill="currentColor" />
      <path d={A_PATH} fill="currentColor" />
      <circle cx={DOT.cx} cy={DOT.cy} r={DOT.r} fill={dot} />
    </svg>
  )
}

/** Horizontal lockup: mark + "Aetheria Tech" wordmark in the heading font. */
export function Logo({ className, markClassName, dot }: { className?: string; markClassName?: string; dot?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-heading font-extrabold tracking-[-0.02em]", className)}>
      <LogoMark dot={dot} className={cn("size-8", markClassName)} />
      Aetheria Tech
    </span>
  )
}
