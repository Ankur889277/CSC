import FlexBox from "@Components/common/UI/FlexBox";
import {
  Body1,
  Body2,
  Display,
  H1,
  H6,
  Support,
} from "@Components/common/UI/Headings";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(FlexBox)`
  flex-direction: row; /* Set flex-direction to row for side-by-side layout */
  justify-content: space-between; /* Add space between left and right containers */
`;
const LeftContainer = styled(FlexBox)`
  flex: 1; /* Allow LeftContainer to take available space */
  padding: 1rem; /* Add padding for spacing */
  gap: 2rem;
`;
const RightContainer = styled(FlexBox)`
  flex: 1; /* Allow RightContainer to take available space */
  padding: 1rem; /* Add padding for spacing */
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 536px;
  border-radius: 1.5rem;
`;
const Card = () => {
  return (
    <Wrapper>
      <LeftContainer column>
        <Display bold>How To Start</Display>
        <FlexBox
          column
          padding="1.5rem"
          backgroundColor="#E0F4FF"
          borderRadius="1rem"
        >
          <FlexBox width="100%" justify="space-between">
            <Body2>01.</Body2>
            <img width="80px" height="80px" src="/assets/CradIcon.svg" />
          </FlexBox>
          <FlexBox column>
            <Body1 bold>Lorem ipsum dolor sit amet consectetur.</Body1>
            <Body1>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum <br /> dolor
              sit amet consectetur.
            </Body1>
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <Image src="/assets/Photo.webp" />
        </FlexBox>
      </LeftContainer>
      <RightContainer column>
        <FlexBox columnGap="3rem">
          <FlexBox
            column
            backgroundColor="#DAE1E7"
            padding="1rem"
            borderRadius="1rem"
            rowGap="5rem"
          >
            <Body2>02.</Body2>
            <FlexBox column rowGap="0.5rem">
              <Body1 bold>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum <br /> dolor
                sit amet consectetur.
              </Body1>
              <Body1>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </Body1>
            </FlexBox>
          </FlexBox>

          <FlexBox
            column
            backgroundColor="#FFD8BE"
            padding="1rem"
            borderRadius="1rem"
            rowGap="5rem"
          >
            <Body2>03.</Body2>
            <FlexBox column rowGap="0.5rem">
              <Body1 bold>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum <br /> dolor
                sit amet consectetur.
              </Body1>
              <Body1>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </Body1>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox columnGap="3rem">
          <FlexBox
            column
            backgroundColor="#FFD8BE"
            padding="1rem"
            borderRadius="1rem"
            rowGap="5rem"
          >
            <Body2>04.</Body2>
            <FlexBox column rowGap="0.5rem">
              <Body1 bold>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum <br /> dolor
                sit amet consectetur.
              </Body1>
              <Body1>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </Body1>
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <img src="/assets/PhotoGrid 2.svg"></img>
          </FlexBox>
        </FlexBox>
        <FlexBox
          column
          padding="1.5rem"
          backgroundColor="#E0F4FF"
          borderRadius="1rem"
        >
          <FlexBox width="100%" justify="space-between">
            <Body2>05.</Body2>
            <img width="80px" height="80px" src="/assets/CradIcon.svg" />
          </FlexBox>
          <FlexBox column>
            <Body1 bold>Lorem ipsum dolor sit amet consectetur.</Body1>
            <Body1>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum <br /> dolor
              sit amet consectetur.
            </Body1>
          </FlexBox>
        </FlexBox>
      </RightContainer>
    </Wrapper>
  );
};

export default Card;
