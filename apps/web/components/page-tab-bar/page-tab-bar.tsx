'use client';

import { Link } from '@/i18n/navigation';
import { Button } from '@repo/ui';

export interface PageTabItem {
  label: string;
  href?: string;
  id: string;
}

export interface PageTabBarProps {
  activeTab: string;
  title: string;
  tabs: PageTabItem[];
  action?: React.ReactNode;
}

export function PageTabBar({
  activeTab,
  title,
  tabs,
  action,
}: PageTabBarProps) {
  return (
    <div className="pb-4 px-1">
      <h2 className="pt-6 text-xl font-bold text-primary">{title}</h2>
      <div className="flex justify-between w-full">
        <div className="flex gap-2 py-4 pr-4 overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-background">
          {tabs.map((item) => {
            if (item.href) {
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'outline'}
                  asChild
                  className="rounded-full text-sm"
                  size="sm"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            }
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'outline'}
                className="rounded-full text-sm"
                size="sm"
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div className="py-4">{action}</div>
      </div>
    </div>
  );
}
