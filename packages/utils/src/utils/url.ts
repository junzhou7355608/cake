/**
 * 验证 URL 是否有效
 * @param url - 要验证的 URL
 * @returns 如果 URL 有效，则返回 true，否则返回 false
 */
export function isValidUrl(url?: string): boolean {
  if (!url || url.trim() === '') return false;
  try {
    return url.startsWith('http://') || url.startsWith('https://');
  } catch {
    return false;
  }
}
