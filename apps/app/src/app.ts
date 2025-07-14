import type { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import '@/styles/global.scss'
import Taro from '@tarojs/taro'

function App(props: PropsWithChildren) {
  const { children } = props

  useLaunch(() => {
    Taro.cloud.init()
  })

  return children
}

export default App
