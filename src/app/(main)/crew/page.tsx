"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

// 임시... 크루모집 데이터
const crew = [
  {
    id: 1,
    title: "[디자이너 모집] 쉐이칸샹 쉐이칸 샹",
    user_nickname: "중국 병맛 밈",
    deadline: "2025-06-13T10:00:00Z",
    status: "recruiting",
    project_positions: [{ position_name: "Designer" }],
    project_skill_tools: [
      { skill_tool_name: "Figma" },
      { skill_tool_name: "Illustrator" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 2,
    title: "이건 첫 번째 레슨 좋은건 너만 알기",
    user_nickname: "유노윤호",
    deadline: "2025-06-13T08:00:00Z",
    status: "closed",
    project_positions: [{ position_name: "BackEnd" }],
    project_skill_tools: [
      { skill_tool_name: "React" },
      { skill_tool_name: "TypeScript" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 3,
    title: "[디자이너 모집] 쉐이칸샹 쉐이칸 샹",
    user_nickname: "중국 병맛 밈",
    deadline: "2025-06-13T10:00:00Z",
    status: "recruiting",
    project_positions: [{ position_name: "Designer" }],
    project_skill_tools: [
      { skill_tool_name: "Figma" },
      { skill_tool_name: "Illustrator" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 4,
    title: "이건 첫 번째 레슨 좋은건 너만 알기",
    user_nickname: "유노윤호",
    deadline: "2025-06-13T08:00:00Z",
    status: "closed",
    project_positions: [{ position_name: "BackEnd" }],
    project_skill_tools: [
      { skill_tool_name: "React" },
      { skill_tool_name: "TypeScript" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 5,
    title: "[디자이너 모집] 쉐이칸샹 쉐이칸 샹",
    user_nickname: "중국 병맛 밈",
    deadline: "2025-06-13T10:00:00Z",
    status: "recruiting",
    project_positions: [{ position_name: "Designer" }],
    project_skill_tools: [
      { skill_tool_name: "Figma" },
      { skill_tool_name: "Illustrator" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 6,
    title: "이건 첫 번째 레슨 좋은건 너만 알기",
    user_nickname: "유노윤호",
    deadline: "2025-06-13T08:00:00Z",
    status: "closed",
    project_positions: [{ position_name: "BackEnd" }],
    project_skill_tools: [
      { skill_tool_name: "React" },
      { skill_tool_name: "TypeScript" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 7,
    title: "[디자이너 모집] 쉐이칸샹 쉐이칸 샹",
    user_nickname: "중국 병맛 밈",
    deadline: "2025-06-13T10:00:00Z",
    status: "recruiting",
    project_positions: [{ position_name: "Designer" }],
    project_skill_tools: [
      { skill_tool_name: "Figma" },
      { skill_tool_name: "Illustrator" },
      { skill_tool_name: "Notion" },
    ],
  },
  {
    id: 8,
    title: "이건 첫 번째 레슨 좋은건 너만 알기",
    user_nickname: "유노윤호",
    deadline: "2025-06-13T08:00:00Z",
    status: "closed",
    project_positions: [{ position_name: "BackEnd" }],
    project_skill_tools: [
      { skill_tool_name: "React" },
      { skill_tool_name: "TypeScript" },
      { skill_tool_name: "Notion" },
    ],
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getDate().toString().padStart(2, "0")}`;
}

const ITEMS_PER_PAGE = 8;

export default function Crew() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 현재 페이지 번호 (기본 1)
  const currentPage = Number(searchParams.get("page") ?? "1");
  // 총 페이지 수 (전체 항목 수 / 페이지당 아이템 수)
  const totalPages = Math.ceil(crew.length / ITEMS_PER_PAGE);

  // 현재 페이지에 보여줄 데이터만
  const paginatedCrew = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return crew.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  // 페이지 버튼 클릭
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {/* 크루 만들기 */}
      <section className="flex w-full flex-col gap-5 pt-6 md:gap-10 md:pt-16">
        <div className="bg-mainRed/4 flex gap-4 py-16">
          <Link href={`/crew/create`} className="mx-auto">
            <div className="border-mainRed/40 flex flex-col items-center justify-center gap-4 rounded-[5px] border bg-white px-18.5 py-20 shadow-[0_0_13.5px_0_rgba(255,68,39,0.2)]">
              <div className="bg-mainRed mb-5.5 flex h-15 w-15 items-center justify-center rounded-full text-white">
                <span className="text-5xl">+</span>
              </div>
              <h3 className="text-[32px] font-extrabold">크루 모집 하기</h3>
              <p className="text-gray3 text-[18px]">
                픽스로그에서 나만의 프로젝트를 만들어보세요!
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 크루 리스트 */}
      <section className="mx-auto mt-8 mb-8 flex w-full max-w-[1440px] flex-col gap-[22px]">
        {paginatedCrew.map((project) => (
          <div
            key={`${project.id}-${project.title}`}
            className="border-gray4 flex h-[240px] w-full flex-col rounded-md border bg-white px-10 py-6"
          >
            <div className="flex items-start justify-between">
              <span className="text-mainGreen text-[16px] font-semibold">
                {project.status === "recruiting" ? "모집중" : "모집완료"} |{" "}
                {formatDate(project.deadline)}
              </span>
            </div>
            <h3 className="mt-[14px] text-xl font-bold">{project.title}</h3>
            <div className="mt-[11px] flex flex-wrap gap-2">
              {project.project_skill_tools.map((tool, index) => (
                <span
                  key={index}
                  className="rounded bg-gray-100 px-3 py-1 text-sm text-zinc-700"
                >
                  {tool.skill_tool_name}
                </span>
              ))}
            </div>
            <div className="mt-[44px] flex items-center pt-2">
              <span className="border-mainRed text-mainRed inline-block w-fit rounded-full border px-3 py-1 text-sm">
                {project.project_positions[0]?.position_name}
              </span>
              <span className="ml-auto text-sm text-zinc-400">
                {project.user_nickname} · 4시간 전
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* 페이지네이션 */}
      <section className="mb-20 flex justify-center">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1; //실제 페이지 1부터 시작하게
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-9 h-9 rounded-md text-sm ${
                  currentPage === pageNum
                    ? "text-mainRed font-bold"
                    : "text-mainBlack"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
