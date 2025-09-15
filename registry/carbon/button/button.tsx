import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-start transition-all duration-100 ease-in-out whitespace-nowrap rounded-none text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: `bg-[oklch(55.65%_0.243_261.95)]
          hover:bg-[oklch(50.65%_0.243_261.95)]
          active:bg-[oklch(40.65%_0.243_261.95)]
          text-[oklch(100.00%_0.000_0)]
          focus:[box-shadow:inset_0_0_0_2px_oklch(55.65%_0.243_261.95),inset_0_0_0_3px_#fff]`,

        destructive: `bg-[oklch(0.6_0.2_25)]
          hover:bg-[oklch(0.55_0.2_25)] 
          active:bg-[oklch(0.45_0.2_25)] 
          text-[oklch(100.00%_0.000_0)] 
          focus:[box-shadow:inset_0_0_0_2px_var(--destructive),inset_0_0_0_3px_#ffffff]`,

        tertiary: `bg-[oklch(1_0_0)] 
          hover:bg-[oklch(0.95_0_0)] 
          active:bg-[oklch(0.9_0_0)] 
          border-[1px] 
          border-[oklch(55.65%_0.243_261.95)] 
          text-[oklch(55.65%_0.243_261.95)] 
          focus:[box-shadow:inset_0_0_0_2px_oklch(1_0_0),inset_0_0_0_3px_oklch(55.65%_0.243_261.95)]`,

        dark: `bg-[oklch(20.02%_0.000_0)]
          text-[oklch(100.00%_0.000_0)]
          active:bg-[oklch(30.02%_0.000_0)] 
          hover:bg-[oklch(0.00%_0.000_0)] 
          focus:[box-shadow:inset_0_0_0_2px_oklch(20.02%_0.000_0),inset_0_0_0_3px_oklch(100.00%_0.000_0)]`,

        light: `bg-[oklch(1_0_0)]
          hover:bg-[oklch(0.95_0_0)]
          active:bg-[oklch(92.19%_0.000_0)]
        `
      },
      size: {
        xs: 'h-[1.5rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-xs',
        sm: "h-[2rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[0.875rem]",
        md: 'h-[2.5rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[0.875rem]',
        lgp: "h-[3rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[0.875rem]",
        lge: "h-[3rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[1rem]",
        xl: 'h-[4rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[0.875rem] pt-[1rem] items-start',
        '2xl': 'h-[5rem] w-[12.5rem] pl-[1rem] pr-[4rem] text-[0.875rem] pt-[1rem] items-start',
        default: "h-[3rem] w-[12.5rem] pl-[1rem] pr-[4rem]",
        icon: "h-[3rem] w-[3rem]",
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
    const VoidButton = asChild ? Slot : "button"
    return (
      <VoidButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />  
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
