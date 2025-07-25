import { dummyCrewPosts } from '@/entities/search/dummyCrewPosts';
import Image from 'next/image';

export default function SearCrewCard() {
  const data = dummyCrewPosts;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className='flex py-[20px] pl-[20px]'>
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
            <p className='text-[20px] font-semibold'>{item.title}</p>
          </div>
          {item.isBookmarked ? (
            <Image src='/star.png' alt='true ' width={20} height={20} />
          ) : (
            <Image src='/binstar.png' alt='false' width={20} height={20} />
          )}
        </div>
      ))}
    </div>
  );
}
