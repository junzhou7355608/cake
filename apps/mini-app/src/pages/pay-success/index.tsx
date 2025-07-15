import success from '@/assets/images/pay-success/cat.png'
import PageLayout from '@/components/layouts/page-layout'
import Button from '@/components/ui/button'
import NavBar from '@/components/ui/nav-bar'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function PaySuccess() {
  const onBackHome = useMemoizedFn(() => {
    Taro.switchTab({
      url: '/pages/home/index',
    })
  })

  const onViewOrder = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/order-list/index',
    })
  })

  return (
    <PageLayout className={styles.root}>
      <NavBar title="支付成功" />
      <View className={styles.content}>
        <Image className={styles.image} mode="widthFix" src={success}></Image>
        <View className={styles.title}>支付成功</View>
        <View className={styles.subTitle}>您已完成支付，谢谢您的支持</View>
        <View className={styles.btns}>
          <Button type="outline" size="md" onClick={onBackHome}>
            返回首页
          </Button>
          <Button type="primary" size="md" onClick={onViewOrder}>
            查看订单
          </Button>
        </View>
      </View>
    </PageLayout>
  )
}
