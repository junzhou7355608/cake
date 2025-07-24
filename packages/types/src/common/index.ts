export interface Res<T> {
  code: number
  message: string
  data: T
}

export enum UserType {
  ADMIN = 'admin', // 后台用户
  WECHAT = 'wechat' // 小程序用户
}

export enum UserRole {
  SUPER_ADMIN = 'super_admin', // 超级管理员
  ADMIN = 'admin', // 普通管理员
  STAFF = 'staff' // 员工
}
