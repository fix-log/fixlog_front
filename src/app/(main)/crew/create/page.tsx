"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import FormInputString from "@/shared/form/ui/FormInputString";
import FormDropdownButton from "@/shared/form/ui/FormDropdownButton";
import { selectOptions } from "@/features/signup/model/selectOptions";
import { lengthLimits } from "@/shared/form/model/LengthLimits";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface CreateCrewFormValues {
  title: string;
  deadline: string;
  start_date: string;
  end_date: string;
  is_estimated_period: string;
  description: string;
  devLanguage: string[];
  stackAndTool: string[];
  designAndCollab: string[];
}

interface PositionEntry {
  position: number;
  position_name: string;
  count: number;
}

const POSITION_OPTIONS = [
  { id: 1, name: "프론트엔드" },
  { id: 2, name: "백엔드" },
  { id: 3, name: "디자이너" },
  { id: 4, name: "기획자" },
  { id: 5, name: "PM" },
];

export default function CreateCrewPage() {
  const methods = useForm<CreateCrewFormValues>();
  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting },
  } = methods;

  const [positionId, setPositionId] = useState<number | null>(null);
  const [count, setCount] = useState<number>(1);
  const [positions, setPositions] = useState<PositionEntry[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | undefined>();

  const handleAddPosition = () => {
    const selected = POSITION_OPTIONS.find((p) => p.id === positionId);
    if (!selected || count <= 0) return;

    setPositions((prev) => [
      ...prev,
      {
        position: selected.id,
        position_name: selected.name,
        count,
      },
    ]);
    setPositionId(null);
    setCount(1);
  };

  const handleRemovePosition = (index: number) => {
    setPositions((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: CreateCrewFormValues) => {
    const payload = {
      ...data,
      project_positions: positions,
    };
    console.log("제주 payload:", payload);
  };

  return (
    <main className="mx-auto mt-12 flex w-full max-w-[1440px] flex-col items-center px-4 pb-32">
      <h1 className="mb-10 text-3xl font-bold">크루 모집 하기</h1>

      <FormProvider {...methods}>
        <form
          className="flex w-[700px] flex-col gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInputString
            type="text"
            id="title"
            label="제목"
            placeholder="최대 60자 입력 가능"
            isRequired
          />

          <FormInputString
            type="date"
            id="deadline"
            label="목적 마감일"
            placeholder="날짜를 선택해주세요"
            isRequired
          />

          <div className="flex flex-col gap-[7px]">
            <p className="!-mb-3 font-bold">
              프로젝트 기간<span className="text-mainRed">*</span>
            </p>
            <div className="flex gap-3">
              <FormInputString
                type="date"
                id="start_date"
                placeholder="시작일"
                isRequired
              />
              <FormInputString
                type="date"
                id="end_date"
                placeholder="마감일"
                isRequired
              />
            </div>
          </div>

          <div className="flex flex-col gap-[7px]">
            <p className="!-mb-3 font-bold">
              목적 인원<span className="text-mainRed">*</span>
            </p>
            <div className="flex gap-3">
              <select
                value={positionId ?? ""}
                onChange={(e) => setPositionId(Number(e.target.value))}
                className="w-[240px] rounded-md border border-gray4 px-3 py-2"
              >
                <option value="">포지션을 선택해주세요</option>
                {POSITION_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
              <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-[100px] rounded-md border border-gray4 px-3 py-2"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} 인원
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddPosition}
                className="rounded-md border border-gray4 px-3 text-gray1 hover:bg-gray2"
              >
                <Plus size={20} />
              </button>
            </div>

            <ul className="mt-2 flex flex-col gap-2">
              {positions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between rounded border border-gray4 px-4 py-2 text-sm text-gray6"
                >
                  • {item.position_name} {item.count}명
                  <button
                    type="button"
                    onClick={() => handleRemovePosition(idx)}
                    className="text-gray3 hover:text-mainRed"
                  >
                    <Minus size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 기술 선택 드롭다운 */}
          <FormDropdownButton
            id="devLanguage"
            label="개발 언어"
            placeholder="사용할 개발 언어를 선택하세요"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={selectOptions.devLanguage}
            watch={watch}
            isRequired
          />

          <FormDropdownButton
            id="stackAndTool"
            label="기술 도구"
            placeholder="사용할 협업 도구를 선택하세요"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={selectOptions.stackAndTool}
            watch={watch}
            isRequired
          />

          <FormDropdownButton
            id="designAndCollab"
            label="디자인 도구"
            placeholder="사용할 디자인 도구를 선택하세요"
            open={openDropdown}
            setOpen={setOpenDropdown}
            options={selectOptions.designAndCollab}
            watch={watch}
            isRequired
          />

          <div className="flex flex-col gap-[7px]">
            <p className="!-mb-3 font-bold">프로젝트 설명</p>
            <textarea
              {...register("description")}
              className="h-[300px] rounded-md border border-gray4 px-3 py-2"
              placeholder="프로젝트에 대한 설명을 입력해주세요"
            />
          </div>

          <FormSubmitButton
            text="크루 목적글 등록하기"
            isSubmitting={isSubmitting}
          />
        </form>
      </FormProvider>
    </main>
  );
}
