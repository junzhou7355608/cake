'use client';

import { useRouterTab } from '@/hooks';
import { Calendar, Home, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TabBar, TabBarItem } from './tab-bar';

export function RouterTabBar() {
  const t = useTranslations('home');

  const { activeTab } = useRouterTab();

  const tabs: TabBarItem[] = [
    {
      id: 'home',
      label: t('home'),
      icon: Home,
      href: '/',
    },
    {
      id: 'events',
      label: t('events'),
      icon: Calendar,
      href: '/events',
    },
    {
      id: 'user',
      label: t('user'),
      icon: User,
      href: '/user',
    },
  ];

  return <TabBar activeTab={activeTab} items={tabs} />;
}
