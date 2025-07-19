import { create } from 'zustand';

interface hasHydratedStoreType {
  hasHydrated: boolean;
  setHasHydrated: () => void;
}

export const hasHydratedStore = create<hasHydratedStoreType>()((set) => ({
  hasHydrated: false,
  setHasHydrated: () => set({ hasHydrated: true }),
}));
