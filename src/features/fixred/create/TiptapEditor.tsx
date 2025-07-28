'use client';

import dynamic from 'next/dynamic';
import { JSONContent } from '@tiptap/react';

const TiptapEditorInner = dynamic(() => import('./TiptapEditorInner'), {
  ssr: false,
});

interface Props {
  content: JSONContent | null;
  setContent: (value: JSONContent) => void;
}

export default function TiptapEditor({ content, setContent }: Props) {
  return <TiptapEditorInner content={content} setContent={setContent} />;
}
