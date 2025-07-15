import OrderDetailCard from '@/components/common/order-detail-card'
import OrderGoodsCard from '@/components/common/order-goods-card'
import OrderPriceCard from '@/components/common/order-price-card'
import OrderStatusCard from '@/components/common/order-status-card'
import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function OrderDetail() {
  const onPay = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/pay-success/index'
    })
  })

  return (
    <PageLayout className={styles.root}>
      <NavBar title="订单详情" />
      <View className={styles.content}>
        <OrderStatusCard />
        <OrderGoodsCard />
        <OrderPriceCard />
        <OrderDetailCard />
        <View style={{ height: '10vh' }}></View>
      </View>

      <ActionBar className={styles.actionBar}>
        <Button type="primary" size="md" onClick={onPay}>
          立即支付
        </Button>
      </ActionBar>
    </PageLayout>
  )
}
