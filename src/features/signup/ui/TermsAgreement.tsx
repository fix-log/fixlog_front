interface TermsAgreementProps {
    id: string;
    text: string;
    isRequired?: boolean;
    className?: string;
}

export default function TermsAgreement({ id, text, isRequired, className }: TermsAgreementProps) {
    const isTermsOpen = id === 'isTermsAgreed' || id === 'isPrivacyAgreed';
    if (!className) className = ""
    return (
        <>
            <input id={id} type="checkbox" className="hidden" />
            <label htmlFor={id} className="flex items-center text-[13px] !my-2">
                <div className="cursor-pointer flex items-center">
                    <div className="border-1 border-gray4 rounded-full w-[13px] h-[13px] !mr-1"></div>
                    <p className={className}>
                        {text}
                        {isRequired && <span className="!ml-1">{isRequired ? '(필수)' : '(선택)'}</span>}
                    </p>
                </div>
                {isTermsOpen && <button className="cursor-pointer text-mainRed font-bold !ml-auto">보기</button>}
            </label>
        </>
    );
}
