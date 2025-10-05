"use client"

import Button from "@/examples/button"
import Accordion from "@/examples/accordion"
import Alert from '@/examples/alert'
import Tag from '@/examples/tag'
import Select from '@/examples/select'
import Dialog from '@/examples/dialog'
import Tooltip from '@/examples/tooltip'
import Tabs from '@/examples/tabs'
import * as React from "react"
import { Select as S, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/registry/carbon/select'

interface ComponentPreviewProps {
  name: string
}

const componentMap: Record<string, React.ComponentType> = {
  button: Button,
  accordion: Accordion,
  alert: Alert,
  select: Select,
  tag: Tag,
  dialog: Dialog,
  tabs: Tabs,
  tooltip: Tooltip
}

export default function ComponentPreview({ name }: ComponentPreviewProps) {
  // const [type, setType] = React.useState('primary')
  const Component = componentMap[name]

  console.log(Component);

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
    <div className="preview relative border">
      <S>
        <SelectTrigger color="white" className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="primary">Primary</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="tertiary">Tertiary</SelectItem>
          </SelectGroup>
        </SelectContent>
      </S>
      <div className="flex min-h-[350px] justify-center p-10">
        <Component />
      </div>
    </div>
  )
}
