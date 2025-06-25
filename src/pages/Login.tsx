'use client';

import AuthLinkButton from '@/features/login/ui/AuthLinkButton';
import OAuthButton from '@/features/login/ui/OAuthButton';
import BackButton from '@/shared/ui/BackButton';
import FormHeader from '@/shared/ui/FormHeader';
import FormSubmitButton from '@/shared/ui/FormSubmitButton';
import Input from '@/shared/ui/Input';

export default function Login() {
    return (
        <div>
            <BackButton />
            <FormHeader title="로그인" />
            <Input type="email" placeholder="이메일을 입력해주세요" />
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
            <FormSubmitButton text="로그인하기" handleClick={() => console.log('test')} />
            <hr />
            <div>
                <OAuthButton provider='github' />
                <OAuthButton provider='naver' />
                <OAuthButton provider='kakao' />
            </div>
            <div>
                <AuthLinkButton text='이메일 찾기'/>
                <AuthLinkButton text='비밀번호 찾기'/>
                <AuthLinkButton text='회원가입'/>
            </div>
        </div>
    );
}
