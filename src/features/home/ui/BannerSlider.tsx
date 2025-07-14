'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';

export default function BannerSlider() {
  const bannerImages = ['/banner1.png', '/banner2.png', '/banner3.png'];

  return (
    // 미니님 ㅠㅠㅠ 저 스와이퍼 CSS 조정한 것 때문에 여기 스와이퍼에 컨테이너 하나 감싸야할거 같아요...
    // 안건드리고 해보려했지만... 죄성함니다 ㅠㅠ (보면 지워주십셔) -기태
    <div className='w-full max-w-[1440px] overflow-hidden'>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className='custom-swiper h-[596px] w-full'
      >
        {bannerImages.map((src, i) => (
          <SwiperSlide key={i}>
            <div className='relative h-full w-full'>
              <Image src={src} alt={`배너 ${i + 1}`} fill className='object-cover' />
              {i === 0 && (
                <button className='border-mainRed text-mainRed hover:bg-mainRed absolute bottom-14 left-16 rounded-full border px-6 py-2 transition hover:text-white'>
                  크루 모집 하러 가기 &gt;
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
