import { cn } from '@repo/utils';
import Image from 'next/image';
import * as React from 'react';

// Define the structure for each stat to be displayed
interface Stat {
  label: string;
  value: string | number;
}

// Define the props for the PropertyCard component
export interface UserInfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The URL of the property image. */
  imageUrl: string;
  /** An accessible label for the image. */
  imageAlt?: string;
  /** The main title or name of the property. */
  title: string;
  /** The price of the property. */
  price: number;
  /** The pricing period, e.g., "per night". */
  pricePeriod?: string;
  /** A short description of the property. */
  description: string;
  /** An array of stats to display, like rating, days, etc. */
  stats: Stat[];
  /** The label for the main action button. */
  actionLabel: string;
  /** The function to call when the action button is clicked. */
  onActionClick?: () => void;
}

export const UserInfoCard = React.forwardRef<HTMLDivElement, UserInfoCardProps>(
  (
    {
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      imageUrl,
      imageAlt,
      title,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      price,
      pricePeriod = 'per night',
      description,
      stats,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      actionLabel,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onActionClick,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm',
          className,
        )}
        {...props}
      >
        <div className="flex flex-1 flex-col gap-2 md:gap-4 p-2 md:p-4 lg:p-0">
          <div className="flex lg:flex-col gap-2 md:gap-4 items-start">
            <div className="aspect-square shrink-0 w-18 md:w-32 rounded-lg lg:rounded-none lg:w-full overflow-hidden">
              <Image
                src="/avatars/shadcn.jpg"
                alt={imageAlt || title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                width={300 * 2}
                height={300 * 2}
                loading="eager"
              />
            </div>
            <div className="flex-1 lg:px-4">
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <p className="text-lg font-semibold text-foreground">
                {/* ${price}{' '} */}
                <span className="text-sm font-normal text-muted-foreground">
                  {pricePeriod}
                </span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:px-4 lg:pb-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-muted p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="flex gap-4 lg:px-4 lg:pb-4">
            <Button className="flex-1" asChild>
              <Link href="/user/recharge">
                <Wallet className="size-4" />
                <span>充值</span>
              </Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/user/withdraw">
                <LogOut className="size-4" />
                <span>提现</span>
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    );
  },
);
UserInfoCard.displayName = 'UserInfoCard';
