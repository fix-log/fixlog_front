import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '../lib/util';

interface BackIconButtonProps {
  onclick?: () => void;
  className?: string;
}

export default function BackIconButton({ onclick, className }: BackIconButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={onclick || router.back}
      className={'m-0 lg:ml-5 lg:mt-7 mr-auto cursor-pointer ' + cn(className)}
    >
      <ArrowLeft strokeWidth={2.5} className='h-[30px] w-[30px]' />
    </button>
  );
}
