'use client';

import { Drawer, DrawerContent } from '@repo/ui';
import { useState } from 'react';
import { LoginForm } from './login-form';
import { OTPForm } from './otp-form';

export function LoginDrawer() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'login' | 'otp'>('login');

  const handleLoginSuccess = () => {
    setStep('otp');
  };

  const handleOpenChange = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="">
          {step === 'login' ? (
            <LoginForm onSuccess={handleLoginSuccess} />
          ) : (
            <OTPForm onSuccess={handleOpenChange} />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
