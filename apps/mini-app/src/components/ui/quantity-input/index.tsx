import IconFont from '@/components/iconfont'
import { useUncontrolled } from '@/hooks/useUncontrolled'
import { Input, View } from '@tarojs/components'
import { useMemoizedFn } from 'ahooks'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface QuantityInputProps {
  min?: number
  max?: number
  defaultValue?: number
  value?: number
  onChange?: (value: number) => void
}

export function QuantityInput(props: QuantityInputProps) {
  const { min = 1, max = 99, defaultValue, value, onChange } = props

  const [count, setCount] = useUncontrolled({
    value,
    defaultValue,
    finalValue: min,
    onChange,
  })

  const handleDecrease = useMemoizedFn(() => {
    if (count > min) {
      setCount(count - 1)
    }
  })

  const handleIncrease = useMemoizedFn(() => {
    if (count < max) {
      setCount(count + 1)
    }
  })

  const handleInput = useMemoizedFn((e) => {
    const val = Number(e.detail.value)
    if (!Number.isNaN(val)) {
      setCount(val)
    }
  })

  const handleBlur = useMemoizedFn(() => {
    let newVal = count
    if (count < min) newVal = min
    if (count > max) newVal = max
    if (newVal !== count) setCount(newVal)
  })

  return (
    <View className={styles.root}>
      <View
        className={classNames(styles.item, styles.decrease)}
        onClick={handleDecrease}
      >
        <IconFont name="jian" size={20} color="#876660" />
      </View>
      <Input
        type="number"
        value={String(count)}
        onInput={handleInput}
        onBlur={handleBlur}
        className={styles.input}
      />
      <View
        className={classNames(styles.item, styles.increase)}
        onClick={handleIncrease}
      >
        <IconFont name="jia" size={20} color="#fff" />
      </View>
    </View>
  )
}
