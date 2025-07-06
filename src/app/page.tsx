import BannerSlider from '@/features/home/ui/BannerSlider';
import CrewCardList from '@/features/home/ui/RecommendedCardList';
import PromotionBanner from '@/widgets/ui/PromotionBanner';

export default function Home() {
  return (
    <>
      <BannerSlider />
      <CrewCardList />
      <PromotionBanner />
    </>
  );
}
