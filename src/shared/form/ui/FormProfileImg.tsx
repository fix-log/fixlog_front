import Image from 'next/image';
import { useState } from 'react';

interface FormProfileImgProps {
  profileImg?: string;
}

export default function FormProfileImg({ profileImg }: FormProfileImgProps) {
  console.log('임시호출 FormProfileImg', profileImg);
  const [img, setImg] = useState<string | ArrayBuffer | null>('/icon_profile.png');

  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // 파일이 선택되지 않은 경우 처리
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='border-gray6 bg-gray6 relative mb-5 h-[150px] w-[150px] overflow-hidden rounded-full border'>
        <input
          id='profile-img'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={(e) => saveImgFile(e)}
        />
        <label
          htmlFor='profile-img'
          className='bg-gray6/50 absolute inset-0 flex cursor-pointer items-center justify-center text-white'
        >
          <Image
            src={typeof img === 'string' ? img : ''}
            alt='프로필 이미지'
            width={150}
            height={150}
            className='h-full w-full object-cover'
          />
        </label>
      </div>
    </div>
  );
}
