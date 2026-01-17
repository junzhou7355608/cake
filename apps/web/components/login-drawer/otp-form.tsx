import {
  Button,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@repo/ui';

interface OTPFormProps extends React.ComponentProps<'form'> {
  onSuccess: () => void;
}

export function OTPForm({ onSuccess, ...props }: OTPFormProps) {
  return (
    <form {...props}>
      <FieldGroup>
        <DrawerHeader>
          <DrawerTitle>Enter verification code</DrawerTitle>
          <DrawerDescription>
            We sent a 6-digit code to your email.
          </DrawerDescription>
        </DrawerHeader>

        <Field className="p-4">
          <FieldLabel htmlFor="otp">Verification code</FieldLabel>
          <InputOTP maxLength={6} id="otp" required>
            <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            Enter the 6-digit code sent to your email.
          </FieldDescription>
        </Field>
        <DrawerFooter>
          <Field>
            <Button type="submit" onClick={onSuccess}>
              Verify
            </Button>
          </Field>
          <Field>
            <FieldDescription className="text-center">
              Didn&apos;t receive the code? <a href="#">Resend</a>
            </FieldDescription>
          </Field>
        </DrawerFooter>
      </FieldGroup>
    </form>
  );
}
