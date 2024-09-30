import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import Bugsnag from "@bugsnag/js";
import { BooleanParam, useQueryParams, StringParam } from "use-query-params";

import { device } from "@common/UI/Responsive";
import FlexBox from "@common/UI/FlexBox";
import { ACCENT_100 } from "@common/UI/colors";
import {
  setStoreDetails,
  setStoreStylistList,
  setStoreServicesList,
  transformStoreServicesList,
} from "@redux/slices/storeDetails";
import { URL } from "@constants/urls";
import { client } from "@axiosClient";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import Loader from "@common/Loader";

const Wrapper = styled(FlexBox)`
  width: 100vw;
  box-sizing: border-box;
`;

const Content = styled(FlexBox)`
  flex: 1;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  transition: max-width 300ms ease-in-out;

  @media ${device.laptop} {
    max-width: calc(100vw - max(14.75rem, 16.4%));
    ${({ sidebarCollapsed }) =>
      sidebarCollapsed &&
      css`
        max-width: 100vw;
      `}
  }
`;

const ContentWrapper = styled(FlexBox)`
  flex: 1;
  overflow: auto;
  margin-bottom: 5rem;
  padding: 1rem;
  background: #f9f9f9;

  @media ${device.laptop} {
    margin-bottom: 0;
    padding: 1.5rem;
  }
`;

const DashboardLayout = ({ children, showCrossIcon }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleSidebar = () => {
    // dispatch(toggleSidebarReducer());
    setShowSidebar(prev => !prev);
  };

  const handleCrossIconClick = () => {
    router.push(
      `/dashboard/general?date=${dayjs(new Date()).format("YYYY-MM-DD")}`
    );
  };
  return (
    <>
      <Wrapper>
        <Sidebar showSidebar={true} toggleSidebar={toggleSidebar} />
        <Content sidebarCollapsed={!true}>
          <Header
            toggleSidebar={toggleSidebar}
            handleCrossIconClick={handleCrossIconClick}
            showCrossIcon={showCrossIcon}
          />
          <ContentWrapper>{children}</ContentWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default DashboardLayout;
