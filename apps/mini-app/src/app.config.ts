import { useGlobalIconFont } from './components/iconfont/helper'

export default defineAppConfig({
  /* eslint-disable react-hooks/rules-of-hooks */
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/home/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/mine/index',
    'pages/order-confirm/index',
    'pages/pay-success/index',
    'pages/order-list/index',
    'pages/order-history/index',
    'pages/order-detail/index',
    'pages/address-list/index',
    'pages/mine-info/index',
    'pages/system-setting/index',
    'pages/address-add/index',
    'pages/address-edit/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationStyle: 'custom',
    backgroundColor: '#ffffff'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ],
    custom: true
  }
})
