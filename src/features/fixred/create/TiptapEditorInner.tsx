'use client';

import { useEffect } from 'react';
import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {
  content: JSONContent | null;
  setContent: (value: JSONContent) => void;
  className?: string;
  minHeight?: string;
  placeholder?: string;
}

export default function TiptapEditorInner({
  content,
  setContent,
  className,
  minHeight = 'min-h-[200px]',
  placeholder = '프로젝트 설명을 입력해주세요.',
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
        showOnlyWhenEditable: true,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: `${minHeight} px-3 py-2 focus:outline-none ${className ?? ''}`,
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON()); // JSON 기반
    },
    autofocus: false,
    editable: true,
    injectCSS: true,
    immediatelyRender: false, // ssr hydration 방지
  });

  useEffect(() => {
    if (editor && content && JSON.stringify(editor.getJSON()) !== JSON.stringify(content)) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className='rounded-md border border-gray-300'>
      <EditorContent editor={editor} />
    </div>
  );
}
