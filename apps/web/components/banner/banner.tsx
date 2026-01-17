import { Card, CardContent } from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';
import { TiltCard } from '../tilt-card';

const banners = [
  {
    title: '领先两球提前赔付优惠',
    description: '仅适用于新客户及符合资格的客户。投注限制及条款与规则适用。',
    imageUrl: '/events/1.webp',
  },
  {
    title: '替补+',
    description: '投注限制及条款与规则适用。',
    imageUrl: '/events/2.jpeg',
  },
];

export function Banner() {
  return (
    <div
      className={cn(
        'grid gap-0 grid-cols-1',
        'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-14',
        'md:gap-2 xl:gap-4',
      )}
    >
      {banners.map((item, index) => (
        <div
          key={index}
          className={cn(
            'sm: md:col-span-1 lg:col-span-2 xl:col-span-1 2xl:col-span-4 m-1',
          )}
        >
          <TiltCard>
            <Card className="border border-transparent cursor-pointer py-0 overflow-hidden transform-border duration-200 hover:border-primary">
              <CardContent className="flex flex-col aspect-340/150 px-0 relative">
                <div className="aspect-340/150">
                  <Image
                    src={item.imageUrl}
                    alt={`event ${index + 1}`}
                    width={340 * 2}
                    height={150 * 2}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </div>
      ))}
    </div>
  );
}
