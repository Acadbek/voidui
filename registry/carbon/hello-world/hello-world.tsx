import { Button as B } from "@/components/ui/button"
import React from "react"

interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <B>{children}</B>
}