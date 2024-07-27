import React from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { Body1 } from "@common/UI/Headings";

const Data = [
  {
    title:
      "Provide investors with powerful tools that have, until now only been available to Wall Street professionals",
  },
  {
    title:
      "Provide investors with powerful tools that have, until now only been available to Wall Street professionals",
  },
  {
    title:
      "Provide investors with powerful tools that have, until now only been available to Wall Street professionals",
  },
  {
    title:
      "Provide investors with powerful tools that have, until now only been available to Wall Street professionals",
  },
  {
    title:
      "Provide investors with powerful tools that have, until now only been available to Wall Street professionals",
  },
];

const GridBox = styled(FlexBox)`
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
  background: #e0f4ff;
  padding: 1rem;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GridContainerCard = ({ item }) => (
  <GridBox>
    <Body1 style={{ textAlign: "center" }}>{item.title}</Body1>
  </GridBox>
);

const GridContainer = () => (
  <FlexBox flexWrap="wrap" gap="1rem" justify="space-between">
    {Data.map((item, index) => (
      <GridContainerCard key={index} item={item} />
    ))}
  </FlexBox>
);

export default GridContainer;
