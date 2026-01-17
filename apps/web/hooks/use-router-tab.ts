'use client';

import { usePathname } from '@/i18n/navigation';

export interface RouterTab {
  id: string;
  label: string;
  href: string;
}

export interface UseRouterTabProps {
  defaultTab?: string;
  defaultIndex?: number;
}

export function useRouterTab(props?: UseRouterTabProps) {
  const { defaultTab = 'home', defaultIndex = 1 } = props || {};

  const pathname = usePathname();

  const activeTab = pathname.split('/')[defaultIndex] || defaultTab;

  return {
    activeTab,
  };
}
