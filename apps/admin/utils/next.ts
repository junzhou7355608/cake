'use server';

import { CookieKey } from '@repo/utils';
import { cookies, headers } from 'next/headers';

export async function getIsMobileFromHeaders() {
  const headerList = await headers();
  const userAgent = headerList.get('user-agent') ?? '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );
}

export async function getServerToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get(CookieKey.Token);
  return !!token;
}
