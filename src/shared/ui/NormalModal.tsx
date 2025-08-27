import { Check } from 'lucide-react';
import Modal from './Modal';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { colorChangeAnimation } from './Animation';
import { Dispatch, SetStateAction } from 'react';

const MOBILE_STYLE = {
  // 태블릿과 동일함
  container: 'py-7 px-6',
  check: 'h-[37px] w-[37px]',
  title: 'pt-[20px] text-[22px]',
  subtext: 'text-[12px] pb-[20px]',
  button: 'text-[13px] font-bold gap-1.5',
};
const DESKTOP_STYLE = {
  container: 'px-[75px] py-[70px]',
  check: 'h-[58px] w-[58px]',
  title: 'pt-[43px] text-[34px]',
  subtext: 'text-[20px] pb-[42px]',
  button: 'text-[16px] font-extrabold gap-5',
};

const RESPONSIVE_STYLES = {
  mobile: MOBILE_STYLE,
  tablet: MOBILE_STYLE,
  desktop: DESKTOP_STYLE,
};

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
  setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined // 모달 밖 클릭 시 close 유무
}

export default function NormalModal({ title, subtext, buttons, check, setIsOpen }: NormalModalProps) {
  const responsiveStyle = useMediaQuery(RESPONSIVE_STYLES);

  return (
    <Modal className={'flex ' + responsiveStyle.container} setIsOpen={setIsOpen}>
      {/* 체크 아이콘 */}
      {check && (
        <Check
          strokeWidth={3}
          className={'bg-mainRed20 text-mainRed rounded-full p-3 ' + responsiveStyle.check}
        />
      )}

      {/* 문구 */}
      <h1 className={'px-5 font-extrabold ' + responsiveStyle.title}>{title}</h1>
      <div
        className={
          'text-gray3 flex flex-col items-center pt-[14px] font-semibold ' + responsiveStyle.subtext
        }
      >
        {subtext.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      {/* 버튼들 */}
      <div className={'flex text-white ' + responsiveStyle.button}>
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
