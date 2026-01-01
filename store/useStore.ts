import { create } from 'zustand';
import { getFirstBrandId } from '@/lib/brands';

interface StoreState {
  selectedBrand: string;
  setBrand: (brand: string) => void;
  selectedModule: string;
  setModule: (module: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedBrand: getFirstBrandId(),
  setBrand: (selectedBrand: string) => set({ selectedBrand }),
  selectedModule: 'content-quality',
  setModule: (selectedModule: string) => set({ selectedModule }),
}));
