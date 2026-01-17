'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav-data';

type BreadcrumbData = {
  parentTitle?: string;
  parentUrl?: string;
  childTitle?: string;
};

function getBreadcrumbData(pathname: string): BreadcrumbData | null {
  for (const group of NAV_ITEMS) {
    for (const item of group.items ?? []) {
      if (pathname === item.url || pathname.endsWith(item.url)) {
        return {
          parentTitle: group.title,
          parentUrl: group.url,
          childTitle: item.title,
        };
      }
    }
  }

  return null;
}

export function AppBreadcrumb() {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumbData(pathname);
  const currentTitle =
    breadcrumb?.childTitle ?? breadcrumb?.parentTitle ?? '首页';

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">首页</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumb?.parentTitle && breadcrumb?.childTitle && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={breadcrumb.parentUrl ?? '#'}>
                {breadcrumb.parentTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {currentTitle && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
