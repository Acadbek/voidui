"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

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
          "border-2 border-transparent focus:border-[var(--primary)] bg-muted bg-[oklch(0.9067_0_0)] data-[state=active]:bg-[oklch(0.9672_0_0)] data-[state=active]:border-t-[var(--primary)] data-[state=active]:text-black",
        dismissible: "text-destructive border-b",
        dismissibleContained: "bg-destructive text-destructive-foreground",
        onlyIcon: "px-2",
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

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { kind, orientation } = React.useContext(TabsKindContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(triggerKinds({ kind, orientation }), className)}
      {...props}
    />
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
