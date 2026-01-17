'use client';

import { RouterTab, useRouterTab } from '@/hooks';
import { Link } from '@/i18n/navigation';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('home');

  const { activeTab } = useRouterTab();

  const tabs: RouterTab[] = [
    {
      id: 'home',
      label: t('home'),
      href: '/',
    },
    {
      id: 'events',
      label: t('events'),
      href: '/events',
    },
  ];

  return (
    <div className="justify-center items-center w-full h-full hidden md:flex">
      <div className="relative flex gap-8 h-full">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`relative h-full flex items-center transition-colors cursor-pointer text-sm font-bold ${
              activeTab === tab.id ? 'text-primary' : ''
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
