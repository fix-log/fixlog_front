"use client";

import FormHeader from "@/shared/form/ui/FormHeader";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import FormFields from "@/widgets/signup/step3/FormFields";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { SetStateType } from "../Types";

interface Step3Props {
  setStep: Dispatch<SetStateAction<number>>;
  setSignupData: SetStateType;
}

export default function Step3({ setStep, setSignupData }: Step3Props) {
  const router = useRouter();
  const form = useFormContext();

  function handleClick(data: object) {
    setStep(4);
    setSignupData(val => ({...val, ...data}));
    router.push("/login/signup");
  }

  return (
    <div className="flex w-full !max-w-[500px] flex-col items-center">
      <FormHeader title="기술 역량" />
      <form
        className="w-full"
        onSubmit={form.handleSubmit((data) => handleClick(data))}
      >
        <FormFields />
        <FormSubmitButton
          text="다음 (3/4)"
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}
