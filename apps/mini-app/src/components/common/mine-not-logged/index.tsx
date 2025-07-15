import Button from '@/components/ui/button'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export default function MineNotLogged() {
  return (
    <View className={styles.root}>
      <View className={styles.title}>Hi, 欢迎你</View>
      <View className={styles.title}>登入盈盈甜品屋</View>
      <View className={styles.subTitle}>登陆查看资产与订单等信息</View>

      <Button type="primary" size="lg" className={styles.button}>
        登入与注册
      </Button>
    </View>
  )
}
