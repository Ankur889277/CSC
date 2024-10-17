import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerManagement from "../../Components/SampleManagement/CustomerInformation";
import Dashboard from "../../Components/Dashboard";
import ViewSampleList from "@Components/SampleManagement/SampleList/ViewSampleList";
import Index from "../../Components/SampleManagement/SampleList";
const index = () => {
  return (
    <DashboardLayout>
      <Index />
    </DashboardLayout>
  );
};

export default index;
