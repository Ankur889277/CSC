import React from "react";
import { Body1, Display, H6 } from "@Components/common/UI/Headings";
import styled from "styled-components";
import FlexBox from "@Components/common/UI/FlexBox";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  background-color: #e0f4ff;
  padding: 2rem 0;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  opacity: 0px;
`;

const WhyChoose = () => {
  return (
    <Wrapper>
      <Display bold>Why Choose Us</Display>
      <FlexBox width="30%">
        <Body1 style={{ textAlign: "center" }} bold color="#6B7280">
          Lorem ipsum dolor sit amet consectetur. Et turpis mattis nulla
          venenatis sodales. Consequat amet quis facilisi molestie netus egestas
          non. Vulputate nisl amet ac turpis pellentesque.{" "}
        </Body1>
      </FlexBox>
    </Wrapper>
  );
};

export default WhyChoose;
