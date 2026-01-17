'use client';

import { useRouter } from '@/i18n/navigation';
import { tokenAtom } from '@/stores';
import { useGlobalStoreAtom } from '@/utils';
import { Button } from '@repo/ui';
import { cookie } from '@repo/utils';
import { useEffect, useState } from 'react';

export function AppMobileLogout() {
  const router = useRouter();

  const [token, setToken] = useGlobalStoreAtom(tokenAtom);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 避免服务端渲染与客户端状态不一致导致水合错误
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    cookie.token.remove();
    setToken(null);
    router.push('/');
  };

  if (!isMounted || !token) {
    return null;
  }

  return (
    <Button
      className="mt-4 w-full"
      variant="outline"
      size="lg"
      onClick={handleLogout}
    >
      退出登录
    </Button>
  );
}
