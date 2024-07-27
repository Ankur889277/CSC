import React from "react";
import styled from "styled-components";

import FlexBox from "@common/UI/FlexBox";
import { device } from "@common/UI/Responsive";
import { LIGHT_BLUE_GREY, LINE_GREY } from "@common/UI/colors";

const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0 0.25rem;
  background-color: #ffffff;

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
  height: 10px; /* Adjust the value as needed */
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

const ServiceTable = ({ data }) => {
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
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <TableBodyRow>
              <Td>
                <FlexBox align="center" columnGap="0.5rem">
                  {item.icon}
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
            {index < data.length - 1 && <SpacerRow />}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default ServiceTable;
