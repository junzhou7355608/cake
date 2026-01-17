'use server';

import { headers } from 'next/headers';

export async function getIsMobileFromHeaders() {
  const headerList = await headers();
  const userAgent = headerList.get('user-agent') ?? '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );
}
