import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiX, FiHelpCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Body2, Body1 } from "@common/UI/Headings";
import {
  ACCENT_0,
  ACCENT_400,
  ACCENT_800,
  PRIMARY_700,
  PRIMARY_800,
  ACCENT_200,
  ACCENT_300,
} from "@common/UI/colors";
import { device } from "@common/UI/Responsive";
import FlexBox from "@common/UI/FlexBox";
import useIsDesktop from "@hooks/useIsDesktop";
import { sidebarMeta } from "@metadata/sidebar";
// import { ShareModal } from "../Components/Share/ShareModal";

const SidebarWrapper = styled.div`
  height: -webkit-fill-available;
  display: grid;
  overflow: hidden;
  grid-template-columns: 0fr;
  transition: all 300ms ease-in-out;
  position: fixed;
  z-index: 21;
  width: 80%;
  grid-template-columns: 1fr;
  top: 0;
  overflow-y: auto;

  ${({ expanded }) =>
    !expanded &&
    css`
      width: 0;
    `}

  @media ${device.laptop} {
    width: 16.4%;
    min-width: 14.75rem;
    height: 100vh;
    grid-template-columns: 1fr;
    position: sticky;
  }
`;

const commonIconProps = {
  size: "1.5rem",
  cursor: "pointer",
  color: ACCENT_800,
};

const SidebarContainer = styled(FlexBox)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${PRIMARY_800};

  @media ${device.laptop} {
    row-gap: 2.5rem;
    background-color: #ffffff;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 7rem;
`;

const PamprazziLogo = styled(FlexBox)`
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
  @media ${device.laptop} {
    padding: 2rem 1.5rem;
  }
`;

const SideBarOptions = styled(FlexBox)`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease;

  svg {
    color: ${ACCENT_300};
  }

  ${Body1} {
    color: ${ACCENT_300};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${PRIMARY_700};

      svg {
        color: ${ACCENT_0};
      }

      ${Body1} {
        color: ${ACCENT_0};
      }
    `}

  &:hover {
    background-color: ${PRIMARY_700};
    transform: scale(1.01);

    svg {
      color: ${ACCENT_0};
    }

    ${Body1} {
      color: ${ACCENT_0};
    }
  }
`;

const SubMenuWrapper = styled(FlexBox)`
  border-left: 1px solid ${ACCENT_400};
  margin-inline: 1rem;
  display: ${({ active }) => (active ? "flex" : "none")};
  margin-block: 0.25rem;
`;

const SubMenuLink = styled(Link)`
  width: 100%;
  padding: 0.25rem 2rem;
  position: relative;
  text-decoration: none;

  ::before {
    content: "";
    position: absolute;
    bottom: 0.75rem;
    left: -4px;
    width: 0.5rem;
    aspect-ratio: 1;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;
    border-radius: 1rem;
    background-color: ${ACCENT_400};
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;

    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;
    border-radius: 1rem;
    background-color: ${ACCENT_400};
  }

  ${Body2} {
    color: ${ACCENT_300};
  }

  ${({ active }) =>
    active &&
    css`
      ${Body2} {
        color: ${ACCENT_200};
        font-weight: 600;
      }
    `}
`;

export const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [activeOptions, setActiveOptions] = useState([]);

  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(segment => segment !== "");

  const handleOptionClick = id => {
    const set = new Set([...activeOptions]);
    set.has(id) ? set.delete(id) : set.add(id);

    setActiveOptions([...set]);
  };

  return (
    <SidebarWrapper expanded={showSidebar}>
      <SidebarContainer>
        <FlexBox column>
          <PamprazziLogo>
            <Link href="/"></Link>
            {!isDesktop && <FiX color={ACCENT_0} onClick={toggleSidebar} />}
          </PamprazziLogo>
          <FlexBox column>
            {sidebarMeta?.map(({ url, label, image, slug, subMenu, id }) => (
              <>
                <SideBarOptions
                  key={slug}
                  onClick={() => {
                    handleOptionClick(id);
                  }}
                  active={
                    activeOptions?.includes(id) || pathSegments?.[0] === slug
                  }
                >
                  <FlexBox align="center" columnGap="0.50rem">
                    <img src={image} alt="label" width="18" height="18" />
                    <Body1 bold>{label}</Body1>
                  </FlexBox>
                  {activeOptions?.includes(id) || pathSegments?.[0] === slug ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </SideBarOptions>
                {subMenu && (
                  <SubMenuWrapper
                    column
                    active={
                      activeOptions?.includes(id) || pathSegments?.[0] === slug
                    }
                  >
                    {subMenu?.map(({ url, label, slug }) => (
                      <SubMenuLink
                        key={slug}
                        href={url}
                        active={pathSegments?.[1] === slug}
                      >
                        <Body2 color={ACCENT_0}>{label}</Body2>
                      </SubMenuLink>
                    ))}
                  </SubMenuWrapper>
                )}
              </>
            ))}
          </FlexBox>
        </FlexBox>
        <FlexBox padding="2rem 1.5rem" columnGap="0.5rem" align="center">
          <FiHelpCircle {...commonIconProps} color={ACCENT_0} />
          {/* <ShareModal /> */}
        </FlexBox>
      </SidebarContainer>
    </SidebarWrapper>
  );
};
