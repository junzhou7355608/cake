import { LoginForm } from '@/components';
import { redirect } from '@/i18n/navigation';
import { getServerToken } from '@/utils';
import { GalleryVerticalEnd } from 'lucide-react';
import { getLocale } from 'next-intl/server';

export default async function Page() {
  const locale = await getLocale();
  const token = await getServerToken();

  if (token) {
    return redirect({ href: '/', locale });
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2 relative">
      <div className="flex flex-col gap-4 p-6 md:p-10 relative z-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 z-0 w-[100vh] hidden lg:block"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, var(--color-primary) 0%, #ffffff 70%)
      `,
          opacity: 0.3,
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative hidden lg:block">
        {/* <Image
          src="/games/1.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={1000}
          height={1000}
        /> */}
      </div>
    </div>
  );
}
