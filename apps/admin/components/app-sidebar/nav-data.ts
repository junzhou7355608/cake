import { SquareTerminal } from 'lucide-react';

export const NAV_ITEMS = [
  {
    title: '游戏管理',
    url: '#',
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: '游戏列表',
        url: '/game-list',
      },
      {
        title: '游戏分类',
        url: '/game-category',
      },
    ],
  },
];
