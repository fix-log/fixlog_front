'use client';

import { useEffect } from 'react';
import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {
  content: JSONContent | null;
  setContent: (value: JSONContent) => void;
}

export default function TiptapEditorInner({ content, setContent }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '프로젝트 설명을 입력해주세요.',
        showOnlyWhenEditable: true,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'min-h-[200px] px-3 py-2 focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON()); // JSON 기반
    },
    autofocus: false,
    editable: true,
    injectCSS: true,
    immediatelyRender: false,
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
