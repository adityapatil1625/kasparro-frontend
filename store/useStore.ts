
import { create } from "zustand"
import { getFirstBrandId } from "@/lib/brands"

interface State {
  selectedBrand: string
  setBrand: (b: string) => void
  selectedModule: string
  setModule: (m: string) => void
}

export const useStore = create<State>((set) => ({
  selectedBrand: getFirstBrandId(),
  setBrand: (selectedBrand) => set({ selectedBrand }),
  selectedModule: "content-quality",
  setModule: (selectedModule) => set({ selectedModule })
}))
