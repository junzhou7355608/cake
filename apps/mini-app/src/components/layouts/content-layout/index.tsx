import type { PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export interface ContentLayoutProps {

}

export default function ContentLayout(props: PropsWithChildren<ContentLayoutProps>) {
  const { children } = props

  return (
    <View
      className={styles.contentLayout}
    >
      {children}
    </View>
  )
}
