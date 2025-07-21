import { cn } from '@/utils'
import {
  IconGripVertical,
  IconEdit,
  IconTrash,
  IconPlus,
  IconUsers,
  IconAlignBoxRightStretch,
  IconChevronRight
} from '@tabler/icons-react'
import type { ComponentPropsWithoutRef } from 'react'
import * as CustomIcons from './Custom'

export const TablerIcons = {
  IconUsers,
  IconAlignBoxRightStretch,
  IconGripVertical,
  IconChevronRight,
  IconEdit,
  IconTrash,
  IconPlus
}

export type TablerIconNames = keyof typeof TablerIcons
export type CustomIconNames = keyof typeof CustomIcons
export type IconNames = TablerIconNames | CustomIconNames

export interface IconComponentProps
  extends Partial<Omit<ComponentPropsWithoutRef<'svg'>, 'stroke'>> {
  stroke?: string | number
  size?: number
  color?: string
}

export interface IconProps extends Omit<IconComponentProps, 'size' | 'color'> {
  name: IconNames
}

export const Icons = ({ className, ...props }: IconProps) => {
  const { name, ...rest } = props
  const IconComponent = (TablerIcons[name as TablerIconNames] ||
    CustomIcons[name as CustomIconNames]) as React.ComponentType<
    Omit<IconProps, 'name'>
  >

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={cn(className)} {...rest} />
}
