import React from "react";
import styled from "styled-components";
import FlexBox from "@common/UI/FlexBox";
import { PRIMARY_900, ACCENT_0 } from "@common/UI/colors";
import { Display } from "@common/UI/Headings";
import Slider from "./Slider";
import { device } from "@common/UI/Responsive";

const Data = [
  {
    backgroundColor: "#FFFEFB",
    iconBackgroundColor: "#FFF2CA",
    icon: "assets/images/merchant/Icon/Blocked.svg",
    title: "Slot blockers",
    subtitle:
      " Ensure smooth appointments and no overlap in your salon's schedule.",
  },
  {
    backgroundColor: "#D3F2FF",
    iconBackgroundColor: "#B6E3F6",
    icon: "assets/images/merchant/Icon/Appointment.svg",
    title: "Online Booking",
    subtitle: "Attract clients 24/7 with easy online booking for your salon.",
  },
  {
    backgroundColor: "#FFF4FC",
    iconBackgroundColor: "#FFE8F9",
    icon: "assets/images/merchant/Icon/Boots.svg",
    title: "Boost Visibility",
    subtitle:
      "Grow profits by adding new services and attracting more customers.",
  },
  {
    backgroundColor: "#EBFFF2",
    iconBackgroundColor: "#B8F8CE",
    icon: "assets/images/merchant/Icon/Time-left.svg",
    title: "Off hours booking",
    subtitle:
      " Stand out by offering unique experiences and cutting-edge services.",
  },
  {
    backgroundColor: "#FFF4FC",
    iconBackgroundColor: "#FFE8F9",
    icon: "assets/images/merchant/Icon/Analysis.svg",
    title: "Store Analytics",
    subtitle:
      "Make smarter decisions with data-driven insights for your salon.",
  },
  {
    backgroundColor: "#EBFFF2",
    iconBackgroundColor: "#B8F8CE",
    icon: "assets/images/merchant/Icon/Feedback.svg",
    title: "Instant FeedBack",
    subtitle: "Improve services instantly with customer feedback tools.",
  },
  {
    backgroundColor: "#FFFEFB",
    iconBackgroundColor: "#FFF2CA",
    icon: "assets/images/merchant/Icon/Staff.svg",
    title: "Staff Management",
    subtitle:
      "Streamline operations and boost morale with effective staff management.",
  },
  {
    backgroundColor: "#D3F2FF",
    iconBackgroundColor: "#B6E3F6",
    icon: "assets/images/merchant/Icon/Time.svg",
    title: "Time Optimization",
    subtitle: "Save time and serve more clients efficiently in your salon.",
  },
  {
    backgroundColor: "#D3F2FF",
    iconBackgroundColor: "#B6E3F6",
    icon: "assets/images/merchant/Icon/Time.svg",
    title: "Time Optimization",
    subtitle: "Save time and serve more clients efficiently in your salon.",
  },
];

const Card = styled(FlexBox)`
  background-color: ${PRIMARY_900};
  flex-direction: column;
  row-gap: 2rem;
  @media ${device.laptop} {
    column-gap: 2rem;
  }
`;

export const PamprazziPerksGrid = () => (
  <Card>
    <Display bold color={ACCENT_0} textAlign="center">
      Pamprazzi Perks
    </Display>
    <Slider data={Data} />
  </Card>
);

export default PamprazziPerksGrid;
