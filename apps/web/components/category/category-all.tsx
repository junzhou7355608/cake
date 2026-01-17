import { Card, CardContent } from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';
import { TiltCard } from '../tilt-card';

export function CategoryAll() {
  return (
    <div
      className={cn(
        'grid gap-0 grid-cols-3',
        'sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7',
        'md:gap-2 xl:gap-4',
      )}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className={cn('col-span-1 transition-opacity duration-200')}
        >
          <TiltCard>
            <Card className="m-1 border border-transparent cursor-pointer py-0 overflow-hidden transform-border duration-200 hover:border-primary">
              <CardContent className="flex aspect-square items-center justify-center px-0">
                <div className="aspect-square">
                  <Image
                    src={`/games/${Math.floor(Math.random() * 20) + 1}.webp`}
                    alt={`game ${index + 1}`}
                    width={600}
                    height={600}
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
