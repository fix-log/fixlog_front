import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BackIconButtonProps {
  onclick?: () => void;
}

export default function BackIconButton({ onclick }: BackIconButtonProps) {
  const router = useRouter();
  return (
    <button onClick={onclick || router.back} className='mt-7 mr-auto ml-5 cursor-pointer'>
      <ArrowLeft strokeWidth={2.5} className='h-[30px] w-[30px]' />
    </button>
  );
}
