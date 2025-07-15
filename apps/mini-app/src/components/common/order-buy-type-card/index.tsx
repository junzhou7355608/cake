import { BuyTypeMap } from '@/common/constants'
import { BuyType } from '@/common/enums'
import IconFont from '@/components/iconfont'
import Card from '@/components/ui/card'
import Cell from '@/components/ui/cell'
import { appAtom } from '@/store/app'
import { useGlobalStoreAtom } from '@/utils/store'
import { Text, View } from '@tarojs/components'
import classNames from 'classnames'
import { produce } from 'immer'
import { useMemo } from 'react'
import styles from './index.module.scss'

export type OrderBuyTypeCardProps = object

export default function OrderBuyTypeCard() {
  const [store, setStore] = useGlobalStoreAtom(appAtom)

  const types = useMemo(() => Array.from(BuyTypeMap.keys()), [])

  return (
    <View className={styles.root}>
      <View className={styles.types}>
        {types.map((item) => (
          <View
            key={item}
            className={classNames(styles.item, {
              [styles.active]: store.buyType === item
            })}
            onClick={() => {
              setStore(
                produce((draft) => {
                  draft.buyType = item
                })
              )
            }}
          >
            {BuyTypeMap.get(item)}
          </View>
        ))}

        <View
          className={classNames(styles.line, {
            [styles.active]: store.buyType === BuyType.Delivery
          })}
        >
          <View className={classNames(styles.icon, styles.left)}>
            <IconFont name="tab-left" size={14}></IconFont>
          </View>
          <View className={classNames(styles.icon, styles.right)}>
            <IconFont name="tab-right" size={14}></IconFont>
          </View>
        </View>
      </View>
      <View className={styles.tabBg}></View>
      <Card
        className={classNames(styles.card, {
          [styles.active]: store.buyType === BuyType.Delivery
        })}
      >
        <View className={styles.title}>
          <Text>盈盈甜品屋</Text>
          <IconFont name="arrow-right" size={20}></IconFont>
        </View>
        <View className={styles.label}>某某街道某某小区001号</View>
        <Cell label="备注" value="联系不上我时，放门口"></Cell>
      </Card>
    </View>
  )
}
