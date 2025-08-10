'use client';

import { isLoginedStore } from '@/entities/auth/IsLoginedStore';
import { useEffect } from 'react';

interface LoginSyncProps {
  id: number;
}

export default function LoginSync({ id }: LoginSyncProps) {
  const { setUser } = isLoginedStore();

  useEffect(() => {
    setUser(id);
  }, [id, setUser]); // TODO: 빌드 에러 때문에 일단 id랑 setUser 둘 다 넣어놓을게요! (기태)

  return null;
}
