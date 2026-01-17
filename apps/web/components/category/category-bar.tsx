'use client';

import { Link } from '@/i18n/navigation';
import { Button } from '@repo/ui';

interface CategoryBarProps {
  title: string;
  moreText?: string;
  moreLink?: string;
}

export function CategoryBar({ title, moreText, moreLink }: CategoryBarProps) {
  return (
    <div className="flex items-center justify-between pt-6 pb-4 px-1">
      <h2 className="text-lg font-bold">{title}</h2>
      {moreText && (
        <>
          {moreLink ? (
            <Button
              className="text-xs rounded-full hover:bg-background hover:text-foreground/80"
              asChild
              variant="outline"
              size="sm"
            >
              <Link href={moreLink}>{moreText}</Link>
            </Button>
          ) : (
            <Button
              className="text-xs rounded-full hover:bg-background hover:text-foreground/80"
              variant="outline"
              size="sm"
            >
              {moreText}
            </Button>
          )}
        </>
      )}
    </div>
  );
}
