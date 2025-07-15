import { BuyType } from '@/common/enums'
import { appAtom } from '@/store/app'
import { useGlobalStoreAtom } from '@/utils/store'
import { Text, View } from '@tarojs/components'
import { useMemoizedFn } from 'ahooks'
import classNames from 'classnames'
import { produce } from 'immer'
import { useMemo } from 'react'
import styles from './index.module.scss'

export default function CategoryShop() {
  const [store, setStore] = useGlobalStoreAtom(appAtom)

  const items: { label: string; value: BuyType }[] = useMemo(() => {
    return [
      {
        label: '自提',
        value: BuyType.Pickup,
      },
      {
        label: '外送',
        value: BuyType.Delivery,
      },
    ]
  }, [])

  const onSwitchBuyType = useMemoizedFn((val: BuyType) => {
    setStore(
      produce(store, (draft) => {
        draft.buyType = val
      }),
    )
  })

  return (
    <View className={styles.categoryShop}>
      <View className={styles.left}>
        <Text className={styles.title}>盈盈甜品屋</Text>
        <Text className={styles.distance}>距离您0.5km</Text>
      </View>
      <View className={styles.segmented}>
        <View className={styles.items}>
          {items.map((item) => (
            <View
              key={item.value}
              className={classNames(styles.item, {
                [styles.active]: store.buyType === item.value,
              })}
              onClick={() => onSwitchBuyType(item.value)}
            >
              {item.label}
            </View>
          ))}
          <View
            className={classNames(styles.activeBg)}
            style={{
              width: `${100 / items.length}%`,
              left: `${(items.findIndex((item) => item.value === store.buyType) / items.length) * 100}%`,
            }}
          ></View>
        </View>
      </View>
    </View>
  )
}
