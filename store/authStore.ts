import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  userSession: null,
  setUserSession: (currentUser) => set(() => ({ user: currentUser })),
}))