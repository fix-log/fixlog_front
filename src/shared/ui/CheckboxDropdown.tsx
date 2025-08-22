'use client';

import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/util';
import Badge from './Badge';

interface CheckboxDropdownProps {
  name: string;
  options: string[];
  placeholder?: string;
  openText?: string;
  className?: string;
}

export default function CheckboxDropdown({
  name,
  options,
  placeholder,
  openText,
  className,
}: CheckboxDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 체크박스 토글 함수
  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  };

  return (
    <div
      draggable={false}
      className={cn(
        className,
        'flex h-fit min-h-15 flex-col items-center justify-center py-5 select-none',
        isOpen ? 'cursor-default' : 'cursor-pointer',
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex w-full items-center justify-between'>
        <span className='text-gray4 text-h5'>{isOpen ? openText : placeholder}</span>
        {isOpen ? <ChevronDown className='cursor-pointer' /> : <Plus className='cursor-pointer' />}
      </div>

      {/* 옵션 목록 */}
      <ul
        className={cn(
          'flex flex-wrap gap-3 bg-white transition-all duration-200',
          isOpen ? 'mt-5 max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        {options.map((option) => (
          // TODO: 체크박스로 변경
          // <Badge key={option} name={option} />
          <BadgeCheckbox
            key={option}
            name={name}
            tag={option}
            id={option}
            isChecked={selectedOptions.includes(option)}
            onToggle={() => toggleOption(option)}
          />
        ))}
      </ul>
    </div>
  );
}

// TODO: 체크박스 컴포넌트 분리
const BadgeCheckbox = ({
  name,
  tag,
  id,
  isChecked,
  onToggle,
}: {
  name: string;
  tag: string;
  id: string;
  isChecked: boolean;
  onToggle: () => void;
}) => {
  return (
    <label htmlFor={id} onClick={(e) => e.stopPropagation()}>
      <input
        id={id}
        type='checkbox'
        name={name}
        value={tag}
        className='hidden'
        checked={isChecked}
        onChange={onToggle}
      />
      <Badge
        tag={tag}
        className={cn(
          'cursor-pointer transition-colors',
          !isChecked && 'bg-gray6 border-gray6 text-mainBlack', // 체크 X
        )}
      />
    </label>
  );
};
