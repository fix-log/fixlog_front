"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import FormInputString from "@/shared/form/ui/FormInputString";
import FormDropdownButton from "@/shared/form/ui/FormDropdownButton";
import FormRadioSelect from "@/shared/form/ui/FormRadioSelect";

interface CreateCrewFormValues {
  title: string;
  deadline: string;
  startDate: string;
  endDate: string;
  description: string;
  devLanguages: string[];
  techTools: string[];
  designTools: string[];
  projectPeriodType: string;
}

export default function CreateCrewPage() {
  const methods = useForm<CreateCrewFormValues>();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [open, setOpen] = useState<string | undefined>(undefined);

  const onSubmit = (data: CreateCrewFormValues) => {
    console.log("제출된 값:", data);
  };

  return (
    <main className="mx-auto mt-12 flex w-full max-w-[1440px] flex-col items-center px-4 pb-32">
      <h1 className="mb-10 text-3xl font-bold">크루 모집 하기</h1>

      <FormProvider {...methods}>
        <form
          className="flex w-[700px] flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* 제목 */}
          <FormInputString
            type="text"
            id="title"
            label="제목"
            placeholder="최대 60자 입력 가능"
            isRequired
          />

          {/* 모집 마감일 */}
          <FormInputString
            type="date"
            id="deadline"
            label="모집 마감일"
            placeholder="날짜를 선택해주세요"
            isRequired
          />

          {/* 프로젝트 기간 */}
          <div className="flex flex-col gap-[7px]">
            <p className="!-mb-3 cursor-default font-bold">
              프로젝트 기간<span className="text-mainRed">*</span>
            </p>
            <div className="flex gap-3">
              <FormInputString
                type="date"
                id="startDate"
                placeholder="시작일"
                isRequired
              />
              <FormInputString
                type="date"
                id="endDate"
                placeholder="마감일"
                isRequired
              />
            </div>
          </div>

          {/* 개발 언어 */}
          <FormDropdownButton<CreateCrewFormValues>
            id="devLanguages"
            label="개발 언어"
            placeholder="개발 언어를 선택해주세요"
            open={open}
            setOpen={setOpen}
            isRequired
          />

          {/* 기술 스택 & 협업 툴 */}
          <FormDropdownButton<CreateCrewFormValues>
            id="techTools"
            label="기술 스택 & 협업 툴"
            placeholder="기술 스택을 선택해주세요"
            open={open}
            setOpen={setOpen}
          />

          {/* 디자인 & 협업 툴 */}
          <FormDropdownButton<CreateCrewFormValues>
            id="designTools"
            label="디자인 & 협업 툴"
            placeholder="디자인 도구를 선택해주세요"
            open={open}
            setOpen={setOpen}
          />

          {/* 프로젝트 설명 */}
          <div className="flex flex-col gap-[7px]">
            <p className="!-mb-3 cursor-default font-bold">프로젝트 설명</p>
            <div className="h-[300px] rounded-md border border-gray4 bg-white" />
          </div>

          {/* 제출 버튼 */}
          <FormSubmitButton
            text="크루 모집글 등록하기"
            isSubmitting={isSubmitting}
          />
        </form>
      </FormProvider>
    </main>
  );
}
