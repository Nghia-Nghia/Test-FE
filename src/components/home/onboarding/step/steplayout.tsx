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
  const { modelStep2, activeButtonIndex } = onboardingStore();

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
  const handleClick_checkbox_step1 = () => {
    const newItems = [...items];
    newItems[0].isCompleted = true;
    setSteps(newItems);
  };
  const handleClick_checkbox_step2 = () => {
    try {
      const newItems = [...items];

      let isvalid = modelStep2.title.trim().length > 0 && modelStep2.DatasetID.trim().length > 0;
      if (activeButtonIndex === 1) {
        isvalid = isvalid && modelStep2.AccessToken;
      }

      if (!isvalid) {
        setShowErrorValidate(true);
      } else {
        newItems[1].isCompleted = true;
        setSteps(newItems);
      }
    } catch (err) {
      console.log(err);
      setShowErrorValidate(true);
    }
  };
  const { setSteps, setShowErrorValidate } = onboardingStore();
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className='content__step' onClick={() => handleClick_Step(index)}>
          <div className='content__step__title'>
            <CheckboxCircle
              onClick={() => {
                if (index === 0) {
                  handleClick_checkbox_step1();
                } else if (index === 1) {
                  handleClick_checkbox_step2();
                }
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
