import React, { useState } from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { Case, Default, Switch } from "@common/ConditionalRendering";
import SampleList from "./SampleList";
import ViewSampleList from "./ViewSampleList";

// Styled components
const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const ContainerButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: red;
  padding: 1.25rem;
  border: none;
  border-radius: 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 7px rgba(171, 171, 171, 0.1),
      0px 13px 13px rgba(171, 171, 171, 0.09),
      0px 30px 18px rgba(171, 171, 171, 0.05),
      0px 53px 21px rgba(171, 171, 171, 0.01),
      0px 83px 23px rgba(171, 171, 171, 0);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleCompletedClick = () => {
    setCurrentStep(2);
  };

  return (
    <Wrapper>
      <FlexBox width="100%" backgroundColor="#ffffff" borderRadius="1rem">
        <ContainerButton>Outgoing</ContainerButton>
        <ContainerButton onClick={handleCompletedClick}>
          Completed
        </ContainerButton>
      </FlexBox>
      <Switch>
        <Case condition={currentStep === 2}>
          <SampleList
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        </Case>
        <Default>
          <ViewSampleList
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        </Default>
      </Switch>
    </Wrapper>
  );
};

export default Index;
