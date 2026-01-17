'use client';

import { Link } from '@/i18n/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
} from '@repo/ui';
import { LogOut, RefreshCw, Wallet } from 'lucide-react';

export function UserInfo() {
  return (
    <Card className="py-4">
      <CardContent className="flex items-center justify-between px-4">
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
              <RefreshCw className="size-4 text-amber-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/recharge"
            className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="bg-primary text-primary-foreground rounded-lg p-2">
              <Wallet className="size-4" />
            </div>
            <p className="text-xs font-medium">充值</p>
          </Link>
          <Link
            href="/withdraw"
            className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="bg-primary text-primary-foreground rounded-lg p-2">
              <LogOut className="size-4" />
            </div>
            <p className="text-xs font-medium">提现</p>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
