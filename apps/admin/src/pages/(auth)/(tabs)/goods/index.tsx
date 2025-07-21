import GoodsCategoryItem from '@/components/goods-category-item'
import GoodsTool from '@/components/goods-tool'
import { Icons } from '@/components/Icons'
import NavBar from '@/components/nav-bar'
import { Badge, Footer, SideBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function Goods() {
  const navigate = useNavigate()
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
      <NavBar
        backIcon={false}
        right={
          <div className="flex justify-end">
            <Icons
              onClick={() => {
                navigate('/goods-add')
              }}
              className="size-[20px] text-primary"
              name="IconPlus"
            />
          </div>
        }
      >
        商品管理
      </NavBar>
      <div className="flex">
        <SideBar style={{ '--width': '90px' }}>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
        <div className="px-3 py-1 pb-[200px] flex-1 bg-white">
          <div>
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
            <GoodsCategoryItem />
          </div>
          <Footer label="没有更多了"></Footer>
        </div>
      </div>

      <GoodsTool />
    </div>
  )
}
