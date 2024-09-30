import React, { useState } from "react";
import styled from "styled-components";
import { LuRefreshCw } from "react-icons/lu";

import FlexBox from "../common/UI/Flexbox";
import { Body1, Body2, Support } from "../common/UI/Headings";
import { Button } from "../common/UI/Buttons";
import Input from "../common/UI/InputBox";

const FormWrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

const FormContainer = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid red;
  position: relative;
  background-color: #ffffff;
  gap: 1.5rem;
`;

const GradientBar = styled(FlexBox)`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, #066ea1 0%, #077ab3 50%, #3b1b64 75%);
  height: 12px;
  border-radius: 10rem 9rem 1rem 1rem;
  top: 0;
  right: 0;
`;

const LeftContainer = styled(FlexBox)`
  flex: 1;
  border: solid var(--Secondary-Secondary300, #ced7de);
  border-width: 0 1px 1px 1px;
  padding: 1.25rem;
`;

const RightContainer = styled(FlexBox)`
  flex: 1;
  border: solid var(--Secondary-Secondary300, #ced7de);
  border-width: 0 0 1px 1px;
`;

const InputField = ({ label, placeholder }) => (
  <FlexBox column>
    <Support bold>{label}</Support>
    <Input placeholder={placeholder} />
  </FlexBox>
);

const SampleInformation = ({ currentStep, setCurrentStep, steps }) => {
  const [selectedOption, setSelectedOption] = useState("yes");

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);

  const handleToggle = option => setSelectedOption(option);

  return (
    <FormWrapper>
      <FormContainer>
        <FlexBox column>
          <Body1 bold>{steps[currentStep - 1]}</Body1>
          <Input width="25%" />
        </FlexBox>

        <FlexBox width="100%" columnGap="1rem">
          <LeftContainer column>
            <FlexBox justify="space-between" width="100%">
              <Body1>Sample Detail</Body1>
              <FlexBox align="center" columnGap="0.5rem" cursor="pointer">
                <Support>Reset</Support>
                <LuRefreshCw />
              </FlexBox>
            </FlexBox>

            <FlexBox columnGap="1rem">
              <InputField label="Label" />
              <FlexBox column>
                <Body2>QC Pass</Body2>
                <FlexBox border="1px solid #CCCBCB" borderRadius="0.5rem">
                  <FlexBox
                    onClick={() => handleToggle("yes")}
                    padding="0.75rem 1.5rem"
                    backgroundColor={
                      selectedOption === "yes" ? "#066EA1" : "#FFFFFF"
                    }
                    borderRadius="0.5rem 0 0 0.5rem"
                    cursor="pointer"
                    color={selectedOption === "yes" ? "#FFFFFF" : "#000"}
                  >
                    <Body2>Yes</Body2>
                  </FlexBox>
                  <FlexBox
                    onClick={() => handleToggle("no")}
                    padding="0.75rem 1.5rem"
                    backgroundColor={
                      selectedOption === "no" ? "#066EA1" : "#FFFFFF"
                    }
                    borderRadius="0 0.5rem 0.5rem 0"
                    cursor="pointer"
                    color={selectedOption === "no" ? "#FFFFFF" : "#000"}
                  >
                    <Body2>No</Body2>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <InputField label="Quantity" />
            </FlexBox>
          </LeftContainer>

          <RightContainer>
            <Body1>right</Body1>
          </RightContainer>
        </FlexBox>

        <GradientBar />

        <FlexBox justify="flex-end" columnGap="1rem">
          <Button primary onClick={handlePrev}>
            Previous
          </Button>
          <Button primary onClick={handleNext}>
            Next
          </Button>
        </FlexBox>
      </FormContainer>
    </FormWrapper>
  );
};

export default SampleInformation;
