import TermsAgreement from '@/features/signup/ui/TermsAgreement';
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const DATA = [
  { id: 'isOver14Agreed', text: '만 14세 이상입니다', isRequired: true },
  { id: 'isTermsAgreed', text: '서비스 이용약관', isRequired: true },
  { id: 'isPrivacyAgreed', text: '개인정보 수집 및 이용', isRequired: true },
  { id: 'isMarketingAgreed', text: '이벤트, 프로모션 알림 메일 수신', isRequired: false },
];

export default function Agreement() {
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const form = useFormContext()
  const agreementKeys = [
    'isOver14Agreed',
    'isTermsAgreed',
    'isPrivacyAgreed',
    'isMarketingAgreed',
  ] as const;

  // 전체동의
  function selectAllAgreements() {
    agreementKeys.map((item) => form.setValue(item, !isAllAgreed));
    setIsAllAgreed(!isAllAgreed);
  }

  // 약관 디테일 구현 (전체 체크 상태 추적)
  // 약관 모두 동의일 때 and 전체동의 상태일 때 하나라도 취소할 떄
  const agreementWatch = useWatch({
    control: form.control,
    name: agreementKeys,
  }) as boolean[];

  useEffect(() => {
    const isAllTrue = agreementWatch.every(Boolean);
    setIsAllAgreed(isAllTrue);
    form.setValue('isAllAgreed' as const, isAllTrue);
    // ESLint가 의존성 잔소리해서 강제 무시 주석 추가
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreementWatch]);

  return (
    <div>
      <TermsAgreement
        id='isAllAgreed'
        text='전체 동의'
        className='!ml-2 text-[18px] font-bold'
        onClick={selectAllAgreements}
      />
      <div>
        {DATA.map((item) => (
          <TermsAgreement key={item.id} id={item.id} text={item.text} isRequired={item.isRequired} />
        ))}
      </div>
    </div>
  );
}
