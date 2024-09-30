import React from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerDetail from "../../Components/CustomerManagement/CustomerDetail";
const index = () => {
  return (
    <DashboardLayout>
      <CustomerDetail />
    </DashboardLayout>
  );
};

export default index;
