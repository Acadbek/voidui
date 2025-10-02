export type RegistryItem = {
  name: string
  type: string
  files: string[]
  component?: React.ComponentType<any>
}

export type Registry = RegistryItem[]
