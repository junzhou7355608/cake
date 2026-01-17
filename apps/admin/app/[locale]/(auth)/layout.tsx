import { AppSidebar } from '@/components';
import { AppBreadcrumb } from '@/components/app-sidebar/app-breadcrumb';
import { redirect } from '@/i18n/navigation';
import { getServerToken } from '@/utils';
import {
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@repo/ui';
import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

export default async function Layout(props: PropsWithChildren) {
  const { children } = props;

  const token = await getServerToken();

  const locale = await getLocale();

  if (!token) {
    return redirect({ href: '/login', locale });
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <AppBreadcrumb />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
