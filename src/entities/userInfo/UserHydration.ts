'use client';

import { userValueType } from './Types';
import { userInfoStore } from './UserInfoStore';

interface UserHydrationProps {
  userData: userValueType;
}

export default function UserHydration({ userData }: UserHydrationProps) {
  const setUserInfo = userInfoStore((s) => s.setUserInfo);
  setUserInfo(userData);
  return null;
}
