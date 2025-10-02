import { registry } from "@/registry/index"
import fs from "fs"
import path from "path"

export function getRegistryItem(name: string) {
  return registry.find((item) => item.name === name)
}

export function getComponentCode(name: string) {
  const item = getRegistryItem(name)
  if (!item) return null
  
  const filePath = path.join(process.cwd(), item.files[0])
  
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath)
    return null
  }
  
  try {
    const code = fs.readFileSync(filePath, "utf-8")
    return code
  } catch (error) {
    console.error("Error reading file:", error)
    return null
  }
}
