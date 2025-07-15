import type { TabBarKey } from '@/common/enums'
import type { IconNames } from '@/components/iconfont'
import { TabBarIconMap, TabBarMap, TabBarPathMap } from '@/common/constants'
import IconFont from '@/components/iconfont'
import { appAtom } from '@/store/app'
import { useGlobalStoreAtom } from '@/utils/store'
import { ui } from '@/utils/ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'

import classNames from 'classnames'
import { produce } from 'immer'
import { useMemo } from 'react'
import styles from './index.module.scss'

export default function CustomTabBar() {
  const [store, setStore] = useGlobalStoreAtom(appAtom)

  const tabs = useMemo(() => Array.from(TabBarMap.keys()), [])

  const onChange = useMemoizedFn((tab: string | number) => {
    setStore(
      produce((draft) => {
        draft.tab = tab as TabBarKey
      })
    )

    const path = TabBarPathMap.get(tab as TabBarKey)

    if (path) {
      Taro.switchTab({ url: path })
    }
  })

  return (
    <View
      className={styles.tabBar}
      style={{
        paddingBottom: ui.safeArea.bottom()
      }}
    >
      <View
        className={styles.content}
        style={{
          height: `${ui.tabBar.height()}px`
        }}
      >
        {tabs.map((item) => {
          return (
            <View
              key={item}
              className={styles.item}
              onClick={() => onChange(item)}
            >
              <View
                className={classNames(styles.icon, {
                  [styles.active]: store.tab === item
                })}
              >
                <IconFont
                  name={TabBarIconMap.get(item) as IconNames}
                  size={32}
                ></IconFont>
              </View>

              <View
                className={classNames(styles.text, {
                  [styles.active]: store.tab === item
                })}
              >
                {TabBarMap.get(item)}
              </View>
            </View>
          )
        })}

        <View className={styles.dot}></View>
      </View>
    </View>
  )
}
