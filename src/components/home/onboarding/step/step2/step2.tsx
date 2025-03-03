import CustomCombobox from "@components/common/combobox/combobox";
import CustomTag from "@components/common/tag/tag";
import CustomTextField from "@components/common/text-field/text-field";
import { onboardingStore } from "@pages/stores/onboarding";
import { Button, ButtonGroup } from "@shopify/polaris";
import React, { useState } from "react";

interface step2Props {}

const Step2: React.FC<step2Props> = () => {
  const {
    showErrorValidate,
    modelStep2,
    setModelStep2,
    targetDefault,
    targetSelected,
    tagSelected,
    setTagSelected,
    setTargetSelected,
    activeButtonIndex,
    setActiveButtonIndex,
    setShowErrorValidate,
    setSteps,
    setIsStepComplete,
    steps
  } = onboardingStore();

  const handleButtonClick = (index: number) => {
    if (activeButtonIndex === index) return;
    setActiveButtonIndex(index);
  };

  const handleClick_NextStep = () => {
    try {
      const newItems = [...steps];

      let isvalid = modelStep2.title.trim().length > 0 && modelStep2.DatasetID.trim().length > 0;
      if (activeButtonIndex === 1) {
        isvalid = isvalid && modelStep2.AccessToken;
      }

      if (!isvalid) {
        setShowErrorValidate(true);
      } else {
        newItems[1].isCompleted = true;
        setSteps(newItems);
        setIsStepComplete(true);
      }
    } catch (err) {
      console.log(err);
      setShowErrorValidate(true);
    }
  };

  const field_Title = (
    <CustomTextField
      label='Facebook Pixel Title'
      error='Facebook Pixel Title is a required field.'
      value={modelStep2.title}
      showError={
        showErrorValidate && (modelStep2.title ? modelStep2.title.trim().length === 0 : true)
      }
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
  );
  const field_Target = (
    <>
      <CustomCombobox
        label='Target'
        items={targetDefault}
        selected={targetSelected}
        onSelected={(value) => {
          setTargetSelected(value);
        }}
      />
      <div style={{ margin: "10px 0" }}>
        {targetSelected === "Products" && <Button>Search product</Button>}
        {targetSelected === "Collections" && <Button>Search collection</Button>}
      </div>
      <div>
        <CustomTag
          items={tagSelected}
          onRemoveTag={(value) => {
            setTagSelected(tagSelected?.filter((item) => item !== value) ?? []);
          }}
        />
      </div>
    </>
  );
  const render_state_Browser = (
    <p style={{ color: "#637381", width: "60%" }}>
      Standard uses Facebook Pixel, a third-party cookie that collects and shares customers’
      browsing behavior on your online store. Browser-based ad blockers can prevent the pixel from
      collecting data.
    </p>
  );
  const render_state_ConversionsAPI = (
    <>
      <p style={{ color: "#637381", width: "60%" }}>
        Maximum combines all data-sharing options to reach the highest amount of customers. It uses
        Conversions API, which shares data directly from our servers to Facebook. This means the
        data can’t be blocked by ad blockers, IOS 14+
      </p>
      <CustomTextField
        style={{ margin: "5px 0" }}
        label='Facebook Pixel Access Token'
        error='Facebook Pixel Access is a required field.'
        value={modelStep2.AccessToken}
        showError={
          showErrorValidate &&
          (modelStep2.AccessToken ? modelStep2.AccessToken.trim().length === 0 : true)
        }
        onChange={(value) => {
          setModelStep2({ ...modelStep2, AccessToken: value });
        }}
        clearButton
        requiredIndicator
        helpText='It helps you to do easily management facebook pixel'
        onClearButtonClick={() => {
          setModelStep2({ ...modelStep2, AccessToken: "" });
        }}
        autoComplete='off'
      />
    </>
  );
  const field_pixelID = (
    <CustomTextField
      label='Facebook Pixel ID (Dataset ID)'
      error='Facebook Pixel ID is a required field.'
      showError={
        showErrorValidate &&
        (modelStep2.DatasetID ? modelStep2.DatasetID.trim().length === 0 : true)
      }
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
  );
  const groupbutton_Browser_ConversionsAPI = (
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
  );
  const button_NextStep = (
    <Button variant='primary' onClick={handleClick_NextStep}>
      Next step
    </Button>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "15px" }}>{field_Title}</div>
      <div style={{ margin: "10px 0" }}>{field_pixelID}</div>
      {groupbutton_Browser_ConversionsAPI}
      <div>{activeButtonIndex === 0 ? render_state_Browser : render_state_ConversionsAPI}</div>
      <div>{field_Target}</div>
      <div style={{ width: "20%", marginTop: "15px" }}>{button_NextStep}</div>
    </div>
  );
};

export default Step2;
