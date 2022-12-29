import create from "zustand"
import { persist } from "zustand/middleware"
import secureStorage from "../utils/secureLocalStorage"

const store = (set) => ({
  apiData: [],
  counter: 0,
  setCounter: (value) => set((state) => ({ ...state, counter: value })),
  updateApiData: (data) => set((state) => ({ ...state, contacts: data })),
})

const useStore = create(
  persist(store, { name: "store", getStorage: () => secureStorage })
)

export default useStore
