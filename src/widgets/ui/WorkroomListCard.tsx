export default async function WorkroomListCard() {
  return (
    <div className='border-gray5 flex items-center justify-between rounded-[5px] border bg-white py-[32px] pr-[80px] pl-[25px]'>
      <div className='flex items-center gap-8'>
        <span>...</span>
        {/* 질문 답변 받고나서 햄버거 아이콘 대체 */}
        <div className='flex flex-col gap-4'>
          <div className='bg-pointGreen mb-2.5 h-4 w-4 rounded-full' />
          <h3 className='text-[24px] font-extrabold'>워크룸 이름</h3>
          <span className='text-gray3 text-[18px]'>2025.01.01 ~ 2025.01.01</span>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <button className='bg-mainRed h-10 w-[150px] rounded-[5px] text-white hover:cursor-pointer'>
          수정하기
        </button>
        <button className='bg-gray3 h-10 w-[150px] rounded-[5px] text-white hover:cursor-pointer'>
          삭제하기
        </button>
      </div>
    </div>
  );
}
