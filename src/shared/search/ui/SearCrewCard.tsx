import { dummyCrewPosts } from '@/entities/search/dummyCrewPosts';
import Image from 'next/image';

export default function SearCrewCard() {
  const data = dummyCrewPosts;

  return (
    <div>
      {data.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className='border-gray5 flex border-b py-[20px] pl-[20px] last:border-b-0'
        >
          <div className='flex flex-col pl-[20px]'>
            <div className='flex gap-2'>
              {item.status === '모집중' ? (
                <p className='text-pointDarkGreen text-[16px] font-bold'> {item.status}</p>
              ) : (
                <p className='text-gray3 text-[16px] font-bold'> {item.status}</p>
              )}

              <p className='text-gray3 font-regula text-[16px]'>|</p>
              <p className='text-gray3 font-regula text-[16px]'> {item.date}</p>
            </div>
            <p className='mt-[10px] text-[20px] font-semibold'>{item.title}</p>
          </div>
          <div className='ml-auto flex items-center pr-[30px]'>
            <Image
              src={item.isBookmarked ? '/star.png' : '/binstar.png'}
              alt={item.isBookmarked ? '즐겨찾기됨' : '즐겨찾기 안됨'}
              width={28}
              height={28}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
