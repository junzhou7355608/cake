import AddressItemCard from '@/components/common/address-item-card'
import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function AddressList() {
  const onAddAddress = useMemoizedFn(() => {
    Taro.navigateTo({
      url: '/pages/address-add/index',
    })
  })

  return (
    <PageLayout className={styles.root}>
      <NavBar title="收货地址" />
      <View className={styles.content}>
        <AddressItemCard />
        <AddressItemCard />
        <AddressItemCard />
      </View>
      <ActionBar>
        <Button size="lg" type="primary" onClick={onAddAddress}>
          新增地址
        </Button>
      </ActionBar>
    </PageLayout>
  )
}
