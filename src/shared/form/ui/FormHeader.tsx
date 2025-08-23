interface FormHeaderProps {
  title: string;
}

export default function FormHeader({ title }: FormHeaderProps) {
  return <h1 className='my-8 lg:m-[56px_0] cursor-default text-[34px] font-extrabold'>{title}</h1>;
}
