import type { IconNames } from '@/components/iconfont'
import IconFont from '@/components/iconfont'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

export interface ServiceItem {
  icon: IconNames
  text: string
  onClick?: () => void
}

export default function MineServices() {
  const services: ServiceItem[] = [
    {
      icon: 'dingdan',
      text: '订单中心',
      onClick: () => {
        Taro.navigateTo({
          url: '/pages/order-list/index'
        })
      }
    },
    {
      icon: 'dizhibu',
      text: '收货地址',
      onClick: () => {
        Taro.navigateTo({
          url: '/pages/address-list/index'
        })
      }
    },
    {
      icon: 'ziliao',
      text: '个人信息',
      onClick: () => {
        Taro.navigateTo({
          url: '/pages/mine-info/index'
        })
      }
    },
    {
      icon: 'shezhi',
      text: '系统设置',
      onClick: () => {
        Taro.navigateTo({
          url: '/pages/system-setting/index'
        })
      }
    }
  ]

  return (
    <View className={styles.services}>
      {services.map((item) => (
        <View className={styles.item} key={item.text} onClick={item.onClick}>
          <View className={styles.icon}>
            <IconFont name={item.icon} size={48} color="#222" />
          </View>
          <View className={styles.text}>{item.text}</View>
        </View>
      ))}
    </View>
  )
}
