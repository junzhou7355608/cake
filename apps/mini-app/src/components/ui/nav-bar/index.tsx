import IconFont from '@/components/iconfont'
import { View } from '@tarojs/components'
import { navigateBack } from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './index.module.scss'

export interface NavBarProps {
  className?: string
  title?: string | React.ReactNode
}

export default function NavBar(props: NavBarProps) {
  const { className, title } = props

  const [opacity] = useState(1)

  // usePageScroll((e) => {
  //   const newOpacity = Math.min(1, Math.max(0, e.scrollTop / 100))
  //   setOpacity(newOpacity)
  // })

  const onBack = useMemoizedFn(() => {
    navigateBack()
  })

  return (
    <View className={classNames(styles.navBar, className)}>
      <View className={styles.fixed}>
        <View className={styles.content}>
          <View className={styles.iconBtn} onClick={onBack}>
            <IconFont name="fanhui" size={28} color="#222" />
          </View>
          {typeof title === 'string' ? (
            <View className={styles.title}>{title}</View>
          ) : (
            title
          )}
          <View className={styles.iconBtn} style={{ opacity: 0 }}>
            <IconFont name="guanbi" size={24} color="#222" />
          </View>
        </View>
      </View>
      <View
        className={styles.fixedBg}
        style={{
          opacity
        }}
      ></View>
      <View className={styles.static}></View>
    </View>
  )
}
