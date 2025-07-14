import { useUncontrolled } from '@/hooks/useUncontrolled'
import { Text, View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface TabItem {
  label: string
  value: string
}

export interface TabProps {
  className?: string
  items: TabItem[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export default function Tab(props: TabProps) {
  const { value, defaultValue, onChange, items, className } = props

  const [current, setCurrent] = useUncontrolled({
    value,
    defaultValue,
    finalValue: items[0].value,
    onChange,
  })

  return (
    <View
      className={classNames(styles.tab, className)}
    >
      {items.map(item => (
        <View
          key={item.value}
          className={classNames(styles.item, { [styles.active]: current === item.value })}
          onClick={() => setCurrent(item.value)}
        >
          <Text>{item.label}</Text>
          <View className={styles.line}></View>
        </View>
      ))}
    </View>
  )
}
