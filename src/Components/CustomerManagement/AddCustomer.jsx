import React, { useState } from "react";
import styled from "styled-components";
import FlexBox from "../common/UI/Flexbox";
import { Body1, H1, Support } from "../common/UI/Headings";
import Input from "../common/UI/InputBox";
import TextArea from "../common/UI/TextArea";
import { Button } from "../common/UI/Buttons";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
`;

const Container = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid red;
  position: relative;
  background-color: #ffffff;
  gap: 1.5rem;
`;

const GradientBar = styled(FlexBox)`
  position: absolute;
  width: 100%;
  background: linear-gradient(90deg, #066ea1 0%, #077ab3 50%, #3b1b64 75%);
  height: 12px;
  border-radius: 10rem 9rem 1rem 1rem;
  top: 0;
  right: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const InputSection = ({ label, name, value, onChange }) => (
  <FlexBox column>
    <Support>{label}</Support>
    <Input value={value} onChange={e => onChange(name, e.target.value)} />
  </FlexBox>
);

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    industryType: "",
    gstin: "",
    contactNo: "",
    emailID: "",
    address: "",
    state: "",
    district: "",
    plantgeocoordinate: "",
    poCname: "",
    poCcontactno: "",
    openingbalance: "",
    isGatepassneeded: "",
    gatepassvalidtill: "",
  });

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreate = () => {};
  return (
    <Wrapper>
      <H1 bold>Add Customer</H1>
      <Container>
        <Body1 bold>Fill in the details to create customer</Body1>
        <GridContainer>
          <InputSection
            label="Customer Name"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
          <InputSection
            label="Industry Type"
            name="industryType"
            value={formData.industryType}
            onChange={handleInputChange}
          />
          <InputSection
            label="GSTIN"
            name="gstin"
            value={formData.gstin}
            onChange={handleInputChange}
          />
          <InputSection
            label="Contact No"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
          <InputSection
            label="Email ID"
            name="emailID"
            value={formData.emailID}
            onChange={handleInputChange}
          />
          <InputSection
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <InputSection
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          <InputSection
            label="District"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
          />
          <InputSection
            label="Plant Geo Coordinate"
            name="plantgeocoordinate"
            value={formData.plantgeocoordinate}
            onChange={handleInputChange}
          />
          <InputSection
            label="POC Name"
            name="poCname"
            value={formData.poCname}
            onChange={handleInputChange}
          />
          <InputSection
            label="POC Contact No"
            name="poCcontactno"
            value={formData.poCcontactno}
            onChange={handleInputChange}
          />
          <InputSection
            label="Opening Balance"
            name="openingbalance"
            value={formData.openingbalance}
            onChange={handleInputChange}
          />
          <InputSection
            label="Is Gate Pass Needed"
            name="isGatepassneeded"
            value={formData.isGatepassneeded}
            onChange={handleInputChange}
          />
          <InputSection
            label="Gate Pass Valid Till"
            name="gatepassvalidtill"
            value={formData.gatepassvalidtill}
            onChange={handleInputChange}
          />
        </GridContainer>
        <FlexBox column width="100%">
          <Support>Remarks</Support>
          <TextArea width="100%" />
        </FlexBox>
        <Button width="100%" onClick={handleCreate}>
          Create
        </Button>
        <GradientBar />
      </Container>
    </Wrapper>
  );
};

export default AddCustomer;
