import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Button } from "../button/button"

const alertVariants = cva(
  "w-full flex items-center py-3 [&>svg]:hidden",
  {
    variants: {
      variant: {
        default: "border text-white border-l-3 border-l-[var(--destructive)]",
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
          <Icon icon='carbon:error-filled' fontSize="18px" color="var(--destructive)" />
        </span>
        <div className="flex flex-col items-start gap-2">{children}</div>
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
    className={cn("text-muted leading-none tracking-tight col-start-2 line-clamp-1 min-h-4", className)}
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
    className={cn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
