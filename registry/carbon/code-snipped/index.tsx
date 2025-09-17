"use client";

import React from "react";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipProvider } from "../tooltip";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Type = "inline" | "singleline" | "multi";
type Color = "gray" | "white" | "dark";
type LabelSide = "bottom" | "left" | "right" | "top";
type LabelAlign = "start" | "center" | "end";

interface CodeSnippedProps {
  type?: Type;
  color?: Color;
  label?: string;
  children: React.ReactNode;
  labelSide?: LabelSide;
  labelAlign?: LabelAlign;
}

const codeSnippedVariants = cva("text-xs font-mono", {
  variants: {
    type: {
      multi: "",
      inline: "px-2 rounded-[2px] inline-block bg-[#F4F4F4]",
      singleline: "block h-10 pl-4 flex items-center bg-[#F4F4F4]",
    },
    color: {
      dark: "bg-black text-white",
      gray: "bg-[#F4F4F4] text-black",
      white: "bg-[#fff] text-black",
    },
  },
});

const CodeSnipped = ({
  type,
  color,
  label,
  children,
  labelSide = "bottom",
  labelAlign = "center",
}: CodeSnippedProps) => {
  const renderTooltip = type !== "singleline" && type !== "multi";

  return (
    <TooltipProvider>
      {renderTooltip ? (
        <Tooltip delayDuration={10}>
          <TooltipTrigger asChild>
            <span
              className={`${cn(codeSnippedVariants({ color, type }))} px-2 py-[2px]`}
            >
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent align={labelAlign} side={labelSide}>
            <span className="text-xs">{label}</span>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className={cn(codeSnippedVariants({ color, type }))}>
          <div className="relative w-full h-10 focus:border focus:border-red-500">
            <div className="flex h-full">
              <div className="flex-1 overflow-auto whitespace-nowrap">
                <div className="h-full flex items-center">{children}</div>
              </div>
              <Tooltip delayDuration={10}>
                <TooltipTrigger asChild>
                  <button className="active:bg-gray-300 relative bg-gray-100 hover:bg-gray-200 cursor-pointer focus:border-[oklch(55.65%_0.243_261.95)] focus:border-2 h-10 min-w-[40px] flex items-center justify-center flex-shrink-0 before:absolute before:left-0 before:top-0 before:h-full before:w-4 before:bg-gradient-to-r before:from-transparent before:to-gray-100 before:-translate-x-full">
                    {icon()}
                  </button>
                </TooltipTrigger>
                <TooltipContent align={labelAlign} side={labelSide}>
                  <span className="text-xs">{label}</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </TooltipProvider>
  );
};

export default CodeSnipped;

const icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 32 32"
  >
    <path
      fill="#000000"
      d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"
    />
    <path fill="#000000" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" />
  </svg>
);
