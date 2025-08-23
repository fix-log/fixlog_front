'use client';

import ScheduleDatePicker from '@/features/schedule/ui/ScheduleDatePicker';
import CheckboxDropdown from '@/shared/ui/CheckboxDropdown';

interface WorkroomFromProps {
  type: '등록' | '정보 수정';
}

export default function WorkroomFrom({ type }: WorkroomFromProps) {
  const inputClassName =
    'border-gray4 text-h5 placeholder:text-gray4 h-15 rounded-[5px] border px-5 font-semibold';

  return (
    <form className='flex w-full max-w-[700px] flex-col gap-[34px] py-15'>
      {/* 워크룸 이름 */}
      <label htmlFor='name' className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>
          워크룸 이름 <RequiredStar />
        </span>
        <input
          type='text'
          id='name'
          placeholder='워크룸 이름을 입력해주세요.'
          className={inputClassName}
        />
      </label>

      {/* 워크룸 한 줄 소개 */}
      <label htmlFor='introduction' className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>
          워크룸 한 줄 소개 <RequiredStar />
        </span>
        <input
          type='text'
          id='introduction'
          placeholder='워크룸을 한 줄로 소개해주세요.'
          className={inputClassName}
        />
      </label>

      {/* 워크룸 기간 */}
      <label htmlFor='period' className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>
          워크룸 기간 <RequiredStar />
        </span>
        <div className='flex items-center gap-3'>
          {/* TODO: datepicker 스타일링 외부 인자로 커스텀하게 수정 */}
          <ScheduleDatePicker
            value='시작 날짜'
            onClick={() => {
              console.log('시작 날짜');
            }}
            // className='grow'
          />
          <span>~</span>
          <ScheduleDatePicker
            value='종료 날짜'
            onClick={() => {
              console.log('종료 날짜');
            }}
            // className='grow'
          />
        </div>
        <label htmlFor='tbd' className='flex items-center gap-2'>
          <input type='checkbox' id='tbd' />
          <span>협의 에정</span>
        </label>
      </label>

      {/* 포지션 별 인원 */}
      <label htmlFor='member' className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>
          포지션 별 인원 <RequiredStar />
        </span>
        {/* TODO: React Hook Form - useFieldArray 사용해서 포지션 별 인원 입력 컴포넌트 만들기 */}
        <input
          type='text'
          id='member'
          placeholder='포지션 별 인원을 입력해주세요.'
          className={inputClassName}
        />
      </label>

      {/* 개발 언어 */}
      <div className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>개발 언어</span>
        <CheckboxDropdown
          name='languages'
          options={[
            'JavaScript',
            'TypeScript',
            'Python',
            'Java',
            'Go',
            'Swift',
            'Kotlin',
            'C',
            'PHP',
            'SQL',
          ]}
          placeholder='개발 언어를 선택해주세요'
          openText='최대 10개 선택 가능'
          className={inputClassName}
        />
      </div>

      {/* 기술 스택 & 협업 툴 */}
      {/* TODO: 스키마 확인 후 수정 */}
      <div className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>기술 스택 & 협업 툴</span>
        <CheckboxDropdown
          name='techStacks'
          options={[
            'React',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'MySQL',
            'PostgreSQL',
            'Docker',
            'AWS',
            'GCP',
            'Azure',
            'Firebase',
            'Vercel',
            'Netlify',
            'Kubernetes',
          ]}
          placeholder='기술 스택 & 협업 툴을 선택해주세요'
          openText='최대 -개 선택 가능'
          className={inputClassName}
        />
      </div>

      {/* 디자인 & 협업 툴 */}
      {/* TODO: 스키마 확인 후 수정 */}
      <div className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>디자인 & 협업 툴</span>
        <CheckboxDropdown
          name='designTools'
          options={['Figma', 'Notion', 'Slack', 'Jira', 'Trello', 'Discord', 'GitHub']}
          placeholder='디자인 & 협업 툴을 선택해주세요'
          openText='최대 -개 선택 가능'
          className={inputClassName}
        />
      </div>

      {/* 프로젝트 설명 */}
      <label htmlFor='description' className='flex flex-col gap-2'>
        <span className='text-h6 font-semibold'>프로젝트 설명</span>
        {/* TODO: 텍스트 에디터 추가 */}
        <textarea
          id='description'
          placeholder='프로젝트 설명을 입력해주세요.'
          className={`${inputClassName} h-60 resize-none`}
        />
      </label>

      {/* 제출 */}
      <button
        type='submit'
        className='bg-mainBlack text-mainWhite text-h5 h-15 w-full rounded-[5px] font-extrabold'
      >
        워크룸 {type}하기
      </button>
    </form>
  );
}

// 필수 별 임시 컴포넌트
function RequiredStar() {
  return <sup className='text-red-500'>*</sup>;
}

// TODO: name, value 등등 연결하기 (React Hook Form 추가시)
