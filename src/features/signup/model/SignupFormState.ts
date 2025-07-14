export interface SignupFormStateType {
    email: string,
    nickName: string,
    password: string,
    confirmPassword: string,
    termsAgreement: {
        isOver14Agreed: boolean,
        isTermsAgreed: boolean,
        isPrivacyAgreed: boolean,
        isMarketingAgreed: boolean
    }
}

export const SignupFormState:SignupFormStateType = {
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
    termsAgreement: {
        isOver14Agreed: false,
        isTermsAgreed: false,
        isPrivacyAgreed: false,
        isMarketingAgreed: false
    }
}