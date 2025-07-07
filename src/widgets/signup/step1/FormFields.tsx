import FormInputString from '@/shared/form/ui/FormInputString';
import { useFormContext } from 'react-hook-form';

const DATA = [
  { label: '이메일', type: 'email', name: 'email', placeholder: '이메일을 입력해주세요' },
  { label: '닉네임', type: 'text', name: 'nickname', placeholder: '닉네임을 입력해주세요' },
  { label: '비밀번호', type: 'password', name: 'password', placeholder: '비밀번호를 입력해주세요' },
  {
    label: '비밀번호 확인',
    type: 'password',
    name: 'confirmPassword',
    placeholder: '이메일을 입력해주세요',
  },
] as const;

export default function FormFields() {
  const form = useFormContext();
  const emailWatch = form.watch('isEmailVerified');
  const verfiedButton = (
    <button
      className={
        'bg-mainBlack text-mainWhite !my-[15px] !ml-3 h-[60px] w-[90px] cursor-pointer rounded-[5px] font-bold'
      }
      type='button'
      onClick={() => form.setValue('isEmailVerified' as const, true)}
    >
      {emailWatch ? '완료' : '인증'}
    </button>
  );

  return (
    <div>
      {DATA.map((item) => (
        <div key={item.name} className={item.name === 'email' ? 'flex w-full' : ''}>
          <FormInputString
            label={item.label}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
          >
            {item.name === 'email' && verfiedButton}
          </FormInputString>
        </div>
      ))}
    </div>
  );
}
