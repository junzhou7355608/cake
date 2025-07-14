import IconFont from '@/components/iconfont'
import Card from '@/components/ui/card'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export interface AddressItemCardProps {

}

export default function AddressItemCard() {
  const onEditAddress = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/address-edit/index',
    })
  })

  return (
    <Card onClick={onEditAddress}>
      <View className={styles.item}>
        <View className={styles.content}>
          <View className={styles.name}>
            <Text>富士君荟</Text>
          </View>
          <View className={styles.subName}>
            宝安区宝体路1号
          </View>
          <View className={styles.desc}>
            <Text>周先生</Text>
            <Text>189****9282</Text>
          </View>
        </View>

        <IconFont name="arrow-right" size={22} color="#222" />
      </View>

    </Card>
  )
}
