import type { PropsWithChildren } from 'react'
import { View, ViewProps } from '@tarojs/components'
import { useMemoizedFn } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

export interface PopupProps {
  visible?: boolean
  onClose?: () => void
}

export default function Popup(props: PropsWithChildren<PopupProps>) {
  const { visible, onClose, children } = props

  const [show, setShow] = useState(visible)

  const [innerVisible, setInnerVisible] = useState(visible)

  const contentRef = useRef<ViewProps>(null)

  useEffect(() => {
    if (visible) {
      setShow(true)
      setInnerVisible(false)
      setTimeout(() => {
        setInnerVisible(true)
      }, 16)
    } else {
      setInnerVisible(false)
    }
  }, [visible])

  const handleTransitionEnd = useMemoizedFn(() => {
    if (!visible) {
      setShow(false)
    }
  })

  return (
    <View
      className={styles.popupRoot}
      style={{ display: show ? 'block' : 'none' }}
      catchMove
    >
      <View
        className={classNames(
          styles.mask,
          innerVisible ? styles.maskShow : styles.maskHide,
        )}
        onClick={onClose}
      />
      <View
        ref={contentRef}
        className={classNames(
          styles.popupContentBase,
          innerVisible ? styles.popupContentShow : styles.popupContentHide,
        )}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </View>
    </View>
  )
}
