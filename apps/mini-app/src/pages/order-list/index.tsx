import OrderItemCard from '@/components/common/order-item-card'
import IconFont from '@/components/iconfont'
import PageLayout from '@/components/layouts/page-layout'
import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function OrderList() {
  const onViewOrderHistory = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/order-history/index',
    })
  })
  return (
    <PageLayout className={styles.root}>
      <NavBar title="订单列表" />
      <View className={styles.content}>
        <OrderItemCard></OrderItemCard>
        <OrderItemCard></OrderItemCard>
        <OrderItemCard></OrderItemCard>
        <Card size="md" onClick={onViewOrderHistory}>
          <Cell
            label="历史订单"
            action={<IconFont name="arrow-right" size={22} color="#222" />}
          ></Cell>
        </Card>
        <View style={{ height: '50vh' }}></View>
      </View>
    </PageLayout>
  )
}
