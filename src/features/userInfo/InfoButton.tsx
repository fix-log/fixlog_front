import Link from 'next/link';

export default function InfoButton() {
  return (
    <div className='text-body-m mt-7 flex h-[50px] gap-4 text-center font-bold'>
      <Link href={'dd'} className='bg-mainRed grow-2 rounded-[5px] py-3 leading-[1.8] text-white'>
        계정 정보 수정
      </Link>
      <Link href={'dd'} className='bg-mainBlack grow-2 rounded-[5px] py-3 leading-[1.8] text-white'>
        프로필 수정
      </Link>
      <button className='border-mainBlack mr-4 grow cursor-pointer rounded-[5px] border py-3'>
        프로필 공유
      </button>
    </div>
  );
}
