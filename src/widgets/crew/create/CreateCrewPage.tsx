'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { JSONContent } from '@tiptap/react';
import {
  languageMapping,
  skillToolMapping,
  designAndCollabMapping,
} from '@/shared/constants/optionMapping';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormDate from '@/shared/form/ui/FormDate';
import FormDateRange from '@/shared/form/ui/FormDateRange';
import FormRadioCircle from '@/shared/form/ui/FormRadioCircle';
import TiptapEditor from '@/features/fixred/create/TiptapEditor';
import PositionCountInput from '@/app/(main)/crew/create/PositionCountInput';
import { ArrowLeft } from 'lucide-react';

interface FormValues {
  languages: string[];
  tools: string[];
  designAndCollab: string[];
  positions: {
    name: string;
    count: number;
  }[];
  duration_option: '기간 미정' | '협의 예정';
  description: JSONContent | null;
}

export default function CreateCrewPage() {
  const router = useRouter();
  const methods = useForm<FormValues>({
    defaultValues: {
      languages: [],
      tools: [],
      designAndCollab: [],
      positions: [],
      duration_option: '협의 예정',
      description: null,
    },
  });

  const [editorContent, setEditorContent] = useState<JSONContent | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | undefined>(undefined);

  const onSubmit = async (data: FormValues) => {
    const mappedLanguages = data.languages.map((lang) => languageMapping[lang]);
    const mappedTools = data.tools.map((tool) => skillToolMapping[tool]);
    const mappedDesignTools = data.designAndCollab.map((tool) => designAndCollabMapping[tool]);

    const formatted = {
      ...data,
      languages: mappedLanguages,
      skills: mappedTools,
      design_tools: mappedDesignTools,
      description: editorContent,
    };

    console.log('제출 데이터:', formatted);

    // 나중에 API..추가

    // 임시로 이동용 테스트
    const project_id = 1; // 나중에 응답으로 받은 ID로 대체

    // 상세 페이지 이동
    router.push(`/crew/${project_id}`);
  };

  return (
    <FormProvider {...methods}>
      <div className='relative mt-[60px] w-full max-w-[1440px]'>
        <button
          type='button'
          className='absolute top-0 left-0 z-10 flex items-center gap-1 text-gray-700 hover:text-black'
          onClick={() => router.back()}
          aria-label='뒤로가기'
        >
          <ArrowLeft className='h-6 w-6' strokeWidth={2} />
        </button>
      </div>
      <div className='mt-[50px] flex w-full max-w-[700px] flex-col items-center'>
        <FormHeader title='크루 모집하기' />
        <form className='w-full' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInputString
            type='text'
            id='title'
            label='제목'
            placeholder='최대 60자 입력 가능'
            isRequired
          />

          <FormDate id='deadline' label='모집 마감일' isRequired />
          <FormDateRange startId='start_date' endId='end_date' label='프로젝트 기간' isRequired />
          <FormRadioCircle id='duration_option' options={['기간 미정', '협의 예정']} isRequired />

          <div className='my-[70px] flex w-full justify-center'>
            <hr className='border-gray4 w-[700px] border-t' />
          </div>

          <PositionCountInput />

          <FormDropdownButton
            type='multi'
            id='devLanguage'
            label='개발 언어'
            placeholder='개발 언어를 선택해주세요'
            open={openDropdown}
            setOpen={setOpenDropdown}
          />
          <FormDropdownButton
            type='multi'
            id='stackAndTool'
            label='기술 스택 & 툴'
            placeholder='기술 스택 & 툴을 선택해주세요'
            open={openDropdown}
            setOpen={setOpenDropdown}
          />
          <FormDropdownButton
            type='multi'
            id='designAndCollab'
            label='디자인 & 협업 툴'
            placeholder='디자인 & 협업 툴을 선택해주세요'
            open={openDropdown}
            setOpen={setOpenDropdown}
          />

          <div className='mb-10'>
            <label className='mb-2 block text-[18px] font-semibold text-gray-800'>
              프로젝트 설명 <span className='text-mainRed ml-1'>*</span>
            </label>
            <TiptapEditor
              content={editorContent}
              setContent={setEditorContent}
              placeholder='프로젝트 설명을 입력해주세요.'
              minHeight='min-h-[200px]'
              className=''
            />
          </div>
          <div className='mb-[158px]'>
            <FormSubmitButton
              text='크루 모집글 등록하기'
              isSubmitting={methods.formState.isSubmitting}
            />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
