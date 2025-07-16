import { AppstoreOutline, FolderOutline, ShopbagOutline, UserOutline } from 'antd-mobile-icons'
import {
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {  TabBar as AntdTabBar } from 'antd-mobile'

export default function TabBar() {

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppstoreOutline />,
    },
    {
      key: '/order',
      title: '订单',
      icon:<FolderOutline />,
    },
    {
      key: '/goods',
      title: '商品',
      icon: <ShopbagOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return <div className="w-full md:w-[430px] fixed bottom-0 left-0 right-0 m-auto h-tabbar bg-white flex justify-center items-center">
    <AntdTabBar className='w-full' activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <AntdTabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </AntdTabBar>
  </div>
}
