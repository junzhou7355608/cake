import goods from '@/assets/images/goods/cake_1.jpg'
import IconFont from '@/components/iconfont'
import Card from '@/components/ui/card'
import Price from '@/components/ui/price'

import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export type OrderItemCardProps = object

export default function OrderItemCard() {
  const onViewOrder = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/order-detail/index',
    })
  })

  return (
    <Card onClick={onViewOrder}>
      <View className={styles.header}>
        <View className={styles.shop}>
          <Text>盈盈甜品屋</Text>
          <IconFont name="arrow-right" size={20} color="#222" />
        </View>
        <View className={styles.status}>待支付</View>
      </View>
      <View className={styles.item}>
        <Image className={styles.image} src={goods}></Image>
        <View className={styles.content}>
          <View className={styles.name}>抹茶红豆瑞士卷</View>
          <View className={styles.desc}>规格：3寸、抹茶胚、红豆夹心</View>
          <View className={styles.desc}>数量：1</View>
        </View>
        <View className={styles.price}>
          <Price size="sm" value={50} />
        </View>
      </View>

      <View className={styles.footer}>
        <Text>
          <Text>共1件商品, 合计：</Text>
          <Price size="sm" value={50} />
        </Text>
      </View>
    </Card>
  )
}
