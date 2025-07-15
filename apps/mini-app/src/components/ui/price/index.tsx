import { Text } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface PriceProps {
  className?: string
  value?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  primary?: boolean
}

export default function Price(props: PriceProps) {
  const { size = 'lg', primary, className, value = 0 } = props

  return (
    <Text
      className={classNames(
        styles.price,
        styles[size],
        { [styles.primary]: primary },
        className
      )}
    >
      <Text className={styles.prefix}>¥</Text>
      <Text className={styles.value}>{value.toFixed(2)}</Text>
    </Text>
  )
}
