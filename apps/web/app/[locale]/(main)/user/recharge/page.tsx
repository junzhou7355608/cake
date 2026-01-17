'use client';

import { Button, toast } from '@repo/ui';

export default function Page() {
  return (
    <div className="min-h-[556.25px]">
      <Button
        onClick={() =>
          toast.success('测试toast', {
            description: '这是描述信息',
          })
        }
      >
        测试toast
      </Button>
    </div>
  );
}
