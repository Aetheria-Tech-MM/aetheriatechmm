import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn("h-[46px] w-full rounded-sm border border-border-strong bg-card px-4 text-sm outline-none transition-[border-color,box-shadow] placeholder:text-faint focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-brand-soft disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />
}

export { Input }
