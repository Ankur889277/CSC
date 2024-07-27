import React from "react"; // Import useState
import styled from "styled-components";

import Modal from "@common/UI/Modal";
import FlexBox from "@common/UI/FlexBox";
import { Button } from "@common/UI/Buttons";
import { H3 } from "@common/UI/Headings";
import { SECONDARY_901 } from "@common/UI/colors";
import CrossIcon from "@common/UI/CrossIcon";
import CustomCalendar from "../CustomCalendar";
import { boxShadowDs1 } from "@common/UI/styles";
import { ACCENT_0 } from "../UI/colors";

const Wrapper = styled(FlexBox)`
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${ACCENT_0};

  border-radius: 1.5rem;

  ${boxShadowDs1}
`;

const Header = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${SECONDARY_901};
  padding: 1rem;
`;

const Footer = styled(FlexBox)`
  width: 100%;
  border-top: 1px solid ${SECONDARY_901};
  padding: 1rem;
`;

const CalendarModal = () => {
  return (
    <>
      <Wrapper>
        <CustomCalendar />
      </Wrapper>
    </>
  );
};

export default CalendarModal;
