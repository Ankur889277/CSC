import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";

import FlexBox from "@common/UI/FlexBox";
import { Body1, Body2, H1 } from "@common/UI/Headings";
import { SECONDARY_200 } from "@common/UI/colors";
import { Case, Default, Switch } from "@common/ConditionalRendering";
import CustomerInformation from "./CustomerInformation";
import PaymentDetails from "./PaymentDetails";
import SampleInformation from "./SampleInformation";
import Input, { InputBox } from "../common/UI/InputBox";

// const PaymentDetails = dynamic(() => import("./PaymentDetails"), {
//   loading: () => <Loader fitContent />,
// });

// const SampleRegistration = dynamic(() => import("./SampleRegistration"), {
//   loading: () => <Loader fitContent />,
// });

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Step = styled.div`
  position: relative;
  text-align: left;

  &:before {
    content: "";
    position: absolute;
    top: 28%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${props => (props.isCompleted ? "#3498db" : "#e0e0e0")};
    transform: translateY(-50%);
  }

  &:first-child:before {
    left: 20%;
  }

  &:last-child:before {
    right: 20%;
  }
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isCompleted ? "#3498db" : "#e0e0e0")};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
const MultistepProgress = ({ steps, currentStep }) => {
  return (
    <ProgressBarContainer>
      {steps.map((step, index) => {
        const isCompleted = index <= currentStep;
        return (
          <Step key={index} isCompleted={isCompleted}>
            <FlexBox column>
              <StepCircle isCompleted={isCompleted}>{index + 1}</StepCircle>
              <Body2>{step}</Body2>
            </FlexBox>
          </Step>
        );
      })}
    </ProgressBarContainer>
  );
};

const SampleManagement = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Customer Information",
    "Sample Information",
    "Payment Details",
  ];

  return (
    <Wrapper>
      <FlexBox justify="space-between" align="center">
        <H1 bold>Sample Registration Form</H1>
        <MultistepProgress steps={steps} currentStep={currentStep - 1} />
      </FlexBox>
      <FlexBox>
        <Body2>Customer Name</Body2>
        <Input />
      </FlexBox>
      <Switch>
        <Case condition={currentStep === 3}>
          <PaymentDetails
            setCurrentStep={setCurrentStep}
            steps={steps}
            currentStep={currentStep}
          />
        </Case>
        <Case condition={currentStep === 2}>
          <SampleInformation
            setCurrentStep={setCurrentStep}
            steps={steps}
            currentStep={currentStep}
          />
        </Case>
        <Default>
          <CustomerInformation
            setCurrentStep={setCurrentStep}
            steps={steps}
            currentStep={currentStep}
          />
        </Default>
      </Switch>
    </Wrapper>
  );
};

export default SampleManagement;
