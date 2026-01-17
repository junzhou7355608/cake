import { cn } from '@repo/utils';
import type { ComponentPropsWithoutRef } from 'react';
import * as CustomIcons from './custom';

export type CustomIconNames = keyof typeof CustomIcons;
export type IconNames = CustomIconNames;

export interface IconComponentProps extends Partial<
  Omit<ComponentPropsWithoutRef<'svg'>, 'stroke'>
> {
  stroke?: string | number;
  size?: number;
  color?: string;
}

export interface IconProps extends Omit<IconComponentProps, 'size' | 'color'> {
  name: IconNames;
}

export const Icons = ({ className, ...props }: IconProps) => {
  const { name, ...rest } = props;

  const IconComponent = CustomIcons[
    name as CustomIconNames
  ] as React.ComponentType<Omit<IconProps, 'name'>>;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn(className)} {...rest} />;
};
