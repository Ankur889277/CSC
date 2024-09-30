import React, { useState } from "react";
import styled from "styled-components";
import FlexBox from "../common/UI/Flexbox";
import { Button } from "../common/UI/Buttons";
import { Body1, Body2, H1, Support } from "../common/UI/Headings";
import Input from "../common/UI/InputBox";
import TextArea from "../common/UI/TextArea";
import CustomToggle from "../common/UI/Toggle";
const FormWrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

const InputGrid = styled(FlexBox)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const FormContainer = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
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

const Container = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
`;
const InputField = ({ label, placeholder, width }) => (
  <FlexBox column>
    <Support bold>{label}</Support>
    <Input width={width} placeholder={placeholder} />
  </FlexBox>
);

const CustomerInformation = ({ currentStep, setCurrentStep, steps }) => {
  const handleNext = () => setCurrentStep(currentStep + 1);
  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <H1 bold>{steps[currentStep - 1]}</H1>

          <InputGrid>
            <InputField label="Contact No." placeholder="Contact No." />
            <InputField label="GSTIN" placeholder="GSTIN" />
            <InputField label="Current Balance" placeholder="Current Balance" />
          </InputGrid>
          <FlexBox column>
            <Support bold>Address</Support>
            <Input width="100%" placeholder="Enter Address" />
          </FlexBox>
          <FlexBox column>
            <Support bold>Remarks</Support>
            <TextArea placeholder="Additional Information" />
          </FlexBox>
          <H1 bold>Sampling Detail</H1>
          <InputGrid>
            <InputField label="Sampling Date" placeholder="abc@mail.com" />
            <InputField label="Sample Registration Date" />
            <InputField label="TRF" />
          </InputGrid>
          <FlexBox columnGap="0.5rem" align="center">
            <CustomToggle small />
            <Body2 bold>Sampling Done By Laboratory</Body2>
            <Support color="#BD0719">
              No Existing Schedule Found. Please Create One.
            </Support>
          </FlexBox>
          <FlexBox columnGap="0.5rem" align="center">
            <CustomToggle small />
            <Body2 bold>Sampling Done By Laboratory</Body2>
          </FlexBox>
          <GradientBar />
          <FlexBox justify="flex-end" gap="1rem">
            <Button primary onClick={handleNext}>
              Next
            </Button>
          </FlexBox>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default CustomerInformation;
