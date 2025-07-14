import type { ViewProps } from '@tarojs/components'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface CellProps extends ViewProps {
  label?: string
  value?: string
  action?: React.ReactNode
}

export default function Cell(props: CellProps) {
  const { label, value, action, className, children, ...restProps } = props

  return (
    <View
      className={classNames(styles.cell, { [styles.hasActive]: !!restProps.onClick }, className)}
      {...restProps}
    >
      <View className={styles.label}>
        {label}
      </View>
      {action || (
        <View className={styles.value}>
          {value}
        </View>
      )}
    </View>
  )
}
