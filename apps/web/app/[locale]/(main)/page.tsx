import {
  Category,
  CategoryBar,
  CategoryCarousel,
  Clients,
  GamePlayer,
  UserInfoCard,
} from '@/components';
import { BookmarkDialog } from '@/components/bookmark-dialog';

export default function Page() {
  return (
    <div>
      <BookmarkDialog />
      <UserInfoCard
        className="md:hidden mt-4"
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
      <Category />
      <GamePlayer />
      <CategoryBar
        title="受到推崇的"
        moreText="查看更多"
        moreLink="/category"
      />
      <CategoryCarousel />
      <CategoryBar title="热门供应商" />
      <Clients />
      {/* <BannerGame /> */}
    </div>
  );
}
