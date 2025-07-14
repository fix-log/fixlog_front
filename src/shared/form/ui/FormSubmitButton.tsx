interface FormSubmitButtonProps {
  text: string;
  isSubmitting: boolean;
  className?: string;
}

export default function FormSubmitButton({ text, isSubmitting, className }: FormSubmitButtonProps) {
  if (!className) className = '';
  return (
    <button
      className={
        `bg-mainBlack text-mainWhite !my-20 h-[60px] w-full cursor-pointer rounded-[5px] text-[20px] font-bold ` +
        className
      }
      type='submit'
      disabled={isSubmitting}
    >
      {text}
    </button>
  );
}
