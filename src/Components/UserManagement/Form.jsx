import React from "react";
import FlexBox from "../common/UI/Flexbox";
import styled from "styled-components";
import { Body2, H1, Body1 } from "@common/UI/Headings";
import InputBox from "../common/UI/InputBox";
import { BsUpload } from "react-icons/bs";
import TextArea from "@common/UI/TextArea";
import CustomToggle from "@common/UI/Toggle";
import Modal from "@common/UI/Modal";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UploadButton = styled.label`
  display: flex;
  padding: 1.5rem;
  align-items: center;
  width: 300px;
  height: 58px;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  position: relative;
  &:hover {
    border-color: #888;
    color: #444;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: red;
  font-size: 24px;
`;

const ButtonContainer = styled.button`


`
const Form = () => {
  return (
    <Wrapper>
      <FlexBox column rowGap="1.5rem">
        <img
          width="153px"
          height="153px"
          src="/assets/Profilepicform.svg"
          alt="Profile"
        />
        <H1 bold>Personal Information</H1>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem" >
          <FlexBox column width="100%">
            <Body1 color="#000000">First Name*</Body1>
            <InputBox placeholder="First Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Middle Name</Body1>
            <InputBox placeholder="Middle Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Last Name*</Body1>
            <InputBox placeholder="Last Name">Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Date Of Birth*</Body1>
            <InputBox placeholder="dd/mm/yyy">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Phone No*</Body1>
            <InputBox required placeholder="Phone No">
              Hello
            </InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Email ID*</Body1>
            <InputBox placeholder="Email ID">Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Current Address*</Body1>
            <InputBox placeholder="Enter Address">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">City*</Body1>
            <InputBox></InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">State*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Postal Code*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">PAN*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">UAN*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Blood Group*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Emergency Contact*</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox column rowGap="1.5rem">
        <H1 bold>Job Details</H1>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">First Name</Body1>
            <InputBox placeholder="First Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Middle Name</Body1>
            <InputBox placeholder="Middle Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Last Name</Body1>
            <InputBox placeholder="Last Name">Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Date Of Birth</Body1>
            <InputBox placeholder="dd/mm/yyy">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Phone No*</Body1>
            <InputBox required placeholder="Phone No">
              Hello
            </InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Email ID</Body1>
            <InputBox placeholder="Email ID">Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Current Address</Body1>
            <InputBox placeholder="Enter Address">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">City</Body1>
            <InputBox></InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">State</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Postal Code</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">PAN</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">UAN</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Blood Group</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Emergency Contact</Body1>
            <InputBox>Hello</InputBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox column rowGap="1.5rem">
        <H1 bold>Bank Details</H1>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Bank Name</Body1>
            <InputBox placeholder="First Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Account Number</Body1>
            <InputBox placeholder="Middle Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">IFSC Code</Body1>
            <InputBox placeholder="Last Name">Hello</InputBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox column rowGap="1.5rem">
        <H1 bold>Bank Details</H1>
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem">
          <FlexBox column width="100%">
            <Body1 color="#000000">Bank Name</Body1>
            <InputBox placeholder="First Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Account Number</Body1>
            <InputBox placeholder="Middle Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">IFSC Code</Body1>
            <InputBox placeholder="Last Name">Hello</InputBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <UploadContainer>
        <h3>Upload Documents</h3>
        <UploadButton>
          Select Documents
          <UploadInput type="file" />
          <UploadIcon>
            <BsUpload />
          </UploadIcon>
        </UploadButton>
      </UploadContainer>
      <FlexBox column rowGap="1.5rem" padding="2.5rem 0">
        <H1 bold>Remarks</H1>
        <TextArea placeholder="Your Message" />
      </FlexBox>
      <FlexBox column padding="2.5rem 0" rowGap="2rem"    border="2px dashed #9f9c9c"
      >
        <CustomToggle />
        <FlexBox width="100%" justify="space-between" columnGap="2.5rem" >
          <FlexBox column width="100%">
            <Body1 color="#000000">User Name</Body1>
            <InputBox placeholder="First Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Password</Body1>
            <InputBox placeholder="Middle Name">Hello</InputBox>
          </FlexBox>
          <FlexBox column width="100%">
            <Body1 color="#000000">Password</Body1>
            <InputBox placeholder="User Role">Hello</InputBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <ButtonContainer>
        <button>Discard</button>
        <button>save</button>

      </ButtonContainer>
    </Wrapper>
  );
};

export default Form;
