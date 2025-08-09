'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { Pagination } from 'swiper/modules';
import CrewCard from '@/features/profile/CrewCard';
import { dummy } from '@/features/profile/dummy';
import { cn } from '@/shared/lib/util';

type crewType = 'myCrew' | 'appliedCrew' | 'favoritedCrew';
type workroomType = 'createdWorkroom' | 'joinedWorkroom';

interface SwiperCardsProps {
  category: crewType | workroomType;
  title: string;
  className?: string;
}

export default function SwiperCards({ category, title, className }: SwiperCardsProps) {
  const data = dummy[category];

  return (
    <div className={'py-[50px] pl-[42px] ' + cn(className)}>
      <h1 className='mb-2 text-[32px] font-extrabold'>{title}</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide>
            <CrewCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
