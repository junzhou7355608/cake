import Card from '@/components/ui/card'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export type OrderStatusCardProps = object

export default function OrderStatusCard() {
  return (
    <Card className={styles.root}>
      <View className={styles.status}>已完成</View>
      <View className={styles.value}>T0275</View>
      <View className={styles.label}>取单号</View>
    </Card>
  )
}
