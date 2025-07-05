import Link from 'next/link';

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
    <Link
      href={`/workroom/${workroom.id}/info`}
      className='border-gray5 flex h-[212px] w-[452px] flex-col justify-center gap-2 rounded-[5px] border bg-white px-[45px] py-[30px]'
    >
      <div className='flex w-full items-center justify-between pb-1.5'>
        <div className='bg-gray2 h-4 w-4 rounded-full' />
        {/* TODO: 더보기 버튼 (클라이언트 컴포넌트로?) 이벤트 버블링 방지하기 */}
        <button>...</button>
      </div>

      <h3 className='text-[24px] font-extrabold'>{workroom.name}</h3>
      <span className='text-gray3 pb-2 text-[18px]'>{workroom.period}</span>
      {/* 역할 */}
      <Badge name='Designer' />
    </Link>
  );
}

// 나중에 공통 컴포넌트에 제대로 (일단 임시)

const Badge = ({ name }: { name: string }) => {
  return (
    <span className='text-mainRed border-mainRed w-fit rounded-full border px-3 py-0.5 text-lg'>
      {name}
    </span>
  );
};
