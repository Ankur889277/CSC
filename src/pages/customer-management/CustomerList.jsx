import React from "react";

import DashboardLayout from "@layout/DashboardLayout";
import CustomerList from "../../Components/CustomerManagement/CustomerList";
const index = () => {
  return (
    <DashboardLayout>
      <CustomerList />
    </DashboardLayout>
  );
};

export default index;
