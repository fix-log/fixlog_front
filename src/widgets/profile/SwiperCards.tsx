'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { Pagination } from 'swiper/modules';
import CrewCard from '@/features/profile/CrewCard';
import { dummy } from '@/features/profile/dummy';
import { cn } from '@/shared/lib/util';
import WorkroomCard from '@/features/profile/WorkroomCard';
import Empty from '@/features/profile/Empty';

const crew = ['myCrew', 'appliedCrew', 'favoritedCrew'] as const;
const workroom = ['createdWorkroom', 'joinedWorkroom'] as const;

type crewType = (typeof crew)[number];
type workroomType = (typeof workroom)[number];

interface SwiperCardsProps {
  category: crewType | workroomType;
  title: string;
  className?: string;
}

export default function SwiperCards({ category, title, className }: SwiperCardsProps) {
  const data = dummy[category];
  const emptyText = {
    crew: {
      heading: '관련 크루모집이 없습니다',
      subtext: '크루모집을 확인해보세요!'
    },
    workroom: {
      heading: '관련 워크룸이 없습니다',
      subtext: '워크룸을 확인해보세요!'
    }
  }

  function isCrew(category: string): category is crewType {
    return (crew as readonly string[]).includes(category);
  }

  return (
    <div className={'py-[50px] pl-[42px] ' + cn(className)}>
      <h1 className='mb-2 text-[32px] font-extrabold'>{title}</h1>
      {data.length === 0 ? (
        <Empty {...isCrew(category) ? emptyText.crew : emptyText.workroom} />
      ) : (
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              {isCrew(category) ? <CrewCard data={item} /> : <WorkroomCard data={item} />}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
