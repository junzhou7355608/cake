import { ui } from '@/utils/ui'
import { View } from '@tarojs/components'
// import styles from './index.module.scss'

export default function SafeAreaTop() {
  return (
    <View
      style={{
        height: ui.safeArea.top()
      }}
    ></View>
  )
}
