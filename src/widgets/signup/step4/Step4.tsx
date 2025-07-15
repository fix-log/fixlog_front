"use client";

import FormHeader from "@/shared/form/ui/FormHeader";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import FormFields from "@/widgets/signup/step4/FormFields";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

interface Step1Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function Step1({ setStep }: Step1Props) {
  const router = useRouter();
  const form = useFormContext();

  function handleClick() {
    setStep(1);
    router.push("/login");
  }

  return (
    <div className="flex w-full !max-w-[500px] flex-col items-center">
      <FormHeader title="기타 정보" />
      <form className="w-full" onSubmit={form.handleSubmit(handleClick)}>
        <FormFields />
        <FormSubmitButton
          text="회원가입하기"
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}
