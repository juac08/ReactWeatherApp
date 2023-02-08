import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import DashBoardCard from "../components/DashboardCard";
import DashboardForm from "../components/DashboardForm";

/**
 * React Functional Component.
 */
const Dashboard: React.FC<DashboardOwnProps> = () => {
  const [city, setCity] = React.useState<string>("");

  const onCityChange = (cityName: string) => {
    setCity(cityName);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Flex mt="20px" flexDir="column" justifyContent="center">
        <DashboardForm onCityChange={onCityChange} />
        <Flex
          mt="30px"
          justifyContent={["center", "center", "space-between"]}
          flexWrap="wrap"
          alignItems="center"
          gap={["20px", "20px", "20px"]}
          alignContent="center"
        >
          <DashBoardCard city={city} />
          <DashBoardCard city="London" />
          <DashBoardCard city="Paris" />
        </Flex>
      </Flex>
    </motion.div>
  );
};

/**
 * DashboardOwnProps interface description.
 */
interface DashboardOwnProps {}

export default Dashboard;
