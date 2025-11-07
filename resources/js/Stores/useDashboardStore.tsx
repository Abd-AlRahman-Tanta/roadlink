import { create } from "zustand";

interface DashboardStore {
  editedElements: Element[];
  parentElement?: Element;
  setEditedElements: (elements: Element[]) => void;
  setParentElement: (element: Element) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  editedElements: [],
  parentElement: undefined,
  setEditedElements: (elements) => set({ editedElements: elements }),
  setParentElement: (element) => set({ parentElement: element }),
}));
