/**
 * 打开新标签页
 * @param url - 要打开的 URL
 * @param target - 目标窗口
 * @param features - 窗口特性
 */
export function openNewTab(
  url: string,
  target: string = '_blank',
  features: string = 'noopener,noreferrer',
) {
  const win = window.open(url, target, features);
  if (!win) {
    window.location.href = url;
  }
}
