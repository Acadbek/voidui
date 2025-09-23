"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/carbon/tooltip";
import { Icon } from "@iconify/react";

const TabsKindContext = React.createContext<{
  kind?: TabsKinds;
  orientation?: "horizontal" | "vertical";
  position?: "top" | "bottom" | "left" | "right";
}>({});

type TabsKinds = NonNullable<VariantProps<typeof triggerKinds>["kind"]>;

const tabsRootVariants = cva("flex", {
  variants: {
    position: {
      top: "flex-col",
      bottom: "flex-col-reverse",
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
  defaultVariants: {
    position: "top",
  },
});

const Tabs = ({
  className,
  kind = "default",
  position = "top",
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  kind?: TabsKinds;
  position?: "top" | "bottom" | "left" | "right";
}) => {
  const orientation =
    position === "left" || position === "right" ? "vertical" : "horizontal";

  return (
    <TabsKindContext.Provider value={{ kind, orientation, position }}>
      <TabsPrimitive.Root
        orientation={orientation}
        className={cn(tabsRootVariants({ position }), className)}
        {...props}
      />
    </TabsKindContext.Provider>
  );
};

const listVariants = cva("text-muted-foreground", {
  variants: {
    orientation: {
      horizontal: "h-10 inline-flex items-center justify-center w-fit",
      vertical: "flex flex-col items-stretch h-fit w-fit",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { orientation } = React.useContext(TabsKindContext);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(listVariants({ orientation }), className)}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const triggerKinds = cva(
  "inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap px-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      kind: {
        default:
          "border-t-transparent border-r-transparent border-l-transparent border-b-2 focus:border-[var(--primary)] data-[state=active]:border-b-[var(--primary)] border-2 hover:border-gray-400 hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent hover:text-black dark:hover:text-white data-[state=active]:text-foreground",
        contained:
          "border-2 dark:hover:bg-[oklch(0.4086_0_0)] border-transparent focus:border-[var(--primary)] dark:bg-[oklch(0.3446_0_0)] bg-[oklch(0.9067_0_0)] hover:bg-[oklch(0.8867_0_0)] dark:data-[state=active]:bg-[oklch(0.2686_0_0)] data-[state=active]:bg-[oklch(0.9672_0_0)] data-[state=active]:border-t-[var(--primary)] dark:data-[state=active]:text-white",
        dismissible: "border-t-transparent border-r-transparent border-l-transparent border-b-2 focus:border-[var(--primary)] data-[state=active]:border-b-[var(--primary)] border-2 hover:border-gray-400 hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent hover:text-black dark:hover:text-white data-[state=active]:text-foreground",
        dismissibleContained: "bg-destructive text-destructive-foreground",
        onlyIcon: "w-[3rem] h-[3rem] border-t-transparent border-r-transparent border-l-transparent border-b-2 focus:border-[var(--primary)] data-[state=active]:border-b-[var(--primary)] border-2 hover:border-gray-400 hover:border-l-transparent hover:border-r-transparent hover:border-t-transparent hover:text-black dark:hover:text-white data-[state=active]:text-foreground",
        withIcon: "gap-2",
      },
      orientation: {
        horizontal: "",
        vertical: "w-full justify-start",
      },
    },
    defaultVariants: {
      kind: "default",
      orientation: "horizontal",
    },
  },
);

type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  icon?: React.ReactNode;
  tooltipContent?: React.ReactNode;
  onClose?: (value: string) => void;
};

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, icon, tooltipContent, onClose, ...props }, ref) => {
  const { kind, orientation } = React.useContext(TabsKindContext);

  if (kind === 'dismissible') {
    return (
      <div className="relative">
        <TabsPrimitive.Trigger
          ref={ref}
          className={cn(triggerKinds({ kind, orientation }), className)}
          {...props}
        >
          <div className="flex items-center">
            <span>{props.children}</span>
            <span className="w-5 h-5"></span>
          </div>
        </TabsPrimitive.Trigger>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.(props.value);
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center hover:bg-[oklch(0.9067_0_0)] dark:hover:bg-gray-800 justify-center"
        >
          <Icon className="w-4 h-4" icon='carbon:close' />
        </button>
      </div>
    );
  }


  if (kind === 'onlyIcon' && tooltipContent) {
    return (
      <Tooltip delayDuration={10}>
        <TooltipTrigger>
          {/* ERROR: ikkala trigger ham button. asChild qoshilsa state=active/inactive bo'lmayapti */}
          <TabsPrimitive.Trigger
            ref={ref}
            className={cn(triggerKinds({ kind, orientation }), className)}
            {...props}
          >
            {props.children}
          </TabsPrimitive.Trigger>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    );
  }



  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(triggerKinds({ kind, orientation }), className)}
      {...props}
    >
      {icon && kind !== 'onlyIcon'
        ? <div className="flex items-center gap-2">
          <span> {props.children}</span>
          <span className="w-4 h-4">{icon}</span>
        </div>
        : <span>{props.children}</span>
      }
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const contentVariants = cva(
  "p-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
);

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(contentVariants(), className)}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
