"use client";

import { useState } from "react";
import OneButtonPopup from "@/shared/popup/ui/OneButtonPopup";


export default function ExamplePage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>팝업 열기</button>
      <OneButtonPopup
        open={open}
        content={<div>정말 확인하셨습니까?</div>}
        buttonText="확인"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
