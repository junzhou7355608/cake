// 订单状态枚举
export enum OrderStatus {
  PENDING_PAYMENT = 0, // 待支付
  PAID = 1, // 已支付
  SHIPPED = 2, // 已发货
  COMPLETED = 3, // 已完成
  CANCELLED = 4 // 已取消
}

// 支付方式枚举
export enum PayType {
  WECHAT = 1, // 微信支付
  ALIPAY = 2 // 支付宝
}

// 配送方式枚举
export enum DeliveryType {
  DELIVERY = 0, // 配送
  PICKUP = 1 // 自提
}

// 售后状态枚举
export enum AfterSaleStatus {
  NONE = 0, // 无售后
  REFUNDING = 1, // 退款中
  REFUNDED = 2, // 退款完成
  EXCHANGING = 3, // 换货中
  EXCHANGED = 4 // 换货完成
}

// 从 Prisma Client 导入生成的类型
export type { Order, OrderItem } from '@prisma/client'
