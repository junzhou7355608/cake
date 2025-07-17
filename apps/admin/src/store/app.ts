import { atom } from 'jotai'

export interface AppStore {
  token?: string
}

export const appAtom = atom<AppStore>({
  token: ''
})
