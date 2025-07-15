import type { PopupProps } from '@/components/ui/popup'
import goods from '@/assets/images/goods/cake_1.jpg'
import IconFont from '@/components/iconfont'
import Button from '@/components/ui/button'
import Popup from '@/components/ui/popup'
import Price from '@/components/ui/price'
import { QuantityInput } from '@/components/ui/quantity-input'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export type GoodsDetailsPopupProps = PopupProps

function GoodsDetailsPopup(props: GoodsDetailsPopupProps) {
  const { visible, onClose } = props

  const onCreateOrder = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/order-confirm/index',
    })
    onClose?.()
  })

  return (
    <Popup visible={visible} onClose={onClose}>
      <View className={styles.root}>
        <View className={styles.close} onClick={onClose}>
          <IconFont name="guanbi" size={32} color="#fff" />
        </View>
        <Image className={styles.image} mode="aspectFill" src={goods}></Image>
        <View className={styles.content}>
          <View className={styles.title}>焙茶杏干乳酪卷</View>
          <View className={styles.subTitle}>
            茶香控狂喜！#焙茶杏干乳酪卷 焙茶的醇厚微苦
            杏干的酸甜软糯乳酪的丝滑绵密 一口下去层次拉满！
          </View>

          <View className={styles.price}>
            <Price value={128} />
            <QuantityInput />
          </View>

          <Button
            type="primary"
            size="lg"
            className={styles.button}
            onClick={onCreateOrder}
          >
            立即购买
          </Button>
        </View>
      </View>
    </Popup>
  )
}

export default GoodsDetailsPopup
