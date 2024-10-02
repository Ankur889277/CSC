import React from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/Flexbox";
import { Body1, Support } from "@common/UI/Headings";
import { TfiClose } from "react-icons/tfi";

const TaskIDWrapper = styled(FlexBox)`
  padding: 7px 22px;
  border-radius: 0.5rem;
  border: 1px solid var(--Warning-Warning200, #ffb27e);
  background-color: #fff1cf;
  width: fit-content;
`;

const TaskCard = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid var(--Secondary-Secondary200, #dae1e7);
  border-radius: 20px;
  width: 173px;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const CloseButton = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

const Header = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Container = styled(FlexBox)`
  border-top: 1px dotted;
  padding: 1.5rem;
  flex-direction: column;
`;

const ViewAllTasks = ({ closeModal }) => {
  return (
    <>
      <FlexBox position="relative" padding="1.5rem" column rowGap="1rem">
        <Header>
          <TaskIDWrapper>
            <Body1>TRF:2431D68F</Body1>
          </TaskIDWrapper>
          <CloseButton onClick={closeModal}>
            <TfiClose />
          </CloseButton>
        </Header>
        <FlexBox column>
          <FlexBox>
            <Body1 bold>Waste Water -</Body1>
            <Body1>49XY230</Body1>
          </FlexBox>
          <TaskGrid>
            {[...Array(16)].map((_, index) => (
              <TaskCard key={index}>
                <Support>Lorem Ipsum</Support>
              </TaskCard>
            ))}
          </TaskGrid>
        </FlexBox>
      </FlexBox>
      <Container>
        <FlexBox>
          <Body1 bold>Waste Water -</Body1>
          <Body1>49XY230</Body1>
        </FlexBox>
        <TaskGrid>
          {[...Array(3)].map((_, index) => (
            <TaskCard key={index}>
              <Support>Lorem Ipsum</Support>
            </TaskCard>
          ))}
        </TaskGrid>
      </Container>
      <Container>
        <FlexBox>
          <Body1 bold>Waste Water -</Body1>
          <Body1>49XY230</Body1>
        </FlexBox>
        <TaskGrid>
          {[...Array(1)].map((_, index) => (
            <TaskCard key={index}>
              <Support>Lorem Ipsum</Support>
            </TaskCard>
          ))}
        </TaskGrid>
      </Container>
    </>
  );
};

export default ViewAllTasks;
