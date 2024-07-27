import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import UserManagement from "@components/UserManagement";

const Home = () => {
  return (
    <DashboardLayout>
      <UserManagement />
    </DashboardLayout>
  );
};

export default Home;
