import { FieldValues, UseFormRegister } from 'react-hook-form';
import { formErrorMessage, FormErrorMessageType } from './FormErrorMessage';
import { validation } from './Validation';

interface FormRegisterProps {
  name: keyof FormErrorMessageType;
  register: UseFormRegister<FieldValues>;
}

export default function formRegister({ register, name }: FormRegisterProps) {
  return {
    ...register(name, {
      required: formErrorMessage[name].required,
      pattern: {
        value: validation[name],
        message: formErrorMessage[name].message,
      },
    }),
  };
}
