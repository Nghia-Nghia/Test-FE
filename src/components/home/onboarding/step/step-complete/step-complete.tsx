import React from "react";
import { ButtonGroup, Button } from "@shopify/polaris";
import "./step-complete.css";
import { onboardingStore } from "@pages/stores/onboarding";
interface StepCompleteProps {}

const StepComplete: React.FC<StepCompleteProps> = () => {
  const { showToast, setShowToast } = onboardingStore();

  return (
    <div className='wraper-step-compltete'>
      <div className='wraper-step-compltete__main'>
        <h1>Congratulations, you have saved successfully the pixel!</h1>
        <img
          src='https://s3-alpha-sig.figma.com/img/ea21/51cf/267a5ee91b48336cb3f032f3a0f7bfc2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hEi1JqzlnOf-ZZ7mngSZeCO9vPZxdgZdI8r1jjJDuzIqHwrrMio9qovO-XYQk5-LNnmXKyZRk8H1pc2Wtl-~CCUtzm4a4S7JvH61p5-myrCsU-n9hO9IvyUfhWh20WQdv5bHMfVIDuEOnBnOxC7yT9RMAqtKSgfA3X6bXSYrCS6vJ2cy8eyCUCrCVaALVTTnY7JYY4TdkjyeC-FXEdVX1RHtJ9GN9L9wyRxtL9412RDozD81RhCXLs3xhIwcy3q-FSUKwD7eunaPHZciWmmGP7vEZn~h5edYL34WOJSWgpjAaU0MzACWWd4D3JNvtN4GM6yKia12u8VXVGmRdd9SLg__'
          alt=''
        />
        <h1>How do I know if Facebook Pixel is working?</h1>
        <p>
          Facebook Pixel Helper is a Google Chrome extension from Facebook that lets you test your
          pixel implementation. It is essentially a troubleshooting tool that tells you if all is
          well with your Facebook pixel{" "}
          <span onClick={() => setShowToast({ ...showToast, InstallTheFacebook: true })}>
            Install The Facebook Pixel Helper here
          </span>
        </p>
      </div>
      <div className='wraper-step-compltete__button'>
        <ButtonGroup>
          <Button onClick={() => setShowToast({ ...showToast, CreateAnotherPixel: true })}>
            Create another pixel
          </Button>
          <Button
            onClick={() => setShowToast({ ...showToast, ManagePixels: true })}
            variant='primary'
          >
            Manage pixels
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default StepComplete;
