import type { ITouchEvent } from '@tarojs/components'
// import banner from '@/assets/backup/WechatIMG580.jpg'
// import banner2 from '@/assets/backup/WechatIMG581.jpg'
// import banner3 from '@/assets/backup/WechatIMG690.jpg'
import Card from '@/components/ui/card'
import { Image, Swiper, SwiperItem, View } from '@tarojs/components'
import styles from './index.module.scss'

export interface HomeSwiperProps {
  onClick?: (event: ITouchEvent) => void
}

export default function HomeSwiper(props: HomeSwiperProps) {
  const { onClick } = props

  return (
    <Card className={styles.card} onClick={onClick}>
      <Swiper className={styles.swiper} circular autoplay>
        <SwiperItem className={styles.swiperItem}>
          {/* <Image mode="aspectFill" className={styles.image} src={banner}></Image> */}
        </SwiperItem>
        <SwiperItem className={styles.swiperItem}>
          {/* <Image mode="aspectFill" className={styles.image} src={banner2}></Image> */}
        </SwiperItem>
        <SwiperItem className={styles.swiperItem}>
          {/* <Image mode="aspectFill" className={styles.image} src={banner3}></Image> */}
        </SwiperItem>
      </Swiper>
    </Card>
  )
}
