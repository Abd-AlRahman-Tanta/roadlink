// @ts-nocheck
import { GlobalContent } from "Types";
import { create } from "zustand";

export interface GlobalStore {
  currentLocale: string;
  isLoading: boolean;
  defaultLocale: string;
  globalContent: any | null;
  notifications: any[];
}

const useGlobalStore = create<GlobalStore>(() => ({
  defaultLocale: "en",
  currentLocale: "",
  isLoading: false,
  notifications: [],
}));

export default useGlobalStore;
