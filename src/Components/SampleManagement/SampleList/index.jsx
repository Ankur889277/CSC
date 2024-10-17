import React, { useState } from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { Case, Default, Switch } from "@common/ConditionalRendering";
import Tabs from "../../common/UI/Tabs";
import ViewSampleList from "./ViewSampleList";
import AllSampleList from "./AllSampleList";

const Wrapper = styled(FlexBox)`
  width: 100%;

  flex-direction: column;
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
    background-color: #ffffff;
    transform: translateZ(-5px);
    /* box-shadow: 0 20px 20px rgba(244, 227, 227, 0.3); */
    box-shadow: 0px 3px 7px rgba(171, 171, 171, 0.1),
      0px 13px 13px rgba(171, 171, 171, 0.09),
      0px 30px 18px rgba(171, 171, 171, 0.05),
      0px 53px 21px rgba(171, 171, 171, 0.01),
      0px 83px 23px rgba(171, 171, 171, 0);
  }

  &:active {
    background-color: #ffffff;
    transform: translateY(-2px);
  }
`;

const Tab = styled(FlexBox)`
  width: 100%;
`;

const Index = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Wrapper>
      <Tabs selectedTab={selectedTab}>
        <Tab title="Ongoing">
          <ViewSampleList />
        </Tab>
        <Tab title="Completed">
          <AllSampleList />
        </Tab>
      </Tabs>
    </Wrapper>
  );
};

export default Index;
