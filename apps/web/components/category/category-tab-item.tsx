import { Button } from '@repo/ui';
import { cn } from '@repo/utils';
import { PropsWithChildren } from 'react';

export interface CategoryTabItemProps {
  variant: 'default' | 'outline';
  onClick: () => void;
}

export function CategoryTabItem({
  children,
  variant = 'default',
  onClick,
}: PropsWithChildren<CategoryTabItemProps>) {
  return (
    <Button
      className={cn(
        'w-full min-w-0 justify-start gap-2',
        variant === 'outline' &&
          'bg-transparent hover:bg-transparent hover:text-primary hover:border-primary',
      )}
      // size="sm"
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
