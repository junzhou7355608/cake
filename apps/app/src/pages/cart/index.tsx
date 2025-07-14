import PageLayout from '@/components/layouts/page-layout'
import NavStaticBar from '@/components/ui/nav-static-bar'
import { Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
// import styles from './index.module.scss'

export default function Cart() {
  useLoad(() => {
    // console.log('Page loaded.')
  })

  return (
    <PageLayout>
      <NavStaticBar title="购物车"></NavStaticBar>
      <Text>cart</Text>
    </PageLayout>
  )
}
