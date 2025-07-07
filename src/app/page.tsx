import BannerSlider from '@/features/home/ui/BannerSlider';
import CrewCardList from '@/features/home/ui/RecommendedCardList';

export default function Home() {
  return (
    <>
      <BannerSlider />
      <CrewCardList />
      <div className='space-y-4 bg-gray-50 p-8'>
        <h1 className='text-h1 font-bold'>text-h1 (54px)</h1>
        <h2 className='text-h2 font-bold'>text-h2 (42px)</h2>
        <h3 className='text-h3 font-bold'>text-h3 (32px)</h3>
        <h4 className='text-h4 font-bold'>text-h4 (24px)</h4>
        <h5 className='text-h5 font-bold'>text-h5 (22px)</h5>
        <h6 className='text-h6 font-bold'>text-h6 (20px)</h6>
        <p className='text-body-l font-normal'>text-body-l (18px)</p>
        <p className='text-body-m font-normal'>text-body-m (16px)</p>
        <p className='text-body-s font-normal'>text-body-s (14px)</p>
        <p className='text-body-xs font-normal'>text-body-xs (12px)</p>
        <button className='text-btn-l bg-mainRed text-mainWhite rounded px-6 py-2 font-bold'>
          text-btn-l (20px)
        </button>
      </div>
    </>
  );
}
