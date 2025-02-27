import { steplayoutItemProps } from "@components/home/onboarding/step/steplayout";
import { create } from "zustand";

type State = {
  steps: steplayoutItemProps[];
  isOpenViewInstructions: boolean;
};

type Actions = {
  setSteps: (value: steplayoutItemProps[]) => void;
  setIsOpenViewInstructions: (value: boolean) => void;
};

export const onboardingStore = create<State & Actions>((set) => ({
  steps: [],
  setSteps: (value) => set({ steps: value }),
  isOpenViewInstructions: false,
  setIsOpenViewInstructions: (value) => {
    set({ isOpenViewInstructions: value });
  }
}));
