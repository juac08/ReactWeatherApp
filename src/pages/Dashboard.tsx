import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardCard from "../components/DashboardCard";
import DashboardForm from "../components/DashboardForm";
import { useFetchLocation } from "../helpers/hooks/useGetData";
import { RootState } from "../store/store";
import {
  RESET_LOCATION,
  RESET_WEATHER_DATA,
} from "../store/weatherData/weatherDataSlice";

/**
 * React Functional Component.
 */
const Dashboard: React.FC<DashboardOwnProps> = () => {
  const [city, setCity] = React.useState<string>("");
  const { cityName } = useFetchLocation();
  const location = useSelector(
    (state: RootState) => state.weatherData.location
  );
  const dispatch = useDispatch();

  const onCityChange = (cityName: string) => {
    setCity(cityName);
  };

  React.useEffect(() => {
    if (location) {
      setCity(location);
    } else if (location !== cityName) {
      setCity(cityName);
    }
    const interval = setInterval(() => {
      dispatch(RESET_LOCATION(""));
      dispatch(RESET_WEATHER_DATA());
    }, 180000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, location]);

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
