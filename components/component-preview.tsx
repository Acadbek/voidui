"use client"

import { Accordion }from "@/registry/carbon/accordion"
import { Button } from "@/registry/carbon/button/button"
import CodeSnipped from "@/registry/carbon/code-snipped"
import * as React from "react"

interface ComponentPreviewProps {
  name: string
}

// Component map
const componentMap: Record<string, React.ComponentType> = {
  button: Button,
  // accordion: Accordion,
}

export default function ComponentPreview({ name }: ComponentPreviewProps) {
  const Component = componentMap[name]

  if (!Component) {
    return (
      <div className="preview relative rounded-md border">
        <div className="flex min-h-[350px] items-center justify-center p-10">
          <p className="text-muted-foreground">Component not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="preview relative rounded-md border">
      <div className="flex min-h-[350px] justify-center p-10">
        <Component />
      </div>
    </div>
  )
}
