import React from "react";
import "./steplayout.css";
import CheckboxCircle from "@components/common/checkbox/checkbox-circle";
import { onboardingStore } from "@pages/stores/onboarding";

export interface steplayoutItemProps {
  title: string;
  isCompleted?: boolean;
  isActivated?: boolean;
  element?: React.ReactNode;
}

export interface steplayoutProps {
  items: steplayoutItemProps[];
}

const StepLayout: React.FC<steplayoutProps> = ({ items }) => {
  const { setSteps } = onboardingStore();
  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          className='content__step'
          onClick={() => {
            if (index > 0) {
              if (!items[index - 1].isCompleted) {
                return;
              }
            }
            if (!items[index].isActivated) {
              const newItems = items.map((item, i) =>
                i === index ? { ...item, isActivated: true } : { ...item, isActivated: false }
              );
              setSteps(newItems);
            }
          }}
        >
          <div className='content__step__title'>
            <CheckboxCircle
              onClick={() => {
                const newItems = [...items];
                newItems[index].isCompleted = true;
                if (index > 0) {
                  if (!newItems[index - 1].isCompleted) {
                    return;
                  }
                }
                setSteps(newItems);
              }}
              value={item.isCompleted ?? false}
            />
            <p>{item.title}</p>
          </div>
          <div
            className='content__step__element'
            style={{ paddingLeft: "30px", display: item.isActivated ? "block" : "none" }}
          >
            {item.element}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepLayout;
