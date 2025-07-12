'use client';

import { useRef, useEffect } from 'react';
import MyWorkroomCard from '@/features/workroom/ui/MyWorkroomCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// TODO: 워크룸 데이터 인자로 받아오기
// 임시 내 워크룸 데이터
const myWorkrooms = [
  {
    id: '1',
    name: '워크룸 1',
    description: '워크룸 1 설명. 블라블라. Blah Blah',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '2',
    name: '워크룸 2',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 6,
  },
  {
    id: '3',
    name: '워크룸 3',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 12,
  },
  {
    id: '4',
    name: '워크룸 4',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '완료',
    member: 10,
  },
  {
    id: '5',
    name: '워크룸 5',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 8,
  },
  {
    id: '6',
    name: '워크룸 6',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '완료',
    member: 10,
  },
];

export default function MyWorkroomCarousel() {
  const swiperRef = useRef<SwiperType>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current && paginationRef.current) {
      const swiper = swiperRef.current;
      if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
      if (swiper.params.pagination && typeof swiper.params.pagination === 'object') {
        swiper.params.pagination.el = paginationRef.current;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }
  }, []);

  return (
    <div className='md:bg-mainRed/4 relative w-full overflow-hidden rounded-xl bg-none px-0 py-0 md:px-12 md:py-10'>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        breakpoints={{
          280: {
            spaceBetween: 16,
          },
          1024: {
            spaceBetween: 32,
          },
        }}
        slidesPerView='auto'
        centeredSlides={false}
        modules={[Pagination, Navigation]}
        className='w-full'
      >
        {myWorkrooms.map((workroom) => (
          <SwiperSlide key={workroom.id} className='!w-[320px] md:!w-[582px]'>
            <MyWorkroomCard workroom={workroom} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 네비게이션 */}
      <button
        ref={prevRef}
        className='text-mainRed hover:text-mainRed/80 absolute top-1/2 left-0 z-20 -translate-y-1/2 cursor-pointer text-4xl transition-colors max-md:hidden md:left-4 md:text-5xl'
        aria-label='이전'
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className='text-mainRed hover:text-mainRed/80 absolute top-1/2 right-0 z-20 -translate-y-1/2 cursor-pointer text-4xl transition-colors max-md:hidden md:right-4 md:text-5xl'
        aria-label='다음'
      >
        ›
      </button>

      {/* 페이지네이션 */}
      <div
        ref={paginationRef}
        className='absolute right-0 left-0 z-20 flex justify-center max-md:hidden md:-translate-y-2'
      />
    </div>
  );
}
