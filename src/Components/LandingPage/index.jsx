import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import FlexBox from "@common/UI/FlexBox";
import Footer from "@common/Footer";
import { PRIMARY_900 } from "@common/UI/colors";
import { Navbar } from "./Navbar";
import { PamprazziPerksGrid } from "./PamprazziPerksGrid";
import { HangingWrapperSection } from "./HangingWrapperSection";
import Body from "./Body";
import Faqs from "./Faqs";
import WhyChoose from "./WhyChoose";
import GetIn from "./GetIn";
import GridContainerCard from "./GridContainerCard";
import Card from "./Card";

const data = [
  {
    stepCount: 1,
    heading: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Nunc mauris in rhoncus odio fermentum",
    imgUrl: "/assets/Step1Image.svg",
  },
  {
    stepCount: 2,
    heading: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Nunc mauris in rhoncus odio fermentum",
    imgUrl: "/assets/Step2Image.svg",
  },
  {
    stepCount: 3,
    heading: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur. Nunc mauris in rhoncus odio fermentum",
    imgUrl: "/assets/Step3Image.svg",
  },
];

const PurpleBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY_900};
  padding: 3.5rem 0;
  gap: 3.5rem;
`;

const MerchantPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <Navbar onLoginClick={handleLoginClick} />
      <FlexBox column margin="0 70px" rowGap="3rem">
        <Body />
        <WhyChoose />
        <GridContainerCard />
        <Card />
        <Faqs />
      </FlexBox>
      <GetIn />
      <img width="100%" src="/assets/Footer.svg"></img>
    </>
  );
};

export default MerchantPage;
