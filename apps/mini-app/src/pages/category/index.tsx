import Banner from '@/components/common/banner'
import CategoryGoods from '@/components/common/category-goods'
import CategoryShop from '@/components/common/category-shop'
import CategoryTabs from '@/components/common/category-tabs'
import GoodsDetailsPopup from '@/components/common/goods-details-popup'
import PageLayout from '@/components/layouts/page-layout'
import { View } from '@tarojs/components'
import { useState } from 'react'
import styles from './index.module.scss'

export default function Category() {
  const [visible, setVisible] = useState(false)

  return (
    <PageLayout>
      <Banner></Banner>
      <CategoryShop></CategoryShop>
      <View className={styles.content}>
        <CategoryTabs></CategoryTabs>
        <CategoryGoods
          onGoodsDetails={() => {
            setVisible(true)
          }}
        ></CategoryGoods>
      </View>
      <GoodsDetailsPopup visible={visible} onClose={() => setVisible(false)} />
    </PageLayout>
  )
}
