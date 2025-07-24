'use client';

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

interface CustomDropdownProps {
  options: string[];
  label?: string;
  placeholder?: string;
  width?: string; // tailwind width 클래스
  onChange?: (value: string) => void;
  required?: boolean;
}

export default function CustomDropdown({
  options,
  label,
  placeholder = '구분',
  width = 'w-[169px]',
  onChange,
  required,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={`${width} relative`}>
      {label && (
        <label className='mb-1 block text-[18px] font-bold select-none'>
          {label} {required && <span className='text-mainRed'>*</span>}
        </label>
      )}
      <button
        type='button'
        className='border-gray5 flex h-[48px] w-full items-center justify-between rounded-[5px] border bg-white px-4 text-[16px] font-bold'
        onClick={() => setOpen((v) => !v)}
      >
        <span className={selected ? 'text-mainBlack' : 'text-gray2'}>
          {selected ?? placeholder}
        </span>
        <ChevronDown size={20} />
      </button>
      {open && (
        <ul className='border-gray5 absolute right-0 left-0 z-10 mt-1 rounded-b-[5px] border bg-white'>
          {options.map((opt) => (
            <li
              key={opt}
              className={`hover:bg-gray6 border-gray4 flex h-[48px] cursor-pointer items-center border-b px-4 text-[16px] font-bold transition last:border-b-0 ${
                selected === opt ? 'bg-gray5' : ''
              }`}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
                onChange?.(opt);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
