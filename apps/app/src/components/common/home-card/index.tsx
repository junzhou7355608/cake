import type { ITouchEvent } from '@tarojs/components'
import Card from '@/components/ui/card'
import { Image, Text } from '@tarojs/components'
import styles from './index.module.scss'

export interface HomeCardProps {
  title: string
  icon: string
  onClick?: (event: ITouchEvent) => void
}

export default function HomeCard(props: HomeCardProps) {
  const { title, icon, onClick } = props

  return (
    <Card size="lg" className={styles.card} onClick={onClick}>
      <Image mode="aspectFill" className={styles.icon} src={icon}></Image>
      <Text className={styles.text}>
        {title}
      </Text>
    </Card>
  )
}
