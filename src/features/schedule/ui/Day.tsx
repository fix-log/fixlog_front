'use client';

export default function Day({ date }: { date: number }) {
  return (
    // TODO: 오늘일 경우에만 보더 추가
    <td>
      <div className='flex h-[160px] flex-col p-3'>
        <p>{date}</p>
        {/* TODO: 일정 배치 */}
      </div>
    </td>
  );
}
