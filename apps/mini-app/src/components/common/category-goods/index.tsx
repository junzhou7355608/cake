/* eslint-disable react/no-array-index-key */
/* eslint-disable unicorn/no-new-array */
import Button from '@/components/ui/button'
import Price from '@/components/ui/price'
import { Image, View } from '@tarojs/components'
import styles from './index.module.scss'

export interface CategoryGoodsProps {
  onBuy?: (goods: any) => void
  onGoodsDetails?: (goods: any) => void
}

export default function CategoryGoods(props: CategoryGoodsProps) {
  const { onBuy, onGoodsDetails } = props

  return (
    <View className={styles.goods}>
      {[...new Array(50)].map((_, index) => (
        <View className={styles.item} key={index} onClick={() => onGoodsDetails?.(index)}>
          <Image className={styles.image} src={`https://picsum.photos/200/300?random=${index}`}></Image>
          <View className={styles.content}>
            <View className={styles.top}>
              <View className={styles.name}>{`商品名称${index + 1}`}</View>
              <View className={styles.desc}>{`商品描述描述描述描述描述描述描述描述${index + 1}`}</View>
            </View>
            <View className={styles.bottom}>
              <Price primary size="xs" value={100} />
              <Button size="sm" type="primary" onClick={() => onBuy?.(index)}>购买</Button>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
