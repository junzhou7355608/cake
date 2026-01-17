'use client';

import { PageTabBar, PageTabItem } from '@/components';
import { Link } from '@/i18n/navigation';
import { useIsMobile } from '@repo/hooks';
import { Card, CardContent } from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';
import { useState } from 'react';

export interface EventItem {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function Page() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const events: EventItem[] = [
    {
      title: '领先两球提前赔付优惠',
      description: '仅适用于新客户及符合资格的客户。投注限制及条款与规则适用。',
      imageUrl: '/events/1.webp',
      href: '/events/1',
    },
    {
      title: '替补+',
      description: '投注限制及条款与规则适用。',
      imageUrl: '/events/2.jpeg',
      href: '/events/2',
    },
    {
      title: '最佳赔率保证',
      description: '仅适用于新客户及符合资格的客户。投注限制及条款与规则适用。',
      imageUrl: '/events/3.jpeg',
      href: '/events/3',
    },
    {
      title: '365 Mid+',
      description: '条款与规则适用。 ',
      imageUrl: '/events/4.webp',
      href: '/events/4',
    },
    {
      title: '最佳赔率保证',
      description: '条款与规则适用。 ',
      imageUrl: '/events/5.jpeg',
      href: '/events/5',
    },
    {
      title: '网球退赛保证',
      description: '仅适用于新客户及符合资格的客户。投注限制及条款与规则适用。',
      imageUrl: '/events/8.jpeg',
      href: '/events/8',
    },
    {
      title: '额外机会在加时',
      description: '仅适用于新客户及符合资格的客户。投注限制及条款与规则适用。',
      imageUrl: '/events/9.jpeg',
      href: '/events/9',
    },
  ];

  const tabs: PageTabItem[] = [
    {
      id: 'special',
      label: '特别优惠',
    },
    {
      id: 'bonus',
      label: '增值',
    },
    {
      id: 'early-payout',
      label: '提前赔付优惠',
    },
  ];

  return (
    <div className="">
      <PageTabBar activeTab="special" title="优惠活动" tabs={tabs} />

      <div
        className={cn(
          'grid gap-0 grid-cols-1',
          'sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 2xl:grid-cols-12',
          'md:gap-2 xl:gap-4',
        )}
      >
        {events.map((item, index) => {
          const noHover = hoverIndex !== null && hoverIndex !== index;
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'col-span-1 transition-opacity duration-200',
                noHover ? 'opacity-40' : 'opacity-100',
                'sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-span-3',
              )}
              onMouseEnter={() => !isMobile && setHoverIndex(index)}
              onMouseLeave={() => !isMobile && setHoverIndex(null)}
            >
              <Card className="m-1 border border-transparent cursor-pointer py-0 overflow-hidden transform-border duration-200 hover:border-primary">
                <CardContent className="flex flex-col aspect-340/200 px-0 relative bg-background">
                  <div
                    className={cn(
                      'aspect-340/150 relative',
                      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-35 after:bg-linear-to-t after:from-background after:to-transparent",
                    )}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={`event ${index + 1}`}
                      width={340 * 2}
                      height={150 * 2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={cn('w-full aspect-340/50 p-4 -mt-10 z-10')}>
                    <h3
                      className={cn(
                        'text-[16px] font-bold text-center pb-1 w-full whitespace-nowrap overflow-hidden text-ellipsis',
                        'sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]',
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 text-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
