import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardForm from "../components/DashboardForm";

/**
 * React Functional Component.
 */
const Dashboard: React.FC<DashboardOwnProps> = () => {
  return (
    <Box mt="20px">
      <DashboardForm />
    </Box>
  );
};

/**
 * DashboardOwnProps interface description.
 */
interface DashboardOwnProps {}

export default Dashboard;
