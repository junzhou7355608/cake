'use client';

import { useRouterTab } from '@/hooks';
import { PageTabBar, PageTabItem } from './page-tab-bar';

export function AppPageTabBar() {
  const { activeTab } = useRouterTab({
    defaultTab: 'profile',
    defaultIndex: 2,
  });

  const tabs: PageTabItem[] = [
    {
      id: 'profile',
      label: '个人信息',
      href: '/user/profile',
    },
    {
      id: 'recharge',
      label: '存款',
      href: '/user/recharge',
    },
    {
      id: 'withdraw',
      label: '提现',
      href: '/user/withdraw',
    },
    {
      id: 'fund-detail',
      label: '资金明细',
      href: '/user/fund-detail',
    },
    {
      id: 'game-record',
      label: '游戏记录',
      href: '/user/game-record',
    },
    {
      id: 'report',
      label: '个人报表',
      href: '/user/report',
    },
  ];

  return <PageTabBar activeTab={activeTab} title="个人中心" tabs={tabs} />;
}
