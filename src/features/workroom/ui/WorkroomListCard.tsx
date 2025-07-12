import { Menu } from 'lucide-react';
import ListCardButtons from './ListCardButtons';
import Link from 'next/link';

// 임시 (모델 만들때 싹 정리하기)
interface Workroom {
  id: string;
  name: string;
  period: string;
}

interface WorkroomPageProps {
  workroom: Workroom;
}

export default async function WorkroomListCard({ workroom }: WorkroomPageProps) {
  return (
    <div className='relative'>
      {/* 전체 카드를 덮는 Link - 버튼 영역만 제외하고 클릭 가능 */}
      <Link
        href={`/workroom/${workroom.id}/info`}
        className='absolute inset-0 z-0'
        aria-label={`${workroom.name} 워크룸 상세 보기`}
      />

      {/* 카드 내용 */}
      <div className='border-gray5 pointer-events-none relative z-10 flex items-center justify-between rounded-[5px] border bg-white px-4 py-[16px] md:py-[32px] md:pr-[80px] md:pl-[25px]'>
        <div className='flex items-center gap-4 md:gap-8'>
          <Menu className='text-gray3 size-5' />
          <div className='flex flex-col gap-2 md:gap-4'>
            <div className='bg-pointGreen mb-1.5 h-3 w-3 rounded-full md:mb-2.5 md:h-4 md:w-4' />
            <h3 className='text-[16px] font-extrabold md:text-[24px]'>{workroom.name}</h3>
            <span className='text-gray3 text-[10px] md:text-[18px]'>{workroom.period}</span>
          </div>
        </div>

        {/* 버튼 영역 - pointer-events로 독립적으로 동작 */}
        <div className='pointer-events-auto relative z-20'>
          <ListCardButtons workroomId={workroom.id} />
        </div>
      </div>
    </div>
  );
}
