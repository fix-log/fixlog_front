import Modal from '@/shared/ui/Modal';
import { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import DetailPrivacy from '../model/termsAgreement/DetailPrivacy';
import DetailTerms from '../model/termsAgreement/DetailTerms';
import { colorChangeAnimation } from '@/shared/ui/Animation';

interface TermsDetailModalProps {
  id: 'isPrivacyAgreed' | 'isTermsAgreed';
  terms: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TermsDetailModal({ id, terms, setIsModalOpen }: TermsDetailModalProps) {
  const viewTerm = {
    isPrivacyAgreed: <DetailPrivacy />,
    isTermsAgreed: <DetailTerms />,
  };

  return (
    <Modal
      setIsOpen={setIsModalOpen}
      className='w-screen max-w-[450px] cursor-default overflow-hidden p-3'
    >
      <div className='border-gray3 flex border-b pb-2'>
        <h1 className='grow text-center'>{terms}</h1>
        <X
          strokeWidth={3}
          className={'cursor-pointer' + ' hover:text-mainRed' + colorChangeAnimation}
          onClick={() => setIsModalOpen(false)}
        />
      </div>
      <div className='mt-4 max-h-[700px] overflow-y-auto pr-2'>{viewTerm[id]}</div>
    </Modal>
  );
}
