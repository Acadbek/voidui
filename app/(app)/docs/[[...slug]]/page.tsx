import * as React from "react"
import { notFound } from "next/navigation"
import { getRegistryItem, getComponentCode } from "@/lib/registry"
import ComponentPreview from "@/components/component-preview"
import ComponentCode from "@/components/component-code"

interface PageProps {
  params: {
    slug?: string[]
  }
}

export default async function ComponentPage({ params }: PageProps) {
  const slug = await params.slug || []

  const componentName = slug[1]

  console.log(componentName);


  if (!componentName) {
    return (
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-muted-foreground">
          Select a component from the sidebar to view its documentation.
        </p>
      </div>
    )
  }

  const registryItem = getRegistryItem(componentName)

  console.log(registryItem);


  if (!registryItem) {
    notFound()
  }

  const code = getComponentCode(componentName)

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold capitalize mb-2">
          {componentName}
        </h1>
        <p className="text-muted-foreground">
          A {componentName} component built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <ComponentPreview name={componentName} />
      </div>

      {code && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Code</h2>
          <ComponentCode code={code} />
        </div>
      )}
    </div>
  )
}

