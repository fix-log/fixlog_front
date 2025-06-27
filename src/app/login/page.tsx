'use client';

import OAuthButton from '@/features/login/ui/OAuthButton';
import AuthLinkButton from '@/features/login/ui/AuthLinkButton';
import loginAPI from '@/features/login/api/loginAPI';
import { useRouter } from 'next/navigation';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import InputString from '@/shared/form/ui/InputString';
import { useForm } from 'react-hook-form';

export default function Login() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm();

    function handleClick() {
        const email = getValues('email');
        const password = getValues('password');

        if (loginAPI({ email, password, errors })) router.push('/');
        else alert(`계정을 찾을 수 없습니다\n다시 확인해주세요`);
    }

    return (
        <div className="flex flex-col items-center max-w-[500px] w-full">
            <FormHeader title="로그인" />
            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit(handleClick)}>
                <InputString type="email" name="email" placeholder="이메일을 입력해주세요" errors={errors} register={register} />
                <InputString type="password" name="password" placeholder="비밀번호를 입력해주세요" errors={errors} register={register} />
                <FormSubmitButton text="로그인하기" isSubmitting={isSubmitting} />
            </form>
            <hr className="border-gray5 w-full" />
            <div className="flex !my-10">
                <OAuthButton provider="github" />
                <OAuthButton provider="naver" />
                <OAuthButton provider="kakao" />
            </div>
            <div>
                <AuthLinkButton text="이메일 찾기" handleClick={() => router.push('/login/find-email')} />
                <AuthLinkButton text="비밀번호 찾기" handleClick={() => router.push('/login/find-password')} />
                <AuthLinkButton text="회원가입" handleClick={() => router.push('/login/signup')} className="text-mainRed" />
            </div>
        </div>
    );
}
