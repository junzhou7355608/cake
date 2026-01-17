import {
  Button,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from '@repo/ui';
import { cn } from '@repo/utils';

interface LoginFormProps extends React.ComponentProps<'form'> {
  onSuccess: () => void;
}

export function LoginForm({ className, onSuccess, ...props }: LoginFormProps) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <DrawerHeader>
          <DrawerTitle>Login to your account</DrawerTitle>
          <DrawerDescription>
            Enter your email below to login to your account
          </DrawerDescription>
        </DrawerHeader>

        <Field className="p-4">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>

        <DrawerFooter>
          <Field>
            <Button type="submit" onClick={onSuccess}>
              Login
            </Button>
          </Field>
          <Field>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </Field>
        </DrawerFooter>
      </FieldGroup>
    </form>
  );
}
