'use client';

import type { Message } from '@/entities/fixletter/messages1';
import { messages1 } from '@/entities/fixletter/messages1';

export default function ChatMessages() {
  const sameDateMsg = messages1.reduce(
    (acc, msg) => {
      if (!acc[msg.date]) {
        acc[msg.date] = [];
      }
      acc[msg.date].push(msg);
      return acc;
    },
    {} as { [date: string]: Message[] },
  );

  const sortedDates = Object.entries(sameDateMsg).sort(([dateA], [dateB]) =>
    dateA > dateB ? 1 : -1,
  );

  // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 주석처리 할게요! (기태)
  // const dateList = sortedDates.map(([date]) => date);

  return (
    <div className='slim-scrollbar flex flex-1 flex-col gap-2 overflow-y-auto px-8 py-4'>
      {sortedDates.map(([date, messages]) => (
        <div key={date}>
          {/* 날짜 */}
          <div className='mx-auto my-3 mt-[30px] mb-[15px] text-center text-xs text-gray-400'>
            {date}
          </div>
          {/* 메시지 리스트 (그 날짜에 해당하는) */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'} mb-[25px]`}
            >
              {msg.fromMe ? (
                <div className='flex items-end'>
                  <p className={'text-gray4 marge pr-2 text-[12px]'}>{msg.time}</p>
                  <div className='max-w-xs rounded-lg border border-gray-300 bg-white px-4 py-2 text-[14px] whitespace-pre-line'>
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div className='flex items-end'>
                  <div className='max-w-xs rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-[14px] whitespace-pre-line'>
                    {msg.text}
                  </div>
                  <p className={'text-gray4 pl-2 text-end text-[12px]'}>{msg.time}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
