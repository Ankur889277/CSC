import React from "react";
import { FiArrowLeft, FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";
import { usePathname } from "next/navigation";

import { Body1 } from "@common/UI/Headings";
import { ACCENT_0, ACCENT_300, ACCENT_800 } from "@common/UI/colors";
import { device } from "@common/UI/Responsive";
import FlexBox from "@common/UI/FlexBox";
import useIsDesktop from "@hooks/useIsDesktop";
import { UserAvatar } from "./UserAvatar";
import { useRouter } from "next/router";

const Wrapper = styled(FlexBox)`
  top: 0;
  min-height: 3.5rem;
  padding: 0.5rem 1rem;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  border-bottom: 1px solid ${ACCENT_300};
  background-color: ${ACCENT_0};

  @media ${device.laptop} {
    padding: 0.5rem 2rem;
  }
`;

const commonIconProps = {
  size: "1.5rem",
  cursor: "pointer",
  color: ACCENT_800,
};

const CrossIcon = styled(FlexBox)`
  cursor: pointer;
`;

export const Header = ({
  toggleSidebar,
  showCrossIcon,
  handleCrossIconClick,
  showBackIcon,
}) => {
  const isDesktop = useIsDesktop();
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/").filter(segment => segment !== "");

  return (
    <Wrapper>
      <FlexBox column rowGap="0.5rem">
        <FlexBox columnGap="1rem">
          {!isDesktop && !showBackIcon && (
            <FiMenu onClick={toggleSidebar} {...commonIconProps} />
          )}
          {showBackIcon && (
            <FiArrowLeft onClick={() => router.back()} {...commonIconProps} />
          )}
          <Body1 bold textTransform="uppercase">
            {pathSegments?.[0]?.replace("-", " ")}
          </Body1>
        </FlexBox>
      </FlexBox>

      {showCrossIcon ? (
        <CrossIcon onClick={handleCrossIconClick}>
          <FiX color={ACCENT_800} strokeWidth={2.5} fontSize="1.5rem" />
        </CrossIcon>
      ) : (
        <UserAvatar />
      )}
    </Wrapper>
  );
};
