import { create } from 'zustand';

interface isLoginedStoreType {
  isLoggedIn: boolean;
  userId: number;
  setUser: (id: number) => void;
  clearUser: () => void;
}

export const isLoginedStore = create<isLoginedStoreType>()((set) => ({
  isLoggedIn: false,
  userId: 0,
  setUser: (id) => set({ isLoggedIn: true, userId: id }),
  clearUser: () => set({ isLoggedIn: false, userId: 0 }),
}));
