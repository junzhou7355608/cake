import { Button, Field, FieldGroup, FieldLabel, Input } from '@repo/ui';
import { cn } from '@repo/utils';

export default function Page() {
  return (
    <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2 lg:gap-6')}>
      <FieldGroup className="col-span-1">
        <Field>
          <FieldLabel htmlFor="name">昵称</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">邮箱地址</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">手机号码</FieldLabel>
          <Input id="phone" type="text" required />
        </Field>
      </FieldGroup>
      <FieldGroup className="col-span-1">
        <Field>
          <FieldLabel htmlFor="security-code">安全码</FieldLabel>
          <Input id="security-code" type="password" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="withdraw-account">取款账户</FieldLabel>
          <Input id="withdraw-account" type="text" required />
        </Field>
        {/* <Field>
          <FieldLabel htmlFor="name">Profile picture</FieldLabel>
          <div className="flex gap-2 items-end">
            <div className="w-32.5 h-32.5 flex rounded-lg overflow-hidden">
              <Image
                src="/avatars/shadcn.jpg"
                alt="Profile picture"
                width={100 * 2}
                height={100 * 2}
                className="w-full h-full object-cover"
              />
            </div>
            <Button variant="outline" type="button">
              <Upload className="size-4" />
              Upload
            </Button>
          </div>
        </Field> */}
      </FieldGroup>
      <FieldGroup className="col-span-1">
        <Field>
          <div>
            <Button className="w-full md:w-auto" type="submit">
              更新资料
            </Button>
          </div>
        </Field>
      </FieldGroup>
    </div>
  );
}
