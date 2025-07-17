import { atom } from '@repo/utils'

export interface AppStore {
  token?: string
}

export const appAtom = atom<AppStore>({
  token: ''
})
