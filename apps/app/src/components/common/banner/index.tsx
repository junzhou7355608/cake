import banner from '@/assets/images/category/banner.png'
import { Image, View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './index.module.scss'

export interface BannerProps {
  className?: string
}

export default function Banner(props: BannerProps) {
  const { className } = props

  const [opacity, setOpacity] = useState(0)

  usePageScroll((e) => {
    const newOpacity = Math.min(1, Math.max(0, e.scrollTop / 100))
    setOpacity(newOpacity)
  })

  return (
    <View className={classNames(styles.banner, className)}>
      <View className={styles.mask}></View>
      <View
        className={classNames(styles.navBar)}
        style={{
          opacity,
        }}
      >
        <View className={styles.navBarTitle}>分类</View>
      </View>
      <Image mode="widthFix" className={styles.image} src={banner}></Image>

      <View className={styles.bottomMask}></View>
    </View>
  )
}
