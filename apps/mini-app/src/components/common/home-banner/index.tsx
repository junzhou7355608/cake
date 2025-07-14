import logo from '@/assets/images/common/logo.png'
import { Image, View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './index.module.scss'

export default function HomeBanner() {
  const [opacity, setOpacity] = useState(0)

  usePageScroll((e) => {
    const newOpacity = Math.min(1, Math.max(0, e.scrollTop / 200))
    setOpacity(newOpacity)
  })

  return (
    <View className={styles.homeBanner}>
      <View className={styles.mask}></View>
      <View
        className={classNames(styles.navBar)}
        style={{
          opacity,
        }}
      >
        <View className={styles.content}>盈盈甜品屋</View>
      </View>
      <Image mode="widthFix" className={styles.image} src={logo}></Image>
    </View>
  )
}
