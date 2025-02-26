import { steplayoutItemProps } from "@components/home/onboarding/step/steplayout";
import { create } from "zustand";

type State = {
  steps: steplayoutItemProps[];
};

type Actions = {
  setSteps: (value: steplayoutItemProps[]) => void;
};

export const onboardingStore = create<State & Actions>((set) => ({
  steps: [],
  setSteps: (value) => set({ steps: value })
}));
