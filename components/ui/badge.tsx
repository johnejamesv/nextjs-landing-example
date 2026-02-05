import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/20 shadow-lg shadow-cyan-500/10 [a&]:hover:bg-cyan-500/30",
        secondary:
          "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-500/10 [a&]:hover:bg-purple-500/20",
        destructive:
          "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-white/10",
        outline:
          "border-white/15 text-foreground [a&]:hover:bg-white/5 [a&]:hover:border-purple-500/30 transition-all duration-200 bg-white/5",
        ghost:
          "[a&]:hover:bg-white/5 [a&]:hover:text-accent-foreground border-white/5",
        link:
          "text-primary underline-offset-4 [a&]:hover:underline",
        glow:
          "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30 shadow-lg shadow-cyan-500/20 [a&]:hover:shadow-cyan-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
