import { ComboboxItem } from "@components/common/combobox/combobox";
import { steplayoutItemProps } from "@components/home/onboarding/step/steplayout";
import { create } from "zustand";

type State = {
  steps: steplayoutItemProps[];
  isOpenViewInstructions: boolean;
  showErrorValidate: boolean;
  modelStep2: any;
  targetDefault: ComboboxItem[];
  targetSelected?: string | null;
  tagSelected: string[] | null;
};

type Actions = {
  setSteps: (value: steplayoutItemProps[]) => void;
  setIsOpenViewInstructions: (value: boolean) => void;
  setShowErrorValidate: (value: boolean) => void;
  setModelStep2: (value: any) => void;
  setTargetSelected: (value: string) => void;
  setTagSelected: (value: string[] | null) => void;
};

export const onboardingStore = create<State & Actions>((set) => ({
  steps: [],
  setSteps: (value) => set({ steps: value }),
  isOpenViewInstructions: false,
  setIsOpenViewInstructions: (value) => {
    set({ isOpenViewInstructions: value });
  },
  showErrorValidate: false,
  setShowErrorValidate: (value) => set({ showErrorValidate: value }),
  modelStep2: {},
  setModelStep2: (value) => set({ modelStep2: value }),
  targetDefault: [
    { value: "Entire Store", label: "Entire Store" },
    { value: "Products", label: "Products" },
    { value: "Collections", label: "Collections" }
  ],
  tagSelected: ["select 1", "select 2", "select 3"],
  setTagSelected: (value) => set({ tagSelected: value }),
  targetSelected: null,
  setTargetSelected: (value) => set({ targetSelected: value })
}));
