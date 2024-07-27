import React, { useState } from "react";
import styled from "styled-components";
import { HiMiniUserGroup, HiCurrencyRupee } from "react-icons/hi2";
import { FaPaintBrush, FaChartLine } from "react-icons/fa";
import { ImScissors } from "react-icons/im";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { usePathname } from "next/navigation";

import FlexBox from "@common/UI/FlexBox";
import { H1, Body1, Body2, Display } from "@common/UI/Headings";
import { Button } from "@common/UI/Buttons";
import { device } from "@common/UI/Responsive";
import PieGraph from "@common/Analytics/PieGraph";
import BarGraph from "@common/Analytics/BarGraph";
import CardWithCount from "@common/Analytics/CardWithCount";
import SectionContainer from "@common/SectionContainer";
import ServiceTable from "@common/ServiceTable";
import SampleDataModal from "@common/SampleDataModal";
import { trackEvent } from "@utils/helper";
import { ProfilePercent } from "./ProfilePercent";
import AppointmentProgress from "./AppointmentProgress";
import { SlArrowDown } from "react-icons/sl";
import Legend from "../common/Analytics/Legend";
import CalenderModal from "../common/CalenderModal";
import PieGraphFull from "../common/Analytics/PieGraphFull";

const Container = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  gap: 1rem;

  @media ${device.laptop} {
    gap: 1.5rem;
  }
`;

const ChartWrapper = styled(FlexBox)`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MidCard = styled(FlexBox)`
  flex-direction: column-reverse;
  gap: 1rem;

  @media ${device.laptop} {
    gap: 1.5rem;
    flex-direction: row;
  }
`;

const BottomCard = styled(FlexBox)`
  flex-direction: column;
  row-gap: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

// Data
const data = [
  {
    description: "Lorem ipsum",
    icon: "Icon",
    transactionId: "TX123456",
    type: "Service",
    date: "2024-07-15",
    amount: "₹700.00",
    receipt: "Receipt123",
  },
  {
    description: "Facial",
    icon: "icon",
    transactionId: "TX123457",
    type: "Service",
    date: "2024-07-16",
    amount: "₹900.00",
    receipt: "Receipt124",
  },
  {
    description: "Haircut",
    transactionId: "TX123458",
    type: "Service",
    date: "2024-07-17",
    amount: "₹300.00",
    receipt: "Receipt125",
  },
];

//data for pieChart
const pieGraphLabels = ["Red", "Blue", "Yellow", "Green"];
const dataPie = [12, 19, 3, 5];
const backgroundColorPie = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
];
const borderColorPie = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
];

const staffCountValue = [80, 40, 29, 55, 16, 88];
const staffName = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];

const barGraphData = {
  labels: staffName,
  datasets: [
    {
      data: staffCountValue,
    },
  ],
};

const ChartComponent = () => (
  <PieGraph
    labels={pieGraphLabels}
    data={dataPie}
    backgroundColor={backgroundColorPie}
    borderColor={borderColorPie}
    height="16rem"
  />
);

const CoinBal = () => (
  <FlexBox column height="100%" justify="center">
    <FlexBox align="center" columnGap="0.5rem">
      <img src="/assets/coin.svg" alt="Coin" />
      <H1 bold>1000</H1>
      <Body2>in wallet</Body2>
    </FlexBox>
    <FlexBox column rowGap="1.5rem">
      <Body1>
        Care Coins get added to your account as you use Pamprazzi and avail our
        services.
      </Body1>
      <Button disabled>Refer</Button>
    </FlexBox>
  </FlexBox>
);

const StaffMatrix = () => (
  <ChartWrapper>
    <BarGraph data={barGraphData} />
  </ChartWrapper>
);

const TableWrap = () => (
  <ChartWrapper>
    <ServiceTable data={data} />
  </ChartWrapper>
);

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(segment => segment !== "");

  const openModal = title => {
    trackEvent("db_section_cta_click", {
      current_page: pathSegments?.[0],
      current_section: title,
      cta_title: "Sample Data",
      source: null,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      {isModalOpen && <SampleDataModal closeModal={closeModal} />}
      <FlexBox columnGap="1rem">
        <CardWithCount title="Type of Industry" count="Lorem Ipsum" />
        <CardWithCount title="Returning Customers" count="276" />
        <CardWithCount title="Returning Customers" count="105" />
        <CardWithCount title="Returning Customers" count="105" />
      </FlexBox>
      <BottomCard columnGap="1.5rem">
        <FlexBox width="60%">
          <SectionContainer
            title="No. of samples "
            cta={
              <Button
                onClick={() => openModal("Performance This Month")}
                outline
              >
                Weekly
                <SlArrowDown />
              </Button>
            }
          >
            <StaffMatrix />
          </SectionContainer>
        </FlexBox>
        <FlexBox width="40%">
          <SectionContainer
            noPadding
            title="Expense Statistics"
            cta={
              <Button onClick={() => openModal("Sales By Services")} outline>
                Sample Data
              </Button>
            }
          >
            <PieGraphFull />
          </SectionContainer>
        </FlexBox>
      </BottomCard>
      <MidCard columnGap="1.5rem">
        <FlexBox width="50%" column>
          <SectionContainer
            title="Revenue Statistics"
            width="100%"
            cta={
              <Button onClick={() => openModal("Total Sales")} outline>
                Monthly
                <SlArrowDown />
              </Button>
            }
          >
            <FlexBox column>
              <ChartComponent />
              <Legend />
            </FlexBox>
          </SectionContainer>
        </FlexBox>
        <FlexBox width="30%">
          <CalenderModal />
        </FlexBox>
      </MidCard>
      <FlexBox column rowGap="1.5rem">
        <Display bold color="#726C6C">
          Transaction History
        </Display>
        <TableWrap />
      </FlexBox>
    </Container>
  );
};

export default Dashboard;
