'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';

export default function BannerSlider() {
  const bannerImages = ['/banner1.png', '/banner2.png', '/banner3.png'];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className='custom-swiper h-[596px] w-full max-w-[1440px]'
    >
      {bannerImages.map((src, i) => (
        <SwiperSlide key={i}>
          <div className='relative h-full w-full'>
            <Image src={src} alt={`배너 ${i + 1}`} fill className='object-cover' />
            {i === 0 && (
              <button className='absolute bottom-14 left-16 rounded-full border border-mainRed px-6 py-2 text-mainRed transition hover:bg-mainRed hover:text-white'>
                크루 모집 하러 가기 &gt;
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
