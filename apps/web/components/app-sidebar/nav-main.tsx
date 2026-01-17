'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@repo/ui';
import { cn } from '@repo/utils';
import Image from 'next/image';

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    imageUrl: string;
  }[];
}

export interface NavMainProps {
  items: NavItem[];
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup className="p-2.5">
      {/* <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className="h-9 p-2.5 group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-2.5!"
                  tooltip={item.title}
                >
                  {item.icon && <item.icon />}
                  <span className="group-data-[collapsible=icon]:opacity-0">
                    {item.title}
                  </span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="border-none mx-0 py-2 px-0 gap-2">
                  {item.items?.map((subItem, index) => (
                    <Card
                      key={subItem.title}
                      className={cn(
                        'cursor-pointer py-0 overflow-hidden border border-transparent',
                        index === 0 && 'border-primary',
                      )}
                    >
                      <CardContent className="flex flex-col aspect-340/100 px-0 relative">
                        <div className="aspect-340/100">
                          <Image
                            src={subItem.imageUrl}
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
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
