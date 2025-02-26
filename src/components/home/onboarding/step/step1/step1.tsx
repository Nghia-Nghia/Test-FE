import React from "react";
import "./step1.css";
import { ButtonGroup, Button } from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
interface step1Props {}

const Step1: React.FC<step1Props> = () => {
  return (
    <div className='wrapper'>
      <div className='left'>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>1. Go to your theme editor by clicking this button</p>
            <Button icon={ExternalIcon}>Open theme</Button>
          </div>
          <p>2. Click on the Save button on the top right corner.</p>
          <span className='text-[#005BD3] underline cursor-pointer ml-4'>View instructions</span>
          <div style={{ marginTop: "20px" }}>
            <ButtonGroup>
              <Button>Enable Later</Button>
              <Button variant='primary'>Next step</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          src='https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/preview-banner-app-embed.04f4ccf6fb67dc6a61043f425af51090.svg'
          alt='Banner Right'
        />
      </div>
    </div>
  );
};

export default Step1;
