'use client';

import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';

export function AppNavigationMenu() {
  return (
    <NavigationMenu viewport={false} className="hidden lg:block">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">首页</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/events">优惠活动</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger
            onPointerDown={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
          >
            钱包
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-75 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/user/recharge">
                    <div className="font-medium">存款</div>
                    <div className="text-muted-foreground">存款描述文案</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/user/withdraw">
                    <div className="font-medium">提现</div>
                    <div className="text-muted-foreground">提现描述文案</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/user/fund-detail">
                    <div className="font-medium">资金明细</div>
                    <div className="text-muted-foreground">
                      资金明细描述文案
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/user/game-record">游戏记录</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onPointerDown={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
          >
            个人中心
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  asChild
                  className="p-0! m-0! hover:bg-transparent!"
                >
                  <Link
                    className="h-full w-full rounded-md no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md"
                    href="/user/profile"
                  >
                    <div
                      className={cn(
                        'h-full w-full rounded-md overflow-hidden relative',
                        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2 after:bg-linear-to-t after:from-background after:to-transparent after:z-0",
                      )}
                    >
                      <Image
                        src="/avatars/shadcn.jpg"
                        alt="user-center"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        width={300 * 2}
                        height={300 * 2}
                        loading="eager"
                      />
                      <div className="flex flex-col gap-1 absolute bottom-0 left-0 w-full p-4 z-10">
                        <p className="text-lg font-bold">John Doe</p>
                        <div className="flex items-center gap-2">
                          <p className="text-md font-bold text-amber-500">
                            999€
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/user/profile" title="个人信息">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/user/recharge" title="存款">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/user/withdraw" title="提现">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/user/report">个人报表</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
