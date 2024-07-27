import React, { useState } from "react";
import styled from "styled-components";
import { Body1, Body2 } from "@common/UI/Headings";
import { PRIMARY_900 } from "@common/UI/colors";
import FlexBox from "@common/UI/FlexBox";
import { H4 } from "@common/UI/Headings";

const Wrapper = styled(FlexBox)`
  width: 100%;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1rem;
`;

const AppointmentItem = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AppointmentDetails = styled(FlexBox)`
  flex-direction: column;
`;

const ProgressWrapper = styled(FlexBox)`
  flex: 1;
  margin-left: 1rem;
  flex-direction: column;
  text-align: center;
`;

const ProgressBar = styled(FlexBox)`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${PRIMARY_900};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px 0 0 4px;
`;

const ProgressText = styled(H4)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  margin: 0;
  font-size: 0.75rem; // Adjust font size as needed
`;

const ViewAllWrapper = styled(FlexBox)`
  justify-content: center;
  margin-top: 1rem;
`;

const appointments = [
  {
    name: "Jasmine Alice",
    gender: "F",
    time: "10 AM",
    date: "29th March 2024",
    progress: 50,
  },
  {
    name: "Ramesh Kumar",
    gender: "M",
    time: "10 AM",
    date: "29th March 2024",
    progress: 20,
  },
  {
    name: "Maya Sharma",
    gender: "F",
    time: "10 AM",
    date: "29th March 2024",
    progress: 50,
  },
];

const AppointmentProgress = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <Wrapper>
      {appointments.map((appointment, index) => (
        <AppointmentItem key={index}>
          <AppointmentDetails>
            <Body2 bold>
              {appointment.name} ({appointment.gender})
            </Body2>
            <H4>
              {appointment.time} • {appointment.date}
            </H4>
          </AppointmentDetails>
          <ProgressWrapper>
            <ProgressBar>
              <Progress progress={appointment.progress}></Progress>
            </ProgressBar>
            <H4 textAlign={"center"}>{appointment.progress}% Completed</H4>
          </ProgressWrapper>
        </AppointmentItem>
      ))}
      <ViewAllWrapper>
        <Body1 color={PRIMARY_900} onClick={toggleModal} bold cursor="pointer">
          View all
        </Body1>
      </ViewAllWrapper>
    </Wrapper>
  );
};

export default AppointmentProgress;
