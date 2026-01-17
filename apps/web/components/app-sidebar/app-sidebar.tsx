'use client';

import { BadgeDollarSign, ChessQueen, Volleyball } from 'lucide-react';
import * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from '@repo/ui';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader className="p-2.5">
        <SidebarTrigger className="size-9"></SidebarTrigger>
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain
          items={[
            {
              title: 'Slots',
              url: '#',
              icon: ChessQueen,
              isActive: true,
              items: [
                {
                  title: 'History',
                  url: '#',
                  imageUrl: '/games/1.webp',
                },
                {
                  title: 'Starred',
                  url: '#',
                  imageUrl: '/games/2.webp',
                },
                {
                  title: 'Settings',
                  url: '#',
                  imageUrl: '/games/3.webp',
                },
              ],
            },
            {
              title: 'Sports',
              url: '#',
              icon: Volleyball,
              items: [
                {
                  title: 'Genesis',
                  url: '#',
                  imageUrl: '/games/4.webp',
                },
                {
                  title: 'Explorer',
                  url: '#',
                  imageUrl: '/games/5.webp',
                },
                {
                  title: 'Quantum',
                  url: '#',
                  imageUrl: '/games/6.webp',
                },
              ],
            },
            {
              title: 'Lottery',
              url: '#',
              icon: BadgeDollarSign,
              items: [
                {
                  title: 'Genesis',
                  url: '#',
                  imageUrl: '/games/4.webp',
                },
                {
                  title: 'Explorer',
                  url: '#',
                  imageUrl: '/games/5.webp',
                },
                {
                  title: 'Quantum',
                  url: '#',
                  imageUrl: '/games/6.webp',
                },
              ],
            },
          ]}
        />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter className="p-2.5">
        <NavUser
          user={{
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: '/avatars/shadcn.jpg',
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
