import OrderItemCard from '@/components/common/order-item-card'
import PageLayout from '@/components/layouts/page-layout'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export default function OrderHistory() {
  return (
    <PageLayout className={styles.root}>
      <NavBar title="历史订单" />
      <View className={styles.content}>
        <OrderItemCard></OrderItemCard>
        <OrderItemCard></OrderItemCard>
        <View style={{ height: '50vh' }}></View>
      </View>
    </PageLayout>
  )
}
