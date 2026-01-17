import { AppPageTabBar, UserInfoCard } from '@/components';
import { getIsMobileFromHeaders } from '@/utils';
import { PropsWithChildren } from 'react';

export default async function AuthLayout(props: PropsWithChildren) {
  const { children } = props;

  const isMobile = await getIsMobileFromHeaders();

  if (isMobile) {
    return <div className="pt-4 max-w-md mx-auto">{children}</div>;
  }

  return (
    <div>
      <AppPageTabBar />

      <div className="grid grid-cols-4 gap-4 items-start px-1">
        <UserInfoCard
          className="col-span-4 md:col-span-4 lg:col-span-1"
          imageUrl="https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
          imageAlt="Modern wooden cabin in a grassy, mountainous landscape"
          title="Iceland Cabin"
          price={680}
          pricePeriod="id:89274838"
          description="Cozy cabin nestled in Iceland's breathtaking landscape, offering stunning views of mountains and Northern Lights."
          stats={[{ label: '余额', value: 999.88 }]}
          actionLabel="充值"
          onActionClick={() => {
            console.log('Reserve');
          }}
        />
        <div className="col-span-4 md:col-span-4 lg:col-span-3">{children}</div>
      </div>
    </div>
  );
}
