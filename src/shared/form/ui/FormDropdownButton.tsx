import { Dispatch, SetStateAction } from "react";
import FormDropdownToggle from "./FormDropdownToggle";
import {
  selectOptions,
  selectOptionsType,
} from "@/features/signup/model/selectOptions";
import DropdownIcon from "./DropdownIcon";
import {
  FieldValues,
  Path,
  useFormContext,
  UseFormWatch,
} from "react-hook-form";
import { lengthLimits } from "../model/LengthLimits";

interface FormDropdownButtonProps {
  id: keyof selectOptionsType;
  label: string;
  open: string | undefined;
  setOpen: Dispatch<SetStateAction<string | undefined>>;
  options: string[]; //드롭다운에 보여줄 옵션 리스트를 상위에서 받음
  watch: UseFormWatch<any>; //선택된 값들을 내부에서 판단에 사용하기 위해 추가
  placeholder: string;
  isRequired?: boolean;
}

export default function FormDropdownButton<T extends FieldValues>({
  id,
  open,
  setOpen,
  label,
  placeholder,
  isRequired,
}: FormDropdownButtonProps) {
  const {
    formState: { errors },
  } = useFormContext<T>();

  // 선택 제한 안내 문구: lengthLimits에 따라 메시지 생성
  const selectionMessage =
    lengthLimits[id] !== 0
      ? `최대 ${lengthLimits[id]}개 선택 가능`
      : "많이 선택 가능";

  function handleClick() {
    setOpen(open === label ? undefined : label);
  }

  return (
    <div className="w-full">
      {label && (
        <p className="!-mb-3 cursor-default font-bold">
          {label}
          {isRequired && <span className="text-mainRed">*</span>}
        </p>
      )}
      <button
        type="button"
        onClick={() => handleClick()}
        className={
          "border-gray4 bg-mainWhite text-gray4 !my-[15px] min-h-[60px] w-full cursor-pointer rounded-[5px] border-1 text-left text-[20px]" +
          (open === label ? " !pt-[14px]" : "")
        }
      >
        <div className="flex w-full">
          <p className="grow !pl-[17px]">
            {open === label ? selectionMessage : placeholder}
          </p>
          <DropdownIcon form={open} target={label} />
        </div>

        {/* 여기 data={selectOptions[id]} → props로 전달받는 options로 바꾸는 구조도 생각해보면 좋을 것 같아요!,
            아직 내부에서 직접 selectOptions[id] 참조하고 있어서..*/}
        {open === label && (
          <FormDropdownToggle<T>
            id={id as Path<T>}
            data={selectOptions[id]} // 원래 내부에서 직접 사용하던 구조 유지됨
          />
        )}
      </button>

      {errors[id] && (
        <p className="text-pointDarkYellow -mt-3 pb-3 pl-3">
          {errors[id].message?.toString()}
        </p>
      )}
    </div>
  );
}
