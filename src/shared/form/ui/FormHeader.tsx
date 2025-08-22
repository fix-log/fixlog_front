interface FormHeaderProps {
  title: string;
}

export default function FormHeader({ title }: FormHeaderProps) {
  return <h1 className='form-dynamic-header cursor-default text-[34px] font-bold'>{title}</h1>;
}
