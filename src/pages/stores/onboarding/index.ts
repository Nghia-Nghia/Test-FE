import { steplayoutItemProps } from "@components/home/onboarding/step/steplayout";
import { create } from "zustand";

type State = {
  steps: steplayoutItemProps[];
  isOpenViewInstructions: boolean;
  showErrorValidate: boolean;
  activeButtonIndex: number;
  modelStep2: any;
};

type Actions = {
  setSteps: (value: steplayoutItemProps[]) => void;
  setIsOpenViewInstructions: (value: boolean) => void;
  setShowErrorValidate: (value: boolean) => void;
  setActiveButtonIndex: (value: number) => void;
  setModelStep2: (value: any) => void;
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
  activeButtonIndex: 0,
  setActiveButtonIndex: (value) => set({ activeButtonIndex: value }),
  modelStep2: {},
  setModelStep2: (value) => set({ modelStep2: value })
}));
