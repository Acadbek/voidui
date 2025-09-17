import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full border focus:outline-none focus:border-blue-500 border-transparent border-b-[oklch(0.6434_0_0)] bg-[oklch(0.9672_0_0)] tracking-wide px-4 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        white: "bg-white text-black",
        gray: "bg-gray-100 text-gray-800",
        "dark-gray": "bg-gray-700 text-gray-200",
        dark: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "gray",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
