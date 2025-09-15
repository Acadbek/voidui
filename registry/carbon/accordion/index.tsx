import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  className?: string
}

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-t [&:last-child]:border-b', className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 h-10 px-4 items-center transition-colors justify-between py-4 text-sm [&[data-state=open]>svg]:rotate-180",
          "focus:outline-none",
          "border-2 border-transparent",
          "transition-[background-color] duration-150",
          "hover:bg-[oklch(0.95_0_0)] ",
          "focus:border-[oklch(55.65%_0.243_261.95)]",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }: any, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden px-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }