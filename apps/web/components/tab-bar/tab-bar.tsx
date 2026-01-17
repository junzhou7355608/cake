'use client';

import { cva } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';
import * as React from 'react';

import { Link } from '@/i18n/navigation';
import { cn } from '@repo/utils';

const tabBarVariants = cva(
  'h-14 md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border px-2 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/50',
);

const tabBarItemVariants = cva(
  'flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      active: {
        true: 'text-primary',
        false: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export interface TabBarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface TabBarProps extends React.ComponentProps<'nav'> {
  items: TabBarItem[];
  activeTab?: string;
}

function TabBar({ items, activeTab, className, ...props }: TabBarProps) {
  return (
    <nav
      data-slot="tab-bar"
      className={cn(tabBarVariants(), className)}
      {...props}
    >
      {items.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        const content = (
          <>
            <div className="relative">
              <Icon className="size-5 z-10 relative" />
              <div
                className={cn(
                  'w-3 h-3 bg-primary/30 rounded-full absolute top-1 -left-0.5 z-0 transition-opacity duration-300',
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
                )}
              ></div>
            </div>
            <span className="truncate">{item.label}</span>
          </>
        );

        return (
          <Link
            key={item.id}
            data-slot="tab-bar-item"
            data-active={isActive}
            href={item.href}
            className={cn(tabBarItemVariants({ active: isActive }))}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}

export { TabBar, tabBarItemVariants, tabBarVariants };
