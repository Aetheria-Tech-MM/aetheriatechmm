import Image from "next/image"

import type { Shot } from "@/lib/products"
import { cn } from "@/lib/utils"

/** A product screenshot in a light browser or phone frame. */
export function Screenshot({ shot, className, priority, sizes }: { shot: Shot; className?: string; priority?: boolean; sizes?: string }) {
  if (shot.kind === "mobile") {
    return (
      <figure className={cn("w-full max-w-[260px] rounded-[2rem] border border-border-strong bg-card p-2 shadow-[var(--shadow-lg)]", className)}>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} priority={priority} sizes={sizes ?? "260px"} className="h-auto w-full rounded-[1.55rem]" />
      </figure>
    )
  }
  return (
    <figure className={cn("w-full overflow-hidden rounded-lg border border-border-strong bg-card shadow-[var(--shadow-lg)]", className)}>
      <div className="flex h-7 items-center gap-1.5 border-b border-border bg-surface-sunken px-3" aria-hidden="true">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
      </div>
      <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} priority={priority} sizes={sizes ?? "(min-width: 1024px) 640px, 100vw"} className="h-auto w-full" />
    </figure>
  )
}
