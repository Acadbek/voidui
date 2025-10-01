import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Button } from "../button/button"

const alertVariants = cva(
  "w-full flex items-center h-[48px] [&>svg]:hidden",
  {
    variants: {
      variant: {
        default: "bg-[var(--dark-gray)] text-white border-l-3 border-l-[var(--red)]",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    <div className="w-full flex items-center justify-between gap-4 pr-[2px]">
      <div className="flex items-center justify-between">
        <span className="px-4">
          <Icon icon='carbon:error-filled' fontSize="18px" color="var(--red)" />
        </span>
        <div className="flex items-center gap-2">{children}</div>
      </div>
      <Button className="hover:bg-transparent h-[44px] w-[44px] active:bg-transparent" kind='ghost' size='icon'>
        <Icon icon='carbon:close' fontSize='16px' />
      </Button>
    </div>
  </div>
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-medium dark:text-white leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
