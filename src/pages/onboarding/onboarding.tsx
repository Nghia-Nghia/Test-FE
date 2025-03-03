import React from "react";
import "./onboarding.css";
import SateCompleted from "@components/state-completed/state-completed";
import StepLayout from "@components/home/onboarding/step/steplayout";
import { onboardingStore } from "@pages/stores/onboarding";
import Step1 from "@components/home/onboarding/step/step1/step1";
import Step2 from "@components/home/onboarding/step/step2/step2";

interface onboardingProps {}

const OnboardingPage: React.FC<onboardingProps> = () => {
  const { steps, setSteps } = onboardingStore();
  React.useEffect(() => {
    setSteps([
      {
        title: "Enable our App Embed",
        isCompleted: false,
        isActivated: true,
        element: <Step1 index={0} />
      },
      { title: "Setup your Facebook Pixel", isCompleted: false, element: <Step2 /> }
    ]);
  }, []);

  const render_content__head = (
    <>
      <p className='content__title'>
        <span className='seamlessly'>
          Seamlessly integrate
          <img
            src='https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/line.b1e8ee4c9a79176536c8498db6056423.svg'
            alt='line'
          />
        </span>{" "}
        your Facebook Pixel in{" "}
        <span className='single'>
          a single step
          <img
            src='https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/circle.fd8c02571a0b67ff452d24fe477fa3ab.svg'
            alt='circle'
          />
        </span>
      </p>
      <p>
        We will guide you through setting up Facebook Pixel. Please follow each step in the
        instructions to ensure a smooth process. You can explore on your own at any time.
      </p>
      <SateCompleted
        style={{ marginTop: "5px" }}
        size='SM'
        progress={(steps.filter((step) => step.isCompleted).length / steps.length) * 100}
        title={`Completed ${steps.filter((step) => step.isCompleted).length} of ${steps.length} step`}
      />
    </>
  );
  return (
    <div className='wrapper-main'>
      <div className='main'>
        <h1 className='tilte'>Onboarding</h1>
        <div className='content'>
          <div className='content__head'>{render_content__head}</div>
          <div className='content__body'>
            <StepLayout items={steps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
