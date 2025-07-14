import { usePageScroll } from '@tarojs/taro'
import classNames from 'classnames'
import { useState } from 'react'
import NavBar from '../nav-bar'
import styles from './index.module.scss'

export interface NavTransparentBarProps {
  title: string
  fixed?: boolean
}

export default function NavTransparentBar(props: NavTransparentBarProps) {
  const { title, fixed } = props

  const [transparent, setTransparent] = useState(true)

  usePageScroll((e) => {
    console.log(e)
    setTransparent(e.scrollTop < 100)
  })

  return (
    <NavBar
      className={classNames(styles.bavBar, {
        [styles.transparent]: transparent,
      })}
      border={false}
      title={title}
      fixed={fixed}
      leftText="返回"
      leftArrow
    >
    </NavBar>
  )
}
