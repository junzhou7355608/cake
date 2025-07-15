import type { PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface ActionBarProps {
  className?: string
}

export default function ActionBar(props: PropsWithChildren<ActionBarProps>) {
  const { className, children } = props

  return (
    <View className={styles.actionBar}>
      <View className={styles.fixed}>
        <View className={classNames(styles.content, className)}>
          {children}
        </View>
      </View>
      <View className={styles.static}></View>
    </View>
  )
}
