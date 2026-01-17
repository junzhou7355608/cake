import { CategoryAll, PageTabBar, PageTabItem } from '@/components';
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@repo/ui';
import { ArrowUpDown } from 'lucide-react';

export default function Page() {
  const tabs: PageTabItem[] = [
    {
      id: 'special',
      label: '最新发掘',
    },
    {
      id: 'bonus',
      label: '本周热门',
    },
    {
      id: 'early-payout',
      label: '猜您喜欢累积彩池',
    },
  ];
  return (
    <div>
      <PageTabBar
        activeTab="special"
        title="全部游戏"
        tabs={tabs}
        action={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" variant="outline" size="sm">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                排序
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-37.5">
              <DropdownMenuCheckboxItem className="capitalize" checked>
                默认排序
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="capitalize">
                最新上架
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="capitalize">
                最热游戏
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="capitalize">
                最高赔率
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      />
      <CategoryAll />
    </div>
  );
}
