import ListCardButtons from './ListCardButtons';

// TODO: 인자로 워크룸 받기
export default async function WorkroomListCard() {
  return (
    // TODO: 클릭 시 워크룸 상세 페이지로 이동 (받은 워크룸 id) (Link 태그로?)
    <div className='border-gray5 flex items-center justify-between rounded-[5px] border bg-white py-[32px] pr-[80px] pl-[25px]'>
      <div className='flex items-center gap-8'>
        {/* 질문 답변 받고나서 햄버거 아이콘 대체 (일단 필요성 자체에 의문) */}
        <span>...</span>

        <div className='flex flex-col gap-4'>
          <div className='bg-pointGreen mb-2.5 h-4 w-4 rounded-full' />
          <h3 className='text-[24px] font-extrabold'>워크룸 이름</h3>
          <span className='text-gray3 text-[18px]'>2025.01.01 ~ 2025.01.01</span>
        </div>
      </div>

      {/* TODO: 받은 워크룸에서 id 넘기기, 이벤트 버블링 방지하기 */}
      <ListCardButtons workroomId='123' />
    </div>
  );
}
