import React from "react";

import DashboardLayout from "@layout/DashboardLayout";
import AddCustomer from "../../Components/CustomerManagement/AddCustomer";
const index = () => {
  return (
    <DashboardLayout>
      <AddCustomer />
    </DashboardLayout>
  );
};

export default index;
