import { Button } from 'antd-mobile'

export default function GoodsTool() {
  return (
    <div className="w-full md:w-[430px] fixed bottom-[var(--height-tabbar)] left-0 right-0 m-auto h-goods-tool bg-white flex justify-between items-center px-3 border-t border-gray-100 z-10">
      <Button size="mini">分组管理</Button>
      <div className="flex gap-2">
        <Button size="mini">排序管理</Button>
        <Button size="mini">新增商品</Button>
      </div>
    </div>
  )
}
