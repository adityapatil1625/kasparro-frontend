
import { create } from "zustand"

interface State {
  selectedBrand: string
  setBrand: (b: string) => void
  selectedModule: string
  setModule: (m: string) => void
}

export const useStore = create<State>((set) => ({
  selectedBrand: "OpenAI",
  setBrand: (selectedBrand) => set({ selectedBrand }),
  selectedModule: "content-quality",
  setModule: (selectedModule) => set({ selectedModule })
}))
