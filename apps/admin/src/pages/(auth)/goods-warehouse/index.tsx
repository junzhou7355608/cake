import ActionBar from '@/components/action-bar'
import GoodsItem from '@/components/goods-item'
import NavBar from '@/components/nav-bar'
import { Button, Tabs } from 'antd-mobile'

export default function GoodsWarehouse() {
  return (
    <div className="goods-warehouse">
      <NavBar>仓库管理</NavBar>
      <Tabs
        style={{
          '--content-padding': 0
        }}
      >
        <Tabs.Tab title="SPU" key="spu">
          <div className="flex flex-col gap-[1px] pb-[var(--height-tabbar)]">
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="SKU" key="sku">
          <div className="flex flex-col gap-[1px] pb-[var(--height-tabbar)]">
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
        </Tabs.Tab>
      </Tabs>

      <ActionBar>
        <Button block color="primary">
          新增商品
        </Button>
      </ActionBar>
    </div>
  )
}
