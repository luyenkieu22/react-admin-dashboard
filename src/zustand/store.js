import { create } from 'zustand'

export const useStore = create((set) => ({
    bears: "",
    increasePopulation: (newBears) => set(() => ({ bears: newBears })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}))