import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const tagVariants = cva(
  "inline-flex items-center rounded-full h-6 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      kind: {
        default:
          "bg-[oklch(0.9014_0.0579_232.56)] text-[oklch(0.5024_0.1247_251.33)]",
        secondary:
          "bg-[oklch(0.9081_0.0081_253.86)] text-[oklch(0.1983_0.0076_248.21)]",
        destructive:
          "bg-[oklch(0.9135_0.0448_14.6)] text-[oklch(0.46_0.1708_25.57)]",
        outline: "text-foreground bg-transparent",
        success:
          "bg-[oklch(0.8931_0.1029_152.51)] text-[oklch(0.4292_0.1165_148.13)]",
        mauve:
          "bg-[oklch(0.911_0.052_302.58)] text-[oklch(0.4679_0.2189_295.08)]",
      },
      bordered: {
        true: "border",
        false: "border-transparent",
      },
      spacing: {
        default: "px-2",
        "icon-only": "pl-1 pr-2",
        "dismiss-only": "pl-2",
        "icon-dismiss": "pl-1",
      },
    },
    compoundVariants: [
      {
        kind: "default",
        bordered: true,
        class: "border-[oklch(0.7287_0.154876_241.6637)]",
      },
      {
        kind: "secondary",
        bordered: true,
        class: "border-gray-400",
      },
      {
        kind: "destructive",
        bordered: true,
        class: "border-[oklch(0.7508_0.1508_18.35)]",
      },
      {
        kind: "outline",
        bordered: true,
        class: "border-gray-400",
      },
      {
        kind: "success",
        bordered: true,
        class: "border-[oklch(0.7119_0.1672_149.64)]",
      },
      {
        kind: "mauve",
        bordered: true,
        class: "border-[oklch(0.7493_0.1531_300.59)]",
      },
    ],
    defaultVariants: {
      kind: "default",
      bordered: false,
      spacing: "default",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tagVariants> {
  icon?: React.ReactNode;
  onDismiss?: () => void;
  dismissable?: boolean;
}

function Tag({
  kind,
  icon,
  children,
  bordered,
  onDismiss,
  className,
  dismissable,
  ...props
}: TagProps) {
  const getSpacing = () => {
    if (icon && dismissable) return "icon-dismiss";
    if (icon) return "icon-only";
    if (dismissable) return "dismiss-only";
    return "default";
  };

  const shouldBeBordered = dismissable ? false : bordered;

  const getHoverBg = () => {
    switch (kind) {
      case "default":
        return "hover:bg-[oklch(0.8514_0.0879_232.56)]";
      case "secondary":
        return "hover:bg-[oklch(0.8581_0.0181_253.86)]";
      case "destructive":
        return "hover:bg-[oklch(0.8635_0.0748_14.6)]";
      case "outline":
        return "hover:bg-muted";
      case "success":
        return "hover:bg-[oklch(0.8431_0.1329_152.51)]";
      case "mauve":
        return "hover:bg-[oklch(0.861_0.082_302.58)]";
      default:
        return "hover:bg-[oklch(0.8514_0.0879_232.56)]";
    }
  };

  return (
    <div
      className={cn(
        tagVariants({
          kind,
          bordered: shouldBeBordered,
          spacing: getSpacing(),
        }),
        className,
      )}
      {...props}
    >
      {icon && (
        <span className="flex items-center text-current">
          <div className="w-4 h-4 flex items-center justify-center mr-[2px]">
            {icon}
          </div>
        </span>
      )}

      <span className="flex-1">{children}</span>

      {dismissable && (
        <button
          onClick={onDismiss}
          className={cn(
            "focus:border focus:border-blue-500 ml-0.5 w-6 h-6 rounded-full flex items-center justify-center",
            getHoverBg(),
          )}
          type="button"
          aria-label="Remove"
        >
          <Icon icon="carbon:close-large" className="stroke-2" />
        </button>
      )}
    </div>
  );
}

export { Tag, tagVariants };
