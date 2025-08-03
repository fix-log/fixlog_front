'use client';

import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

interface Applicant {
  id: number;
  name: string;
  role: string;
  profileImage: string;
  isCanceled?: boolean;
}

const dummyApplicants: Applicant[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: '여운',
  role: '프론트엔드 | 신입',
  profileImage: '/avatar2.png',
  isCanceled: i === 7,
}));

export default function ApplicantListPage() {
  return (
    <main className='bg-gray6 min-h-screen px-4 py-10'>
      <div className='mx-auto max-w-[1200px]'>
        {/* Header */}
        <div className='flex items-center gap-2 pb-6'>
          <ChevronLeft className='text-gray3 h-5 w-5' />
        </div>

        <h1 className='text-mainBlack mb-8 text-center text-[28px] font-bold'>지원자 확인</h1>

        {/* Main Layout */}
        <div className='flex items-start gap-6'>
          {/* Left - Project Card */}
          <div className='h-[400px] w-[380px] shrink-0'>
            <div className='border-gray4 flex h-full w-full flex-col justify-between rounded-lg border bg-white p-6'>
              <div>
                <p className='text-pointGreen mb-1 text-[12px] font-semibold'>
                  모집중 <span className='text-gray3'>| 2025.06.13</span>
                </p>
                <p className='text-mainBlack mb-4 text-[20px] leading-snug font-bold'>
                  [디자이너 모집] 감성 블로그 기반 커뮤니티 플랫폼
                </p>
                <div className='mb-4 flex flex-wrap gap-2'>
                  {['Figma', 'Illustrator', 'Notion'].map((skill) => (
                    <span
                      key={skill}
                      className='bg-gray5 text-gray3 rounded-full px-3 py-1 text-[12px]'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className='border-mainRed text-mainRed inline-block rounded-full border px-3 py-[2px] text-[12px] font-semibold'>
                  Designer
                </span>
              </div>
              <div className='flex gap-2'>
                <button className='bg-mainBlack flex-1 rounded py-2 text-[14px] font-bold text-white'>
                  모집글 보러가기
                </button>
                <button className='bg-mainRed flex-1 rounded py-2 text-[14px] font-bold text-white'>
                  워크룸 만들기
                </button>
              </div>
            </div>
          </div>

          {/* Right - Applicants */}
          <div className='grid flex-1 grid-cols-3 gap-4'>
            {dummyApplicants.map((applicant) => (
              <div
                key={applicant.id}
                className='border-gray4 flex h-[320px] w-[260px] flex-col items-center rounded-lg border bg-white p-4'
              >
                <div className='mt-10 flex flex-col items-center'>
                  <Image
                    src={applicant.profileImage}
                    alt={applicant.name}
                    width={100}
                    height={100}
                    className='rounded-full'
                  />
                  <p className='text-mainBlack mt-3 text-[18px] font-bold'>{applicant.name}</p>
                  <p className='text-gray3 text-[14px]'>{applicant.role}</p>
                </div>

                {applicant.isCanceled ? (
                  <button
                    className='bg-gray5 text-gray3 mt-4 h-[35px] w-[200px] cursor-not-allowed rounded text-[14px] font-semibold'
                    disabled
                  >
                    지원 취소 되었습니다
                  </button>
                ) : (
                  <div className='mt-4 flex gap-2'>
                    <button className='bg-mainBlack h-[35px] w-[100px] rounded text-[14px] font-semibold text-white'>
                      프로필 보기
                    </button>
                    <button className='text-mainBlack border-mainBlack h-[35px] w-[100px] rounded border bg-white text-[14px] font-semibold'>
                      픽레터 보내기
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
