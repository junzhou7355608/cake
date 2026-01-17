import { RouterTabBar } from '@/components';
import { cn } from '@repo/utils';
import { PropsWithChildren } from 'react';

export default function AuthLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="">
      <div className={cn('px-2 container mx-auto', 'md:px-4')}>{children}</div>
      <RouterTabBar />
    </div>
  );
}
