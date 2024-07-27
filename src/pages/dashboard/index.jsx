import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import Dashboard from "@components/Dashboard";

const Home = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default Home;
