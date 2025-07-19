import { selectOptions } from "@/features/signup/model/selectOptions";
import FormDropdownButton from "@/shared/form/ui/FormDropdownButton";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const DATA = [
  {
    label: "개발 언어",
    id: "devLanguage",
    placeholder: "개발 언어를 선택해주세요",
  },
  {
    label: "기술 스택 & 툴",
    id: "stackAndTool",
    placeholder: "기술 스택 & 툴을 선택해주세요",
  },
  {
    label: "디자인 & 협업 툴",
    id: "designAndCollab",
    placeholder: "디자인 & 협업 툴을 선택해주세요",
  },
] as const;

export default function FormFields() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | undefined>(
    undefined
  );
  const { watch } = useFormContext(); // react-hook-form 상태 관찰 함수

  return (
    <>
      {DATA.map((item) => (
        <FormDropdownButton
          key={item.id}
          id={item.id as keyof typeof selectOptions}
          label={item.label}
          placeholder={item.placeholder}
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
          options={selectOptions[item.id as keyof typeof selectOptions]} // 드롭다운 항목 목록을 직접 전달
          watch={watch} // 현재 선택된 값을 컴포넌트 내부에서 판단하기 위해 전달
        />
      ))}
    </>
  );
}
