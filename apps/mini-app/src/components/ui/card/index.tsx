import type { ViewProps } from '@tarojs/components'
import type { PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface CardProps extends ViewProps {
  size?: 'md' | 'lg'
}

export default function Card(props: PropsWithChildren<CardProps>) {
  const { size = 'md', className, children, ...restProps } = props

  return (
    <View
      className={classNames(styles.card, styles[size], { [styles.hasActive]: !!restProps.onClick }, className)}
      {...restProps}
    >
      {children}
    </View>
  )
}
