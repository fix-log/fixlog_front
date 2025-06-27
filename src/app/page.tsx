'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    return (
        <>
            <div>메인 페이지</div>
            <button className='cursor-pointer border-1' onClick={() => router.push('/login')}>로그인</button>
        </>
    );
}
