import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';
import { TiltCard } from '../tilt-card';

export function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent className={cn('ml-0', 'md:-ml-2 xl:-ml-4')}>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              'pl-0 basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7',
              'md:pl-2 xl:pl-4',
            )}
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
