import { dummyProfiles } from '@/entities/search/dummyProfiles';
import Image from 'next/image';

export default function SearProfileCard() {
  const data = dummyProfiles;
  return (
    <div className='flex justify-center gap-5 py-[30px]'>
      {data.slice(0, 5).map((item) => (
        <div
          key={item.id}
          className='border-gray4 flex h-[320px] w-[230px] flex-col items-center rounded-[5px] border p-[40px]'
        >
          <Image src={item.avatar} alt='프로필이미지' width={100} height={100} />
          <h3 className='mt-[20px] text-[20px] font-extrabold'>{item.name}</h3>
          <p className='text-gray3 mb-[20px] text-[16px]'>{item.job}</p>
          {item.isFollowing ? (
            <button className='bg-mainRed text-mainWhite h-[40px] w-[140px] rounded-[5px]'>
              팔로잉
            </button>
          ) : (
            <button className='bg-mainWhite border-gray5 h-[40px] w-[140px] rounded-[5px] border'>
              팔로우
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
