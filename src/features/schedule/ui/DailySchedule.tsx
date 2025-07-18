import { Trash2 } from 'lucide-react';
import Schedule from './Schedule';

export default async function DailySchedule() {
  return (
    <section className='border-gray5 flex w-1/3 flex-col rounded-[10px] border'>
      <div className='text-h4 flex h-30 items-center px-4 font-extrabold'>2525.12.12.금요일</div>
      {/* 수정/삭제 드롭다운 하나만 열리게 해야하나? */}
      {/* 높이 제한: 스케쥴 많아지면 스크롤 나와야함 (overflow-y-scroll 만 가지고 작동 안함) */}
      <ul className='border-gray5 grow border-y'>
        <Schedule />
        <Schedule />
        <Schedule />
      </ul>
      {/* 컴포넌트 분리 (클라이언트 컴포넌트) */}
      <div className='flex h-30 items-center gap-2 px-4 py-5.5'>
        {/* 버튼이 아니라 링크여야 하나? */}
        <button className='border-gray5 text-h4 hover:bg-gray6 h-full grow rounded-[10px] border px-3.5 text-left font-extrabold transition duration-200 hover:cursor-pointer'>
          + 새로운 일정 추가
        </button>
        <button className='border-gray5 hover:bg-gray6 h-full w-[75px] rounded-[10px] border transition duration-200 hover:cursor-pointer'>
          <Trash2 size={26} className='m-auto' />
        </button>
      </div>
    </section>
  );
}
