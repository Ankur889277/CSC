import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerManagement from "../../Components/SampleManagement/CustomerInformation";
import Dashboard from "../../Components/Dashboard";
import ScheduleSampling from "../../Components/SampleManagement/ScheduleSampling";
const index = () => {
  return (
    <DashboardLayout>
      <ScheduleSampling />
    </DashboardLayout>
  );
};

export default index;
