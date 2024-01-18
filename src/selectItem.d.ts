import { ReactNode } from 'react'

declare module 'primereact/selectitem' {
  export interface SelectItem {
    value?: string
    label: string
    icon?: string
    primeIcon?: string
    componentIcon?: ReactNode
  }
}
