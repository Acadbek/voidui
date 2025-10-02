"use client"

import * as React from "react"

interface ComponentCodeProps {
  code: string
}

export default function ComponentCode({ code }: ComponentCodeProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      {code}
    </div>
  )
}
