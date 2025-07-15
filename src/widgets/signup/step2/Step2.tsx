"use client";

import FormHeader from "@/shared/form/ui/FormHeader";
import FormSubmitButton from "@/shared/form/ui/FormSubmitButton";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import FormFields from "@/widgets/signup/step2/FormFields";

export default function Signup() {
  const router = useRouter();
  const form = useFormContext();

  function handleClick() {
    router.push("/login/signup");
  }

  return (
    <div className="flex w-full !max-w-[500px] flex-col items-center">
      <FormHeader title="기본 정보" />
      <form className="w-full" onSubmit={form.handleSubmit(handleClick)}>
        <FormFields />
        <FormSubmitButton
          text="다음(2/4)"
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}
