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
    <main className="bg-gray6 min-h-screen py-10 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex items-center gap-2 pb-6">
          <ChevronLeft className="h-5 w-5 text-gray3" />
        </div>

        <h1 className="text-[28px] font-bold mb-8 text-center text-mainBlack">지원자 확인</h1>

        {/* Main Layout */}
        <div className="flex gap-6 items-start">
          {/* Left - Project Card */}
          <div className="w-[380px] h-[400px] shrink-0">
            <div className="border border-gray4 rounded-lg p-6 bg-white w-full h-full flex flex-col justify-between">
              <div>
                <p className="text-[12px] text-pointGreen font-semibold mb-1">
                  모집중 <span className="text-gray3">| 2025.06.13</span>
                </p>
                <p className="text-[20px] font-bold leading-snug mb-4 text-mainBlack">
                  [디자이너 모집] 감성 블로그 기반 커뮤니티 플랫폼
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Figma', 'Illustrator', 'Notion'].map((skill) => (
                    <span
                      key={skill}
                      className="text-[12px] bg-gray5 text-gray3 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="text-[12px] border border-mainRed text-mainRed px-3 py-[2px] rounded-full font-semibold inline-block">
                  Designer
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-mainBlack text-white py-2 rounded text-[14px] font-bold">
                  모집글 보러가기
                </button>
                <button className="flex-1 bg-mainRed text-white py-2 rounded text-[14px] font-bold">
                  워크룸 만들기
                </button>
              </div>
            </div>
          </div>

          {/* Right - Applicants */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {dummyApplicants.map((applicant) => (
              <div
                key={applicant.id}
                className="w-[260px] h-[320px] border border-gray4 rounded-lg p-4 flex flex-col items-center bg-white"
              >
                <div className="flex flex-col items-center mt-10">
                  <Image
                    src={applicant.profileImage}
                    alt={applicant.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="mt-3 text-[18px] font-bold text-mainBlack">{applicant.name}</p>
                  <p className="text-[14px] text-gray3">{applicant.role}</p>
                </div>

                {applicant.isCanceled ? (
                    <button
                        className="mt-4 w-[200px] h-[35px] bg-gray5 text-gray3 rounded text-[14px] font-semibold cursor-not-allowed"
                        disabled
                    >
                        지원 취소 되었습니다
                    </button>
                ) : (
                  <div className="flex gap-2 mt-4">
                    <button className="w-[100px] h-[35px] bg-mainBlack text-white rounded text-[14px] font-semibold">
                      프로필 보기
                    </button>
                    <button className="w-[100px] h-[35px] bg-white text-mainBlack border border-mainBlack rounded text-[14px] font-semibold">
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
