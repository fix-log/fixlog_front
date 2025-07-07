import WorkroomListCard from '@/features/workroom/ui/WorkroomListCard';

// 임시
const workrooms = [
  { id: '1', name: '워크룸 1', period: '2025.01.01 ~ 2025.01.10' },
  { id: '2', name: '워크룸 2', period: '2025.02.01 ~ 2025.02.12' },
  { id: '3', name: '워크룸 3', period: '2025.03.01 ~ 2025.03.14' },
  { id: '4', name: '워크룸 4', period: '2025.04.01 ~ 2025.04.16' },
  { id: '5', name: '워크룸 5', period: '2025.05.01 ~ 2025.05.20' },
  { id: '6', name: '워크룸 6', period: '2025.06.01 ~ 2025.06.22' },
  { id: '7', name: '워크룸 7', period: '2025.07.01 ~ 2025.07.24' },
  { id: '8', name: '워크룸 8', period: '2025.08.01 ~ 2025.08.26' },
  { id: '9', name: '워크룸 9', period: '2025.09.01 ~ 2025.09.28' },
  { id: '10', name: '워크룸 10', period: '2025.10.01 ~ 2025.10.31' },
];

export default async function Page() {
  return (
    <>
      <h2 className='mt-6 w-full text-[18px] font-extrabold md:mt-24 md:text-[32px]'>
        👑 여운님이 만든 워크룸 리스트
      </h2>

      <ul className='my-5 flex w-full flex-col gap-2 md:my-12 md:gap-4'>
        {workrooms.map((workroom) => (
          <WorkroomListCard key={workroom.id} workroom={workroom} />
        ))}
      </ul>
    </>
  );
}
