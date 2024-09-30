import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerManagement from "../../Components/SampleManagement/CustomerInformation";
import Dashboard from "../../Components/Dashboard";
import CompletedTask from "../../Components/SampleManagement/CompletedTask";
const index = () => {
  return (
    <DashboardLayout>
      <CompletedTask />
    </DashboardLayout>
  );
};

export default index;
