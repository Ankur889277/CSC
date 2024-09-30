import React from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { device } from "@common/UI/Responsive";
import { LINE_GREY } from "@common/UI/colors";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0 0.25rem;
  background-color: #ffffff;
  color: #7991a4;

  @media ${device.laptop} {
    padding: 1rem;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 0.25rem;
  border-bottom: 1px solid ${LINE_GREY};
  background-color: #ffffff;

  @media ${device.laptop} {
    padding: 1rem;
  }
`;

const TableRow = styled.tr`
  th:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  th:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const TableBodyRow = styled.tr`
  td:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  td:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const SpacerRow = styled.tr`
  height: 10px;
`;

const Button = styled.button`
  width: 68%;
  padding: 0.5rem;
  background-color: #fafafa;
  border: 1px solid #066ea1;
  border-radius: 2rem;
  cursor: pointer;
  color: #066ea1;
`;

const IconWrapper = styled(FlexBox)`
  width: 60px;
  top: 15px;
  left: 16px;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
`;

const InnerIcon = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${({ bgColor }) => bgColor};
  border-radius: 1rem;
`;

const data = [
  {
    description: "Lorem ipsum",
    transactionId: "TX123456",
    type: "Service",
    date: "2024-07-15",
    amount: "₹700.00",
    receipt: "Receipt123",
    iconType: "up", // Up icon indicator in metadata
  },
  {
    description: "Facial",
    transactionId: "TX123457",
    type: "Service",
    date: "2024-07-16",
    amount: "₹900.00",
    receipt: "Receipt124",
    iconType: "down",
  },
  {
    description: "Haircut",
    transactionId: "TX123458",
    type: "Service",
    date: "2024-07-17",
    amount: "₹300.00",
    receipt: "Receipt125",
    iconType: "up",
  },
];

const renderIcon = iconType => {
  if (iconType === "up") {
    return (
      <IconWrapper bgColor="#FEF1F3">
        <InnerIcon bgColor="#f72237">
          <FaArrowUp color="white" />
        </InnerIcon>
      </IconWrapper>
    );
  } else if (iconType === "down") {
    return (
      <IconWrapper bgColor="#E1FFE0">
        <InnerIcon bgColor="#53EA4F">
          <FaArrowDown color="white" />
        </InnerIcon>
      </IconWrapper>
    );
  }
  return null;
};

const ServiceTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <Th>Description</Th>
          <Th>Transaction ID</Th>
          <Th>Type</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Receipt</Th>
        </TableRow>
        <SpacerRow />
      </thead>
      <tbody>
        {data.map(item => (
          <React.Fragment key={item.transactionId}>
            <TableBodyRow>
              <Td>
                <FlexBox align="center" columnGap="0.5rem">
                  {renderIcon(item.iconType)}
                  {item.description}
                </FlexBox>
              </Td>
              <Td>{item.transactionId}</Td>
              <Td>{item.type}</Td>
              <Td>{item.date}</Td>
              <Td>{item.amount}</Td>
              <Td>
                <Button
                  onClick={() =>
                    console.log(`Download receipt for ${item.transactionId}`)
                  }
                >
                  Download
                </Button>
              </Td>
            </TableBodyRow>
            <SpacerRow />
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default ServiceTable;
