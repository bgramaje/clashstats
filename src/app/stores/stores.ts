import { create } from 'zustand';

interface useMemoryState {
  selectedCountry: import('@/types/location').Country | null
  setSelectedCountry: (country: import('@/types/location').Country) => void
}

export const useMemoryStore = create<useMemoryState>((set) => ({
  selectedCountry: null,
  setSelectedCountry: (selectedCountry) => set({ selectedCountry }),
}));
