import GoodsItem from '@/components/goods-item'
import NavBar from '@/components/nav-bar'
import { Footer } from 'antd-mobile'

export default function Order() {
  return (
    <div>
      <NavBar backIcon={false}>订单管理</NavBar>
      <div className="flex flex-col gap-[1px] pb-[100px]">
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
        <Footer label="没有更多了"></Footer>
      </div>
    </div>
  )
}
