import { cn } from "@/lib/utils"

/** The product's end-to-end flow as a row of steps; the last step is filled with the product accent. Use inside a product scope. */
export function FlowPipeline({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm font-medium", className)} aria-label="How work flows through the product">
      {steps.map((step, index) => {
        const last = index === steps.length - 1
        return (
          <li key={step} className="flex items-center gap-1.5">
            <span className={cn("rounded-full border px-3 py-1", last ? "border-product-ink bg-product-ink text-white dark:text-[#0b0d14]" : "border-product-line bg-card text-product-ink")}>{step}</span>
            {!last && <span className="text-faint" aria-hidden="true">→</span>}
          </li>
        )
      })}
    </ol>
  )
}
