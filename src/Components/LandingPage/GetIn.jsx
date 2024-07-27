import FlexBox from "@Components/common/UI/FlexBox";
import { Display, H6 } from "@Components/common/UI/Headings";
import React from "react";
import styled from "styled-components";
import InputBox from "../common/UI/InputBox";
import TextArea from "@common/UI/TextArea";

const Wrapper = styled(FlexBox)`
  width: 100%;
  position: relative;
  justify-content: center;
`;
const InputBoxContainer = styled(FlexBox)`
  width: 50%;
  position: absolute;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(FlexBox)`
  width: 417px;
  height: 60px;
  padding: 1rem;
  gap: 0px;
  border-radius: 1rem;
  opacity: 0px;
  background: linear-gradient(90deg, #c2cdd6 0%, #3dbaf8 82.55%);
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fafafa;
`;
const GetIn = () => {
  return (
    <Wrapper>
      <img width="100%" src="/assets/GetInTouch.svg" />
      <InputBoxContainer>
        <Display bold color="#FFFFFF">
          Get In Touch
        </Display>
        <H6 color="#FFFFFF">Or Send a mail to Support@techIndia.com</H6>
        <FlexBox width="100%" columnGap="1rem" align="center" justify="center">
          <InputBox placeholder="Lab Name">Hello</InputBox>
          <InputBox placeholder="Owner Name">Hello</InputBox>
        </FlexBox>
        <FlexBox width="100%" columnGap="1rem" align="center" justify="center">
          <InputBox placeholder="(+91)  Enter Phone ">Hello</InputBox>
          <InputBox placeholder="Email ID">Hello</InputBox>
        </FlexBox>
        <TextArea placeholder="Your Message" />
        <Button>Get In Touch</Button>
      </InputBoxContainer>
    </Wrapper>
  );
};

export default GetIn;
