import cat1 from '@/assets/images/home/cat_1.png'
import cat2 from '@/assets/images/home/cat_2.png'
import { TabBarKey } from '@/common/enums'
import HomeBanner from '@/components/common/home-banner'
import HomeCard from '@/components/common/home-card'
import PageLayout from '@/components/layouts/page-layout'
import { useTabbar } from '@/hooks/useTabbar'
import { View } from '@tarojs/components'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'

export default function Mine() {
  const { onSwitchTab } = useTabbar()



  const onBuy = useMemoizedFn(() => {
    onSwitchTab(TabBarKey.Category)
  })

  useEffect(() => {
    getLogin()
  }, [])


  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.log("云函数返回: ", res)
      })
  }

  return (
    <PageLayout>
      <HomeBanner></HomeBanner>
      <View className={styles.content}>
        <HomeCard title="门店自提" icon={cat1} onClick={onBuy}></HomeCard>
        <HomeCard title="外卖配送" icon={cat2} onClick={onBuy}></HomeCard>
      </View>

    </PageLayout>
  )
}
