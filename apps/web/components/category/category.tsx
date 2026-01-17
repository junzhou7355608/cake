'use client';

import { ButtonGroup, Card, CardContent } from '@repo/ui';
import { cn } from '@repo/utils';
import {
  BadgeDollarSign,
  Bitcoin,
  ChessQueen,
  Crown,
  LucideIcon,
  Tv,
  Volleyball,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { CategoryTabItem } from './category-tab-item';

export interface CategoryItem {
  id: number;
  name: string;
  icon: LucideIcon;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    name: 'Slots',
    icon: ChessQueen,
  },
  {
    id: 2,
    name: 'Sports',
    icon: Volleyball,
  },
  {
    id: 3,
    name: 'Lottery',
    icon: BadgeDollarSign,
  },
  {
    id: 4,
    name: 'Crypto',
    icon: Bitcoin,
  },
  {
    id: 5,
    name: 'Live',
    icon: Tv,
  },
  {
    id: 6,
    name: 'VIP',
    icon: Crown,
  },
];

export function Category() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex items-start md:hidden mt-2">
      <div className="w-30 sticky top-16 self-start min-h-[calc(100vh-8rem)] bg-background">
        <ButtonGroup className="w-full" orientation="vertical">
          {categories.map((category) => (
            <CategoryTabItem
              key={category.id}
              variant={
                activeCategory?.id === category.id ? 'default' : 'outline'
              }
              onClick={() => setActiveCategory(category)}
            >
              <category.icon className="size-4 shrink-0" />
              <span className="min-w-0 truncate">{category.name}</span>
            </CategoryTabItem>
          ))}
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-2 flex-1 pl-2">
        {[...new Array(10)].fill(0).map((_, index) => (
          <Card
            key={index}
            className={cn(
              'cursor-pointer py-0 overflow-hidden border border-transparent transform-border duration-200 hover:border-primary',
            )}
          >
            <CardContent className="flex flex-col aspect-340/100 px-0 relative">
              <div className="aspect-340/100">
                <Image
                  src={`/games/${index + 1}.webp`}
                  alt={`event ${index + 1}`}
                  width={340 * 2}
                  height={100 * 2}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
