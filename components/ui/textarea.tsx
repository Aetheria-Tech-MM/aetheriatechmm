import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn("min-h-[140px] w-full resize-y rounded-sm border border-border-strong bg-card px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] placeholder:text-faint focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-brand-soft disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
}

export { Textarea }
