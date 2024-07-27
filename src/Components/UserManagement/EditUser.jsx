import React from "react";
import styled from "styled-components";
import { boxShadowDs1 } from "@common/UI/styles";
import FlexBox from "@common/UI/FlexBox";
import { Body1, Body2 } from "@common/UI/Headings";
import SectionContainer from "@common/SectionContainer";
import { device } from "@common/UI/Responsive";
import Modal from "@common/UI/Modal";
import { TfiClose } from "react-icons/tfi";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  gap: 1rem;
`;
const Cross = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
const BottomCard = styled(FlexBox)`
  flex-direction: column;
  row-gap: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const UserDetails = ({ firstName, middleName, lastName, gender }) => (
  <FlexBox width="100%" column rowGap="1rem">
    <Body1>First Name - {firstName}</Body1>
    <Body1>Middle Name - {middleName}</Body1>
    <Body1>Last Name - {lastName}</Body1>
    <Body1>Gender - {gender}</Body1>
  </FlexBox>
);

const EditUser = ({ closeModal }) => {
  return (
    <Modal
      M3
      onClose={closeModal}
      height="fit-content"
      width="50vw"
      borderRadius="1rem"
    >
      <Cross onClick={closeModal}>
        <TfiClose />
      </Cross>
      <SectionContainer padding="1.5rem" title="Personal Information">
        <FlexBox width="100%" align="center">
          <FlexBox width="100%" column align="start" rowGap="0.5rem">
            <img src="/assets/ProfilePhoto.svg" alt="Profile" />
            <Body1 bold>Rohit Singh</Body1>
            <Body2>Senior Analyst</Body2>
          </FlexBox>
          <UserDetails
            firstName="Diksha"
            middleName="Singh"
            lastName="Singh"
            gender="Female"
          />
        </FlexBox>
      </SectionContainer>
      <SectionContainer padding="1.5rem" title="Job Details">
        <FlexBox width="100%" align="center">
          <FlexBox width="100%" column align="start" rowGap="0.5rem">
            <img src="/assets/ProfilePhoto.svg" alt="Profile" />
            <Body1 bold>Rohit Singh</Body1>
            <Body2>Senior Analyst</Body2>
          </FlexBox>
          <UserDetails
            firstName="Diksha"
            middleName="Singh"
            lastName="Singh"
            gender="Female"
          />
        </FlexBox>
      </SectionContainer>
      <BottomCard columnGap="1.5rem">
        <FlexBox width="50%">
          <SectionContainer padding="1.5rem" title="Payment Details">
            <FlexBox column>
              <Body1>Bank Name - HDFC</Body1>
              <Body1>Account Name - Jai Ho</Body1>
              <Body1>Account Number - 500100****</Body1>
            </FlexBox>
          </SectionContainer>
        </FlexBox>
        <FlexBox width="50%">
          <SectionContainer padding="1.5rem" title="Address">
            <FlexBox column>
              <Body1>
                Address - 23, Samarpan Sabhagruh, Jayaraman Park, Part No. 83,
                Kuwari, Papum Pare, Pincode - 757606
              </Body1>
              <Body1>State - Andhra Pradesh</Body1>
            </FlexBox>
          </SectionContainer>
        </FlexBox>
      </BottomCard>
    </Modal>
  );
};

export default EditUser;
