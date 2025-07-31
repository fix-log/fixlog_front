'use client';

import dynamic from 'next/dynamic';
import { JSONContent } from '@tiptap/react';

const TiptapEditorInner = dynamic(() => import('./TiptapEditorInner'), {
  ssr: false,
});

interface Props {
  content: JSONContent | null;
  setContent: (value: JSONContent) => void;
  placeholder?: string;
  minHeight?: string;
  className?: string;
}

export default function TiptapEditor({
  content,
  setContent,
  placeholder,
  minHeight,
  className,
}: Props) {
  return (
    <TiptapEditorInner
      content={content}
      setContent={setContent}
      placeholder={placeholder}
      minHeight={minHeight}
      className={className}
    />
  );
}
