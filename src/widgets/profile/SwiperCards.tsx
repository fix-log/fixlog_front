'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { Pagination } from 'swiper/modules';
import { cn } from '@/shared/lib/util';
import Empty from '@/features/profile/Empty';
import {
  crew,
  crewDummy,
  crewType,
  workroom,
  workroomDummy,
  workroomType,
} from '@/features/profile/dummy';
import CrewCard from '@/features/profile/CrewCard';
import WorkroomCard from '@/features/profile/WorkroomCard';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

const EMPTY_TEXT = {
  crew: {
    heading: '관련 크루모집이 없습니다',
    subtext: '크루모집을 확인해보세요!',
  },
  workroom: {
    heading: '관련 워크룸이 없습니다',
    subtext: '워크룸을 확인해보세요!',
  },
};

const crewList = ['myCrew', 'appliedCrew', 'favoritedCrew'];

interface SwiperCardsProps {
  category: string;
  title: string;
  className?: string;
}

export default function SwiperCards({ category, title, className }: SwiperCardsProps) {
  const data = crewList.includes(category)
    ? crewDummy[category as crew]
    : workroomDummy[category as workroom];
  function isCrew(item: crewType | workroomType): item is crewType {
    return '모집날짜' in item; // crewType에만 있는 속성으로 판별
  }
  
  return (
    <div className={'py-[40px] lg:py-[50px] ' + cn(className)}>
      <h1 className='ml-[30px] lg:ml-[42px] mb-[22px] text-[20px] lg:text-[32px] font-extrabold'>{title}</h1>
      {data?.length === 0 ? (
        <Empty {...(crewList.includes(category) ? EMPTY_TEXT.crew : EMPTY_TEXT.workroom)} />
      ) : (
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              {crewList.includes(category) && isCrew(item) ? (
                <CrewCard data={item} />
              ) : (
                <WorkroomCard data={item as workroomType} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
