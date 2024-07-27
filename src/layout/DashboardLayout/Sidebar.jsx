import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Body1, Body2, Support, Caption } from "@common/UI/Headings";
import { ACCENT_0, ACCENT_400, ACCENT_200, ACCENT_300 } from "@common/UI/colors";
import { device } from "@common/UI/Responsive";
import FlexBox from "@common/UI/FlexBox";
import { SidebarMeta } from "@metadata/sidebar";
import { logout } from "@redux/slices/auth";
import ConfirmModal from "@common/UI/ConfirmModal";

const SidebarWrapper = styled.div`
  height: -webkit-fill-available;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  transition: all 300ms ease-in-out;
  position: fixed;
  z-index: 21;
  width: ${({ expanded }) => (expanded ? "80%" : "0")};
  top: 0;
  bottom: 0;
  overflow-y: auto;

  @media ${device.laptop} {
    width: 16.4%;
    min-width: 14.75rem;
    height: 100vh;
    position: sticky;
  }
`;

const SidebarContainer = styled(FlexBox)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 2rem 0;

  @media ${device.laptop} {
    row-gap: 2.5rem;
  }
`;

const SideBarOptions = styled(Link)`
  width: 100%;
  cursor: pointer;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  transition: transform 0.2s ease;
  border-radius: 0rem 2rem 2rem 0rem;
  text-decoration: none;

  svg {
    color: #726c6c;
  }

  ${Body2} {
    color: #726c6c;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #64c8f9;

      svg {
        color: ${ACCENT_0};
      }
    `}

  &:hover {
    background-color: #64c8f9;
    transform: scale(1.01);

    svg {
      color: ${ACCENT_0};
    }
  }
`;

const Upcoming = styled(Caption)`
  font-size: 0.5625rem;
  position: absolute;
  top: 2px;
  left: 8px;
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
    left: 13px;
    width: 0.5rem;
    aspect-ratio: 1;
    border-radius: 1rem;
    background-color: ${ACCENT_400};
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 1rem;
    height: 1px;
    border-radius: 1rem;
    background-color: ${ACCENT_400};
  }

  ${Support} {
    color: ${ACCENT_300};
  }

  ${({ active }) =>
    active &&
    css`
      ${Support} {
        color: ${ACCENT_200};
        font-weight: 600;
      }
    `}
`;

const SupportButton = styled(FlexBox)`
  width: 100%;
  padding: 10px;
`;

const SupportLink = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  background-color: #03a9f4;
  padding: 17px 18px;
  border-radius: 1rem;
  gap: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fafafa;
  border: none;
  color: #089ce6;
  font-weight: bold;
`;

export const Sidebar = ({ showSidebar }) => {
  const [activeOptions, setActiveOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();
  const dispatch = useDispatch();

  const storeId = useSelector(state => state.auth.storeId);

  const handleOptionClick = id => {
    setActiveOptions(prevActiveOptions =>
      prevActiveOptions.includes(id)
        ? prevActiveOptions.filter(optionId => optionId !== id)
        : [...prevActiveOptions, id]
    );
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setIsModalOpen(false);
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  const renderIcon = (id, slug, badge) => {
    if (badge === "upcoming") {
      return (
        <FlexBox position="relative">
          <img src="/assets/DashboardIcons/upcoming-bg.svg" width="64px" height="auto" />
          <Upcoming color={ACCENT_0}>UPCOMING</Upcoming>
        </FlexBox>
      );
    }

    return activeOptions.includes(id) || pathSegments[0] === slug ? (
      <FiChevronUp />
    ) : (
      <FiChevronDown />
    );
  };

  const pathSegments = pathname.split("/").filter(segment => segment !== "");
  const sidebarMeta = SidebarMeta;

  return (
    <SidebarWrapper expanded={showSidebar}>
      <SidebarContainer>
        <FlexBox column rowGap="1.5rem">
          <FlexBox column>
            {sidebarMeta.map(({ label, image, slug, id, url }) => (
              <SideBarOptions
                key={slug}
                href={url}
                active={activeOptions.includes(id) || pathSegments[0] === slug}
              >
                <FlexBox align="center" columnGap="0.85rem">
                  <img src={image} alt={label} width="18" height="18" />
                  <Body2 bold>{label}</Body2>
                  {label === "Report" && (
                    <img src="/path/to/favicon.ico" alt="Report favicon" width="18" height="18" />
                  )}
                </FlexBox>
                {renderIcon(id, slug)}
              </SideBarOptions>
            ))}
          </FlexBox>
        </FlexBox>
        <SupportButton>
          <SupportLink>
            <img width="40.06px" height="37.14px" src="/assets/supportIcon.png" />
            <Body1 color="#FAFAFA">Need help?</Body1>
            <Body2 color="#FAFAFA">Please Contact Us</Body2>
            <Button>Support</Button>
          </SupportLink>
        </SupportButton>
        {isModalOpen && (
          <ConfirmModal
            toggleModal={handleCancelLogout}
            onCancel={handleCancelLogout}
            title="Log Out"
            confirmationText="Are you sure you want to Log Out?"
            cancelButtonText="No"
            confirmButtonText="Yes"
            onConfirm={handleConfirmLogout}
          />
        )}
      </SidebarContainer>
    </SidebarWrapper>
  );
};
