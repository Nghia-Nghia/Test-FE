import CustomTextField from "@components/common/text-field/text-field";
import { Button, ButtonGroup, TextField } from "@shopify/polaris";
import React, { useState } from "react";

interface step2Props {}

const Step2: React.FC<step2Props> = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [model, setModel] = useState<any>({
    title: ""
  });

  const handleButtonClick = (index: number) => {
    if (activeButtonIndex === index) return;
    setActiveButtonIndex(index);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <CustomTextField
        label='Facebook Pixel Title'
        value={model.title}
        onChange={() => {
          setModel({ ...model, title: model.title });
        }}
        clearButton
        requiredIndicator
        helpText='It helps you to do easily management facebook pixel'
        onClearButtonClick={() => {
          setModel({ ...model, title: "" });
        }}
        autoComplete='off'
      />
      <div>
        <CustomTextField
          label='Facebook Pixel ID (Dataset ID)'
          value={model.title}
          onChange={() => {
            setModel({ ...model, title: model.title });
          }}
          clearButton
          requiredIndicator
          onClearButtonClick={() => {
            setModel({ ...model, title: "" });
          }}
          autoComplete='off'
        />
        <div style={{ margin: "10px 0" }}>
          <ButtonGroup variant='segmented'>
            <Button pressed={activeButtonIndex === 0} onClick={() => handleButtonClick(0)}>
              Browser
            </Button>
            <Button pressed={activeButtonIndex === 1} onClick={() => handleButtonClick(1)}>
              Conversions API
            </Button>
          </ButtonGroup>
        </div>
        <p style={{ color: "#637381", width: "70%" }}>
          Standard uses Facebook Pixel, a third-party cookie that collects and shares customers’
          browsing behavior on your online store. Browser-based ad blockers can prevent the pixel
          from collecting data.
        </p>
      </div>
      <div style={{ width: "20%" }}>
        <Button disabled>Next step</Button>
      </div>
    </div>
  );
};

export default Step2;
