import IconFont from '@/components/iconfont'
import PageLayout from '@/components/layouts/page-layout'
import ActionBar from '@/components/ui/action-bar'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'
import NavBar from '@/components/ui/nav-bar'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

export default function SystemSetting() {
  return (
    <PageLayout className={styles.root}>
      <NavBar title="系统设置" />
      <View className={styles.content}>
        <Card>
          <Cell
            label="关于我们"
            action={<IconFont name="arrow-right" size={22} color="#222" />}
          />
        </Card>
      </View>
      <ActionBar>
        <Button size="lg">退出登录</Button>
      </ActionBar>
    </PageLayout>
  )
}
