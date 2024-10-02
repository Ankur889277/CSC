import React, { useState } from "react";
import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

import FlexBox from "../../common/UI/Flexbox";
import { H1, Body1, Body2 } from "../../common/UI/Headings";

const Wrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const FilterContainer = styled(FlexBox)`
  gap: 0.5rem;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const TableContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: 40rem;
`;
const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  background-color: #f1f1f1;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 2rem;
  align-items: center;
  input {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

const Th = styled.th`
  text-align: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-bottom: 2px solid #e0e0e0;
  cursor: pointer;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
`;
const ViewButton = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #7991a4;
  background: #ffffff;
  cursor: pointer;
`;
const ContainerButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: red;
  padding: 1.25rem;
  border: none;
  border-radius: 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: translateZ(-5px);
    /* box-shadow: 0 20px 20px rgba(244, 227, 227, 0.3); */
    box-shadow: 0px 3px 7px rgba(171, 171, 171, 0.1),
      0px 13px 13px rgba(171, 171, 171, 0.09),
      0px 30px 18px rgba(171, 171, 171, 0.05),
      0px 53px 21px rgba(171, 171, 171, 0.01),
      0px 83px 23px rgba(171, 171, 171, 0);
  }

  &:active {
    background-color: #ffffff;
    transform: translateY(-2px);
  }
`;
const customers = [
  {
    customerName: "XYZ Motors",
    industry: "Automotive",
    phoneNumber: "9876543210",
    activeAMC: "Yes",
    state: "Maharashtra",
    status: "Active",
  },
  {
    customerName: "Sunrise Pharmaceuticals",
    industry: "Healthcare",
    phoneNumber: "8765432109",
    activeAMC: "No",
    state: "Gujarat",
    status: "Inactive",
  },
  {
    customerName: "Greenfield Farms",
    industry: "Agriculture",
    phoneNumber: "7654321098",
    activeAMC: "Yes",
    state: "Punjab",
    status: "Active",
  },
  {
    customerName: "Blue Skies Construction",
    industry: "Construction & Real Estate",
    phoneNumber: "6543210987",
    activeAMC: "No",
    state: "Karnataka",
    status: "Inactive",
  },
  {
    customerName: "Tech Innovators",
    industry: "Technology",
    phoneNumber: "5432109876",
    activeAMC: "Yes",
    state: "Delhi",
    status: "Active",
  },
  {
    customerName: "FreshBites Grocery",
    industry: "Retail",
    phoneNumber: "4321098765",
    activeAMC: "No",
    state: "Haryana",
    status: "Inactive",
  },
  {
    customerName: "Elite Consulting",
    industry: "Consulting",
    phoneNumber: "3210987654",
    activeAMC: "Yes",
    state: "Tamil Nadu",
    status: "Active",
  },
  {
    customerName: "EcoEnergy Solutions",
    industry: "Energy",
    phoneNumber: "2109876543",
    activeAMC: "No",
    state: "Uttar Pradesh",
    status: "Inactive",
  },
  {
    customerName: "Fashion Hub",
    industry: "Retail",
    phoneNumber: "1098765432",
    activeAMC: "Yes",
    state: "West Bengal",
    status: "Active",
  },
  {
    customerName: "SmartTech Systems",
    industry: "Technology",
    phoneNumber: "0987654321",
    activeAMC: "No",
    state: "Telangana",
    status: "Inactive",
  },
  {
    customerName: "Global Logistics",
    industry: "Logistics",
    phoneNumber: "9870123456",
    activeAMC: "Yes",
    state: "Maharashtra",
    status: "Active",
  },
  {
    customerName: "Café Delights",
    industry: "Food & Beverage",
    phoneNumber: "8765432101",
    activeAMC: "No",
    state: "Kerala",
    status: "Inactive",
  },
  {
    customerName: "Home Essentials",
    industry: "Retail",
    phoneNumber: "7654321090",
    activeAMC: "Yes",
    state: "Gujarat",
    status: "Active",
  },
  {
    customerName: "Urban Developers",
    industry: "Construction & Real Estate",
    phoneNumber: "6543210980",
    activeAMC: "No",
    state: "Rajasthan",
    status: "Inactive",
  },
  {
    customerName: "Digital Marketing Pros",
    industry: "Marketing",
    phoneNumber: "5432109870",
    activeAMC: "Yes",
    state: "Delhi",
    status: "Active",
  },
  {
    customerName: "HealthPlus Clinic",
    industry: "Healthcare",
    phoneNumber: "4321098760",
    activeAMC: "No",
    state: "Madhya Pradesh",
    status: "Inactive",
  },
  {
    customerName: "NextGen Manufacturing",
    industry: "Manufacturing",
    phoneNumber: "3210987650",
    activeAMC: "Yes",
    state: "Chhattisgarh",
    status: "Active",
  },
  {
    customerName: "Serenity Spa",
    industry: "Wellness",
    phoneNumber: "2109876540",
    activeAMC: "No",
    state: "Goa",
    status: "Inactive",
  },
  {
    customerName: "Creative Arts Agency",
    industry: "Media & Entertainment",
    phoneNumber: "1098765430",
    activeAMC: "Yes",
    state: "Maharashtra",
    status: "Active",
  },
];

const SampleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "customerName",
    direction: "asc",
  });

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredCustomers = sortedCustomers.filter(customer =>
    Object.values(customer).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSort = key => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Wrapper>
      <H1 bold>Customer List</H1>
      <TableContainer>
        <SearchContainer>
          <Body1 bold>Search:</Body1>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchContainer>

        <Table>
          <thead>
            <tr>
              {[
                "customerName",
                "industry",
                "phoneNumber",
                "activeAMC",
                "state",
                "status",
              ].map(key => (
                <Th key={key} onClick={() => handleSort(key)}>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <Td>{customer.customerName}</Td>
                <Td>{customer.industry}</Td>
                <Td>{customer.phoneNumber}</Td>
                <Td>{customer.activeAMC}</Td>
                <Td>{customer.state}</Td>
                <Td>
                  <ViewButton>View More</ViewButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default SampleList;
