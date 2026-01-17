'use client';

import { Link, useRouter } from '@/i18n/navigation';
import { tokenAtom } from '@/stores';
import { useSetGlobalStoreAtom } from '@/utils/store';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@repo/ui';
import { cookie } from '@repo/utils';
import { ChevronRightIcon, LogOut, MenuIcon } from 'lucide-react';
import { Icons } from '../icons';

export function UserDropdown() {
  const router = useRouter();

  const setToken = useSetGlobalStoreAtom(tokenAtom);

  const handleLogout = () => {
    cookie.token.remove();
    setToken(null);
    router.push('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage
                src="/avatars/shadcn.jpg"
                alt="shadcn"
                loading="eager"
              />
              <AvatarFallback className="rounded-lg"></AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-md font-bold">John Doe</p>
              <div className="flex items-center gap-2">
                <p className="text-md font-bold text-amber-500">999€</p>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup className="lg:hidden">
          <DropdownMenuItem asChild>
            <Link href="/user/profile">
              <span>个人中心</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="lg:hidden" />
        <DropdownMenuGroup className="lg:hidden">
          <DropdownMenuItem asChild>
            <Link href="/user/recharge">
              <span>存款</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/user/withdraw">
              <span>提现</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/user/fund-detail">
              <span>资金明细</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/user/game-record">
              <span>游戏记录</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/user/report">
              <span>个人报表</span>
              <ChevronRightIcon className="ml-auto size-4 " />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>切换语言</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Icons name="IconCn" className="size-4" />
                <span>中文</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons name="IconGb" />
                <span>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons name="IconDe" />
                <span>Deutsch</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons name="IconFr" />
                <span>Französisch</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons name="IconId" />
                <span>Indonesia</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>
          <span>Log out</span>
          <LogOut className="ml-auto size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
