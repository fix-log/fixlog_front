import { Check } from 'lucide-react';
import Modal from './Modal';
import { colorChangeAnimation } from './Animation';
import { Dispatch, SetStateAction } from 'react';

export type buttonsType = {
  text: string;
  event: () => void;
  classname?: string;
};

interface NormalModalProps {
  title: string;
  subtext: string[];
  buttons: buttonsType[];
  check?: boolean; // 체크 이미지 유무
  setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined; // 모달 밖 클릭 시 close 유무
}

export default function NormalModal({
  title,
  subtext,
  buttons,
  check,
  setIsOpen,
}: NormalModalProps) {
  return (
    <Modal className='flex px-6 py-7 lg:px-[75px] lg:py-[70px]' setIsOpen={setIsOpen}>
      {/* 체크 아이콘 */}
      {check && (
        <Check
          strokeWidth={3}
          className='bg-mainRed20 text-mainRed h-[37px] w-[37px] rounded-full p-3 lg:h-[58px] lg:w-[58px]'
        />
      )}

      {/* 문구 */}
      <h1 className='px-5 pt-[20px] text-[22px] font-extrabold lg:pt-[43px] lg:text-[34px]'>
        {title}
      </h1>
      <div className='text-gray3 flex flex-col items-center pt-[14px] pb-[20px] text-[12px] font-semibold lg:pb-[42px] lg:text-[20px]'>
        {subtext.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      {/* 버튼들 */}
      <div className='flex gap-1.5 text-[13px] font-bold text-white lg:gap-5 lg:text-[16px] lg:font-extrabold'>
        {buttons.map((item) => {
          return (
            <button
              key={item.text}
              className={
                'bg-mainBlack cursor-pointer rounded-[5px] px-6 py-[10px] hover:bg-black ' +
                item.classname +
                colorChangeAnimation
              }
              onClick={item.event}
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </Modal>
  );
}
