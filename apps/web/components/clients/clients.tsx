import { cn } from '@repo/utils';
import Image from 'next/image';

export function Clients() {
  return (
    <div
      className={cn(
        'grid gap-2 grid-cols-3 px-1',
        'sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8',
      )}
    >
      {[...new Array(13)].fill(0).map((_, index) => (
        <div
          key={index}
          className={cn(
            'bg-secondary/60 cursor-pointer user-select-none rounded-md py-2.5 px-5 transition-colors duration-200 hover:bg-secondary',
            'transition-background duration-200',
            'aspect-160/48',
            'sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1',
          )}
        >
          <Image
            src={`/clients/${index + 1}.svg`}
            alt={`clients ${index + 1}`}
            width={160 * 2}
            height={48 * 2}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
