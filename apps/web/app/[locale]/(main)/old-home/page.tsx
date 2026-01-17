import { Banner, CategoryBar, CategoryCarousel, Clients } from '@/components';

export default function Page() {
  return (
    <div>
      {/* <div className="pt-6">
        <UserInfo />
      </div> */}
      <div className="pt-3 md:pt-5">
        <Banner />
      </div>
      <CategoryBar title="最新发掘" />
      <CategoryCarousel />
      <CategoryBar title="本周热门" moreText="查看更多" moreLink="/category" />
      <CategoryCarousel />
      <CategoryBar
        title="猜您喜欢累积彩池"
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
