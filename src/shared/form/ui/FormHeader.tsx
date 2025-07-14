interface FormHeaderProps {
  title: string;
}

export default function FormHeader({ title }: FormHeaderProps) {
  return <h1 className='!my-14 cursor-default text-[34px] font-bold'>{title}</h1>;
}
