'use client';

import { useRouter } from '@/i18n/navigation';
import { Gamepad2 } from 'lucide-react';

export function LogoBar() {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto fixed inset-x-0 top-0 z-50 flex items-center gap-2 border-b h-16 px-4 bg-popover/90 backdrop-blur-md supports-backdrop-filter:bg-popover/50">
      <button
        onClick={() => router.push('/')}
        className="flex items-center gap-2 transition-opacity hover:opacity-80 active:opacity-60"
        aria-label="返回首页"
      >
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Gamepad2 className="size-4" />
        </div>
        <span className="text-lg font-semibold">Game Hub</span>
      </button>
    </div>
  );
}
