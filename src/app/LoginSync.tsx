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
  }, []);

  return null;
}
