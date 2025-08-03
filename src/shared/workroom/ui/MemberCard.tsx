import { dummyMembersItems } from '@/entities/workroom/dummyMember';
import Image from 'next/image';
import { Lock } from 'lucide-react';

type MemberCardProps = {
  data: dummyMembersItems;
};

export default function MemberCard({ data }: MemberCardProps) {
  return (
    <div className='flex justify-center gap-5 py-[30px]'>
      <div
        key={data.id}
        className='border-gray4 flex h-[320px] w-[260px] flex-col items-center rounded-[5px] border p-[40px]'
      >
        <Image src={data.avatar} alt='프로필이미지' width={100} height={100} />
        <h3 className='mt-[20px] text-[20px] font-extrabold'>{data.name}</h3>
        <p className='text-gray3 mb-[20px] text-[14px]'>
          {data.job} | {data.career}
        </p>
        <div className='flex items-center gap-[10px]'>
          {data.isFollowing ? (
            <button className='bg-mainBlack text-mainWhite h-[40px] w-[100px] rounded-[5px] text-[14px] font-bold'>
              팔로우
            </button>
          ) : (
            <button className='bg-mainWhite border-mainBlack h-[40px] w-[100px] rounded-[5px] border text-[14px] font-bold'>
              팔로잉
            </button>
          )}
          {data.isFollowing ? (
            <button className='bg-mainRed text-mainWhite h-[40px] w-[100px] rounded-[5px] text-[14px] font-bold'>
              평가하기
            </button>
          ) : (
            <button className='bg-mainWhite border-gray5 flex h-[40px] w-[100px] items-center justify-center rounded-[5px] border font-bold'>
              <p className='text-gray4 text-[14px]'>평가하기</p>
              <Lock size={14} className='text-gray4' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
