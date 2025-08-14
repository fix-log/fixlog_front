import { workroomType } from './dummy';

interface WorkroomCardProps {
  data: workroomType;
}

export default function WorkroomCard({ data }: WorkroomCardProps) {
  return (
    <div className='border-gray5 h-[380px] w-[400px] rounded-[5px] border-2'>
      <div className='bg-mainWhite text-gray3 border-gray5 flex w-full items-center border-b p-[22px_36px]'>
        <div className='h-[15px] w-[15px] overflow-hidden rounded-full'>
          <svg
            className={'rounded-full border ' + data.모집현황 ? 'bg-pointDarkGreen' : 'bg-gray2'}
          />
        </div>
        <p className='text-gray4 ml-auto text-[14px]'>
          {data.모집시작날짜}~{data.모집종료날짜}
        </p>
      </div>
      <div className='bg-mainWhite border-gray5 flex flex-col gap-[13px] p-[37px_36px]'>
        <h1 className='text-[24px] leading-[130%] font-extrabold'>{data.제목}</h1>
        <p className='text-gray4'>{data.소개글}</p>
        <span className='border-mainRed bg-mainWhite text-mainRed my-[5px] mr-[15px] self-start rounded-[20px] border px-[10px] py-[5px] font-bold'>
          {data.포지션}
        </span>
        <button className='text-mainWhite bg-mainBlack mt-3.5 h-[50px] grow cursor-pointer rounded-[5px]'>
          워크룸 보러가기
        </button>
      </div>
    </div>
  );
}
