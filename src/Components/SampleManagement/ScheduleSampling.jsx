import React, { useState } from "react";
import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

import FlexBox from "../common/UI/Flexbox";
import { H1, Body1, Body2 } from "../common/UI/Headings";
import CalendarModal from "../common/CalenderModal";
import CustomCalendar from "../common/CustomCalendar";

const Wrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
`;
const ScheduleSampling = () => {
  return (
    <wrapper>
      <H1 bold>Schedule Sample</H1>
      <CustomCalendar />
    </wrapper>
  );
};

export default ScheduleSampling;
