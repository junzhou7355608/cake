import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'
import Price from '@/components/ui/price'
import { Text, View } from '@tarojs/components'

import styles from './index.module.scss'

export type OrderPriceCardProps = object

export default function OrderPriceCard() {
  return (
    <Card>
      <Cell label="商品总价" action={<Price size="sm" value={100} />}></Cell>
      <Cell label="配送费" action={<Price size="sm" value={10} />}></Cell>
      <Cell label="优惠券" value="暂无优惠券"></Cell>
      <View className={styles.total}>
        <Text className={styles.label}>合计:</Text>
        <Price size="md" value={110} />
      </View>
    </Card>
  )
}
