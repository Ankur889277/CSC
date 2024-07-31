import React, { useEffect } from "react";

import DashboardLayout from "@layout/DashboardLayout";
import EditScope from "@components/EditScope";

const Home = () => {
  return (
    <DashboardLayout>
      <EditScope />
    </DashboardLayout>
  );
};

export default Home;
