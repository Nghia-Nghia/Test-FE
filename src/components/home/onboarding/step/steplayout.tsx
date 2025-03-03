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
  const handleClick_Step = (index: number) => {
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
  };
  const handleClick_checkbox = (index: number) => {
    const newItems = [...items];
    if (index > 0) {
      if (newItems[index - 1].isCompleted) {
        setShowErrorValidate(true);
      }
    } else {
      setSteps(newItems);
      newItems[index].isCompleted = true;
    }
  };
  const { setSteps, setShowErrorValidate } = onboardingStore();
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className='content__step' onClick={() => handleClick_Step(index)}>
          <div className='content__step__title'>
            <CheckboxCircle
              onClick={() => handleClick_checkbox(index)}
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
