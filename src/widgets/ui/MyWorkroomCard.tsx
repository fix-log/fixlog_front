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

interface MyWorkroomCardProps {
  workroom: Workroom;
}

export default async function MyWorkroomCard({ workroom }: MyWorkroomCardProps) {
  return (
    <Link
      href={`/workroom/${workroom.id}/info`}
      className='border-mainRed/40 flex h-87 w-144 flex-col items-center justify-center gap-4 rounded-[5px] border bg-white px-[45px] py-[30px] shadow-[0_0_13.5px_0_rgba(255,68,39,0.2)]'
    >
      <div className='mb-20 flex w-full items-center justify-between'>
        <span className='text-pointDarkGreen border-pointDarkGreen rounded-full border-2 px-2 py-0.5 text-[14px]'>
          {workroom.status}
        </span>
        {/* TODO: 더보기 버튼 (클라이언트 컴포넌트로?) 이벤트 버블링 방지하기 */}
        <button>...</button>
      </div>

      <div className='flex w-full flex-col justify-center'>
        <h3 className='mb-2 text-[32px] font-extrabold'>{workroom.name}</h3>
        <p className='text-gray3 text-[18px]'>{workroom.description}</p>
        <div className='bg-gray5 my-6 h-[1px] w-full' />
        <span className='text-gray3 text-[18px]'>{workroom.period}</span>
      </div>
    </Link>
  );
}
