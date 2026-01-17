'use client';

import { Button, Dialog, DialogTrigger } from '@repo/ui';
import { useState } from 'react';
import { LoginForm } from './login-form';

export function LoginDialog() {
  const [open, setOpen] = useState(false);

  const handleLoginSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="ml-2 min-w-20 rounded-full text-[13px] bg-transparent hover:bg-transparent hover:text-primary hover:border-primary"
          variant="outline"
          size="sm"
        >
          登录
        </Button>
      </DialogTrigger>
      <LoginForm onSuccess={handleLoginSuccess} />
    </Dialog>
  );
}
