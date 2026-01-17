'use client';

import { Link } from '@/i18n/navigation';
import { tokenAtom } from '@/stores';
import { useGlobalStoreAtomValue } from '@/utils/store';
import { Button, SidebarTrigger } from '@repo/ui';
import { cn } from '@repo/utils';
import { useEffect, useState } from 'react';
import { AppNavigationMenu } from './app-navigation-menu';
import { LoginDialog } from './login-dialog';
import { SignUpDialog } from './sign-up-dialog';

export function Header() {
  const token = useGlobalStoreAtomValue(tokenAtom);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-background shadow-md sticky top-0 z-50 border-b">
      <div
        className={cn(
          'h-14 px-2 container mx-auto flex items-center justify-between z-10 relative',
          'md:px-4',
        )}
      >
        <div className="flex items-center gap-10 h-full  m-1">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="size-9 hidden md:flex"></SidebarTrigger>

            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>
          {/* <Menu /> */}
          <AppNavigationMenu />
        </div>
        {loaded && (
          <div className="items-center flex m-1">
            {!token ? (
              <>
                <SignUpDialog />
                <LoginDialog />
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  className="min-w-20 text-[13px]"
                  size="sm"
                  variant="default"
                  asChild
                >
                  <Link href="/user/recharge">充值</Link>
                </Button>
                <Button
                  className="min-w-20 text-[13px] bg-transparent hover:bg-transparent hover:text-primary hover:border-primary"
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href="/user/withdraw">提现</Link>
                </Button>
                {/* <UserDropdown /> */}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 z-0 w-full h-full flex">
        <div
          className={cn('flex-1 bg-linear-to-r from-background to-transparent')}
        />
        <div className="container shrink-0"></div>
        <div
          className={cn('flex-1 bg-linear-to-l from-background to-transparent')}
        />
      </div>
    </div>
  );
}
