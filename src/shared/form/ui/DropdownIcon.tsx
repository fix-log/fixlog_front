import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Plus } from 'lucide-react';

interface DropdownIcon {
  type: 'single' | 'multi';
  form: string | undefined;
  target: string;
}

export default function DropdownIcon({ type, form, target }: DropdownIcon) {
  const toggleIcons = {
    single: {
      open: <ChevronDown />,
      close: <ChevronUp />,
    },
    multi: {
      open: <Plus />,
      close: <ChevronDown />,
    },
  };

  return (
    <div className='text-gray1 pr-[15px]'>
      {form !== target ? toggleIcons[type].open : toggleIcons[type].close}
    </div>
  );
}
