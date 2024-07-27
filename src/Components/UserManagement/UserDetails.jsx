import React, { useState } from "react";
import styled from "styled-components";
import { boxShadowDs1 } from "@common/UI/styles";
import FlexBox from "@common/UI/FlexBox";
import { Body1, Body2 } from "@common/UI/Headings";
import EditUser from "./EditUser";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TiUserDeleteOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import Form from "./Form";
import Filter from "./Filter"; // Import the Filter component

const Wrapper = styled(FlexBox)`
  width: fit-content;
  padding: 1rem;
  background: linear-gradient(90deg, #005682 38.5%, #008ed4 100%);
  align-items: center;
  column-gap: 1rem;
  border-radius: 1rem;
  ${boxShadowDs1}
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-content: space-between;
  cursor: pointer;
`;

const Button = styled(FlexBox)`
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem 1.5em;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const AddButton = styled(Button)`
  background-color: #3dbaf8;
`;

const DeleteButton = styled(Button)`
  background-color: #fafafa;
  border: 1px solid #3dbaf8;
  color: #3dbaf8;
`;

const UserButton = styled.button`
  padding: 0.3rem 2rem;
  border-radius: 1rem;
  border: 1px solid #ffb27e;
  color: #FF8B3D;
`;

const userdetails = [
  {
    name: "Sarmishtha Chatterjee",
    role: "Senior Analyst",
    employeeId: 35412,
    numberOfTests: 10,
    commodityTested: "Gold",
  },
  {
    name: "Jane Smith",
    role: "Junior Analyst",
    employeeId: 35413,
    numberOfTests: 5,
    commodityTested: "Silver",
  },
  {
    name: "Emily Johnson",
    role: "Lead Analyst",
    employeeId: 35414,
    numberOfTests: 20,
    commodityTested: "Platinum",
  },
];

const UserDetails = ({
  name,
  role,
  employeeId,
  numberOfTests,
  commodityTested,
  showDeleteIcon,
}) => (
  <Wrapper>
    <FlexBox column align="center" justify="center">
      <img src="/assets/ProfilePhoto.svg" alt="Profile" />
      <Body1 bold style={{ textAlign: 'center' }}>{name}</Body1>
      <Body2>{role}</Body2>
    </FlexBox>

    <FlexBox column rowGap="3rem">
      <FlexBox justify="flex-end" margin="-39px 0" align="center">
        <UserButton>User</UserButton>
        {showDeleteIcon && <MdDeleteOutline  size={20}/>}
      </FlexBox>
      <FlexBox
        column
        justify="center"
        style={{ borderLeft: "1px solid", padding: "0 1rem" }}
        rowGap="0.5rem"
      >
        <Body1>
          <strong>Employee Id</strong> - {employeeId}
        </Body1>
        <Body1>
          <strong>No. of Tests</strong> - {numberOfTests}
        </Body1>
        <Body1>
          <strong>Commodity Tested</strong> - {commodityTested}
        </Body1>
      </FlexBox>
    </FlexBox>
  </Wrapper>
);

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showCards, setShowCards] = useState(true);
  const [filterVisible, setFilterVisible] = useState(false); // State for filter visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleDeleteIcon = () => setShowDeleteIcon((prev) => !prev);
  const toggleCards = () => setShowCards((prev) => !prev);
  const toggleFilter = () => setFilterVisible((prev) => !prev); // Toggle filter visibility

  return (
    <>
      <FlexBox width="100%" justify="space-between" padding="1rem 0">
        <FlexBox>
          <FlexBox columnGap="0.5rem" align="center" onClick={toggleFilter}>
            <GiSettingsKnobs />
            <Body2>Filters</Body2>
          </FlexBox>
        </FlexBox>
        <FlexBox columnGap="1.5rem">
          <AddButton onClick={toggleCards}>
            <MdOutlinePersonAddAlt />
            Add User
          </AddButton>
          <DeleteButton onClick={toggleDeleteIcon}>
            <TiUserDeleteOutline />
            Delete User
          </DeleteButton>
        </FlexBox>
      </FlexBox>
      {filterVisible && <Filter />}
      {isModalOpen && <EditUser closeModal={closeModal} />}
      {!showCards ? (
        <Form />
      ) : (
        <Card onClick={openModal}>
          {userdetails.map((user, index) => (
            <UserDetails
              key={index}
              name={user.name}
              role={user.role}
              employeeId={user.employeeId}
              numberOfTests={user.numberOfTests}
              commodityTested={user.commodityTested}
              showDeleteIcon={showDeleteIcon}
            />
          ))}
        </Card>
      )}
    </>
  );
};

export default UserList;
