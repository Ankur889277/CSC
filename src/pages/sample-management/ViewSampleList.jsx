import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerManagement from "../../Components/SampleManagement/CustomerInformation";
import Dashboard from "../../Components/Dashboard";
import ViewSampleList from "@Components/SampleManagement/SampleList/ViewSampleList";
const index = () => {
  return (
    <DashboardLayout>
      <ViewSampleList />
    </DashboardLayout>
  );
};

export default index;
