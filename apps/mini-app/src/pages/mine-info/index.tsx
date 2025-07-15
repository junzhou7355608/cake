import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Input from '@/components/ui/input'
import NavBar from '@/components/ui/nav-bar'
import { Image, View } from '@tarojs/components'
import styles from './index.module.scss'

export default function MineInfo() {
  return (
    <PageLayout className={styles.root}>
      <NavBar title="个人信息" />
      <View className={styles.content}>
        <View className={styles.avatar}>
          <Image
            mode="aspectFill"
            className={styles.avatarImg}
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </View>
        <Card>
          <View className={styles.form}>
            <Input label="昵称" placeholder="请输入昵称" />
            <Input label="性别" placeholder="请选择性别" />
            <Input label="手机号" placeholder="请输入手机号" />
          </View>
        </Card>
      </View>
      <ActionBar>
        <Button size="lg" type="primary">
          保存
        </Button>
      </ActionBar>
    </PageLayout>
  )
}
