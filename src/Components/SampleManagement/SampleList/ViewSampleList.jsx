import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

import FlexBox from "@common/UI/Flexbox";
import { Body1, H1, ButtonText } from "@common/UI/Headings";
import ViewAllTask from "./ViewAllTask";
import Modal from "@common/UI/Modal";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
`;

const GridContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Card = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1.5rem;
  row-gap: 0.5rem;
  border-radius: 20px;
`;

const TaskIDContainer = styled(FlexBox)`
  padding: 7px 22px;
  border-radius: 0.5rem;
  border: 1px solid var(--Warning-Warning200, #ffb27e);
  background-color: #fff1cf;
`;

const ButtonContainer = styled(FlexBox)`
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Neutrals-Neutrals100, #e3e3e3);
`;

const ProgressBarContainer = styled.div`
  height: 6px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1rem;
`;

const ProgressBarFill = styled.div`
  height: 6px;
  width: ${({ progress }) => progress}%;
  background-color: ${({ color }) => color};
  transition: width 0.3s ease-in-out;
`;

const ContainerButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: red;
  padding: 1.25rem;
  border: none;
  border-radius: 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: translateZ(-5px);
    /* box-shadow: 0 20px 20px rgba(244, 227, 227, 0.3); */
    box-shadow: 0px 3px 7px rgba(171, 171, 171, 0.1),
      0px 13px 13px rgba(171, 171, 171, 0.09),
      0px 30px 18px rgba(171, 171, 171, 0.05),
      0px 53px 21px rgba(171, 171, 171, 0.01),
      0px 83px 23px rgba(171, 171, 171, 0);
  }

  &:active {
    background-color: #ffffff;
    transform: translateY(-2px);
  }
`;
const ViewSampleList = () => {
  const router = useRouter();

  const handleCompletedClick = () => {
    console.log("completed clicked");
  };
  const tasks = [
    {
      id: "TRF:2431D68F",
      materials: 10,
      samples: 105,
      dos: "20.01.2024",
      tat: "20.01.2024",
      progress: 50,
      color: "#066ea1",
    },
    {
      id: "TRF:ABCD1234",
      materials: 5,
      samples: 200,
      dos: "25.01.2024",
      tat: "25.01.2024",
      progress: 75,
      color: "#ff5733",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Wrapper>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            height="fit-content"
            width="50vw"
            borderRadius="1rem"
          >
            <ViewAllTask closeModal={closeModal} />
          </Modal>
        )}
        <H1 bold>Sample List</H1>
        <FlexBox width="100%" backgroundColor="#ffffff" borderRadius="1rem">
          <ContainerButton>Outgoing</ContainerButton>
          <ContainerButton onClick={handleCompletedClick}>
            Completed
          </ContainerButton>
        </FlexBox>
        <GridContainer>
          {tasks.map((task, index) => (
            <Card key={index}>
              <FlexBox justify="space-between">
                <TaskIDContainer>
                  <Body1>{task.id}</Body1>
                </TaskIDContainer>
                <FlexBox
                  align="center"
                  justify="center"
                  onClick={openModal}
                  cursor="pointer"
                >
                  <Body1 color="#726C6C">View More</Body1>
                  <IoIosArrowForward />
                </FlexBox>
              </FlexBox>
              <FlexBox justify="space-between" columnGap="1rem">
                <ButtonContainer>
                  <ButtonText color="#151314">
                    Materials - <strong>{task.materials}</strong>
                  </ButtonText>
                </ButtonContainer>
                <ButtonContainer>
                  <ButtonText color="#151314">
                    Samples - <strong>{task.samples}</strong>
                  </ButtonText>
                </ButtonContainer>
              </FlexBox>
              <ProgressBarContainer>
                <ProgressBarFill progress={task.progress} color={task.color} />
              </ProgressBarContainer>
              <FlexBox justify="space-between">
                <Body1>
                  <strong>DOS:</strong> {task.dos}
                </Body1>
                <Body1>
                  <strong>TAT:</strong> {task.tat}
                </Body1>
              </FlexBox>
            </Card>
          ))}
        </GridContainer>
      </Wrapper>
    </>
  );
};

export default ViewSampleList;
