import { Flex } from "@chakra-ui/react";
import React from "react";
import DashBoardCard from "../components/DashboardCard";
import DashboardForm from "../components/DashboardForm";

/**
 * React Functional Component.
 */
const Dashboard: React.FC<DashboardOwnProps> = () => {
  return (
    <Flex mt="20px" flexDir="column" justifyContent="center">
      <DashboardForm />
      <Flex
        mt="30px"
        justifyContent={["center", "center", "space-between"]}
        flexWrap="wrap"
        alignItems="center"
        gap={["20px", "20px", "20px"]}
        alignContent="center"
      >
        <DashBoardCard city="Berlin" />
        <DashBoardCard city="London" />
        <DashBoardCard city="Paris" />
      </Flex>
    </Flex>
  );
};

/**
 * DashboardOwnProps interface description.
 */
interface DashboardOwnProps {}

export default Dashboard;
