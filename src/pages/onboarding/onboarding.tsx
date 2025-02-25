import React from "react";
import "./onboarding.css";
import SateCompleted from "@components/state-completed/state-completed";
import StepLayout from "@components/home/onboarding/step/steplayout";

interface onboardingProps {}

const OnboardingPage: React.FC<onboardingProps> = () => {
  return (
    <div className='main'>
      <h1 className='tilte'>Onboarding</h1>
      <div className='content'>
        <div className='content__head'>
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
            progress={32}
            title='Completed 2 of 3 step'
          />
        </div>
        <div className='content__body'>
          <StepLayout
            items={[
              { title: "Step 1: Add Facebook Pixel ID" },
              { title: "Step 2: Add Facebook Pixel ID" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
