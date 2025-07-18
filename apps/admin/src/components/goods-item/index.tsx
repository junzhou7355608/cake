import { Card, Ellipsis, Image } from 'antd-mobile'
import { Icons } from '../Icons'

export default function GoodsItem() {
  const demoSrc =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'

  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden">
          <Image className="!w-full !h-full" fit="cover" src={demoSrc} />
        </div>
        <div className="flex flex-col justify-between flex-1 h-[80px]">
          <div>
            <div className="text-base text-gray-900">商品名称</div>
            <Ellipsis
              className="text-sm text-gray-500"
              direction="end"
              content="商品描述商品描述商品描述商品描述"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium">¥100</span>
            <div className="text-xs text-gray-500">库存: 100</div>
          </div>
        </div>
        <Icons className="size-[18px]" name="IconChevronRight" />
      </div>
    </Card>
  )
}
