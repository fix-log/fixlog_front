'use client';

import Dropdown from '@/shared/ui/Dropdown';
import { Dispatch, SetStateAction } from 'react';

// 임시 컬러 색상 변수 (TODO: constants에다가 분리하기)
const ColorList = [
  {
    name: 'red',
    color: '#F74627',
  },
  {
    name: 'lightRed',
    color: '#F8D8D3',
  },
  {
    name: 'orange',
    color: '#FF9C43',
  },
  {
    name: 'lightOrange',
    color: '#FFDFC3',
  },
  {
    name: 'yellow',
    color: '#FBCB47',
  },
  {
    name: 'lightYellow',
    color: '#FAEBC1',
  },
  {
    name: 'green',
    color: '#68D472',
  },
  {
    name: 'lightGreen',
    color: '#CFF4D1',
  },
  {
    name: 'teal',
    color: '#53D8CB',
  },
  {
    name: 'lightTeal',
    color: '#C3FAF6',
  },
  {
    name: 'blue',
    color: '#3BADFF',
  },
  {
    name: 'lightBlue',
    color: '#D7EFFECC',
  },
  {
    name: 'purple',
    color: '#8651FC',
  },
  {
    name: 'lightPurple',
    color: '#F2EAFF',
  },
  {
    name: 'pink',
    color: '#F74AC0',
  },
  {
    name: 'lightPink',
    color: '#FFE2F6',
  },
  {
    name: 'gray',
    color: '#818181',
  },
  {
    name: 'lightGray',
    color: '#DBDBDB',
  },
];

interface ColorPaletteProps {
  setSelectedColor: Dispatch<SetStateAction<string>>;
  isColorPaletteOpen: boolean;
  setIsColorPaletteOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ColorPalette({
  setSelectedColor,
  isColorPaletteOpen,
  setIsColorPaletteOpen,
}: ColorPaletteProps) {
  return (
    <Dropdown
      position='top-9.5 left-9.5'
      isOpen={isColorPaletteOpen}
      onClose={() => setIsColorPaletteOpen(false)}
      className='border-gray5 flex h-19 flex-col flex-wrap justify-center gap-2 rounded-[5px] border bg-white p-3'
    >
      {ColorList.map((color) => (
        <div
          key={color.name}
          className='h-5 w-5 cursor-pointer rounded-full'
          // 동적으로 생성된 클래스명은 빌드 타임에 감지되지 않아서 클래스명으로 적용 불가 -> style로 적용
          style={{ backgroundColor: color.color }}
          onClick={() => {
            setSelectedColor(color.color);
            setIsColorPaletteOpen(false);
          }}
        />
      ))}
    </Dropdown>
  );
}
