import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (currentUser) => set(() => ({ user: currentUser })),
}))