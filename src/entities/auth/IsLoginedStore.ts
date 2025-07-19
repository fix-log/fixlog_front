import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface isLoginedStoreType {
  isLoggedIn: boolean;
  userId: number;
  setUser: (id: number) => void;
  clearUser: () => void;
}

export const isLoginedStore = create<isLoginedStoreType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userId: 0,
      setUser: (id) => set({ isLoggedIn: true, userId: id }),
      clearUser: () => set({ isLoggedIn: false, userId: 0 }),
    }),
    {
      name: 'userStatus',
    },
  ),
);
