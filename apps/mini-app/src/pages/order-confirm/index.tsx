import OrderBuyTypeCard from '@/components/common/order-buy-type-card'
import OrderGoodsCard from '@/components/common/order-goods-card'
import OrderInfoCard from '@/components/common/order-info-card'
import OrderPriceCard from '@/components/common/order-price-card'
import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import NavBar from '@/components/ui/nav-bar'
import Price from '@/components/ui/price'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function OrderConfirm() {
  const onPay = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/pay-success/index'
    })
  })

  return (
    <PageLayout className={styles.root}>
      <NavBar title="订单确认" />
      <View className={styles.content}>
        <OrderBuyTypeCard />
        <OrderInfoCard />
        <OrderGoodsCard />
        <OrderPriceCard />
        <View style={{ height: '50vh' }}></View>
      </View>

      <ActionBar>
        <Text className={styles.actionBarLabel}>
          <Text className={styles.text}>应付：</Text>
          <Price primary value={110} />
        </Text>
        <Button type="primary" size="md" onClick={onPay}>
          立即支付
        </Button>
      </ActionBar>
    </PageLayout>
  )
}
