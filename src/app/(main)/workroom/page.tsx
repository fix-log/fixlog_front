import JoinedWorkroomCard from '@/features/workroom/ui/JoinedWorkroomCard';
import MyWorkroomCarousel from '@/features/workroom/ui/MyWorkroomCarousel';
import WorkroomPlusButton from '@/widgets/ui/WorkroomPlusButton';
import Link from 'next/link';

// 임시 참여한 워크룸 데이터
const joinedWorkrooms = [
  {
    id: '3',
    name: '워크룸 3',
    description: '워크룸 1 설명. 블라블라. Blah Blah',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '4',
    name: '워크룸 4',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '5',
    name: '워크룸 5',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '6',
    name: '워크룸 6',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '7',
    name: '워크룸 7',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
  {
    id: '8',
    name: '워크룸 8',
    description: '25자 정도 (띄어쓰기 포함) 소개글을 쓸 수 있어요.',
    period: '2025.01.01 ~ 2025.01.01',
    status: '진행중',
    member: 10,
  },
];

export default function Workroom() {
  return (
    <>
      {/* 워크룸 홈 (로그인 가드 필요) */}
      {/* <div>+ 버튼</div> */}

      <section className='flex w-full flex-col gap-5 pt-6 md:gap-10 md:pt-24'>
        <Link href='/workroom/mine' className='w-fit'>
          <h2 className='text-[18px] font-extrabold md:text-[32px]'>
            👑 여운님이 만든 워크룸 {'>'}
          </h2>
        </Link>

        {/* 워크룸 없을 때 */}
        <div className='md:bg-mainRed/4 flex gap-4 md:py-16'>
          <Link
            href={`/workroom/create`}
            className='mx-auto transition-all duration-200 hover:scale-102 max-md:w-full'
          >
            <div className='border-gray5 md:border-mainRed/40 flex flex-col items-center justify-center gap-2 rounded-[5px] border bg-white px-5 py-20 md:gap-4 md:px-18.5 md:shadow-[0_0_13.5px_0_rgba(255,68,39,0.2)]'>
              <div className='bg-mainRed mb-2 flex h-10 w-10 items-center justify-center rounded-full md:mb-5.5 md:h-15 md:w-15'>
                <span className='text-3xl text-white md:text-5xl'>+</span>
              </div>
              <h3 className='text-[16px] font-extrabold md:text-[32px]'>워크룸 만들기</h3>
              <p className='text-gray3 text-[12px] md:text-[18px]'>
                팀원들과 함께 프로젝트를 할 수 있는 워크룸을 만들어보세요!
              </p>
            </div>
          </Link>
        </div>

        {/* 워크룸 있을 때 */}
        {/* TODO: 워크룸 데이터 받아서 인자로 넘겨주기 */}
        <MyWorkroomCarousel />
      </section>

      <section className='flex w-full flex-col gap-5 pt-10 pb-6 md:gap-10 md:pt-40 md:pb-24'>
        <h2 className='text-[18px] font-extrabold md:text-[32px]'>👑 여운님이 참여한 워크룸</h2>
        <ul className='flex flex-wrap gap-2 md:gap-4'>
          {joinedWorkrooms.map((workroom) => (
            <JoinedWorkroomCard key={workroom.id} workroom={workroom} />
          ))}
        </ul>
      </section>

      <WorkroomPlusButton />
    </>
  );
}
