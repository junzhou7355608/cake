import goods from '@/assets/images/goods/cake_1.jpg'
import Card from '@/components/ui/card'
import Price from '@/components/ui/price'
import { Image, View } from '@tarojs/components'

import styles from './index.module.scss'

export interface OrderGoodsCardProps {

}

export default function OrderGoodsCard() {
  return (
    <Card>
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
      <View className={styles.item}>
        <Image className={styles.image} src={goods}></Image>
        <View className={styles.content}>
          <View className={styles.name}>焙茶杏干乳酪卷</View>
          <View className={styles.desc}>规格：3寸、焙茶胚、杏干夹心</View>
          <View className={styles.desc}>数量：1</View>
        </View>
        <View className={styles.price}>
          <Price size="sm" value={50} />
        </View>
      </View>
    </Card>
  )
}
