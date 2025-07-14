import Taro from '@tarojs/taro'

const windowInfo = Taro.getWindowInfo()
const menuRect = Taro.getMenuButtonBoundingClientRect() || { top: 0, height: 32 }

const statusBarHeight = windowInfo.statusBarHeight || 0
const safeAreaTop = windowInfo.safeArea?.top || 0
const safeAreaBottom = windowInfo.safeArea?.bottom || 0
const screenHeight = windowInfo.screenHeight || 0
const tabBarHeight = 56

const navigatorHeight = menuRect.height + (menuRect.top - statusBarHeight) * 2

const navigatorBottom = 0

const ui = {
  safeArea: {
    top: () => safeAreaTop,
    bottom: () => screenHeight - safeAreaBottom,
  },
  statusBar: {
    height: () => statusBarHeight,
  },
  navigator: {
    height: () => navigatorHeight,
    bottom: () => navigatorBottom,
  },
  tabBar: {
    height: () => tabBarHeight,
  },
  page: {
    top: () => statusBarHeight + navigatorHeight + navigatorBottom,
    bottom: () => (screenHeight - safeAreaBottom) + tabBarHeight,
  },
  theme: {
    color: {
      primary: '#876660',
      background: '#a48075',
    },
  },
}

export { ui }
