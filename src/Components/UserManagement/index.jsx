import React from "react";
import UserDetails from "./UserDetails";
import SectionContainer from "@common/SectionContainer";
import EditUser from "./EditUser";
import styled from "styled-components";
import Flexbox from "../common/UI/Flexbox";

const Wrapper = styled(Flexbox)`
  flex-direction: column;
  width: 100%;
`;
const UserManagement = () => {
  return (
    <Wrapper>
      <UserDetails />
    </Wrapper>
  );
};

export default UserManagement;
