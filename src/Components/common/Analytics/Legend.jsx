import React from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { H1, Body1, Body2, Display } from "@common/UI/Headings";

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;

const Label = styled.span`
  margin-right: 4px;
`;

const Value = styled.span`
  font-weight: bold;
`;

const Legend = () => {
  const legendItems = [
    { color: "#3B82F6", label: "Option A", value: "2.3K" }, // Blue color
    { color: "#FB923C", label: "Option B", value: "2.3K" }, // Orange color
    { color: "#0F4C81", label: "Option C", value: "2.3K" }, // Dark blue color
    { color: "#FCA5A5", label: "Option ", value: "2.3K" }, // Light red color
  ];

  return (
    <LegendContainer>
      <FlexBox columnGap="2rem">
        <FlexBox align="center" justify="center">
          <Dot color="#3B82F6" />
          <FlexBox columnGap="0.5rem">
            <Body1>Option A</Body1>
            <Body1 bold color="#404040">
              2.3K
            </Body1>
          </FlexBox>
        </FlexBox>
        <FlexBox align="center" justify="center">
          <Dot color="#3B82F6" />
          <FlexBox columnGap="0.5rem">
            <Body1>Option B</Body1>
            <Body1 bold color="#404040">
              2.3K
            </Body1>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox columnGap="2rem">
        <FlexBox align="center" justify="center">
          <Dot color="#3B82F6" />
          <FlexBox columnGap="0.5rem">
            <Body1>Option C</Body1>
            <Body1 bold color="#404040">
              2.3K
            </Body1>
          </FlexBox>
        </FlexBox>
        <FlexBox align="center" justify="center">
          <Dot color="#3B82F6" />
          <FlexBox columnGap="0.5rem">
            <Body1>Option D</Body1>
            <Body1 bold color="#404040">
              2.3K
            </Body1>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </LegendContainer>
  );
};

export default Legend;
