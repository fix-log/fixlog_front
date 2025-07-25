import { dummyFeedPosts } from '@/entities/search/dummyFeedPosts';
import Image from 'next/image';

export default function SearNewFeedCard() {
  const data = dummyFeedPosts;

  return (
    <div>
      {data.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className='border-gray5 my-[20px] flex items-center border-b pb-[20px] pl-[40px] last:border-b-0'
        >
          <div className='relative mr-[20px] w-[85px]'>
            <Image src={item.profileImage} alt='프로필이미지' width={85} height={85} />
            {item.flow ? (
              <Image
                src='/plus-circle.png'
                alt='팔로우여부확인'
                width={30}
                height={30}
                className='absolute right-0 bottom-0 z-50'
              />
            ) : (
              ''
            )}
          </div>
          <div className='w-[80%]'>
            <div className='mb-[5px] flex items-center gap-2'>
              <h3 className='text-mainBlack text-[16px] font-extrabold'>{item.author}</h3>
              <p className='text-gray3 text-[12px]'>{item.time}</p>
            </div>
            <p className='line-clamp-2 text-[14px]'>{item.content}</p>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}
