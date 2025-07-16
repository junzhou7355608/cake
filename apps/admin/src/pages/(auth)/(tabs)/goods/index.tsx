import GoodsItem from '@/components/goods-item'
import GoodsTool from '@/components/goods-tool'
import { Badge, SideBar } from 'antd-mobile'

export default function Goods() {
  const tabs = [
    {
      key: 'key1',
      title: '分类一',
      badge: Badge.dot
    },
    {
      key: 'key2',
      title: '分类二',
      badge: '5'
    },
    {
      key: 'key3',
      title: '分类三',
      badge: '99+',
      disabled: true
    }
  ]

  return (
    <div className="goods-tabs">
      <div className="flex">
        <SideBar style={{ '--width': '90px' }}>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
        <div className="min-h-[120vh] px-3 py-1 flex-1 bg-white">
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
        </div>
      </div>

      <GoodsTool />
    </div>
  )
}
