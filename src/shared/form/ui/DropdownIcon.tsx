import { ChevronDown } from 'lucide-react';
import { Plus } from 'lucide-react';

interface DropdownIcon {
  form: string | undefined;
  target: string;
}

export default function DropdownIcon({ form, target }: DropdownIcon) {
  return <div className='text-gray1 !pt-[3px] !pr-[15px]'>{form === target ? <ChevronDown /> : <Plus />}</div>;
}
