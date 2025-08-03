import { create } from 'zustand';
import { userValueType } from './Types';

type Store = {
  userInfo: userValueType;
  setUserInfo: (newdata: userValueType) => void;
};

export const userInfoStore = create<Store>()((set) => ({
  userInfo: {} as userValueType,
  setUserInfo: (newData) => set({ userInfo: newData }),
}));
