import { colorChangeAnimation } from '@/shared/ui/Animation';

interface FormSubmitButtonProps {
  text: string;
  isSubmitting: boolean;
  className?: string;
}

/**
 * @param isSubmitting RHF의 useForm().formState{isSubmitting}를 받음
 */
export default function FormSubmitButton({ text, isSubmitting, className }: FormSubmitButtonProps) {
  if (!className) className = '';
  return (
    <button
      className={
        `bg-mainBlack text-mainWhite !my-20 h-[60px] w-full cursor-pointer rounded-[5px] text-[20px] font-bold ` +
        className +
        ' hover:bg-mainRed' +
        colorChangeAnimation
      }
      type='submit'
      disabled={isSubmitting}
    >
      {text}
    </button>
  );
}
