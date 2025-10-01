import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-start transition-all duration-100 ease-in-out whitespace-nowrap rounded-none text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      kind: {
        primary: `bg-[var(--primary)]
          hover:bg-[var(--primary-hover)]
          active:bg-[var(--primary-active)]
          text-[var(--primary-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_var(--primary-focus-ring)]`,

        destructive: `bg-[var(--destructive)]
          hover:bg-[var(--destructive-hover)]
          active:bg-[var(--destructive-active)]
          text-[var(--destructive-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--destructive),inset_0_0_0_3px_var(--destructive-focus-ring)]`,

        tertiary: `bg-[var(--tertiary)]
          hover:bg-[var(--tertiary-hover)]
          active:bg-[var(--tertiary-active)]
          border-[1px]
          border-[var(--tertiary-border)]
          text-[var(--tertiary-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--tertiary),inset_0_0_0_3px_var(--tertiary-focus-ring)]`,

        light: `bg-[var(--light)]
          hover:bg-[var(--light-hover)]
          active:bg-[var(--light-active)]
          text-[var(--light-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--light),inset_0_0_0_3px_var(--light-focus-ring)]`,

        dark: `bg-[var(--dark)]
          text-[var(--dark-foreground)]
          active:bg-[var(--dark-active)]
          hover:bg-[var(--dark-hover)]
          focus:[box-shadow:inset_0_0_0_2px_var(--dark),inset_0_0_0_3px_var(--dark-focus-ring)]`,

        ghost: `bg-[var(--ghost)]
          hover:bg-[var(--ghost-hover)]
          active:bg-[var(--ghost-active)]
          focus:[box-shadow:inset_0_0_0_2px_var(--ghost-hover),inset_0_0_0_1px_var(--ghost-focus-ring)]`,
      },
      size: {
        xs: "h-[var(--size-1-height,1.5rem)] w-[var(--size-1-width,12.5rem)] pl-[var(--size-1-pl,1rem)] pr-[var(--size-1-pr,4rem)] text-[var(--size-1-text,0.75rem)]",

        sm: "h-[var(--size-2-height,2rem)] w-[var(--size-2-width,12.5rem)] pl-[var(--size-2-pl,1rem)] pr-[var(--size-2-pr,4rem)] text-[var(--size-2-text,0.875rem)]",

        md: "h-[var(--size-3-height,2.5rem)] w-[var(--size-3-width,12.5rem)] pl-[var(--size-3-pl,1rem)] pr-[var(--size-3-pr,4rem)] text-[var(--size-3-text,0.875rem)]",

        lgp: "h-[var(--size-4-height,3rem)] w-[var(--size-4-width,12.5rem)] pl-[var(--size-4-pl,1rem)] pr-[var(--size-4-pr,4rem)] text-[var(--size-4-text,0.875rem)]",

        lge: "h-[var(--size-5-height,3rem)] w-[var(--size-5-width,12.5rem)] pl-[var(--size-5-pl,1rem)] pr-[var(--size-5-pr,4rem)] text-[var(--size-5-text,1rem)]",

        xl: "h-[var(--size-6-height,4rem)] w-[var(--size-6-width,12.5rem)] pl-[var(--size-6-pl,1rem)] pr-[var(--size-6-pr,4rem)] text-[var(--size-6-text,0.875rem)] pt-[var(--size-6-pt,1rem)] items-start",

        "2xl":
          "h-[var(--size-7-height,5rem)] w-[var(--size-7-width,12.5rem)] pl-[var(--size-7-pl,1rem)] pr-[var(--size-7-pr,4rem)] text-[var(--size-7-text,0.875rem)] pt-[var(--size-7-pt,1rem)] items-start",

        default:
          "h-[var(--size-default-height,3rem)] w-[var(--size-default-width,12.5rem)] pl-[var(--size-default-pl,1rem)] pr-[var(--size-default-pr,4rem)]",

        icon: "h-10 w-10 flex items-center justify-center",

        "calendar-icon":
          "h-[var(--cell-size,var(--size-calendar-height,2.5rem))] w-[var(--cell-size,var(--size-calendar-width,2.5rem))] justify-center",
      },
      hasIcon: {
        true: "gap-2",
        false: "",
      },
      iconOnly: {
        true: "justify-center px-0",
        false: "",
      },
    },
    defaultVariants: {
      kind: "primary",
      size: "default",
      hasIcon: false,
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hasIcon?: boolean;
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      kind,
      size,
      asChild = false,
      hasIcon,
      iconOnly,
      children,
      ...props
    },
    ref,
  ) => {
    const VoidButton = asChild ? Slot : "button";

    // Auto-detect icon presence if not explicitly set
    const detectedHasIcon =
      hasIcon ??
      React.Children.toArray(children).some(
        (child) =>
          React.isValidElement(child) && typeof child.type !== "string",
      );

    // Auto-detect icon-only if not explicitly set
    const detectedIconOnly =
      iconOnly ??
      (detectedHasIcon &&
        React.Children.toArray(children).length === 1 &&
        React.Children.toArray(children).every(
          (child) =>
            React.isValidElement(child) && typeof child.type !== "string",
        ));

    return (
      <VoidButton
        className={cn(
          buttonVariants({
            kind,
            size,
            hasIcon: detectedHasIcon,
            iconOnly: detectedIconOnly,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </VoidButton>
    );
  },
);

export { Button, buttonVariants };

Button.displayName = "Button";
