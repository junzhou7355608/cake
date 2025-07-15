import {
  Button as TaroButton,
  type ButtonProps as TaroButtonProps
} from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg'
  type?: 'default' | 'primary' | 'outline'
}

export default function Button(props: ButtonProps) {
  const { className, size = 'md', type = 'default', ...restProps } = props

  return (
    <TaroButton
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
        className
      )}
      {...restProps}
    ></TaroButton>
  )
}
