import Banner from '@/components/common/banner'
import MineNotLogged from '@/components/common/mine-not-logged'
import MineServices from '@/components/common/mine-services'
import PageLayout from '@/components/layouts/page-layout'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export default function Mine() {
  return (
    <PageLayout>
      <Banner></Banner>
      <MineNotLogged></MineNotLogged>
      <View className={styles.content}>
        <View className={styles.title}>我的服务</View>
        <MineServices />
      </View>
    </PageLayout>
  )
}
