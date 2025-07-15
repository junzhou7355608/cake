import {
  Input as TaroInput,
  type InputProps as TaroInputProps,
  View,
} from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface InputProps extends TaroInputProps {
  label?: string
}

export default function Input(props: InputProps) {
  const { label, className, ...restProps } = props

  return (
    <View className={styles.root}>
      <View className={styles.label}>{label}</View>
      <TaroInput
        className={classNames(styles.input, className)}
        {...restProps}
      ></TaroInput>
    </View>
  )
}
