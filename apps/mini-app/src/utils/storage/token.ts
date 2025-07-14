// import { StorageKey } from '@/constants/enums'
// import * as Storage from 'expo-secure-store'

/**
 * 设置登录凭证
 *
 */
async function set(_token: string) {
  // return Storage.setItemAsync(StorageKey.Token, token)
}

/**
 * 获取登录凭证
 *
 */
async function get() {
  // return Storage.getItemAsync(StorageKey.Token)
}

/**
 * 移除登录凭证
 *
 */
async function remove() {
  // return Storage.deleteItemAsync(StorageKey.Token)
}

const token = {
  get,
  set,
  remove,
}

export { token as default, get, remove, set }
