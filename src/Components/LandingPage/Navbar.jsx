import React from "react";
import styled from "styled-components";

import FlexBox from "@common/UI/FlexBox";
import { PRIMARY_900, ACCENT_0, VIOLET } from "@common/UI/colors";
import { Body2, Display, H1 } from "@common/UI/Headings";
import { device } from "@common/UI/Responsive";
import { Button } from "@common/UI/Buttons";

const NavbarContainer = styled(FlexBox)`
  flex-direction: column;
  position: relative;
  padding: 1.5rem 3rem;
  gap: 5rem;

  @media ${device.laptop} {
    gap: 3rem;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 40px;
`;

const ImageContainer = styled(FlexBox)`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media ${device.laptop} {
    left: 50%;
    right: 50%;
  }
`;

const Frame = styled.img`
  width: 100%;
  object-fit: cover;
  height: 11rem;
  mix-blend-mode: normal;

  @media ${device.laptop} {
    width: 55rem;
    height: 22rem;
  }
`;

const BgEffect = styled.span`
  position: relative;
  top: 2;
  background-color: ${VIOLET};
`;

const Title = styled(Display)`
  color: ${ACCENT_0};
  font-size: 3rem;
  font-weight: 900;
  line-height: normal;
  text-align: center;

  span {
    background-color: ${VIOLET};
  }

  @media ${device.laptop} {
    font-size: 3.25rem;
  }
`;

export const Navbar = ({ onLoginClick }) => (
  <NavbarContainer>
    <FlexBox justify="space-between">
      <Logo src="/assets/Icon.svg" alt="Logo" />
      <FlexBox columnGap="1.5rem">
        <Body2>Home</Body2>
        <Body2>Activity</Body2>
        <Body2>Gallery</Body2>
        <Body2>Blogs</Body2>
        <Body2>Partner up</Body2>
        <Body2>Pay</Body2>
      </FlexBox>
      <Button outline onClick={onLoginClick} color="#089CE6">
        Sign In
      </Button>
    </FlexBox>
  </NavbarContainer>
);
