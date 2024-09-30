import React from "react";
import styled from "styled-components";
import { CiCreditCard1 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

import FlexBox from "../common/UI/Flexbox";
import { Button } from "../common/UI/Buttons";
import { Body1, Body2 } from "../common/UI/Headings";
import Input from "../common/UI/InputBox";

// Styled components
const Container = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
`;

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

const GridContainer = styled(FlexBox)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const Card = styled(FlexBox)`
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 1rem;
  width: 100%;
  max-width: 27rem;
  gap: 0.5rem;
`;

const Heading = styled(FlexBox)`
  width: 100%;
  border-bottom: 1px dotted red;
  padding: 0.5rem 1.75rem;
`;

const InputBox = styled.input`
  width: 251px;
  height: 32px;
  gap: 0px;
  border-radius: 2px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background: #ffffff;
  border: 1px solid var(--Neutrals-Neutrals100, #e3e3e3);
`;
const CommandCard = ({ title, children }) => (
  <Card>
    <Heading>
      <Body1 bold>{title}</Body1>
    </Heading>
    <FlexBox column padding="0.5rem 1.75rem" rowGap="0.5rem">
      {children}
    </FlexBox>
  </Card>
);

const PaymentDetails = ({ currentStep, setCurrentStep, steps }) => {
  const handlePrev = () => setCurrentStep(currentStep - 1);

  const billDetails = [
    { label: "Sub Total", value: "$4500.00" },
    { label: "CGST", value: "$100.06" },
    { label: "IGST", value: "$100.06" },
    { label: "SGST", value: "$100.06" },
    { label: "Total", value: "$5000.00" },
  ];

  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <Body1 bold>{steps[currentStep - 1]}</Body1>
          <FlexBox justify="center" align="center">
            <GridContainer>
              <CommandCard title="Bill Summary">
                {billDetails.map((detail, index) => (
                  <FlexBox key={index} justify="space-evenly" rowGap="0.5rem">
                    <Body2 bold>{detail.label}</Body2>
                    <FlexBox columnGap="1.25rem">
                      <Body2 bold>:</Body2>
                      <Body2 bold>{detail.value}</Body2>
                    </FlexBox>
                  </FlexBox>
                ))}
              </CommandCard>
              <CommandCard title="Payment Method">
                <FlexBox column width="100%">
                  <Body1>Choose Payment</Body1>
                  <FlexBox
                    justify="space-between"
                    backgroundColor="#FFFFFF"
                    border=" 1px solid  #E3E3E3"
                    align="center"
                    padding="0.5rem"
                  >
                    <FlexBox align="center" columnGap="0.25rem">
                      <CiCreditCard1 />
                      <Body2>Debit/credit card</Body2>
                    </FlexBox>
                    <FaAngleDown />
                  </FlexBox>
                  <FlexBox column>
                    <Body1>Instrument/Ref No.</Body1>
                    <InputBox></InputBox>
                  </FlexBox>
                </FlexBox>
              </CommandCard>
              <CommandCard title="Payment Detail">
                <FlexBox>
                  <Body2 bold>Round Off :</Body2>
                  <Input />
                </FlexBox>
                <FlexBox>
                  <Body2 bold>Payment Received :</Body2>
                  <Input />
                </FlexBox>
                <FlexBox>
                  <Body2 bold>Payment Due :</Body2>
                  <Input />
                </FlexBox>
              </CommandCard>
              <CommandCard title="Documents">
                <Body1>Upload Document</Body1>
              </CommandCard>
            </GridContainer>
            <GradientBar />
          </FlexBox>
          <FlexBox justify="flex-end" columnGap="1rem">
            <Button primary onClick={handlePrev}>
              Previous
            </Button>
            <Button primary>Submit</Button>
          </FlexBox>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default PaymentDetails;
