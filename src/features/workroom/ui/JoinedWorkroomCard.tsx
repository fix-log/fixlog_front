import Link from 'next/link';
import JoinedWorkroomCardOptionButton from './JoinedWorkroomCardOptionButton';
import Badge from '@/shared/ui/Badge';

// 워크룸 임시 타입
interface Workroom {
  id: string;
  name: string;
  description: string;
  period: string;
  status: string;
  member: number;
}

// 워크룸과 유저에 대한 정보 둘 다 필요 + 둘 연결
// 유저의 워크룸 리스트 {워크룸, 역할, 관리자여부, 등등?} 데이터 구조 확인하기

interface JoinedWorkroomCardProps {
  workroom: Workroom;
}

export default async function JoinedWorkroomCard({ workroom }: JoinedWorkroomCardProps) {
  return (
    <li className='relative transition-all duration-200 hover:scale-102 max-md:w-full'>
      <Link
        href={`/workroom/${workroom.id}/info`}
        className='absolute inset-0 z-0'
        aria-label={`${workroom.name} 워크룸 상세 보기 (참여한 워크룸)`}
      />

      <div className='border-gray5 flex flex-col justify-center gap-0.5 rounded-[5px] border bg-white px-[24px] py-[12px] md:h-[212px] md:w-[452px] md:gap-2 md:px-[45px] md:py-[30px]'>
        <div className='flex w-full items-center justify-between md:pb-1.5'>
          <div className='bg-gray2 h-2.5 w-2.5 rounded-full md:h-4 md:w-4' />
          <JoinedWorkroomCardOptionButton workroomId={workroom.id} />
        </div>

        <h3 className='text-[16px] font-extrabold md:text-[24px]'>{workroom.name}</h3>
        <span className='text-gray3 text-[10px] md:text-[18px]'>{workroom.period}</span>
        {/* 역할 */}
        <Badge tag='Designer' />
      </div>
    </li>
  );
}
