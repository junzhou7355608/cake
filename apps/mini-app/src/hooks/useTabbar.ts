import type { TabBarKey } from '@/common/enums'
import { appAtom } from '@/store/app'
import { useSetGlobalStoreAtom } from '@/utils/store'
import Taro, { useDidShow } from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'
import { produce } from 'immer'

export function useTabbarInit() {
  const setStore = useSetGlobalStoreAtom(appAtom)

  const initTab = useMemoizedFn(() => {
    const pages = Taro.getCurrentPages()
    const current = pages[pages.length - 1]
    const route = current?.route
    const match = route?.match(/^pages\/(\w+)\/index$/)
    if (match) {
      setStore(
        produce((draft) => {
          draft.tab = match[1] as TabBarKey
        }),
      )
    }
  })

  useDidShow(() => {
    initTab()
  })
}

export function useTabbar() {
  const setStore = useSetGlobalStoreAtom(appAtom)

  const onSwitchTab = useMemoizedFn((key: TabBarKey) => {
    setStore(
      produce((draft) => {
        draft.tab = key
      }),
    )
    Taro.switchTab({ url: `/pages/${key}/index` })
  })

  return {
    onSwitchTab,
  }
}
