'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect } from 'react';

interface Props {
  content: string;
  setContent: (value: string) => void;
}

export default function TiptapEditorInner({ content, setContent }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '오늘은 무엇을 기록해볼까요?',
        showOnlyWhenEditable: true,
        showOnlyCurrent: false,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'min-h-[120px] px-3 py-2 focus:outline-none',
      },
    },
    content,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
    autofocus: false,
    editable: true,
    injectCSS: true,
    immediatelyRender: false, // ssr hydration 방지
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="border border-gray-300 rounded-md min-h-[120px] overflow-visible">
      <EditorContent editor={editor} />
    </div>
  );
}
