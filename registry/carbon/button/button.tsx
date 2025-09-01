import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-start transition-all duration-100 ease-in-out whitespace-nowrap rounded-none text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-[var(--color-primary-darker)] active:bg-[var(--color-primary-active)] text-primary-foreground focus:[box-shadow:inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_#ffffff]",
        destructive:
          "bg-destructive hover:bg-[var(--color-destructive-darker)] active:bg-[var(--color-destructive-active)] text-destructive-foreground focus:[box-shadow:inset_0_0_0_2px_var(--destructive),inset_0_0_0_3px_#ffffff]",
        tertiary:
          "bg-background border-[1px] hover:bg-[var(--background-darken)] active:bg-[var(--background-active)] border-[var(--primary)] text-[var(--primary)] focus:[box-shadow:inset_0_0_0_2px_var(--background),inset_0_0_0_3px_var(--primary)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      },
      size: {
        default: "h-[3rem] min-w-[7.75rem] pl-4 pr-12 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
