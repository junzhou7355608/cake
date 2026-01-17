'use client';

import { Button } from '@repo/ui';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Game = {
  gameCode: string;
  entryImage: string;
  gameName: string;
  category: string;
  redirectUrl: string;
};

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: 'gameCode',
    header: '游戏编号',
  },
  {
    accessorKey: 'entryImage',
    header: '入口图',
    cell: ({ row }) => {
      return (
        <Image
          className="w-14 h-14 object-cover rounded-md"
          src={row.original.entryImage}
          alt={row.original.gameName}
          width={100}
          height={100}
          unoptimized
        />
      );
    },
  },
  {
    accessorKey: 'gameName',
    header: '游戏名称',
  },
  {
    accessorKey: 'category',
    header: '所属分类',
  },
  {
    accessorKey: 'redirectUrl',
    header: '跳转链接',
  },
  {
    accessorKey: 'action',
    header: '操作',
    cell: () => {
      return (
        <Button variant="outline" size="sm">
          编辑
        </Button>
      );
    },
  },
];
