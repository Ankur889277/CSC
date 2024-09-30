import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

import FlexBox from "../Components/common/UI/Flexbox";
import { H1, Body1, Body2, Support } from "../Components/common/UI/Headings";
import { Button } from "../Components/common/UI/Buttons";
import Input from "../Components/common/UI/InputBox";

const Wrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const TaskIDContainer = styled(FlexBox)`
  padding: 7px 22px;
  border-radius: 0.5rem;
  border: 1px solid var(--Warning-Warning200, #ffb27e);
  background-color: #fff1cf;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border: 1px solid #c2cdd6;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const SampleSection = styled(FlexBox)`
  flex-direction: column;
  border: 1px solid #c2cdd6;
  border-radius: 1rem;
  width: 100%;
  position: relative;
  height: fit-content;
`;
const TaskCard = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  padding: 0.5rem 4rem;
  border: 1px solid var(--Secondary-Secondary200, #dae1e7);
  border-radius: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  max-width: 300px;
`;

const Header = styled(FlexBox)`
  border-radius: 1rem 1rem 0rem 0rem;
  position: absolute;
  background-color: #e7ebef;
  width: 100%;
  border: 1px solid #ced7de;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #ced7de;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 1rem;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  background-color: #e7ebef;
  padding: 1rem;
  border: 1px solid #ced7de;
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ced7de;
  text-align: center;
`;

const Section = styled(FlexBox)`
  border: 1px solid #cceeff;
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  grid-gap: 10px;
`;

const Hr = styled.hr`
  border: 3px solid black;
  height: 50px;
`;
const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--Brand-Brand500, #1baef7);
  background: #ffffff;
