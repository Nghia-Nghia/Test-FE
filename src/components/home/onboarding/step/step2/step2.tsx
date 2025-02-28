import CustomCombobox from "@components/common/combobox/combobox";
import CustomTextField from "@components/common/text-field/text-field";
import { onboardingStore } from "@pages/stores/onboarding";
import { Button, ButtonGroup } from "@shopify/polaris";
import React from "react";

interface step2Props {}

const Step2: React.FC<step2Props> = () => {
  const {
    showErrorValidate,
    activeButtonIndex,
    setActiveButtonIndex,
    modelStep2,
    setModelStep2,
    targetDefault
  } = onboardingStore();

  const handleButtonClick = (index: number) => {
    if (activeButtonIndex === index) return;
    setActiveButtonIndex(index);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <CustomTextField
        label='Facebook Pixel Title'
        error='Facebook Pixel Title is a required field.'
        value={modelStep2.title}
        showError={showErrorValidate && (modelStep2.tilte || modelStep2.title === "")}
        onChange={(value) => {
          setModelStep2({ ...modelStep2, title: value });
        }}
        clearButton
        requiredIndicator
        helpText='It helps you to do easily management facebook pixel'
        onClearButtonClick={() => {
          setModelStep2({ ...modelStep2, title: "" });
        }}
        autoComplete='off'
      />
      <div>
        <CustomTextField
          label='Facebook Pixel ID (Dataset ID)'
          error='Facebook Pixel ID is a required field.'
          showError={showErrorValidate}
          value={modelStep2.DatasetID}
          onChange={(value) => {
            setModelStep2({ ...modelStep2, DatasetID: value });
          }}
          clearButton
          requiredIndicator
          onClearButtonClick={() => {
            setModelStep2({ ...modelStep2, title: "" });
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
        {activeButtonIndex === 0 ? (
          <div style={{ margin: "10px 0" }}>
            <p style={{ color: "#637381", width: "70%" }}>
              Standard uses Facebook Pixel, a third-party cookie that collects and shares customers’
              browsing behavior on your online store. Browser-based ad blockers can prevent the
              pixel from collecting data.
            </p>
          </div>
        ) : (
          <div>
            <p style={{ color: "#637381", width: "70%" }}>
              Maximum combines all data-sharing options to reach the highest amount of customers. It
              uses Conversions API, which shares data directly from our servers to Facebook. This
              means the data can’t be blocked by ad blockers, IOS 14+
            </p>
            <CustomTextField
              style={{ margin: "5px 0" }}
              label='Facebook Pixel Access Token'
              error='Facebook Pixel Access is a required field.'
              showError={showErrorValidate}
              value={modelStep2.title}
              onChange={() => {
                setModelStep2({ ...modelStep2, title: modelStep2.title });
              }}
              clearButton
              requiredIndicator
              onClearButtonClick={() => {
                setModelStep2({ ...modelStep2, title: "" });
              }}
              autoComplete='off'
            />
          </div>
        )}
        <div style={{ margin: "10px 0" }}>
          <CustomCombobox label='Target' items={targetDefault} />
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <Button disabled>Next step</Button>
      </div>
    </div>
  );
};

export default Step2;
