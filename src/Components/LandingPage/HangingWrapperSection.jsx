import React from "react";
import styled from "styled-components";

import FlexBox from "@common/UI/FlexBox";
import { Button } from "@common/UI/Buttons";
import { device } from "@common/UI/Responsive";
import { PRIMARY_900, SECONDARY_200, ACCENT_0 } from "@common/UI/colors";
import { Display, H1 } from "@common/UI/Headings";

const StepBox = styled(FlexBox)`
  border-radius: 0.75rem;
  background-color: #3dbaf8;
  width: 8rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const StepText = styled(FlexBox)`
  color: #fafafa;
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
  line-height: normal;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const StepInternalBox = styled(FlexBox)`
  border-radius: 1.5rem;
  border: 1px solid #433e3f;
  padding: 2.5rem;
  flex-direction: column;
  row-gap: 1.5rem;

  @media ${device.laptop} {
    column-gap: 8rem;
    flex-direction: row;
    width: 90%;
  }
`;

const StepImg = styled.img`
  height: 15rem;
  border-radius: 0.75rem;
  object-fit: cover;

  @media ${device.laptop} {
    height: 22rem;
    width: 20rem;
  }
`;

const SizedBox = styled(FlexBox)`
  width: 60%;
  border-inline: 2px solid #433e3f;
  height: 5rem;
`;

const CenteredFlexBox = styled(FlexBox)`
  width: 100%;
  max-width: 75rem;
  margin: auto;
  align-items: center;
`;

export const Step = ({ stepCount, heading, text, imgUrl }) => (
  <CenteredFlexBox column>
    <StepInternalBox>
      <FlexBox column rowGap="0.5rem">
        <StepBox>
          <StepText>STEP {stepCount}</StepText>
        </StepBox>
        <FlexBox column align="center" justify="center" padding="2.5rem 0">
          <Display bold color="#433E3F">
            {heading}
          </Display>
          <H1 color="#433E3F" lineHeight="normal">
            {text}
          </H1>
        </FlexBox>
      </FlexBox>
      <StepImg src={imgUrl} alt="banner picture" />
    </StepInternalBox>
    {stepCount !== 3 && <SizedBox />}
  </CenteredFlexBox>
);

export const HangingWrapperSection = ({ data, onLoginClick }) => (
  <>
    <FlexBox column>
      {data.map((step, index) => (
        <Step
          key={index}
          stepCount={step.stepCount}
          heading={step.heading}
          text={step.text}
          imgUrl={step.imgUrl}
        />
      ))}
    </FlexBox>
  </>
);
