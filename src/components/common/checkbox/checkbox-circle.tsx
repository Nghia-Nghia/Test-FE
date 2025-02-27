import React from "react";
import "./checkbox-circle.css";
interface checkboxCircleProps {
  value: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxCircle: React.FC<checkboxCircleProps> = ({
  value,
  className,
  onChange,
  onClick,
  style
}) => {
  return (
    <div
      className={`checkbox-circle ${className}`}
      onClick={() => {
        if (onChange) {
          onChange(!value);
        }
        if (onClick) {
          onClick();
        }
      }}
      style={{ backgroundColor: value ? "black" : "#fff", ...style }}
    >
      <svg viewBox='0 0 20 20' fill='#fff' focusable='false' aria-hidden='true'>
        <path
          fillRule='evenodd'
          d='M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z'
        ></path>
      </svg>
    </div>
  );
};

export default CheckboxCircle;
