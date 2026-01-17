import {
  AppMobileLogout,
  SwitchLanguageDrawer,
  UserInfoCard,
} from '@/components';
import { Link, redirect } from '@/i18n/navigation';
import { getIsMobileFromHeaders } from '@/utils';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@repo/ui';
import {
  BadgeCheckIcon,
  ChevronRightIcon,
  FileBadgeIcon,
  FileTextIcon,
  Gamepad2Icon,
  LanguagesIcon,
  LogOutIcon,
  LucideIcon,
  WalletIcon,
} from 'lucide-react';
import { getLocale } from 'next-intl/server';

interface ContentItem {
  icon: LucideIcon;
  title: string;
  href: string;
}

const content: ContentItem[] = [
  {
    icon: BadgeCheckIcon,
    title: '个人信息',
    href: '/user/profile',
  },
  {
    icon: WalletIcon,
    title: '存款',
    href: '/user/recharge',
  },
  {
    icon: LogOutIcon,
    title: '提现',
    href: '/user/withdraw',
  },
  {
    icon: FileTextIcon,
    title: '资金明细',
    href: '/user/fund-detail',
  },
  {
    icon: Gamepad2Icon,
    title: '游戏记录',
    href: '/user/game-record',
  },
  {
    icon: FileBadgeIcon,
    title: '个人报表',
    href: '/user/report',
  },
];

export default async function Page() {
  const locale = await getLocale();
  const isMobile = await getIsMobileFromHeaders();

  if (!isMobile) {
    return redirect({ href: '/user/profile', locale });
  }

  return (
    <div className="">
      <UserInfoCard
        className="col-span-4 md:col-span-4 lg:col-span-1"
        imageUrl="https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
        imageAlt="Modern wooden cabin in a grassy, mountainous landscape"
        title="Iceland Cabin"
        price={680}
        pricePeriod="id:89274838"
        description="Cozy cabin nestled in Iceland's breathtaking landscape, offering stunning views of mountains and Northern Lights."
        stats={[{ label: '余额', value: 999.88 }]}
        actionLabel="充值"
        onActionClick={() => {
          console.log('Reserve');
        }}
      />
      <div className="flex w-full flex-col pt-4">
        <ItemGroup className="gap-2">
          {content.map((item) => (
            <Item key={item.href} variant="outline" size="sm" asChild>
              <Link href={item.href}>
                <ItemMedia>
                  <item.icon className="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </Link>
            </Item>
          ))}
          <SwitchLanguageDrawer>
            <Item key="switch-language" variant="outline" size="sm">
              <ItemMedia>
                <LanguagesIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>切换语言</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </Item>
          </SwitchLanguageDrawer>
        </ItemGroup>
      </div>
      <AppMobileLogout />
    </div>
  );
}
