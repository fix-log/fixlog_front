'use client';

import dynamic from 'next/dynamic';

// SSR 비활성화된 내부 컴포넌트 동적 로딩
const TiptapEditorInner = dynamic(() => import('./TiptapEditorInner'), {
  ssr: false,
});

export default TiptapEditorInner;