`;
const TimelineWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const EventWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;

const EventMarker = styled.div`
  position: absolute;
  left: -20px;
  top: 53px;
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid var(--Brand-Brand500, #1baef7);
  z-index: 5;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: -16px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #2196f3;
  height: 10px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const EventDate = styled.div`
  font-size: 14px;
  color: #888;
`;

const EventTime = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const EventDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const events = [
  {
    date: "Aug 27, 2026",
    time: "12:26 pm",
    title: "Email",
    description: "Sent to abcdsteelplant01@gmail.com",
  },
  {
    date: "Aug 27, 2026",
    time: "12:26 pm",
    title: "Hardcopy",
    description: "",
  },
];
const parameters = [
  "Ammonia as NH3",
  "Ammonia as NH3",
  "Ammonia as NH3",
  "Ammonia as NH3",
  "Ammonia as NH3",
];

const CustomerDetail = ({ label, value }) => (
  <FlexBox column>
    <Body2 bold>{label}</Body2>
    <Body2>{value}</Body2>
  </FlexBox>
);

const MaterialDetails = ({ material, code, totalParameter }) => (
  <Container>
    <Body1 bold>Material</Body1>
    <FlexBox columnGap="1rem">
      <Body1>:</Body1>
      <Body1 color="#5A5555">{material}</Body1>
    </FlexBox>

    <Body1 bold>Code</Body1>
    <FlexBox columnGap="1rem">
      <Body1>:</Body1>
      <Body1 color="#5A5555">{code}</Body1>
    </FlexBox>

    <Body1 bold>Total Parameter</Body1>
    <FlexBox columnGap="1rem">
      <Body1>:</Body1>
      <Body1 color="#5A5555">{totalParameter}</Body1>
    </FlexBox>
  </Container>
);
const TRFDetails = () => {
  const customerDetails = [
    { label: "Customer Name", value: "ABCD Steel Plant" },
    { label: "Customer Name", value: "ABCD Steel Plant" },
    {
      label: "Address",
      value:
        "42, Town Baug, Parantap, 65, Relling, Mamit, Mizoram, Pincode-745799",
    },
    { label: "Customer Name", value: "ABCD Steel Plant" },
    { label: "Customer Name", value: "ABCD Steel Plant" },
    { label: "Customer Name", value: "ABCD Steel Plant" },
  ];

  return (
    <Wrapper>
      <FlexBox width="100%" justify="space-between">
        <FlexBox align="center" columnGap="1rem">
          <H1 bold>TRF Detail</H1>
          <TaskIDContainer>
            <Body1>TRF:2431D68F</Body1>
          </TaskIDContainer>
        </FlexBox>
        <Button>Generate Report</Button>
      </FlexBox>

      <FlexBox column>
        <Body1 bold>Customer Details</Body1>
        <DetailsGrid>
          {customerDetails.map((detail, index) => (
            <CustomerDetail
              key={index}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </DetailsGrid>
      </FlexBox>

      <FlexBox column>
        <H1 bold>Sample Details</H1>
        <SampleSection>
          <Header>
            <FlexBox
              padding="1rem"
              width="50%"
              justify="center"
              style={{ borderRight: "1px solid #ced7de" }}
              columnGap="0.5rem"
            >
              <Body1 color="#323F49">Date of Sample Reg :</Body1>
              <Body2 bold>28 Jun, 2024</Body2>
            </FlexBox>
            <FlexBox
              padding="1rem"
              width="50%"
              justify="center"
              columnGap="0.5rem"
              style={{ borderLeft: "1px solid #ced7de" }}
            >
              <Body1 color="#323F49">Turn Around Time :</Body1>
              <Body2 bold>30 Jun, 2024</Body2>
            </FlexBox>
          </Header>
          <FlexBox
            columnGap="2rem"
            padding="1.25rem"
            margin="3rem 0 0 0"
            style={{ borderBottom: "1px solid #ced7de" }}
          >
            <MaterialDetails
              material="Waste Water"
              code="49XY230"
              totalParameter="16"
            />

            <FlexBox align="center" columnGap="1rem">
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
            </FlexBox>
            <FlexBox align="center" columnGap="0.5rem">
              <Body2 color="#726C6C">View All</Body2>
              <IoIosArrowForward />
            </FlexBox>
          </FlexBox>
          <FlexBox
            columnGap="2rem"
            padding="1.25rem"
            style={{ borderBottom: "1px solid #ced7de" }}
          >
            <MaterialDetails
              material="Waste Water"
              code="49XY230"
              totalParameter="16"
            />

            <FlexBox align="center" columnGap="1rem">
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
            </FlexBox>
            <FlexBox align="center" columnGap="0.5rem">
              <Body2 color="#726C6C">View All</Body2>
              <IoIosArrowForward />
            </FlexBox>
          </FlexBox>
          <FlexBox columnGap="2rem" padding="1.25rem">
            <MaterialDetails
              material="Waste Water"
              code="49XY230"
              totalParameter="16"
            />

            <FlexBox align="center" columnGap="1rem">
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
              <TaskCard>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
            </FlexBox>
            <FlexBox align="center" columnGap="0.5rem">
              <Body2 color="#726C6C">View All</Body2>
              <IoIosArrowForward />
            </FlexBox>
          </FlexBox>
        </SampleSection>
      </FlexBox>
      <FlexBox column>
        <H1 bold>Result</H1>
        <Input width="25%" placeholder="Choose Sample" />
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Parameter</TableHeader>
                <TableHeader>Output</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {parameters.map(param => (
                <TableRow key={param}>
                  <TableCell>{param}</TableCell>
                  <TableCell>{param}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </FlexBox>
      <FlexBox column>
        <H1 bold>Payment Details</H1>
        <Section>
          <Card>
            <Body1 bold>Sub Total</Body1>
            <FlexBox columnGap="1rem">
              <Body1>:</Body1>
              <Body1 color="#5A5555">4500.00</Body1>
            </FlexBox>
            <Body1 bold>Sub Total</Body1>
            <FlexBox columnGap="1rem">
              <Body1>:</Body1>
              <Body1 color="#5A5555">4500.00</Body1>
            </FlexBox>
            <Body1 bold>Sub Total</Body1>
            <FlexBox columnGap="1rem">
              <Body1>:</Body1>
              <Body1 color="#5A5555">4500.00</Body1>
            </FlexBox>
            <Body1 bold>Sub Total</Body1>
            <FlexBox columnGap="1rem">
              <Body1>:</Body1>
              <Body1 color="#5A5555">4500.00</Body1>
            </FlexBox>
            <Body1 bold>Sub Total</Body1>
            <FlexBox columnGap="1rem">
              <Body1>:</Body1>
              <Body1 color="#5A5555">4500.00</Body1>
            </FlexBox>
          </Card>
          <Card>
            <Body1>Payment Method</Body1>
          </Card>
        </Section>
      </FlexBox>
      <FlexBox column rowGap="0.5rem">
        <H1 bold>Mail Report</H1>
        <Body1>We will mail the report on your registered Email ID.</Body1>
        <FlexBox>
          <Input width="50%" placeholder="Abcdsteelplant@mail.com" />
          <Button primary>Send</Button>
        </FlexBox>
      </FlexBox>
      <FlexBox column rowGap="0.5rem">
        <H1 bold>Report Dispatch History</H1>
        <EventWrapper>
          <FlexBox column>
            <Body1>Aug 27, 2024</Body1>
            <Support>12:36 pm</Support>
          </FlexBox>
          <EventMarker />
          <VerticalLine />
          <FlexBox column>
            <Body1>Email</Body1>
            <Body2>Email Sent to abcdsteelplant01@mail.com</Body2>
          </FlexBox>
        </EventWrapper>
      </FlexBox>
    </Wrapper>
  );
};

export default TRFDetails;
