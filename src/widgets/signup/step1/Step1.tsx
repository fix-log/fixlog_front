"use client";

import FormHeader from "@/shared/form/ui/FormHeader";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import { useRouter } from "next/navigation";
import { FieldErrors, useFormContext } from "react-hook-form";
import Agreement from "@/widgets/signup/step1/Agreement";
import FormFields from "@/widgets/signup/step1/FormFields";
import { Dispatch, SetStateAction } from "react";

interface Step1Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function Step1({ setStep }: Step1Props) {
  const router = useRouter();
  const form = useFormContext();

  // 필수약관만 alert 표시
  function onError(errors: FieldErrors<typeof form>) {
    const messages = Object.values(errors).map((err) => err.message);
    if (messages.length > 0) {
      if (!messages[0]?.includes("필수 약관")) return;
      alert(messages[0]);
    }
  }

  function handleClick() {
    setStep(2);
    router.push("/login/signup");
  }

  return (
    <div className="flex w-full max-w-[500px] flex-col items-center">
      <FormHeader title="회원가입" />
      <form
        className="w-full"
        onSubmit={form.handleSubmit(handleClick, onError)}
      >
        <FormFields />
        <hr className="border-gray5 !my-10 w-full" />
        <Agreement />
        <FormSubmitButton
          text="다음 (1/4)"
          isSubmitting={form.formState.isSubmitting}
          className=""
        />
      </form>
    </div>
  );
}
