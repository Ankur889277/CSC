import React from "react";
import styled from "styled-components";

import FlexBox from "@common/UI/FlexBox";
import { Display, H1, Body1 } from "@common/UI/Headings";
import { boxShadowDs1 } from "@common/UI/styles";
import { ACCENT_0, PRIMARY_800 } from "@common/UI/colors";
import { device } from "@common/UI/Responsive";

const CardContainer = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  ${boxShadowDs1};

  @media ${device.laptop} {
    padding: 1.5rem;
    flex-direction: row;
    justify-content: center;
  }
`;

const DetailsBox = styled(FlexBox)`
  gap: 0.5rem;
  flex-direction: column;

  @media ${device.laptop} {
    gap: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Icon = styled.div`
  display: none;
  opacity: 0.2;

  @media ${device.laptop} {
    display: flex;
  }
`;

const CardWithCount = ({ title, count, icon: IconComponent }) => (
  <CardContainer>
    <DetailsBox>
      <H1 color="#718EBF">{title}</H1>
      <Body1 bold color="#726C6C">
        {count}
      </Body1>
    </DetailsBox>
  </CardContainer>
);

export default CardWithCount;
