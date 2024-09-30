import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

import FlexBox from "@Components/common/UI/Flexbox";
import {
  H1,
  Body1,
  Body2,
  Support,
  Display,
} from "@Components/common/UI/Headings";
import { Button } from "@Components/common/UI/Buttons";
import TextArea from "../common/UI/TextArea";
import ServiceTable from "./ServiceTable";

const Wrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border: 1px solid #c2cdd6;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 300px;
`;

const CustomerDetails = ({ label, value }) => (
  <FlexBox column>
    <Body2 bold>{label}</Body2>
    <Body2>{value}</Body2>
  </FlexBox>
);

const CustomerDetail = () => {
  const customerDetails = [
    { label: "Customer Name", value: "ABCD Steel Plant" },
    { label: "GSTIN", value: "29CGCGG1314R9Z6" },
    {
      label: "Address",
      value:
        "42, Town Baug, Parantap, 65, Relling, Mamit, Mizoram, Pincode-745799",
    },
    { label: "Contact No.", value: "6288509934" },
    { label: "PoC", value: "Biswarup Dutta" },
    { label: "Email ID", value: "abcdsteel@gmail.com" },
    { label: "Opening Balance", value: "50,000. dr" },
    { label: "Current Balance", value: "40,000. dr" },
    { label: "Total Business", value: "40,000. dr" },
    { label: "Industry Type", value: "Technology" },
    { label: "Plant Geo Coordinate", value: "-" },
    { label: "Active AMC", value: "No" },
    { label: "Is Gatepass Needed", value: "Yes" },
    { label: "Gatepass Valid Till", value: "26.01.2025" },
    { label: "Status", value: "Active" },
    { label: "Created On", value: "15.07.2019" },
    { label: "Updated On", value: "26.01.2024" },
    { label: "Deleted On", value: "-" },
  ];

  return (
    <Wrapper>
      <H1 bold>Customer Details</H1>
      <FlexBox column>
        <DetailsGrid>
          {customerDetails.map((detail, index) => (
            <CustomerDetails
              key={index}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </DetailsGrid>
      </FlexBox>
      <FlexBox column rowGap="1.5rem">
        <Display bold color="#726C6C">
          Transaction History
        </Display>
        <ServiceTable />
      </FlexBox>
    </Wrapper>
  );
};

export default CustomerDetail;
