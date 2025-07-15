import { BuyType, TabBarKey } from './enums'

export const TabBarMap = new Map([
  [TabBarKey.Home, '首页'],
  [TabBarKey.Category, '分类'],
  [TabBarKey.Mine, '我的']
])

export const TabBarIconMap = new Map([
  [TabBarKey.Home, 'buoumao'],
  [TabBarKey.Category, 'nainiumao'],
  [TabBarKey.Mine, 'jinmao']
])

export const TabBarPathMap = new Map([
  [TabBarKey.Home, '/pages/home/index'],
  [TabBarKey.Category, '/pages/category/index'],
  [TabBarKey.Mine, '/pages/mine/index']
])

export const BuyTypeMap = new Map([
  [BuyType.Pickup, '到店自提'],
  [BuyType.Delivery, '外卖配送']
])
