import { BuyType, TabBarKey } from '@/common/enums'
import { atom } from 'jotai'

export interface AppStore {
  token?: string
  tab?: TabBarKey
  buyType?: BuyType
}

export const appAtom = atom<AppStore>({
  token: '',
  tab: TabBarKey.Home,
  buyType: BuyType.Pickup,
})
