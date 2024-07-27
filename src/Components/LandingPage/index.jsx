import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import FlexBox from "@common/UI/FlexBox";
import Footer from "@common/Footer";
import { PRIMARY_900 } from "@common/UI/colors";
import { Navbar } from "./Navbar";
import { HangingWrapperSection } from "./HangingWrapperSection";
import Body from "./Body";
import Faqs from "./Faqs";
import WhyChoose from "./WhyChoose";
import GetIn from "./GetIn";
import GridContainerCard from "./GridContainerCard";
import Card from "./Card";



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
