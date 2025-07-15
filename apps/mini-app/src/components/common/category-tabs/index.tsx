import IconFont from '@/components/iconfont'
import { Text, View } from '@tarojs/components'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import styles from './index.module.scss'

export default function CategoryTabs() {
  const [tab, setTab] = useState(0)

  const tabs = useMemo(() => {
    return [
      {
        name: '小蛋糕'
      },
      {
        name: '大蛋糕'
      },
      {
        name: '饮品'
      },
      {
        name: '面包'
      },
      {
        name: '零食'
      },
      {
        name: '其他'
      }
    ]
  }, [])

  return (
    <View className={styles.tabs}>
      {tabs.map((item, index) => (
        <View
          className={classNames(styles.item, {
            [styles.active]: tab === index
          })}
          key={item.name}
          onClick={() => setTab(index)}
        >
          <View className={styles.line}></View>
          <View className={classNames(styles.icon, styles.top)}>
            <IconFont name="tab-top" size={12}></IconFont>
          </View>
          <Text>{item.name}</Text>
          <View className={classNames(styles.icon, styles.bottom)}>
            <IconFont name="tab-bottom" size={12}></IconFont>
          </View>
        </View>
      ))}
    </View>
  )
}
