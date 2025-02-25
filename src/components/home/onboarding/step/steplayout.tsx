import React from "react";
import "./steplayout.css";
import CheckboxCircle from "@components/common/checkbox/checkbox-circle";

interface steplayoutItemProps {
  title: string;
  isCompleted?: boolean;
  element?: React.ReactNode;
}

interface steplayoutProps {
  items: steplayoutItemProps[];
}

const StepLayout: React.FC<steplayoutProps> = ({ items }) => {
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className='content__step'>
          <div className='content__step__title'>
            <CheckboxCircle value={item.isCompleted ?? false} />
            <p>{item.title}</p>
          </div>
          <div className='content__step__element'>{item.element}</div>
        </div>
      ))}
    </div>
  );
};

export default StepLayout;
