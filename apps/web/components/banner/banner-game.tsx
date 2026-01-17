import Image from 'next/image';
import { CategoryCarousel } from '../category';

export function BannerGame() {
  return (
    <div className="flex w-full mt-16 relative">
      <div className="w-full h-125 relative">
        <Image
          src="/events/7.jpeg"
          alt="banner-game"
          width={1500}
          height={500}
          className="w-full h-full object-cover object-left"
        />
        {/* <div
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-10 w-30',
            'bg-linear-to-r from-background to-transparent',
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-10 w-30',
            'bg-linear-to-l from-background to-transparent',
          )}
          aria-hidden="true"
        /> */}
      </div>
      <div className="w-full absolute bottom-0 left-0 px-6 pb-12">
        <div className="flex items-center justify-around px-12 py-12">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-xl font-bold">Mighty Jackpot</p>
            <p className="text-[32px] font-bold">$1,465,828.44</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-xl font-bold">Mighty Jackpot</p>
            <p className="text-[32px] font-bold">$1,465,828.44</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-xl font-bold">Mighty Jackpot</p>
            <p className="text-[32px] font-bold">$1,465,828.44</p>
          </div>
        </div>
        <CategoryCarousel />
      </div>
    </div>
  );
}
