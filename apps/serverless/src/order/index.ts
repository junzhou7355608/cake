import cloud, { ICloud } from 'wx-server-sdk'

interface LoginEvent {
  // 根据实际需要补充字段
  [key: string]: unknown
}

interface LoginResult {
  event: LoginEvent
  openid?: string
  appid?: string
  unionid?: string
  env?: string
}

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV as unknown as string
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 *
 * event 参数包含小程序端调用传入的 data
 *
 */
export async function main(
  event: LoginEvent,
  context: ICloud.WXContext
): Promise<LoginResult> {
  console.log(event)
  console.log(context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV
  }
}
