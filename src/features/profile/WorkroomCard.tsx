import { workroomType } from './dummy';

interface WorkroomCardProps {
  data: workroomType;
}

export default function WorkroomCard({ data }: WorkroomCardProps) {
  return (
    <div className='border-gray5 w-[253px] rounded-[5px] border-2 md:w-[400px] mb-[54px]'>
      {/* 상단 모집현황 & 모집날짜 */}
      <div className='bg-mainWhite text-gray3 border-gray5 flex w-full items-center border-b p-[12px_22px] md:p-[22px_36px]'>
        <div className='h-[12px] w-[12px] overflow-hidden rounded-full md:h-[15px] md:w-[15px]'>
          <svg
            className={'rounded-full border ' + data.모집현황 ? 'bg-pointDarkGreen' : 'bg-gray2'}
          />
        </div>
        <p className='text-gray4 ml-auto text-[10px] md:text-[14px]'>
          {data.모집시작날짜}~{data.모집종료날짜}
        </p>
      </div>

      {/* 내용, 버튼들 */}
      <div className='bg-mainWhite border-gray5 flex flex-col gap-[8px] p-[26px_20px] text-[10px] md:gap-[13px] md:p-[37px_36px] md:text-[18px]'>
        <h1 className='text-[18px] leading-[130%] font-extrabold md:text-[24px]'>{data.제목}</h1>
        <p className='text-gray4'>{data.소개글}</p>
        <span className='border-mainRed bg-mainWhite text-mainRed my-[5px] mr-[15px] self-start rounded-[20px] border p-[4px_8px] md:p-[5px_10px] font-bold'>
          {data.포지션}
        </span>
        <button className='text-mainWhite bg-mainBlack mt-2 h-[35px] grow cursor-pointer rounded-[5px] md:mt-3.5 md:h-[50px]'>
          워크룸 보러가기
        </button>
      </div>
    </div>
  );
}
