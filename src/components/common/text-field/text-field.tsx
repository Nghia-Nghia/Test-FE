import React from "react";
import "./text-field.css";
import { TextField, TextFieldProps } from "@shopify/polaris";

interface NonMutuallyExclusiveProps {
  showError?: boolean;
}
export type CustomTextFieldProps = NonMutuallyExclusiveProps & TextFieldProps;

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  autoComplete,
  clearButton,
  requiredIndicator,
  helpText,
  error,
  showError,
  onClearButtonClick,
  onChange
}) => {
  return (
    <div className='custom-text-field'>
      <TextField
        label={
          <div>
            {label}
            {requiredIndicator && <span className='required'>(*)</span>}
          </div>
        }
        value={value}
        autoComplete={autoComplete}
        clearButton={clearButton}
        error={showError && error}
        helpText={helpText}
        onClearButtonClick={onClearButtonClick}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTextField;
