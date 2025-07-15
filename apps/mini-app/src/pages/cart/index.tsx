import PageLayout from '@/components/layouts/page-layout'
import { Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
// import styles from './index.module.scss'

export default function Cart() {
  useLoad(() => {
    // console.log('Page loaded.')
  })

  return (
    <PageLayout>
      <Text>cart</Text>
    </PageLayout>
  )
}
