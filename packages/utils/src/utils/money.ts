/**
 * 页面上显示的价格，单位为分，需要转换为元
 * @param money - 价格
 * @param fractionDigits - 保留的小数位数（默认 0，不显示小数点）
 * @returns 转换后的价格（元字符串）
 */
export function formatMoney(
  money: number | string | unknown,
  fractionDigits = 0,
): string {
  const cents =
    typeof money === 'number'
      ? money
      : typeof money === 'string'
        ? Number(money)
        : NaN;

  if (!Number.isFinite(cents)) return (0).toFixed(fractionDigits);

  return (cents / 100).toFixed(fractionDigits);
}
