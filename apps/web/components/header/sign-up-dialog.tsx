import { Button, Dialog, DialogTrigger } from '@repo/ui';
import { SignUpForm } from './sign-up-form';

export function SignUpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="min-w-20 rounded-full text-[13px] border-primary! text-primary!"
          variant="outline"
          size="sm"
        >
          注册
        </Button>
      </DialogTrigger>
      <SignUpForm />
    </Dialog>
  );
}
