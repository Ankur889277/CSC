import React from 'react';
import styled from 'styled-components';
import FlexBox from '../common/UI/Flexbox';
import { GrGroup } from "react-icons/gr";
import { Body1 } from '../common/UI/Headings';
import CheckBox from "../common/UI/CheckBox";
import { boxShadowDs1 } from "@common/UI/styles";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;
  ${boxShadowDs1}
`;

const fields = [
  "Technical Manager",
  "Project Manager",
  "Product Designer",
  "Software Engineer",
  "Quality Assurance",
  "Human Resources"
];

const Filter = () => {
  return (
    <Wrapper>
      <FlexBox align="center">
        <GrGroup />
        <Body1 color="#1BAEF7">Department</Body1>
      </FlexBox>
      {fields.map(field => (
        <FlexBox align="center" key={field}>
          <CheckBox size={13} />
          <Body1>{field}</Body1>
        </FlexBox>
      ))}
    </Wrapper>
  );
};

export default Filter;
