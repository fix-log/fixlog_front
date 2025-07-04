'use client';

import TermsAgreement from '@/features/signup/ui/TermsAgreement';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Signup() {
    const router = useRouter();
    const form = useForm();

    function handleClick() {
        router.push('/login/signup/step2');
    }

    return (
        <div className="flex flex-col items-center max-w-[500px] w-full">
            <FormHeader title="회원가입" />
            <form className="w-full" onSubmit={form.handleSubmit(handleClick)}>
                <div className="flex w-full">
                    <FormInputString label="이메일" type="email" name="email" placeholder="이메일을 입력해주세요" form={form}>
                        <button className="bg-mainBlack rounded-[5px] text-mainWhite font-bold w-[90px] h-[60px] !ml-3 !my-[10px]">인증</button>
                    </FormInputString>
                </div>
                <FormInputString label="닉네임" type="text" name="nickname" placeholder="닉네임을 입력해주세요" form={form} />
                <FormInputString label="비밀번호" type="password" name="password" placeholder="비밀번호를 입력해주세요" form={form} />
                <FormInputString label="비밀번호 확인" type="password" name="confirmPassword" placeholder="비밀번호를 다시 입력해주세요" form={form} />
                <hr className="border-gray5 w-full !my-10" />
                <div>
                    <TermsAgreement id="isAllAgreed" text="전체 동의" className="text-[18px] font-bold !ml-2" />
                    <div className="!mt-5">
                        <TermsAgreement id="isOver14Agreed" text="만 14세 이상입니다" isRequired={true} />
                        <TermsAgreement id="isTermsAgreed" text="서비스 이용약관" isRequired={true} />
                        <TermsAgreement id="isPrivacyAgreed" text="개인정보 수집 및 이용" isRequired={true} />
                        <TermsAgreement id="isMarketingAgreed" text="이벤트, 프로모션 알림 메일 수신" isRequired={false} />
                    </div>
                </div>
                <FormSubmitButton text="다음 (1/4)" isSubmitting={form.formState.isSubmitting} className="" />
            </form>
        </div>
    );
}
