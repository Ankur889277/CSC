import React, { useEffect } from "react";
import styled from "styled-components";

import { Display, Body1, H3 } from "@common/UI/Headings";
import FlexBox from "@common/UI/FlexBox";
import { device } from "@common/UI/Responsive";
import { PRIMARY_900, SECONDARY_500 } from "@common/UI/colors";

const Wrapper = styled(FlexBox)`
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;

  @media ${device.laptop} {
    margin: auto;
    max-width: 75rem;
    width: 86.67%;
  }
`;

const Title = styled(Display)`
  font-size: 1.75rem;
  color: ${PRIMARY_900};
  text-transform: uppercase;
  padding: 10px;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const Body = styled(Body1)`
  font-size: 1rem;
  color: ${SECONDARY_500};
  line-height: 1.85rem;
  padding: 10px;
  margin-bottom: 1rem;
`;

const Heading = styled(H3)`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 10px;
  color: ${SECONDARY_500};
`;

const Unordered = styled.ul`
  list-style-type: disc;

  li {
    font-size: 1rem;
    font-weight: normal;
    text-transform: none;
    color: ${SECONDARY_500};
  }
`;

const Content = ({ children }) => <Body>{children}</Body>;

const UnorderedList = ({ children }) => <Unordered>{children}</Unordered>;

const ListData = ({ heading, children }) => (
  <FlexBox column>
    <Heading>{heading}</Heading>
    <Content>{children}</Content>
  </FlexBox>
);

const PrivacyPolicy = () => {

  return (
    <Wrapper>
    </Wrapper>
  );
};

export default PrivacyPolicy;
