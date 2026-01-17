import dayjs from 'dayjs';
import jsCookie from 'js-cookie';
import { CookieKey } from '../constants';

/**
 * 设置登录凭证
 *
 */
function set(token: string, expiryDate: number = 7) {
  const exp = dayjs().add(expiryDate, 'day').toDate();

  jsCookie.set(CookieKey.Token, token, { expires: exp });
}

/**
 * 获取登录凭证
 *
 */
function get() {
  return jsCookie.get(CookieKey.Token);
}

/**
 * 移除登录凭证
 *
 */
function remove() {
  jsCookie.remove(CookieKey.Token);
}

const token = {
  get,
  set,
  remove,
};

const cookie = {
  token,
};

export { cookie };
