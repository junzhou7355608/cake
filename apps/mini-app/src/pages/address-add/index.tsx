import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Input from '@/components/ui/input'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import styles from './index.module.scss'

export default function AddressAdd() {
  const onSaveAddress = useMemoizedFn(() => {
    Taro.navigateBack()
  })

  return (
    <PageLayout className={styles.root}>
      <NavBar title="新增地址" />
      <View className={styles.content}>
        <Card>
          <View className={styles.form}>
            <Input label="收货人" placeholder="请输入收货人" />
            <Input label="手机号" placeholder="请输入手机号" />
            <Input label="地址" placeholder="请输入收货地址" />
            <Input label="门牌号" placeholder="请输入门牌号"></Input>
          </View>
        </Card>
      </View>
      <ActionBar>
        <Button size="lg" type="primary" onClick={onSaveAddress}>保存</Button>
      </ActionBar>
    </PageLayout>
  )
}
