import type { PropsWithChildren } from 'react'
import { useTabbarInit } from '@/hooks/useTabbar'
import { ui } from '@/utils/ui'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface PageLayoutProps {
  className?: string
}

export default function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  const { className, children } = props

  useTabbarInit()

  return (
    <View
      className={classNames(styles.pageLayout, className)}
      style={
        {
          '--safe-area-top': `${ui.safeArea.top()}px`,
          '--safe-area-bottom': `${ui.safeArea.bottom()}px`,
          '--status-bar-height': `${ui.statusBar.height()}px`,
          '--navigator-height': `${ui.navigator.height()}px`,
          '--navigator-bottom': `${ui.navigator.bottom()}px`,
          '--tab-bar-height': `${ui.tabBar.height()}px`,
          '--page-top': `${ui.page.top()}px`,
          '--page-bottom': `${ui.page.bottom()}px`,
          '--theme-color': `${ui.theme.color.primary}`,
          '--theme-background': `${ui.theme.color.background}`
        } as React.CSSProperties
      }
    >
      {children}
    </View>
  )
}
