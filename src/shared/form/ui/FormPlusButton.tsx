interface FormPlusButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
}

export default function FormIconButton({ onClick, icon, className }: FormPlusButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={
        'border-gray4 bg-mainWhite mt-[15px] ml-[20px] flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded border p-0 ' +
        (className ?? '')
      }
    >
      {icon}
    </button>
  );
}
