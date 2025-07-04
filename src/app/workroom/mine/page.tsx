import WorkroomListCard from '@/widgets/ui/WorkroomListCard';

export default async function Page() {
  return (
    <>
      <h2 className='mt-6 w-full text-[32px] font-extrabold md:mt-24'>
        👑 여운님이 만든 워크룸 리스트
      </h2>

      <ul className='my-12 flex w-full flex-col gap-4'>
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
        <WorkroomListCard />
      </ul>
    </>
  );
}
