import { Button, Box } from "@chakra-ui/react";
import React from "react";

/**
 * React Functional Component.
 */
const Dashboard: React.FC<DashboardOwnProps> = () => {
  return (
    <Box>
      <h1>Dashboard</h1>
      <Button>Button</Button>
    </Box>
  );
};

/**
 * DashboardOwnProps interface description.
 */
interface DashboardOwnProps {}

export default Dashboard;
